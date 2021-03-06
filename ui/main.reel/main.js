/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component,
    Promise = require("montage/core/promise").Promise;

/**
 * @class Main
 * @extends Component
 */
 var APP = 0;
exports.Main = Component.specialize(/** @lends Main# */ {


    enterDocument: {
        value: function (firstTime) {

            if(firstTime){
                var self = this;
                
                selectedList = function(){return self._selectedList;}
                this._element.addEventListener("touchstart", this, true);
	            this._element.addEventListener("mousedown", this, true);
	            this._element.addEventListener("mousemove", this, true);
	            this._element.addEventListener("mouseup", this, true);

	            this._element.addEventListener("dragstart", this, false);
	            this._element.addEventListener("dragend", this, false);
	            this._element.addEventListener("drop", this, false);
	            this._element.addEventListener("dragover", this, false);
	            this._element.addEventListener("dragenter", this, false);
	            this._element.addEventListener("dragleave", this, false);
      
            }
        }
    },

    _dragData: {
    	value: null
    },

    handleDragstart: {
        value: function (event) {
        	// var self = this;

        	if(event.target.component.identifier == "country") {
        		var country = event.target.component;
        			this._dragData = country;

        			// this._dragTarget = country;
        			// set = {countrytitle: country.countrytitle, icon: country.icon},
        			// data = JSON.stringify(set);
        		// event.dataTransfer.setData("text/plain", data);
        	}

            if(event.target.component.identifier == "converterBox") {
                console.log(event.target);
            }
            // console.log("handleDragstart", event.target);
        }
    },

    handleDragend: {
        value: function (event) {
            // console.log("handleDragend", event.target);
        }
    },

    handleDrop: {
        value: function (event) {
            
            // console.log("drop", event.target);
            // move dragged elem to the selected drop target
            if(event.target.classList.contains("dropbox")) {
            	event.preventDefault();
            	// console.log(event.target.component);
             	// event.target.style.background = "blue";

             	// var data = event.dataTransfer.getData("text/plain"),
             	// 	result = JSON.parse(data);
             	// 	console.log(result);
             	// var	country = {name: this._dragData.countrytitle, icon: this._dragData.icon, coin: this._dragData.coin};
             	// console.log(event.target);
             	// event.target.append(this._dragData._element);
             	
             	event.target.component.iso3 = this._dragData.iso3;
             	event.target.component.icon = this._dragData.icon;
             	event.target.component.coin = this._dragData.coin;
             	event.target.component.countryName = this._dragData.countryName;
            }
        }
    },

    handleDragover: {
        value: function(event) {
            event.preventDefault();
            // console.log('over', event);
            
            // if(event.target.component && event.target.component.identifier == "converterBox") {
            //     console.log('over', event);
                
            // }

        }
    },

    handleDragenter: {
        value: function(event) {
            // console.log('enter', event.target);
            if(event.target.classList.contains("dropbox")) {
            	// event.target.style.background = "purple";
            }
        }
    },

    handleDragleave: {
        value: function(event) {
            // console.log('leave', event.target);
        }
    },

    captureMousedown: {
        value: function (event) {
 			//disabling flow if a flag is the target to allow html5 drag
            if (event.target && event.target.component){
                // console.log(event.target);
                if (event.target.component.identifier == "countryHandle") {

                	this._countryName = event.target.component.parentComponent.countryName;   	
                	this.countryStrip.countryFlow._flowTranslateComposer._cancel();
                    
                }

                if (event.target.component.identifier == "converterHandle") {

                    this.converterID = event.target.component.parentComponent.id;     
                    console.log(this.converterID);
                    // this.countryStrip.countryFlow._flowTranslateComposer._cancel();
                    
                }
            }
        }
    },

    captureMouseup: {
        value: function (event) {
        	// console.log(event.target);
            if (event.target && event.target.component){

                if (event.target.component.identifier == "countryHandle") {

                	// console.log(event.target.component.countryName);
                    // this.countryStrip.countryFlow._flowTranslateComposer.enabled = true;
                }
                // if (event.target.component.identifier == "dropbox1") {
                // 	console.log(this._countryName);
                // }
            }
        }
    },

    _converterBoxes: {
    	value: [
    		{   
                "country1": null, 
                "country2": null, 
                "name": null, 
                "ask": null , 
                "bid": null, 
                "id": 0
            }
    	]
    },

    _counter: {
    	value: 0
    },

    counter: {
    	get: function () {
            return this._counter;
        },
        set: function (counter) {
            this._counter = counter;
        }
    },

    _converterId: {
    	value: 0
    },

    handleAddConverterButtonAction: {
    	value: function() {
    		// console.log(this.converterRep);
    		if(this.converterRep.iterations.length < 3){
    			this._counter++;
    			this._converterId++;
    			this._converterBoxes.push({"country1": null, "country2": null, "name": null, "ask": null , "bid": null, "id": this._converterId});
    			
                console.log(this.counter, "counter");
                console.log(this._converterId, "converterId");
                // this._converterBoxes.push({"country1": null, "country2": null, "id": this.counter});
    		} else {
    			alert('You have reached maximum number of comparisons');
    		}
    		// this._counter++;
    		// this._converterBoxes.push({"country1": null, "country2": null, "name": null, "ask": null , "bid": null, "id": this.counter});
    	}
    },

    _handleDrop: {
        value: function (event) {
            console.log(event);
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

    // fetchRestData: {
    //     value: function ( ){
    //         var url = "https://kaazing.xignite.com/xGlobalCurrencies.json/GetRealTimeRates?Symbols=" +
    //             $scope.restRequestSymbolsString + "&_token=" + $scope.xigniteToken + "&_token_userid=" + $scope.xigniteUserId;


    //         this.sendHttpRequest(url, header).then(function (data) {
    //             console.log(data);
    //         });
    //     }
    // },
    currencyConversions:{
         value: [{
			country:"Albania Lek",
			coin:"Lek",
			country_handle:"Albania",
			countryName:"Albania",
			iso2:"AL",
			iso3:"ALB",
			number:"008",
			currency_code:"ALL",
			graphic:"",
			symbol:"Lek",
			symbolb:"&#76;&#101;&#107;",
			ariala:"Lek",
			arial:"&#76;&#101;&#107;",
			decimal:"76, 101, 107",
			hex:"4c, 65, 6b",
			comment:""
		},{
			country:"Afghanistan Afghani",
			coin:"Afghani",
			country_handle:"Afghanistan",
			countryName:"Afghanistan",
			iso2:"AF",
			iso3:"AFG",
			number:"004",
			currency_code:"AFN",
			graphic:"",
			symbol:"?",
			symbolb:"&#1547;",
			ariala:"?",
			arial:"&#1547;",
			decimal:"1547",
			hex:"60b",
			comment:""
		},{
			country:"Argentina Peso",
			coin:"Peso",
			country_handle:"Argentina",
			countryName:"Argentina",
			iso2:"AR",
			iso3:"ARG",
			number:"032",
			currency_code:"ARS",
			graphic:"",
			symbol:"$",
			symbolb:"&#36;",
			ariala:"$",
			arial:"&#36;",
			decimal:"36",
			hex:"24",
			comment:"info"
		},{
			country:"Aruba Guilder",
			coin:"Guilder",
			country_handle:"Aruba",
			countryName:"Aruba",
			iso2:"AW",
			iso3:"ABW",
			number:"533",
			currency_code:"AWG",
			graphic:"",
			symbol:"�",
			symbolb:"&#402;",
			ariala:"�",
			arial:"&#402;",
			decimal:"402",
			hex:"192",
			comment:""
		},{
			country:"Australia Dollar",
			coin:"Dollar",
			country_handle:"Australia",
			countryName:"Australia",
			iso2:"AU",
			iso3:"AUS",
			number:"036",
			currency_code:"AUD",
			graphic:"",
			symbol:"$",
			symbolb:"&#36;",
			ariala:"$",
			arial:"&#36;",
			decimal:"36",
			hex:"24",
			comment:""
		},{
			country:"Azerbaijan New Manat",
			coin:"Manat",
			country_handle:"Azerbaijan New",
			countryName:"Azerbaijan",
			iso2:"AZ",
			iso3:"AZE",
			number:"031",
			currency_code:"AZN",
			graphic:"",
			symbol:"???",
			symbolb:"&#1084;&#1072;&#1085;",
			ariala:"???",
			arial:"&#1084;&#1072;&#1085;",
			decimal:"1084, 1072, 1085",
			hex:"43c, 430, 43d",
			comment:""
		},{
			country:"Bahamas Dollar",
			coin:"Dollar",
			country_handle:"Bahamas",
			countryName:"Bahamas",
			iso2:"BS",
			iso3:"BHS",
			number:"044",
			currency_code:"BSD",
			graphic:"",
			symbol:"$",
			symbolb:"&#36;",
			ariala:"$",
			arial:"&#36;",
			decimal:"36",
			hex:"24",
			comment:""
		},{
			country:"Barbados Dollar",
			coin:"Dollar",
			country_handle:"Barbados",
			countryName:"Barbados",
			iso2:"BB",
			iso3:"BRB",
			number:"052",
			currency_code:"BBD",
			graphic:"",
			symbol:"$",
			symbolb:"&#36;",
			ariala:"$",
			arial:"&#36;",
			decimal:"36",
			hex:"24",
			comment:""
		},{
			country:"Belarus Ruble",
			coin:"Ruble",
			country_handle:"Belarus",
			countryName:"Belarus",
			iso2:"BY",
			iso3:"BLR",
			number:"112",
			currency_code:"BYR",
			graphic:"",
			symbol:"p.",
			symbolb:"&#112;&#46;",
			ariala:"p.",
			arial:"&#112;&#46;",
			decimal:"112, 46",
			hex:"70, 2e",
			comment:""
		},{
			country:"Belize Dollar",
			coin:"Dollar",
			country_handle:"Belize",
			countryName:"Belize",
			iso2:"BZ",
			iso3:"BLZ",
			number:"084",
			currency_code:"BZD",
			graphic:"",
			symbol:"BZ$",
			symbolb:"&#66;&#90;&#36;",
			ariala:"BZ$",
			arial:"&#66;&#90;&#36;",
			decimal:"66, 90, 36",
			hex:"42, 5a, 24",
			comment:""
		},{
			country:"Bermuda Dollar",
			coin:"Dollar",
			country_handle:"Bermuda",
			countryName:"Bermuda",
			iso2:"BM",
			iso3:"BMU",
			number:"060",
			currency_code:"BMD",
			graphic:"",
			symbol:"$",
			symbolb:"&#36;",
			ariala:"$",
			arial:"&#36;",
			decimal:"36",
			hex:"24",
			comment:""
		},{
			country:"Bolivia Bol�viano",
			coin:"Boliviano",
			country_handle:"Bolivia",
			countryName:"Bolivia",
			iso2:"BO",
			iso3:"BOL",
			number:"068",
			currency_code:"BOB",
			graphic:"",
			symbol:"$b",
			symbolb:"&#36;&#98;",
			ariala:"$b",
			arial:"&#36;&#98;",
			decimal:"36, 98",
			hex:"24, 62",
			comment:""
		},{
			country:"Bosnia and Herzegovina Convertible Marka",
			coin:"Marka",
			country_handle:"Bosnia and Herzegovina Convertible",
			countryName:"Bosnia and Herzegovina",
			iso2:"BA",
			iso3:"BIH",
			number:"070",
			currency_code:"BAM",
			graphic:"",
			symbol:"KM",
			symbolb:"&#75;&#77;",
			ariala:"KM",
			arial:"&#75;&#77;",
			decimal:"75, 77",
			hex:"4b, 4d",
			comment:""
		},{
			country:"Botswana Pula",
			coin:"Pula",
			country_handle:"Botswana",
			countryName:"Botswana",
			iso2:"BW",
			iso3:"BWA",
			number:"072",
			currency_code:"BWP",
			graphic:"",
			symbol:"P",
			symbolb:"&#80;",
			ariala:"P",
			arial:"&#80;",
			decimal:"80",
			hex:"50",
			comment:""
		},{
			country:"Bulgaria Lev",
			coin:"Lev",
			country_handle:"Bulgaria",
			countryName:"Bulgaria",
			iso2:"BG",
			iso3:"BGR",
			number:"100",
			currency_code:"BGN",
			graphic:"",
			symbol:"??",
			symbolb:"&#1083;&#1074;",
			ariala:"??",
			arial:"&#1083;&#1074;",
			decimal:"1083, 1074",
			hex:"43b, 432",
			comment:""
		},{
			country:"Brazil Real",
			coin:"Real",
			country_handle:"Brazil",
			countryName:"Brazil",
			iso2:"BR",
			iso3:"BRA",
			number:"076",
			currency_code:"BRL",
			graphic:"",
			symbol:"R$",
			symbolb:"&#82;&#36;",
			ariala:"R$",
			arial:"&#82;&#36;",
			decimal:"82, 36",
			hex:"52, 24",
			comment:"info"
		},{
			country:"Brunei Darussalam Dollar",
			coin:"Dollar",
			country_handle:"Brunei Darussalam",
			countryName:"Brunei Darussalam",
			iso2:"BN",
			iso3:"BRN",
			number:"096",
			currency_code:"BND",
			graphic:"",
			symbol:"$",
			symbolb:"&#36;",
			ariala:"$",
			arial:"&#36;",
			decimal:"36",
			hex:"24",
			comment:""
		},{
			country:"Cambodia Riel",
			coin:"Riel",
			country_handle:"Cambodia",
			countryName:"Cambodia",
			iso2:"KH",
			iso3:"KHM",
			number:"116",
			currency_code:"KHR",
			graphic:"",
			symbol:"?",
			symbolb:"&#6107;",
			ariala:"?",
			arial:"&#6107;",
			decimal:"6107",
			hex:"17db",
			comment:""
		},{
			country:"Canada Dollar",
			coin:"Dollar",
			country_handle:"Canada",
			countryName:"Canada",
			iso2:"CA",
			iso3:"CAN",
			number:"124",
			currency_code:"CAD",
			graphic:"",
			symbol:"$",
			symbolb:"&#36;",
			ariala:"$",
			arial:"&#36;",
			decimal:"36",
			hex:"24",
			comment:""
		},{
			country:"Cayman Islands Dollar",
			coin:"Dollar",
			country_handle:"Cayman Islands",
			countryName:"Cayman Islands",
			iso2:"KY",
			iso3:"CYM",
			number:"136",
			currency_code:"KYD",
			graphic:"",
			symbol:"$",
			symbolb:"&#36;",
			ariala:"$",
			arial:"&#36;",
			decimal:"36",
			hex:"24",
			comment:""
		},{
			country:"Chile Peso",
			coin:"Peso",
			country_handle:"Chile",
			countryName:"Chile",
			iso2:"CL",
			iso3:"CHL",
			number:"152",
			currency_code:"CLP",
			graphic:"",
			symbol:"$",
			symbolb:"&#36;",
			ariala:"$",
			arial:"&#36;",
			decimal:"36",
			hex:"24",
			comment:"info"
		},{
			country:"China Yuan Renminbi",
			coin:"Yuan Renminbi",
			country_handle:"China",
			countryName:"China",
			iso2:"CN",
			iso3:"CHN",
			number:"156",
			currency_code:"CNY",
			graphic:"",
			symbol:"�",
			symbolb:"&#165;",
			ariala:"�",
			arial:"&#165;",
			decimal:"165",
			hex:"a5",
			comment:"info"
		},{
			country:"Colombia Peso",
			coin:"Peso",
			country_handle:"Colombia",
			countryName:"Colombia",
			iso2:"CO",
			iso3:"COL",
			number:"170",
			currency_code:"COP",
			graphic:"",
			symbol:"$",
			symbolb:"&#36;",
			ariala:"$",
			arial:"&#36;",
			decimal:"36",
			hex:"24",
			comment:""
		},{
			country:"Costa Rica Colon",
			coin:"Colon",
			country_handle:"Costa Rica",
			countryName:"Costa Rica",
			iso2:"CR",
			iso3:"CRI",
			number:"188",
			currency_code:"CRC",
			graphic:"",
			symbol:"�",
			symbolb:"&#8353;",
			ariala:"�",
			arial:"&#8353;",
			decimal:"8353",
			hex:"20a1",
			comment:""
		},{
			country:"Croatia Kuna",
			coin:"Kuna",
			country_handle:"Croatia",
			countryName:"Croatia",
			iso2:"HR",
			iso3:"HRV",
			number:"191",
			currency_code:"HRK",
			graphic:"",
			symbol:"kn",
			symbolb:"&#107;&#110;",
			ariala:"kn",
			arial:"&#107;&#110;",
			decimal:"107, 110",
			hex:"6b, 6e",
			comment:""
		},{
			country:"Cuba Peso",
			coin:"Peso",
			country_handle:"Cuba",
			countryName:"Cuba",
			iso2:"CU",
			iso3:"CUB",
			number:"192",
			currency_code:"CUP",
			graphic:"",
			symbol:"?",
			symbolb:"&#8369;",
			ariala:"?",
			arial:"&#8369;",
			decimal:"8369",
			hex:"20b1",
			comment:""
		},{
			country:"Czech Republic Koruna",
			coin:"Koruna",
			country_handle:"Czech Republic",
			countryName:"Czech Republic",
			iso2:"CZ",
			iso3:"CZE",
			number:"203",
			currency_code:"CZK",
			graphic:"",
			symbol:"Kc",
			symbolb:"&#75;&#269;",
			ariala:"Kc",
			arial:"&#75;&#269;",
			decimal:"75, 269",
			hex:"4b, 10d",
			comment:""
		},{
			country:"Denmark Krone",
			coin:"Krone",
			country_handle:"Denmark",
			countryName:"Denmark",
			iso2:"DK",
			iso3:"DNK",
			number:"208",
			currency_code:"DKK",
			graphic:"",
			symbol:"kr",
			symbolb:"&#107;&#114;",
			ariala:"kr",
			arial:"&#107;&#114;",
			decimal:"107, 114",
			hex:"6b, 72",
			comment:"info"
		},{
			country:"Dominican Republic Peso",
			coin:"Peso",
			country_handle:"Dominican Republic",
			countryName:"Dominican Republic",
			iso2:"DO",
			iso3:"DOM",
			number:"214",
			currency_code:"DOP",
			graphic:"",
			symbol:"RD$",
			symbolb:"&#82;&#68;&#36;",
			ariala:"RD$",
			arial:"&#82;&#68;&#36;",
			decimal:"82, 68, 36",
			hex:"52, 44, 24",
			comment:""
		},{
			country:"East Caribbean Dollar",
			coin:"Dollar",
			countryName:"East Caribbean",
			country_handle:"East Caribbean",
			currency_code:"XCD",
			graphic:"",
			symbol:"$",
			symbolb:"&#36;",
			ariala:"$",
			arial:"&#36;",
			decimal:"36",
			hex:"24",
			comment:""
		},{
			country:"Egypt Pound",
			coin:"Pound",
			country_handle:"Egypt",
			countryName:"Egypt",
			iso2:"EG",
			iso3:"EGY",
			number:"818",
			currency_code:"EGP",
			graphic:"",
			symbol:"�",
			symbolb:"&#163;",
			ariala:"�",
			arial:"&#163;",
			decimal:"163",
			hex:"a3",
			comment:""
		},{
			country:"El Salvador Colon",
			coin:"Colon",
			country_handle:"El Salvador",
			countryName:"El Salvador",
			iso2:"SV",
			iso3:"SLV",
			number:"222",
			currency_code:"SVC",
			graphic:"",
			symbol:"$",
			symbolb:"&#36;",
			ariala:"$",
			arial:"&#36;",
			decimal:"36",
			hex:"24",
			comment:""
		},{
			country:"Euro Member Countries",
			coin:"euro",
			country_handle:"Euro Member",
			countryName:"Euro Member Countries",
			iso2:"EU",
			iso3:"EUR",
			number:"0",
			currency_code:"EUR",
			graphic:"",
			symbol:"�",
			symbolb:"&#8364;",
			ariala:"�",
			arial:"&#8364;",
			decimal:"8364",
			hex:"20ac",
			comment:""
		},{
			country:"Falkland Islands (Malvinas) Pound",
			coin:"Pound",
			country_handle:"Falkland Islands (Malvinas)",
			countryName:"Falkland Islands (Malvinas)",
			iso2:"FK",
			iso3:"FLK",
			number:"238",
			currency_code:"FKP",
			graphic:"",
			symbol:"�",
			symbolb:"&#163;",
			ariala:"�",
			arial:"&#163;",
			decimal:"163",
			hex:"a3",
			comment:""
		},{
			country:"Fiji Dollar",
			coin:"Dollar",
			country_handle:"Fiji",
			countryName:"Fiji",
			iso2:"FJ",
			iso3:"FJI",
			number:"242",
			currency_code:"FJD",
			graphic:"",
			symbol:"$",
			symbolb:"&#36;",
			ariala:"$",
			arial:"&#36;",
			decimal:"36",
			hex:"24",
			comment:""
		},{
			country:"Ghana Cedi",
			coin:"Cedi",
			country_handle:"Ghana",
			countryName:"Ghana",
			iso2:"GH",
			iso3:"GHA",
			number:"288",
			currency_code:"GHS",
			graphic:"",
			symbol:"�",
			symbolb:"&#162;",
			ariala:"�",
			arial:"&#162;",
			decimal:"162",
			hex:"a2",
			comment:""
		},{
			country:"Gibraltar Pound",
			coin:"Pound",
			country_handle:"Gibraltar",
			countryName:"Gibraltar",
			iso2:"GI",
			iso3:"GIB",
			number:"292",
			currency_code:"GIP",
			graphic:"",
			symbol:"�",
			symbolb:"&#163;",
			ariala:"�",
			arial:"&#163;",
			decimal:"163",
			hex:"a3",
			comment:""
		},{
			country:"Guatemala Quetzal",
			coin:"Quetzal",
			country_handle:"Guatemala",
			countryName:"Guatemala",
			iso2:"GT",
			iso3:"GTM",
			number:"320",
			currency_code:"GTQ",
			graphic:"",
			symbol:"Q",
			symbolb:"&#81;",
			ariala:"Q",
			arial:"&#81;",
			decimal:"81",
			hex:"51",
			comment:""
		},{
			country:"Guernsey Pound",
			coin:"Pound",
			country_handle:"Guernsey",
			countryName:"Guernsey",
			iso2:"GG",
			iso3:"GGY",
			number:"831",
			currency_code:"GGP",
			graphic:"",
			symbol:"�",
			symbolb:"&#163;",
			ariala:"�",
			arial:"&#163;",
			decimal:"163",
			hex:"a3",
			comment:""
		},{
			country:"Guyana Dollar",
			coin:"Dollar",
			country_handle:"Guyana",
			countryName:"Guyana",
			iso2:"GY",
			iso3:"GUY",
			number:"328",
			currency_code:"GYD",
			graphic:"",
			symbol:"$",
			symbolb:"&#36;",
			ariala:"$",
			arial:"&#36;",
			decimal:"36",
			hex:"24",
			comment:""
		},{
			country:"Honduras Lempira",
			coin:"Lempira",
			country_handle:"Honduras",
			countryName:"Honduras",
			iso2:"HN",
			iso3:"HND",
			number:"340",
			currency_code:"HNL",
			graphic:"",
			symbol:"L",
			symbolb:"&#76;",
			ariala:"L",
			arial:"&#76;",
			decimal:"76",
			hex:"4c",
			comment:""
		},{
			country:"Hong Kong Dollar",
			coin:"Dollar",
			country_handle:"Hong Kong",
			countryName:"Hong Kong",
			iso2:"HK",
			iso3:"HKG",
			number:"344",
			currency_code:"HKD",
			graphic:"",
			symbol:"$",
			symbolb:"&#36;",
			ariala:"$",
			arial:"&#36;",
			decimal:"36",
			hex:"24",
			comment:"info"
		},{
			country:"Hungary Forint",
			coin:"Forint",
			country_handle:"Hungary",
			countryName:"Hungary",
			iso2:"HU",
			iso3:"HUN",
			number:"348",
			currency_code:"HUF",
			graphic:"",
			symbol:"Ft",
			symbolb:"&#70;&#116;",
			ariala:"Ft",
			arial:"&#70;&#116;",
			decimal:"70, 116",
			hex:"46, 74",
			comment:""
		},{
			country:"Iceland Krona",
			coin:"Krona",
			country_handle:"Iceland",
			countryName:"Iceland",
			iso2:"IS",
			iso3:"ISL",
			number:"352",
			currency_code:"ISK",
			graphic:"",
			symbol:"kr",
			symbolb:"&#107;&#114;",
			ariala:"kr",
			arial:"&#107;&#114;",
			decimal:"107, 114",
			hex:"6b, 72",
			comment:""
		},{
			country:"India Rupee",
			coin:"Rupee",
			country_handle:"India",
			countryName:"India",
			iso2:"IN",
			iso3:"IND",
			number:"356",
			currency_code:"INR",
			graphic:"",
			symbol:"",
			symbolb:"",
			ariala:"",
			arial:"",
			decimal:"",
			hex:"",
			comment:"info"
		},{
			country:"Indonesia Rupiah",
			coin:"Rupiah",
			country_handle:"Indonesia",
			countryName:"Indonesia",
			iso2:"ID",
			iso3:"IDN",
			number:"360",
			currency_code:"IDR",
			graphic:"",
			symbol:"Rp",
			symbolb:"&#82;&#112;",
			ariala:"Rp",
			arial:"&#82;&#112;",
			decimal:"82, 112",
			hex:"52, 70",
			comment:""
		},{
			country:"Iran Rial",
			coin:"Rial",
			country_handle:"Iran",
			countryName:"Islamic Republic of Iran",
			iso2:"IR",
			iso3:"IRN",
			number:"364",
			currency_code:"IRR",
			graphic:"",
			symbol:"?",
			symbolb:"&#65020;",
			ariala:"?",
			arial:"&#65020;",
			decimal:"65020",
			hex:"fdfc",
			comment:""
		},{
			country:"Isle of Man Pound",
			coin:"Pound",
			country_handle:"Isle of Man",
			countryName:"Isle of Man",
			iso2:"IM",
			iso3:"IMN",
			number:"833",
			currency_code:"IMP",
			graphic:"",
			symbol:"�",
			symbolb:"&#163;",
			ariala:"�",
			arial:"&#163;",
			decimal:"163",
			hex:"a3",
			comment:""
		},{
			country:"Israel Shekel",
			coin:"Shekel",
			country_handle:"Israel",
			countryName:"Israel",
			iso2:"IL",
			iso3:"ISR",
			number:"376",
			currency_code:"ILS",
			graphic:"",
			symbol:"?",
			symbolb:"&#8362;",
			ariala:"?",
			arial:"&#8362;",
			decimal:"8362",
			hex:"20aa",
			comment:""
		},{
			country:"Jamaica Dollar",
			coin:"Dollar",
			country_handle:"Jamaica",
			countryName:"Jamaica",
			iso2:"JM",
			iso3:"JAM",
			number:"388",
			currency_code:"JMD",
			graphic:"",
			symbol:"J$",
			symbolb:"&#74;&#36;",
			ariala:"J$",
			arial:"&#74;&#36;",
			decimal:"74, 36",
			hex:"4a, 24",
			comment:""
		},{
			country:"Japan Yen",
			coin:"Yen",
			country_handle:"Japan",
			countryName:"Japan",
			iso2:"JP",
			iso3:"JPN",
			number:"392",
			currency_code:"JPY",
			graphic:"",
			symbol:"�",
			symbolb:"&#165;",
			ariala:"�",
			arial:"&#165;",
			decimal:"165",
			hex:"a5",
			comment:"info"
		},{
			country:"Jersey Pound",
			coin:"Pound",
			country_handle:"Jersey",
			countryName:"Jersey",
			iso2:"JE",
			iso3:"JEY",
			number:"832",
			currency_code:"JEP",
			graphic:"",
			symbol:"�",
			symbolb:"&#163;",
			ariala:"�",
			arial:"&#163;",
			decimal:"163",
			hex:"a3",
			comment:""
		},{
			country:"Kazakhstan Tenge",
			coin:"Tenge",
			country_handle:"Kazakhstan",
			countryName:"Kazakhstan",
			iso2:"KZ",
			iso3:"KAZ",
			number:"398",
			currency_code:"KZT",
			graphic:"",
			symbol:"??",
			symbolb:"&#1083;&#1074;",
			ariala:"??",
			arial:"&#1083;&#1074;",
			decimal:"1083, 1074",
			hex:"43b, 432",
			comment:""
		},{
			country:"Korea (North) Won",
			coin:"Won",
			country_handle:"Korea (North)",
			countryName:"North Korea",
			iso2:"KP",
			iso3:"PRK",
			number:"408",
			currency_code:"KPW",
			graphic:"",
			symbol:"?",
			symbolb:"&#8361;",
			ariala:"?",
			arial:"&#8361;",
			decimal:"8361",
			hex:"20a9",
			comment:""
		},{
			country:"Korea (South) Won",
			coin:"Won",
			country_handle:"Korea (South)",
			countryName:"South Korea",
			iso2:"KR",
			iso3:"KOR",
			number:"410",
			currency_code:"KRW",
			graphic:"",
			symbol:"?",
			symbolb:"&#8361;",
			ariala:"?",
			arial:"&#8361;",
			decimal:"8361",
			hex:"20a9",
			comment:""
		},{
			country:"Kyrgyzstan Som",
			coin:"Som",
			country_handle:"Kyrgyzstan",
			countryName:"Kyrgyzstan",
			iso2:"KG",
			iso3:"KGZ",
			number:"417",
			currency_code:"KGS",
			graphic:"",
			symbol:"??",
			symbolb:"&#1083;&#1074;",
			ariala:"??",
			arial:"&#1083;&#1074;",
			decimal:"1083, 1074",
			hex:"43b, 432",
			comment:""
		},{
			country:"Laos Kip",
			coin:"Kip",
			country_handle:"Laos",
			countryName:"Lao PDR",
			iso2:"LA",
			iso3:"LAO",
			number:"418",
			currency_code:"LAK",
			graphic:"",
			symbol:"?",
			symbolb:"&#8365;",
			ariala:"?",
			arial:"&#8365;",
			decimal:"8365",
			hex:"20ad",
			comment:""
		},{
			country:"Lebanon Pound",
			coin:"Pound",
			country_handle:"Lebanon",
			countryName:"Lebanon",
			iso2:"LB",
			iso3:"LBN",
			number:"422",
			currency_code:"LBP",
			graphic:"",
			symbol:"�",
			symbolb:"&#163;",
			ariala:"�",
			arial:"&#163;",
			decimal:"163",
			hex:"a3",
			comment:""
		},{
			country:"Liberia Dollar",
			coin:"Dollar",
			country_handle:"Liberia",
			countryName:"Liberia",
			iso2:"LR",
			iso3:"LBR",
			number:"430",
			currency_code:"LRD",
			graphic:"",
			symbol:"$",
			symbolb:"&#36;",
			ariala:"$",
			arial:"&#36;",
			decimal:"36",
			hex:"24",
			comment:""
		},{
			country:"Macedonia Denar",
			coin:"Denar",
			country_handle:"Macedonia",
			countryName:"Macedonia",
			iso2:"MK",
			iso3:"MKD",
			number:"807",
			currency_code:"MKD",
			graphic:"",
			symbol:"???",
			symbolb:"&#1076;&#1077;&#1085;",
			ariala:"???",
			arial:"&#1076;&#1077;&#1085;",
			decimal:"1076, 1077, 1085",
			hex:"434, 435, 43d",
			comment:""
		},{
			country:"Malaysia Ringgit",
			coin:"Ringgit",
			country_handle:"Malaysia",
			countryName:"Malaysia",
			iso2:"MY",
			iso3:"MYS",
			number:"458",
			currency_code:"MYR",
			graphic:"",
			symbol:"RM",
			symbolb:"&#82;&#77;",
			ariala:"RM",
			arial:"&#82;&#77;",
			decimal:"82, 77",
			hex:"52, 4d",
			comment:""
		},{
			country:"Mauritius Rupee",
			coin:"Rupee",
			country_handle:"Mauritius",
			countryName:"Mauritius",
			iso2:"MU",
			iso3:"MUS",
			number:"480",
			currency_code:"MUR",
			graphic:"",
			symbol:"?",
			symbolb:"&#8360;",
			ariala:"?",
			arial:"&#8360;",
			decimal:"8360",
			hex:"20a8",
			comment:""
		},{
			country:"Mexico Peso",
			coin:"Peso",
			country_handle:"Mexico",
			countryName:"Mexico",
			iso2:"MX",
			iso3:"MEX",
			number:"484",
			currency_code:"MXN",
			graphic:"",
			symbol:"$",
			symbolb:"&#36;",
			ariala:"$",
			arial:"&#36;",
			decimal:"36",
			hex:"24",
			comment:"info"
		},{
			country:"Mongolia Tughrik",
			coin:"Tughrik",
			country_handle:"Mongolia",
			countryName:"Mongolia",
			iso2:"MN",
			iso3:"MNG",
			number:"496",
			currency_code:"MNT",
			graphic:"",
			symbol:"?",
			symbolb:"&#8366;",
			ariala:"?",
			arial:"&#8366;",
			decimal:"8366",
			hex:"20ae",
			comment:""
		},{
			country:"Mozambique Metical",
			coin:"Metical",
			country_handle:"Mozambique",
			countryName:"Mozambique",
			iso2:"MZ",
			iso3:"MOZ",
			number:"508",
			currency_code:"MZN",
			graphic:"",
			symbol:"MT",
			symbolb:"&#77;&#84;",
			ariala:"MT",
			arial:"&#77;&#84;",
			decimal:"77, 84",
			hex:"4d, 54",
			comment:""
		},{
			country:"Namibia Dollar",
			coin:"Dollar",
			country_handle:"Namibia",
			countryName:"Namibia",
			iso2:"NA",
			iso3:"NAM",
			number:"516",
			currency_code:"NAD",
			graphic:"",
			symbol:"$",
			symbolb:"&#36;",
			ariala:"$",
			arial:"&#36;",
			decimal:"36",
			hex:"24",
			comment:""
		},{
			country:"Nepal Rupee",
			coin:"Rupee",
			country_handle:"Nepal",
			countryName:"Nepal",
			iso2:"NP",
			iso3:"NPL",
			number:"524",
			currency_code:"NPR",
			graphic:"",
			symbol:"?",
			symbolb:"&#8360;",
			ariala:"?",
			arial:"&#8360;",
			decimal:"8360",
			hex:"20a8",
			comment:""
		},{
			country:"Netherlands Antilles Guilder",
			coin:"Guilder",
			country_handle:"Netherlands Antilles",
			countryName:"Netherlands Antilles",
			iso2:"AN",
			iso3:"ANT",
			number:"530",
			currency_code:"ANG",
			graphic:"",
			symbol:"�",
			symbolb:"&#402;",
			ariala:"�",
			arial:"&#402;",
			decimal:"402",
			hex:"192",
			comment:""
		},{
			country:"New Zealand Dollar",
			coin:"Dollar",
			country_handle:"New Zealand",
			countryName:"New Zealand",
			iso2:"NZ",
			iso3:"NZL",
			number:"554",
			currency_code:"NZD",
			graphic:"",
			symbol:"$",
			symbolb:"&#36;",
			ariala:"$",
			arial:"&#36;",
			decimal:"36",
			hex:"24",
			comment:""
		},{
			country:"Nicaragua Cordoba",
			coin:"Cordoba",
			country_handle:"Nicaragua",
			countryName:"Nicaragua",
			iso2:"NI",
			iso3:"NIC",
			number:"558",
			currency_code:"NIO",
			graphic:"",
			symbol:"C$",
			symbolb:"&#67;&#36;",
			ariala:"C$",
			arial:"&#67;&#36;",
			decimal:"67, 36",
			hex:"43, 24",
			comment:""
		},{
			country:"Nigeria Naira",
			coin:"Naira",
			country_handle:"Nigeria",
			countryName:"Nigeria",
			iso2:"NG",
			iso3:"NGA",
			number:"566",
			currency_code:"NGN",
			graphic:"",
			symbol:"?",
			symbolb:"&#8358;",
			ariala:"?",
			arial:"&#8358;",
			decimal:"8358",
			hex:"20a6",
			comment:""
		},{
			country:"Norway Krone",
			coin:"Krone",
			country_handle:"Norway",
			countryName:"Norway",
			iso2:"NO",
			iso3:"NOR",
			number:"578",
			currency_code:"NOK",
			graphic:"",
			symbol:"kr",
			symbolb:"&#107;&#114;",
			ariala:"kr",
			arial:"&#107;&#114;",
			decimal:"107, 114",
			hex:"6b, 72",
			comment:""
		},{
			country:"Oman Rial",
			coin:"Rial",
			country_handle:"Oman",
			countryName:"Oman",
			iso2:"OM",
			iso3:"OMN",
			number:"512",
			currency_code:"OMR",
			graphic:"",
			symbol:"?",
			symbolb:"&#65020;",
			ariala:"?",
			arial:"&#65020;",
			decimal:"65020",
			hex:"fdfc",
			comment:""
		},{
			country:"Pakistan Rupee",
			coin:"Rupee",
			country_handle:"Pakistan",
			countryName:"Pakistan",
			iso2:"PK",
			iso3:"PAK",
			number:"586",
			currency_code:"PKR",
			graphic:"",
			symbol:"?",
			symbolb:"&#8360;",
			ariala:"?",
			arial:"&#8360;",
			decimal:"8360",
			hex:"20a8",
			comment:""
		},{
			country:"Panama Balboa",
			coin:"Balboa",
			country_handle:"Panama",
			countryName:"Panama",
			iso2:"PA",
			iso3:"PAN",
			number:"591",
			currency_code:"PAB",
			graphic:"",
			symbol:"B/.",
			symbolb:"&#66;&#47;&#46;",
			ariala:"B/.",
			arial:"&#66;&#47;&#46;",
			decimal:"66, 47, 46",
			hex:"42, 2f, 2e",
			comment:""
		},{
			country:"Paraguay Guarani",
			coin:"Guarani",
			country_handle:"Paraguay",
			countryName:"Paraguay",
			iso2:"PY",
			iso3:"PRY",
			number:"600",
			currency_code:"PYG",
			graphic:"",
			symbol:"Gs",
			symbolb:"&#71;&#115;",
			ariala:"Gs",
			arial:"&#71;&#115;",
			decimal:"71, 115",
			hex:"47, 73",
			comment:""
		},{
			country:"Peru Sol",
			coin:"Sol",
			country_handle:"Peru",
			countryName:"Peru",
			iso2:"PE",
			iso3:"PER",
			number:"604",
			currency_code:"PEN",
			graphic:"",
			symbol:"S/.",
			symbolb:"&#83;&#47;&#46;",
			ariala:"S/.",
			arial:"&#83;&#47;&#46;",
			decimal:"83, 47, 46",
			hex:"53, 2f, 2e",
			comment:"info"
		},{
			country:"Philippines Peso",
			coin:"Peso",
			country_handle:"Philippines",
			countryName:"Philippines",
			iso2:"PH",
			iso3:"PHL",
			number:"608",
			currency_code:"PHP",
			graphic:"",
			symbol:"?",
			symbolb:"&#8369;",
			ariala:"?",
			arial:"&#8369;",
			decimal:"8369",
			hex:"20b1",
			comment:""
		},{
			country:"Poland Zloty",
			coin:"Zloty",
			country_handle:"Poland",
			countryName:"Poland",
			iso2:"PL",
			iso3:"POL",
			number:"616",
			currency_code:"PLN",
			graphic:"",
			symbol:"zl",
			symbolb:"&#122;&#322;",
			ariala:"zl",
			arial:"&#122;&#322;",
			decimal:"122, 322",
			hex:"7a, 142",
			comment:""
		},{
			country:"Qatar Riyal",
			coin:"Riyal",
			country_handle:"Qatar",
			countryName:"Qatar",
			iso2:"QA",
			iso3:"QAT",
			number:"634",
			currency_code:"QAR",
			graphic:"",
			symbol:"?",
			symbolb:"&#65020;",
			ariala:"?",
			arial:"&#65020;",
			decimal:"65020",
			hex:"fdfc",
			comment:""
		},{
			country:"Romania New Leu",
			coin:"Leu",
			country_handle:"Romania New",
			countryName:"Romania",
			iso2:"RO",
			iso3:"ROU",
			number:"642",
			currency_code:"RON",
			graphic:"",
			symbol:"lei",
			symbolb:"&#108;&#101;&#105;",
			ariala:"lei",
			arial:"&#108;&#101;&#105;",
			decimal:"108, 101, 105",
			hex:"6c, 65, 69",
			comment:""
		},{
			country:"Russia Ruble",
			coin:"Ruble",
			country_handle:"Russia",
			countryName:"Russian Federation",
			iso2:"RU",
			iso3:"RUS",
			number:"643",
			currency_code:"RUB",
			graphic:"",
			symbol:"???",
			symbolb:"&#1088;&#1091;&#1073;",
			ariala:"???",
			arial:"&#1088;&#1091;&#1073;",
			decimal:"1088, 1091, 1073",
			hex:"440, 443, 431",
			comment:"info"
		},{
			country:"Saint Helena Pound",
			coin:"Pound",
			country_handle:"Saint Helena",
			countryName:"Saint Helena",
			iso2:"SH",
			iso3:"SHN",
			number:"654",
			currency_code:"SHP",
			graphic:"",
			symbol:"�",
			symbolb:"&#163;",
			ariala:"�",
			arial:"&#163;",
			decimal:"163",
			hex:"a3",
			comment:""
		},{
			country:"Saudi Arabia Riyal",
			coin:"Riyal",
			country_handle:"Saudi Arabia",
			countryName:"Saudi Arabia",
			iso2:"SA",
			iso3:"SAU",
			number:"682",
			currency_code:"SAR",
			graphic:"",
			symbol:"?",
			symbolb:"&#65020;",
			ariala:"?",
			arial:"&#65020;",
			decimal:"65020",
			hex:"fdfc",
			comment:""
		},{
			country:"Serbia Dinar",
			coin:"Dinar",
			country_handle:"Serbia",
			countryName:"Serbia",
			iso2:"RS",
			iso3:"SRB",
			number:"688",
			currency_code:"RSD",
			graphic:"",
			symbol:"???.",
			symbolb:"&#1044;&#1080;&#1085;&#46;",
			ariala:"???.",
			arial:"&#1044;&#1080;&#1085;&#46;",
			decimal:"1044, 1080, 1085, 46",
			hex:"414, 438, 43d, 2e",
			comment:""
		},{
			country:"Seychelles Rupee",
			coin:"Rupee",
			country_handle:"Seychelles",
			countryName:"Seychelles",
			iso2:"SC",
			iso3:"SYC",
			number:"690",
			currency_code:"SCR",
			graphic:"",
			symbol:"?",
			symbolb:"&#8360;",
			ariala:"?",
			arial:"&#8360;",
			decimal:"8360",
			hex:"20a8",
			comment:""
		},{
			country:"Singapore Dollar",
			coin:"Dollar",
			country_handle:"Singapore",
			countryName:"Singapore",
			iso2:"SG",
			iso3:"SGP",
			number:"702",
			currency_code:"SGD",
			graphic:"",
			symbol:"$",
			symbolb:"&#36;",
			ariala:"$",
			arial:"&#36;",
			decimal:"36",
			hex:"24",
			comment:""
		},{
			country:"Solomon Islands Dollar",
			coin:"Dollar",
			country_handle:"Solomon Islands",
			countryName:"Solomon Islands",
			iso2:"SB",
			iso3:"SLB",
			number:"090",
			currency_code:"SBD",
			graphic:"",
			symbol:"$",
			symbolb:"&#36;",
			ariala:"$",
			arial:"&#36;",
			decimal:"36",
			hex:"24",
			comment:""
		},{
			country:"Somalia Shilling",
			coin:"Shilling",
			country_handle:"Somalia",
			countryName:"Somalia",
			iso2:"SO",
			iso3:"SOM",
			number:"706",
			currency_code:"SOS",
			graphic:"",
			symbol:"S",
			symbolb:"&#83;",
			ariala:"S",
			arial:"&#83;",
			decimal:"83",
			hex:"53",
			comment:""
		},{
			country:"South Africa Rand",
			coin:"Rand",
			country_handle:"South Africa",
			countryName:"South Africa",
			iso2:"ZA",
			iso3:"ZAF",
			number:"710",
			currency_code:"ZAR",
			graphic:"",
			symbol:"R",
			symbolb:"&#82;",
			ariala:"R",
			arial:"&#82;",
			decimal:"82",
			hex:"52",
			comment:""
		},{
			country:"Sri Lanka Rupee",
			coin:"Rupee",
			country_handle:"Sri Lanka",
			countryName:"Sri Lanka",
			iso2:"LK",
			iso3:"LKA",
			number:"144",
			currency_code:"LKR",
			graphic:"",
			symbol:"?",
			symbolb:"&#8360;",
			ariala:"?",
			arial:"&#8360;",
			decimal:"8360",
			hex:"20a8",
			comment:""
		},{
			country:"Sweden Krona",
			coin:"Krona",
			country_handle:"Sweden",
			countryName:"Sweden",
			iso2:"SE",
			iso3:"SWE",
			number:"752",
			currency_code:"SEK",
			graphic:"",
			symbol:"kr",
			symbolb:"&#107;&#114;",
			ariala:"kr",
			arial:"&#107;&#114;",
			decimal:"107, 114",
			hex:"6b, 72",
			comment:"info"
		},{
			country:"Switzerland Franc",
			coin:"Franc",
			country_handle:"Switzerland",
			countryName:"Switzerland",
			iso2:"CH",
			iso3:"CHE",
			number:"756",
			currency_code:"CHF",
			graphic:"",
			symbol:"CHF",
			symbolb:"&#67;&#72;&#70;",
			ariala:"CHF",
			arial:"&#67;&#72;&#70;",
			decimal:"67, 72, 70",
			hex:"43, 48, 46",
			comment:""
		},{
			country:"Suriname Dollar",
			coin:"Dollar",
			country_handle:"Suriname",
			countryName:"Suriname *",
			iso2:"SR",
			iso3:"SUR",
			number:"740",
			currency_code:"SRD",
			graphic:"",
			symbol:"$",
			symbolb:"&#36;",
			ariala:"$",
			arial:"&#36;",
			decimal:"36",
			hex:"24",
			comment:""
		},{
			country:"Syria Pound",
			coin:"Pound",
			country_handle:"Syria",
			countryName:"Syria",
			iso2:"SY",
			iso3:"SYR",
			number:"760",
			currency_code:"SYP",
			graphic:"",
			symbol:"�",
			symbolb:"&#163;",
			ariala:"�",
			arial:"&#163;",
			decimal:"163",
			hex:"a3",
			comment:""
		},{
			country:"Taiwan New Dollar",
			coin:"New Dollar",
			country_handle:"Taiwan New",
			countryName:"Taiwan",
			iso2:"TW",
			iso3:"TWN",
			number:"158",
			currency_code:"TWD",
			graphic:"",
			symbol:"NT$",
			symbolb:"&#78;&#84;&#36;",
			ariala:"NT$",
			arial:"&#78;&#84;&#36;",
			decimal:"78, 84, 36",
			hex:"4e, 54, 24",
			comment:"info"
		},{
			country:"Thailand Baht",
			coin:"Baht",
			country_handle:"Thailand",
			countryName:"Thailand",
			iso2:"TH",
			iso3:"THA",
			number:"764",
			currency_code:"THB",
			graphic:"",
			symbol:"?",
			symbolb:"&#3647;",
			ariala:"?",
			arial:"&#3647;",
			decimal:"3647",
			hex:"e3f",
			comment:""
		},{
			country:"Trinidad and Tobago Dollar",
			coin:"Dollar",
			country_handle:"Trinidad and Tobago",
			countryName:"Trinidad and Tobago",
			iso2:"TT",
			iso3:"TTO",
			number:"780",
			currency_code:"TTD",
			graphic:"",
			symbol:"TT$",
			symbolb:"&#84;&#84;&#36;",
			ariala:"TT$",
			arial:"&#84;&#84;&#36;",
			decimal:"84, 84, 36",
			hex:"54, 54, 24",
			comment:""
		},{
			country:"Turkey Lira",
			coin:"Lira",
			country_handle:"Turkey",
			countryName:"Turkey",
			iso2:"TR",
			iso3:"TUR",
			number:"792",
			currency_code:"TRY",
			graphic:"",
			symbol:"",
			symbolb:"",
			ariala:"",
			arial:"",
			decimal:"",
			hex:"",
			comment:"info"
		},{
			country:"Tuvalu Dollar",
			coin:"Dollar",
			country_handle:"Tuvalu",
			countryName:"Tuvalu",
			iso2:"TV",
			iso3:"TUV",
			number:"798",
			currency_code:"TVD",
			graphic:"",
			symbol:"$",
			symbolb:"&#36;",
			ariala:"$",
			arial:"&#36;",
			decimal:"36",
			hex:"24",
			comment:""
		},{
			country:"Ukraine Hryvnia",
			coin:"Hryvnia",
			country_handle:"Ukraine",
			countryName:"Ukraine",
			iso2:"UA",
			iso3:"UKR",
			number:"804",
			currency_code:"UAH",
			graphic:"",
			symbol:"?",
			symbolb:"&#8372;",
			ariala:"?",
			arial:"&#8372;",
			decimal:"8372",
			hex:"20b4",
			comment:""
		},{
			country:"United Kingdom Pound",
			coin:"Pound",
			country_handle:"United Kingdom",
			countryName:"United Kingdom",
			iso2:"GB",
			iso3:"GBR",
			number:"826",
			currency_code:"GBP",
			graphic:"",
			symbol:"�",
			symbolb:"&#163;",
			ariala:"�",
			arial:"&#163;",
			decimal:"163",
			hex:"a3",
			comment:""
		},{
			country:"United States Dollar",
			coin:"Dollar",
			country_handle:"United States",
			countryName:"United States of America",
			iso2:"US",
			iso3:"USA",
			number:"840",
			currency_code:"USD",
			graphic:"",
			symbol:"$",
			symbolb:"&#36;",
			ariala:"$",
			arial:"&#36;",
			decimal:"36",
			hex:"24",
			comment:""
		},{
			country:"Uruguay Peso",
			coin:"Peso",
			country_handle:"Uruguay",
			countryName:"Uruguay",
			iso2:"UY",
			iso3:"URY",
			number:"858",
			currency_code:"UYU",
			graphic:"",
			symbol:"$U",
			symbolb:"&#36;&#85;",
			ariala:"$U",
			arial:"&#36;&#85;",
			decimal:"36, 85",
			hex:"24, 55",
			comment:""
		},{
			country:"Uzbekistan Som",
			coin:"Som",
			country_handle:"Uzbekistan",
			countryName:"Uzbekistan",
			iso2:"UZ",
			iso3:"UZB",
			number:"860",
			currency_code:"UZS",
			graphic:"",
			symbol:"??",
			symbolb:"&#1083;&#1074;",
			ariala:"??",
			arial:"&#1083;&#1074;",
			decimal:"1083, 1074",
			hex:"43b, 432",
			comment:""
		},{
			country:"Venezuela Bolivar",
			coin:"Bolivar",
			country_handle:"Venezuela",
			countryName:"Venezuela",
			iso2:"VE",
			iso3:"VEN",
			number:"862",
			currency_code:"VEF",
			graphic:"",
			symbol:"Bs",
			symbolb:"&#66;&#115;",
			ariala:"Bs",
			arial:"&#66;&#115;",
			decimal:"66, 115",
			hex:"42, 73",
			comment:""
		},{
			country:"Viet Nam Dong",
			coin:"Dong",
			country_handle:"Viet Nam",
			countryName:"Viet Nam",
			iso2:"VN",
			iso3:"VNM",
			number:"704",
			currency_code:"VND",
			graphic:"",
			symbol:"?",
			symbolb:"&#8363;",
			ariala:"?",
			arial:"&#8363;",
			decimal:"8363",
			hex:"20ab",
			comment:""
		},{
			country:"Yemen Rial",
			coin:"Rial",
			country_handle:"Yemen",
			countryName:"Yemen",
			iso2:"YE",
			iso3:"YEM",
			number:"887",
			currency_code:"YER",
			graphic:"",
			symbol:"?",
			symbolb:"&#65020;",
			ariala:"?",
			arial:"&#65020;",
			decimal:"65020",
			hex:"fdfc",
			comment:""
		},{
			country:"Zimbabwe Dollar",
			coin:"Dollar",
			country_handle:"Zimbabwe",
			countryName:"Zimbabwe",
			iso2:"ZW",
			iso3:"ZWE",
			number:"716",
			currency_code:"ZWD",
			graphic:"",
			symbol:"Z$",
			symbolb:"&#90;&#36;",
			ariala:"Z$",
			arial:"&#90;&#36;",
			decimal:"90, 36",
			hex:"5a, 24",
			comment:""
		}

         ]
    },
    currencyConversions2: {
        value: [
            {
                "name": "USDGBP",
                "icon": "assets/images/3x5/gb.svg",
                "webSocket": {},
                "rest": {}
            },
            {
                "name": "USDEUR",
                "icon": "assets/images/3x5/eu.svg",
                "webSocket": {},
                "rest": {}
            },
            {
                "name": "USDCAD",
                "icon": "assets/images/3x5/ca.svg",
                "webSocket": {},
                "rest": {}
            },
            {
                "name": "USDAUD",
                "icon": "assets/images/3x5/au.svg",
                "webSocket": {},
                "rest": {}
            },
            {
                "name": "USDNZD",
                "icon": "assets/images/3x5/nz.svg",
                "webSocket": {},
                "rest": {}
            },
            {
                "name": "USDCHF",
                "icon": "assets/images/3x5/ch.svg",
                "webSocket": {},
                "rest": {}
            },
            {
                "name": "GBPUSD",
                "icon": "assets/images/3x5/us.svg",
                "webSocket": {},
                "rest": {}
            },
            {
                "name": "GBPEUR",
                "icon": "assets/images/3x5/gb.svg",
                "webSocket": {},
                "rest": {}
            },
            {
                "name": "GBPCAD",
                "icon": "assets/images/3x5/ca.svg",
                "webSocket": {},
                "rest": {}
            },
            {
                "name": "GBPAUD",
                "icon": "assets/images/3x5/au.svg",
                "webSocket": {},
                "rest": {}
            },
            {
                "name": "GBPNZD",
                "icon": "assets/images/3x5/nz.svg",
                "webSocket": {},
                "rest": {}
            },
            {
                "name": "GBPCHF",
                "icon": "assets/images/3x5/ch.svg",
                "webSocket": {},
                "rest": {}
            }
        ]

    }

});
