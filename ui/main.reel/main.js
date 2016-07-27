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
        value: function (firstTime) {
            if(firstTime){
                var self = this;
                selectedList = function(){return self._selectedList;}
                // console.log(this.currencyConversions);
                // this.addPathChangeListener("currencyConversions.selected", this, "handleCurrencySelected");
            }
        }
    },

    wsServerRequestSpeed: {
        value: 0
    },

    wsTraffic: {
        value: 0.0
    },

    restServerRequestSpeed: {
        value: 0
    },

    restTraffic: {
        value: 0.0
    },

    _restSliderValue: {
        value: null
    },

    restSliderValue: {
        get: function ( ) {
            return this._restSliderValue;
        },
        set: function (value) {
            this._restSliderValue = Math.trunc(value);
        }
    },

    _selectedList: {
        value: null
    },

    // fetchRestData: {
    //     value: function ( ){
    //         var url = "https://kaazing.xignite.com/xGlobalCurrencies.json/GetRealTimeRates?Symbols=" +
    //             $scope.restRequestSymbolsString + "&_token=" + $scope.xigniteToken + "&_token_userid=" + $scope.xigniteUserId;
                

    //         this.sendHttpRequest(url, header).then(function (data) { 
    //             console.log(data);
    //         });
    //     }
    // },

    currencyConversions: {
        value: [
            {   
                "name": "USDGBP",
                "icon": "assets/images/uk.png",
                "webSocket": {},
                "rest": {}
            }, 
            {
                "name": "USDEUR",
                "icon": "assets/images/europe.png",
                "webSocket": {},
                "rest": {}
            }, 
            {   
                "name": "USDCAD",
                "icon": "assets/images/canada.png", 
                "webSocket": {}, 
                "rest": {}
            }, 
            {
                "name": "USDAUD", 
                "icon": "assets/images/oz.png", 
                "webSocket": {}, 
                "rest": {}
            }, 
            {
                "name": "USDNZD", 
                "icon": "assets/images/nz.png", 
                "webSocket": {}, 
                "rest": {}
            }, 
            {
                "name": "USDCHF",
                "icon": "assets/images/switz.png", 
                "webSocket": {}, 
                "rest": {}
            }, 
            {
                "name": "GBPUSD", 
                "icon": "assets/images/usa.png", 
                "webSocket": {}, 
                "rest": {}
            }, 
            {   
                "name": "GBPEUR", 
                "icon": "assets/images/europe.png", 
                "webSocket": {}, 
                "rest": {}
            }, 
            {
                "name": "GBPCAD", 
                "icon": "assets/images/canada.png", 
                "webSocket": {}, 
                "rest": {}
            }, 
            {
                "name": "GBPAUD", 
                "icon": "assets/images/oz.png", 
                "webSocket": {}, 
                "rest": {}
            }, 
            {
                "name": "GBPNZD", 
                "icon": "assets/images/nz.png", 
                "webSocket": {}, 
                "rest": {}
            }, 
            {
                "name": "GBPCHF", 
                "icon": "assets/images/switz.png", 
                "webSocket": {}, 
                "rest": {}
            }
        ]
        
    }
    
});
