/**
 * @module ui/converterBox.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class ConverterBox
 * @extends Component
 */
exports.ConverterBox = Component.specialize(/** @lends ConverterBox# */ {


    enterDocument: {
        value: function (firstTime) {
            
        }
    },

    _country1: {
        value: null
    },

    _country2: {
        value: null
    },

    country1: {
        get: function() {
            return this._country1;
        },
        set: function(country1) {
            this._country1 = country1;
            this._checkData();
        }
    },
    country2: {
        get: function() {
            return this._country2;
        },
        set: function(country2) {
            this._country2 = country2;
            this._checkData();
        }
    },

    _checkData: {
        value: function() {
            if (this._country1 && this._country2) {
                var name = this._country1 + this._country2;
                this.getData(name);
            }
        }
    },

    handleRemoveConverterButtonAction: {
        value: function () { 
            this.country1 = 'USD';
            this.country2 = 'GBP';
            
            var position = this.converterBoxes.findIndex(x => x.id == this.id);
            this.converterBoxes.splice(position, 1);
        }
    },

    getData: {
        value: function (name) {
            console.log('GET SOME DATA ABOUT: ', name);
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
    },
    prepareForActivationEvents: {
        value: function() {
            this.country1.addEventListener("drop", this, false);
            this.country2.addEventListener("drop", this, false);

        }
    },

    handleCountry1Drop: {
        value:function(event) {
            console.log(event);
        }
    }


});
