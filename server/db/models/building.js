const Sequelize = require('sequelize')
const db = require('../db')

const Building = db.define('buildings', {
  geometry: {
    type: Sequelize.GEOMETRY('multipolygon')
  },
  order: Sequelize.STRING,
  property_id: Sequelize.STRING,
  property_name: Sequelize.STRING,
  parent_property_id: Sequelize.STRING,
  parent_property_name: Sequelize.STRING,
  city_building: Sequelize.STRING,
  email: Sequelize.STRING,
  bbl_10_digits: Sequelize.STRING,
  nyc_borough_block_and_lot: Sequelize.STRING,
  nyc_building_identification: Sequelize.STRING,
  address_1_self_reported: Sequelize.STRING,
  address_2_self_reported: Sequelize.STRING,
  postal_code: Sequelize.STRING,
  street_number: Sequelize.STRING,
  street_name: Sequelize.STRING,
  borough: Sequelize.STRING,
  dof_gross_floor_area_ft: Sequelize.STRING,
  self_reportedgross_floor: Sequelize.STRING,
  primary_property_type_self: Sequelize.STRING,
  list_of_all_property_use: Sequelize.STRING,
  largest_property_use_type: Sequelize.STRING,
  largest_property_use_type_1: Sequelize.STRING,
  _2nd_largest_property_use: Sequelize.STRING,
  _2nd_largest_property_use_1: Sequelize.STRING,
  _3rd_largest_property_use: Sequelize.STRING,
  _3rd_largest_property_use_1: Sequelize.STRING,
  year_built: Sequelize.STRING,
  number_of_buildings: Sequelize.STRING,
  occupancy: Sequelize.STRING,
  metered_areas_energy: Sequelize.STRING,
  metered_areas_water: Sequelize.STRING,
  energy_star_score: Sequelize.STRING,
  source_eui_kbtu_ft: Sequelize.STRING,
  weather_normalized_site_eui: Sequelize.STRING,
  site_eui_kbtu_ft: Sequelize.STRING,
  weather_normalized_source: Sequelize.STRING,
  weather_normalized_site: Sequelize.STRING,
  weather_normalized_site_1: Sequelize.STRING,
  fuel_oil_1_use_kbtu: Sequelize.STRING,
  fuel_oil_2_use_kbtu: Sequelize.STRING,
  fuel_oil_4_use_kbtu: Sequelize.STRING,
  fuel_oil_5_6_use_kbtu: Sequelize.STRING,
  diesel_2_use_kbtu: Sequelize.STRING,
  kerosene_use_kbtu: Sequelize.STRING,
  propane_use_kbtu: Sequelize.STRING,
  district_steam_use_kbtu: Sequelize.STRING,
  district_hot_water_use_kbtu: Sequelize.STRING,
  district_chilled_water_use: Sequelize.STRING,
  natural_gas_use_kbtu: Sequelize.STRING,
  weather_normalized_site_2: Sequelize.STRING,
  electricity_use_grid_purchase: Sequelize.STRING,
  electricity_use_grid_purchase_1: Sequelize.STRING,
  weather_normalized_site_3: Sequelize.STRING,
  annual_maximum_demand_kw: Sequelize.STRING,
  annual_maximum_demand_mm: Sequelize.STRING,
  total_ghg_emissions_metric: Sequelize.STRING,
  direct_ghg_emissions_metric: Sequelize.STRING,
  indirect_ghg_emissions_metric: Sequelize.STRING,
  water_use_all_water_sources: Sequelize.STRING,
  water_use_intensity_all_water: Sequelize.STRING,
  water_required: Sequelize.STRING,
  generation_date: Sequelize.STRING,
  latitude: Sequelize.STRING,
  longitude: Sequelize.STRING,
  community_board: Sequelize.STRING,
  council_district: Sequelize.STRING,
  census_tract: Sequelize.STRING,
  nta: Sequelize.STRING,
  bin: Sequelize.STRING,
  the_geom: Sequelize.GEOMETRY('multipolygon'),
  lstmoddate: Sequelize.STRING,
  cnstrct_yr: Sequelize.STRING,
  lststatype: Sequelize.STRING,
  doitt_id: Sequelize.STRING,
  heightroof: Sequelize.STRING,
  feat_code: Sequelize.STRING,
  groundelev: Sequelize.STRING,
  shape_area: Sequelize.STRING,
  shape_len: Sequelize.STRING,
  base_bbl: Sequelize.STRING,
  mpluto_bbl: Sequelize.STRING,
  geomsource: Sequelize.STRING
})

module.exports = Building
