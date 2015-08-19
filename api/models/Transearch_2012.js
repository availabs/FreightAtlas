/**
* Transearch_2012.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
       "YEAR":"integer",
       "Origin_County_Name":"text",
       "Origin_County_FIPS_Code":"character varying(12)",
       "Origin_Old_BEA":"smallint",
       "Origin_New_BEA":"smallint",
       "Origin_Market":"text",
       "Destination_County_Name":"text",
       "Destination_County_FIPS_Code":"character varying(12)",
       "Destination_Old_BEA":"smallint",
       "Destination_New_BEA":"smallint",
       "Destination_Market":"text",
       "STCC2":"character varying(4)",
       "STCC3":"double precision",
       "Rail_Carload_Annual_tons":"double precision",
       "Rail_Intermodal_Annual_tons":"double precision",
       "For_Hire_Truckload_Annual_tons":"double precision",
       "For_Hire_LTL_Annual_tons":"double precision",
       "Private_Truck_Annual_tons":"double precision",
       "Air_Annual_tons":"double precision",
       "Water_Annual_tons":"double precision",
       "Other_Annual_tons":"double precision",
       "Total_Annual_tons":"double precision",
       "Total_Trucks":"double precision",
       "Truck_Equivalents":"double precision",
       "Mileage":"real",
       "Rail_Length_of_Haul":"integer",
       "Foreign_Domestic_Identification_Flag":"character varying(2)",
       "Direction":"text",
       "Entry_County":"integer",
       "Exit_County":"integer",
       "Entry_Road":"text",
       "Exit_Road":"text",
       "SumOfValue":"double precision",
       "First_Node":"integer",
       "Last_Node": "integer"
  }
};