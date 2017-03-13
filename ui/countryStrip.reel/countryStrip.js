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
        value: function Countrystrip () {
            this.super();
        }
    },

    enterDocument: {
        value: function (firstTime) {

            this._element.addEventListener("touchstart", this, true);
            this._element.addEventListener("mousedown", this, true);
            this._element.addEventListener("mousemove", this, true);
        }

    },

    captureMousemove: {
        value: function  (event) {
            event.defaultPrevented = true;
            // console.log('z', event)
        }
    },

    captureMousedown: {
        value: function (event) {
            if (event.target && event.target.component){
                if (event.target.component.identifier == "country") {
                    // console.log('hit');
                }
            }
        }
    },

    capturePointermove: {
        value: function (event) {
                debugger;
            if (event.pointerType === this._MOUSE_POINTER || (window.MSPointerEvent && event.pointerType === window.MSPointerEvent.MSPOINTER_TYPE_MOUSE)) {
                this.captureMousemove(event);
            } else if (event.pointerType === this._TOUCH_POINTER || (window.MSPointerEvent && event.pointerType === window.MSPointerEvent.MSPOINTER_TYPE_TOUCH)) {
                this.captureTouchmove(event);
            }
        }
    },
    

    templateDidLoad: {
        value: function () {
         
        }
    }


},
{
capturePointermove: {
        value: function (event) {
                debugger;
            if (event.pointerType === this._MOUSE_POINTER || (window.MSPointerEvent && event.pointerType === window.MSPointerEvent.MSPOINTER_TYPE_MOUSE)) {
                this.captureMousemove(event);
            } else if (event.pointerType === this._TOUCH_POINTER || (window.MSPointerEvent && event.pointerType === window.MSPointerEvent.MSPOINTER_TYPE_TOUCH)) {
                this.captureTouchmove(event);
            }
        }
}
});
