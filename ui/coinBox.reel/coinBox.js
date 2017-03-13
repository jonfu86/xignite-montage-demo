/**
 * @module ui/coinBox.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class CoinBox
 * @extends Component
 */
exports.CoinBox = Component.specialize(/** @lends CoinBox# */ {


    enterDocument: {
        value: function () {
           // console.log("enter doc");
        }
    },
    fromCountry: {
        value: {
			country:"United States Dollar",
			coin:"Dollar",
			country_handle:"United States",
			country_name:"United States of America",
			iso2:"US",
			iso3:"USA",
			number:"840",
			currency_code:"USD",
			graphic:"",
			fonta:"$",
			font:"&#36;",
			ariala:"$",
			arial:"&#36;",
			decimal:"36",
			hex:"24",
			comment:""
		}
    },
    fromCountryFlag: {
        get: function () {

            return "assets/images/3x5/" + this.fromCountry.iso2.toLowerCase() + ".svg"
        }
    },
    toCountry: {
        value: {
			country:"United Kingdom Pound",
			coin:"Pound",
			country_handle:"United Kingdom",
			country_name:"United Kingdom",
			iso2:"GB",
			iso3:"GBR",
			number:"826",
			currency_code:"GBP",
			graphic:"",
			fonta:"£",
			font:"&#163;",
			ariala:"£",
			arial:"&#163;",
			decimal:"163",
			hex:"a3",
			comment:""
		}
    },
    toCountryFlag: {
        get: function () {

            return "assets/images/3x5/" + this.toCountry.iso2.toLowerCase() + ".svg"
        }
    },
    draw: {
        value: function () {

        }
    }


});
