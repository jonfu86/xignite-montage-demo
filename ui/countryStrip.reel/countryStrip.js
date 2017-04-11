/**
 * @module ui/countryStrip.reel
 */
var Component = require("montage/ui/component").Component,
KeyComposer = require("montage/composer/key-composer").KeyComposer;

/**
 * @class CountryStrip
 * @extends Component
 */
exports.CountryStrip = Component.specialize(/** @lends CountryStrip# */ {


   constructor: {
        value: function CountryStrip () {
            this.super();
        }
    },

    prepareForActivationEvents: {
        value: function() {
            this.countryFlow.element.addEventListener("dragstart", this, false);
            // this._element.addEventListener("drag", this._handleDrag, true);

            // this._element.addEventListener("dragend", this._handleDragEnd, true);
        }

    },

    handleDragStart: {
        value: function (event) {
            console.log("handleDragStart",event);
        }
    },

    // _handleDragStart: {
    //     value: function (event) {
    //         this.component.countryFlow._flowTranslateComposer.enabled = true;
    //     }
    // },

    // _handleDragEnd: {
    //     value: function (event) {
    //         // event.preventDefault();
    //         console.log(event.target);
    //     }
    // },
    
    templateDidLoad: {
        value: function () {
         
        }
    }


});