/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component,
    Promise = require("montage/core/promise").Promise;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {


    enterDocument: {
        value: function () {

        }
    },

    currencyConversions: {
        value: [
            {"name": "USDGBP", "icon": "assets/images/uk.png"}, 
            {"name": "USDEUR", "icon": "assets/images/europe.png"}, 
            {"name": "USDCAD", "icon": "assets/images/canada.png"}, 
            {"name": "USDAUD", "icon": "assets/images/oz.png"}, 
            {"name": "USDNZD", "icon": "assets/images/nz.png"}, 
            {"name": "USDCHF", "icon": "assets/images/switz.png"}, 
            {"name": "GBPUSD", "icon": "assets/images/usa.png"}, 
            {"name": "GBPEUR", "icon": "assets/images/europe.png"}, 
            {"name": "GBPCAD", "icon": "assets/images/canada.png"}, 
            {"name": "GBPAUD", "icon": "assets/images/oz.png"}, 
            {"name": "GBPNZD", "icon": "assets/images/nz.png"}, 
            {"name": "GBPCHF", "icon": "assets/images/switz.png"}
        ]
        
    }

    // handleButtonAction: {
    //     value: function () {
    //         this.button.promise = new Promise(function(resolve){
    //             window.setTimeout(function(){
    //                 resolve();
    //             }, 5000)
    //         });

    //         console.log('hi');
    //     }
    // }
    
    
});
