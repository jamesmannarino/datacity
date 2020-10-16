import React, {Component} from 'react'
import {connect} from 'react-redux'
import Graph from './Graphs'
import {updatedInfo} from '../store/buildingInfo'
import {getGraphInfo} from '../store/graphData'

class SingleBuildingDisplay extends Component {
  constructor() {
    super()
    this.state = {
      chartData: {
        labels: ['2016', '2017', '2018', '2019'],
        datasets: []
      },
      emissions: 0,
      electricity: 0,
      fuel: 0,
      cost: 0,
      lightingChecked: false,
      airSealed: false,
      solarInstalled: false
    }
    this.energy = {
      label: 'Energy Star Rating',
      backgroundColor: 'rgba(0,100,0,.2)', //dark green
      borderColor: 'rgba(0,100,0,1)',
      borderWidth: 2,
      data: []
    }
    this.fuel = {
      label: 'Fuel',
      backgroundColor: 'rgba(100,0,0,.2)',
      borderColor: 'rgba(100,0,0,1)',
      borderWidth: 2,
      data: [20, 30, 40, 50, 10]
    }
    this.electricity = {
      label: 'Electricity Usage',
      backgroundColor: 'rgba(0,0,100,.2)',
      borderColor: 'rgba(0,0,100,1)',
      borderWidth: 2,
      data: [10, 5, 80, 3, 17]
    }
    this.emissions = {
      label: 'emissions GHG',
      backgroundColor: 'rgba(100,100,100,.2)',
      borderColor: 'rgba(100,100,100,1)',
      borderWidth: 2,
      data: [4, 5, 8, 3, 1]
    }
    this.normalized = {
      label: 'Normalized Data',
      backgroundColor: 'rgba(30,30,30,.2)',
      borderColor: 'rgba(30,30,30,1)',
      borderWidth: 2,
      data: [80, 5, 80, 3, 1]
    }
    this.inputConditions = {
      energy: false,
      fuel: false,
      normalized: false,
      electricity: false,
      emissions: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.lightingImprovement = this.lightingImprovement.bind(this)
    this.solarInstall = this.solarInstall.bind(this)
    this.airSealing = this.airSealing.bind(this)
  }
  componentDidMount() {
    const buildingId = this.props.match.params.id
    this.props.updateInfo(buildingId)
    this.props.graphInfo(buildingId)
  }
  renderModel() {
    const {
      electricityUse,
      fuelUse,
      waterUse,
      ghgEmissions,
      totalEnergyCost,
      improvedCost,
      improvedEmissions,
      improvedElectricity
    } = this.props.buildingModel
    return (
      <div>
        <h3>Projected annual consumption</h3>
        <h5>
          Electricity:{' '}
          {this.state.lightingChecked ||
          this.state.airSealed ||
          this.state.solarInstalled
            ? improvedElectricity.toFixed(0)
            : electricityUse.toFixed(0)}{' '}
          kWh
        </h5>
        <h5>Fuel: {fuelUse.toFixed(0)} Kbtu</h5>
        <h5>Water: {waterUse.toFixed(0)} Gallons</h5>
        <h5>
          GHG Emissions:{' '}
          {this.state.lightingChecked ||
          this.state.airSealed ||
          this.state.solarInstalled
            ? improvedEmissions.toFixed(0)
            : ghgEmissions.toFixed(0)}{' '}
          Tons
        </h5>
        <h5>
          Total cost: $
          {this.state.lightingChecked ||
          this.state.airSealed ||
          this.state.solarInstalled
            ? improvedCost.toFixed(0)
            : totalEnergyCost.toFixed(0)}
        </h5>
      </div>
    )
  }
  lightingImprovement() {
    console.log(this.state.lightingChecked)
    if (this.state.lightingChecked === false) {
      this.setState({
        electricity: this.props.buildingModel.lightingImprovement(),
        lightingChecked: true
      })
    } else {
      this.setState({
        electricity: this.props.buildingModel.removeLightingImprovement(),
        lightingChecked: false
      })
    }
  }
  solarInstall() {
    if (this.state.solarInstalled === false) {
      this.setState({
        electricity: this.props.buildingModel.solarInstall(),
        solarInstalled: true
      })
    } else {
      this.setState({
        electricity: this.props.buildingModel.removeSolar(),
        solarInstalled: false
      })
    }
  }
  airSealing() {
    if (this.state.airSealed === false) {
      this.setState({
        electricity: this.props.buildingModel.airSealing(),
        airSealed: true
      })
    } else {
      this.setState({
        electricity: this.props.buildingModel.removeAirSealing(),
        airSealed: false
      })
    }
  }
  handleChange(e) {
    const currentState = this.state.chartData
    const formId = e.target.id
    let placeholder = []
    this.inputConditions[formId] = !this.inputConditions[formId]
    let inputConditionalsArray = Object.keys(this.inputConditions)
    if (this.props.graphData !== undefined) {
      this.energy.data = this.props.graphData.energyRating
      //this.emissions.data = this.props.graphData.ghgEmissions
    }
    for (let i = 0; i < inputConditionalsArray.length; i++) {
      if (this.inputConditions[inputConditionalsArray[i]] == true) {
        placeholder.push(this[inputConditionalsArray[i]])
      }
    }
    this.setState({
      chartData: {...currentState, datasets: placeholder}
      // [e.target.name]: e.target.value
    })
  }

  render() {
    console.log(this.props)
    console.log(this.state)
    return (
      <div className="card-group">
        <div className="card">
          <form>
            <h3>Graph Options</h3>
            <div className="form-check form-inline">
              <input
                name="form-check-input"
                type="checkbox"
                value={this.energy}
                onChange={this.handleChange}
                id="energy"
              />
              <label className="form-check-label" htmlFor="Energy Rating">
                Energy Rating
              </label>
            </div>
            <div className="form-check form-inline">
              <input
                name="form-check-input"
                type="checkbox"
                value={this.electricity}
                onChange={this.handleChange}
                id="electricity"
              />
              <label className="form-check-label" htmlFor="Electricity Usage">
                Electricity Usage
              </label>
            </div>
            <div className="form-check form-inline">
              <input
                name="form-check-input"
                type="checkbox"
                value=""
                onChange={this.handleChange}
                id="fuel"
              />
              <label className="form-check-label" htmlFor="Fuel Usage">
                Fuel Usage
              </label>
            </div>
            <div className="form-check form-inline">
              <input
                name="form-check-input"
                type="checkbox"
                value={this.normalized}
                onChange={this.handleChange}
                id="normalized"
              />
              <label className="form-check-label" htmlFor="Normalized Usage">
                Normalized Usage
              </label>
            </div>
            <div className="form-check form-inline">
              <input
                name="form-check-input"
                type="checkbox"
                value={this.emissions}
                onChange={this.handleChange}
                id="emissions"
              />
              <label className="form-check-label" htmlFor="ghg emissions">
                ghg emissions
              </label>
            </div>
          </form>
        </div>
        <div className="calculator">
          <form>
            <h3>Improvement Options</h3>
            <input
              name="lighting"
              type="checkbox"
              onChange={this.lightingImprovement}
            />
            <label>Lighting improvement</label>
            <input
              name="airsealing"
              type="checkbox"
              onChange={this.airSealing}
            />
            <label>Insulation improvement</label>
            <input name="solar" type="checkbox" onChange={this.solarInstall} />
            <label>Install solar</label>
          </form>
        </div>
        <div className="model-info">
          {this.props.buildingModel && this.renderModel()}
        </div>
        <div
          style={{width: '60rem', border: '1px solid grey', height: '30rem'}}
        >
          <Graph data={this.state.chartData} id={this.props.match.params.id} />
        </div>
      </div>
    )
  }
}

const mapState = state => {
  console.log(state)
  return {
    data: state.currentBuildingInfo,
    graphData: state.graphInfo,
    buildingData: state.buildingInfoReducer.buildingData,
    buildingModel: state.buildingInfoReducer.buildingModel
  }
}
const mapDispatch = dispatch => {
  return {
    updateInfo: buildingId => dispatch(updatedInfo(buildingId)),
    graphInfo: buildingId => dispatch(getGraphInfo(buildingId))
  }
}
export default connect(mapState, mapDispatch)(SingleBuildingDisplay)

