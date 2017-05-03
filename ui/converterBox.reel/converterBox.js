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
            this.addPathChangeListener("this.country1.countryName", this, "handleCountryChange");
            this.addPathChangeListener("this.country2.countryName", this, "handleCountryChange");
            this._checkPosition();
        }
    },

    _checkPosition: {
        value: function() {
            this._position = this.converterBoxes.findIndex(x => x.id == this.id);
            // console.log('position: ', this._position);
        }
    },

    _wipeCountry: {
        value: function() {
            this.country1.countryName = null;
            this.country2.countryName = null;
            this.country1.icon = null;
            this.country2.icon = null;
            this.country1.coin = null;
            this.country2.coin = null;
        }
    },

    handleCountryChange: {
        value: function() {
            //only sets country1 and country2 when both are selected
            if (this.country1.countryName && this.country2.countryName) {
                this.converterBoxes[this._position].country1 = this.country1;
                this.converterBoxes[this._position].country2 = this.country2;

                var name = this.country1.iso3.concat(this.country2.iso3);
                this._getData(name);
            }
               
        }
    },

    handleRemoveConverterButtonAction: {
        value: function () { 
            this._checkPosition();
            this.converterBoxes[this._position] = null;
            this.converterBoxes.splice(this._position, 1);
            this._wipeCountry();
            this.counter--;
        }
    },

    _getData: {
        value: function (name) {
            this.wsResult = {name: name, ask: 100, bid: 200};
            this.restResult = {name: name, ask: 100, bid: 200};
            console.log('GET SOME DATA ABOUT: ', name);
        }
    }


});
