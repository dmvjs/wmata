/*global window: true*/
var WMATA = {
    ll: [],
    currentLines: [],
    stations: {
        "Stations": [
            {
                "Code": "A03",
                "Lat": 38.9095980575,
                "Lon": -77.0434143597,
                "Name": "Dupont Circle"
            },
            {
                "Code": "A02",
                "Lat": 38.9032019462,
                "Lon": -77.0397008272,
                "Name": "Farragut North"
            },
            {
                "Code": "A01",
                "Lat": 38.8983144732,
                "Lon": -77.0280779971,
                "Name": "Metro Center",
                "StationTogether1": "C01"
            },
            {
                "Code": "A07",
                "Lat": 38.9488514351,
                "Lon": -77.0795873255,
                "Name": "Tenleytown"
            },
            {
                "Code": "A06",
                "Lat": 38.9432652883,
                "Lon": -77.0629861805,
                "Name": "Van Ness UDC"
            },
            {
                "Code": "A05",
                "Lat": 38.9347628908,
                "Lon": -77.0580425191,
                "Name": "Cleveland Park"
            },
            {
                "Code": "A04",
                "Lat": 38.9250851371,
                "Lon": -77.0524180207,
                "Name": "Woodley Park Zoo"
            },
            {
                "Code": "B02",
                "Lat": 38.8960903176,
                "Lon": -77.0166389566,
                "Name": "Judiciary Square"
            },
            {
                "Code": "C10",
                "Lat": 38.8534163859,
                "Lon": -77.0440422943,
                "Name": "National Arpt"
            },
            {
                "Code": "E10",
                "Lat": 39.0111458605,
                "Lon": -76.9110575731,
                "Name": "Greenbelt"
            },
            {
                "Code": "D08",
                "Lat": 38.8867090898,
                "Lon": -76.9770889014,
                "Name": "Stadium Armory"
            },
            {
                "Code": "B08",
                "Lat": 38.9939493747,
                "Lon": -77.0310178268,
                "Name": "Silver Spring"
            },
            {
                "Code": "B09",
                "Lat": 39.0149542752,
                "Lon": -77.0429165548,
                "Name": "Forest Glen"
            },
            {
                "Code": "D09",
                "Lat": 38.899191223,
                "Lon": -76.9467477336,
                "Name": "Minnesota Avenue"
            },
            {
                "Code": "D06",
                "Lat": 38.8846222608,
                "Lon": -76.9960011267,
                "Name": "Eastern Market"
            },
            {
                "Code": "D07",
                "Lat": 38.8812632736,
                "Lon": -76.9854953196,
                "Name": "Potomac Avenue"
            },
            {
                "Code": "D04",
                "Lat": 38.8850723551,
                "Lon": -77.0158682169,
                "Name": "Federal Center SW"
            },
            {
                "Code": "D05",
                "Lat": 38.8850625009,
                "Lon": -77.0051394199,
                "Name": "Capitol South"
            },
            {
                "Code": "D02",
                "Lat": 38.888018702,
                "Lon": -77.0280662342,
                "Name": "Smithsonian"
            },
            {
                "Code": "D03",
                "Lat": 38.8848377279,
                "Lon": -77.021908484,
                "Name": "L'Enfant Plaza",
                "StationTogether1": "F03"
            },
            {
                "Code": "B01",
                "Lat": 38.8983168097,
                "Lon": -77.0219153904,
                "Name": "Gallery Place",
                "StationTogether1": "F01"
            },
            {
                "Code": "D01",
                "Lat": 38.8931808718,
                "Lon": -77.0281319984,
                "Name": "Federal Triangle"
            },
            {
                "Code": "B03",
                "Lat": 38.8977660392,
                "Lon": -77.0074142921,
                "Name": "Union Station"
            },
            {
                "Code": "B04",
                "Lat": 38.9210596891,
                "Lon": -76.9959369166,
                "Name": "Rhode Island Avenue"
            },
            {
                "Code": "B05",
                "Lat": 38.9332109913,
                "Lon": -76.9945342851,
                "Name": "Brookland"
            },
            {
                "Code": "B06",
                "Lat": 38.9518467675,
                "Lon": -77.0022030768,
                "Name": "Fort Totten",
                "StationTogether1": "E06"
            },
            {
                "Code": "B07",
                "Lat": 38.976078531,
                "Lon": -77.0181766987,
                "Name": "Takoma"
            },
            {
                "Code": "K03",
                "Lat": 38.8833661518,
                "Lon": -77.1029772942,
                "Name": "Virginia Square"
            },
            {
                "Code": "K05",
                "Lat": 38.8859531663,
                "Lon": -77.1568830199,
                "Name": "E Falls Church"
            },
            {
                "Code": "K04",
                "Lat": 38.8821828738,
                "Lon": -77.113168835,
                "Name": "Ballston"
            },
            {
                "Code": "F11",
                "Lat": 38.8264463483,
                "Lon": -76.9114642177,
                "Name": "Branch Avenue"
            },
            {
                "Code": "F10",
                "Lat": 38.8439645544,
                "Lon": -76.9318701589,
                "Name": "Suitland"
            },
            {
                "Code": "D12",
                "Lat": 38.9335062344,
                "Lon": -76.8911979676,
                "Name": "Landover"
            },
            {
                "Code": "G05",
                "Lat": 38.9050688072,
                "Lon": -76.8420375202,
                "Name": "Largo Town Center"
            },
            {
                "Code": "G04",
                "Lat": 38.8938349282,
                "Lon": -76.8680747681,
                "Name": "Morgan Blvd"
            },
            {
                "Code": "K01",
                "Lat": 38.8901755312,
                "Lon": -77.087131231,
                "Name": "Court House"
            },
            {
                "Code": "G01",
                "Lat": 38.890975676,
                "Lon": -76.9383648681,
                "Name": "Benning Road"
            },
            {
                "Code": "K02",
                "Lat": 38.886704839,
                "Lon": -77.0953940983,
                "Name": "Clarendon"
            },
            {
                "Code": "G03",
                "Lat": 38.8867478168,
                "Lon": -76.89410791,
                "Name": "Addison Road"
            },
            {
                "Code": "G02",
                "Lat": 38.8894658568,
                "Lon": -76.9118081145,
                "Name": "Capitol Heights"
            },
            {
                "Code": "K07",
                "Lat": 38.8836251359,
                "Lon": -77.2271606721,
                "Name": "Dunn Loring"
            },
            {
                "Code": "K06",
                "Lat": 38.900780551,
                "Lon": -77.1890948225,
                "Name": "W Falls Church"
            },
            {
                "Code": "K08",
                "Lat": 38.8776011238,
                "Lon": -77.2726222569,
                "Name": "Vienna"
            },
            {
                "Code": "A13",
                "Lat": 39.0624676517,
                "Lon": -77.1208179517,
                "Name": "Twinbrook"
            },
            {
                "Code": "A12",
                "Lat": 39.0481513573,
                "Lon": -77.112829859,
                "Name": "White Flint"
            },
            {
                "Code": "A11",
                "Lat": 39.02926895,
                "Lon": -77.10384972,
                "Name": "Grosvenor"
            },
            {
                "Code": "A10",
                "Lat": 39.0000564843,
                "Lon": -77.0969522905,
                "Name": "Medical Center"
            },
            {
                "Code": "C15",
                "Lat": 38.7939158529,
                "Lon": -77.0752057891,
                "Name": "Huntington"
            },
            {
                "Code": "C14",
                "Lat": 38.8004254497,
                "Lon": -77.0708743893,
                "Name": "Eisenhower Avenue"
            },
            {
                "Code": "A15",
                "Lat": 39.1199273249,
                "Lon": -77.1646273343,
                "Name": "Shady Grove"
            },
            {
                "Code": "A14",
                "Lat": 39.0843216075,
                "Lon": -77.1461253392,
                "Name": "Rockville"
            },
            {
                "Code": "B35",
                "Lat": 38.9070162121,
                "Lon": -77.0030204472,
                "Name": "New York Avenue"
            },
            {
                "Code": "C07",
                "Lat": 38.8694627012,
                "Lon": -77.0537156734,
                "Name": "Pentagon"
            },
            {
                "Code": "C09",
                "Lat": 38.8579043204,
                "Lon": -77.0502898097,
                "Name": "Crystal City"
            },
            {
                "Code": "C08",
                "Lat": 38.8618823867,
                "Lon": -77.0595389215,
                "Name": "Pentagon City"
            },
            {
                "Code": "E08",
                "Lat": 38.9653854458,
                "Lon": -76.9558815078,
                "Name": "Prince Georges Plaza"
            },
            {
                "Code": "E07",
                "Lat": 38.9550401707,
                "Lon": -76.9695766751,
                "Name": "West Hyattsville"
            },
            {
                "Code": "E06",
                "Lat": 38.9518467675,
                "Lon": -77.0022030768,
                "Name": "Fort Totten",
                "StationTogether1": "B06"
            },
            {
                "Code": "E05",
                "Lat": 38.9374346301,
                "Lon": -77.023460904,
                "Name": "Georgia Avenue"
            },
            {
                "Code": "E04",
                "Lat": 38.9278379675,
                "Lon": -77.0325521177,
                "Name": "Columbia Heights"
            },
            {
                "Code": "E03",
                "Lat": 38.9170023992,
                "Lon": -77.0274958929,
                "Name": "U Street"
            },
            {
                "Code": "C01",
                "Lat": 38.8983144732,
                "Lon": -77.0280779971,
                "Name": "Metro Center",
                "StationTogether1": "A01"
            },
            {
                "Code": "E01",
                "Lat": 38.9064368149,
                "Lon": -77.0219143803,
                "Name": "Mt Vernon Sq"
            },
            {
                "Code": "C03",
                "Lat": 38.9013128941,
                "Lon": -77.0406954151,
                "Name": "Farragut West"
            },
            {
                "Code": "C02",
                "Lat": 38.9013327968,
                "Lon": -77.0336341721,
                "Name": "McPherson Square"
            },
            {
                "Code": "C05",
                "Lat": 38.8959790962,
                "Lon": -77.0709086853,
                "Name": "Rosslyn"
            },
            {
                "Code": "C04",
                "Lat": 38.9006980092,
                "Lon": -77.050277739,
                "Name": "Foggy Bottom"
            },
            {
                "Code": "E02",
                "Lat": 38.9134768711,
                "Lon": -77.0219117007,
                "Name": "Shaw"
            },
            {
                "Code": "C06",
                "Lat": 38.8846868585,
                "Lon": -77.0628101291,
                "Name": "Arlington Cemetery"
            },
            {
                "Code": "E09",
                "Lat": 38.9786336339,
                "Lon": -76.9281249818,
                "Name": "College Park"
            },
            {
                "Code": "J03",
                "Lat": 38.7665218926,
                "Lon": -77.1679701804,
                "Name": "Franconia-Springf'ld"
            },
            {
                "Code": "C13",
                "Lat": 38.8065861172,
                "Lon": -77.0608112085,
                "Name": "King Street"
            },
            {
                "Code": "C12",
                "Lat": 38.8141436672,
                "Lon": -77.053667574,
                "Name": "Braddock Road"
            },
            {
                "Code": "F08",
                "Lat": 38.8410857803,
                "Lon": -76.9750541388,
                "Name": "Southern Ave"
            },
            {
                "Code": "F09",
                "Lat": 38.8513013835,
                "Lon": -76.9562627094,
                "Name": "Naylor Road"
            },
            {
                "Code": "F04",
                "Lat": 38.8764618668,
                "Lon": -77.0175052088,
                "Name": "Waterfront"
            },
            {
                "Code": "F05",
                "Lat": 38.8764810849,
                "Lon": -77.0050856513,
                "Name": "Navy Yard"
            },
            {
                "Code": "F06",
                "Lat": 38.8629631168,
                "Lon": -76.9953707387,
                "Name": "Anacostia"
            },
            {
                "Code": "F07",
                "Lat": 38.8456577028,
                "Lon": -76.9885119326,
                "Name": "Congress Height"
            },
            {
                "Code": "J02",
                "Lat": 38.799307672,
                "Lon": -77.1291115237,
                "Name": "Van Dorn St"
            },
            {
                "Code": "F01",
                "Lat": 38.8983168097,
                "Lon": -77.0219153904,
                "Name": "Gallery Place",
                "StationTogether1": "B01"
            },
            {
                "Code": "F02",
                "Lat": 38.8936652235,
                "Lon": -77.0219143879,
                "Name": "Archives"
            },
            {
                "Code": "F03",
                "Lat": 38.8848377279,
                "Lon": -77.021908484,
                "Name": "L'Enfant Plaza",
                "StationTogether1": "D03"
            },
            {
                "Code": "B10",
                "Lat": 39.0375271436,
                "Lon": -77.0501070535,
                "Name": "Wheaton"
            },
            {
                "Code": "B11",
                "Lat": 39.0617837655,
                "Lon": -77.0535573593,
                "Name": "Glenmont"
            },
            {
                "Code": "A09",
                "Lat": 38.9843936603,
                "Lon": -77.0941291922,
                "Name": "Bethesda"
            },
            {
                "Code": "A08",
                "Lat": 38.9594838736,
                "Lon": -77.084995805,
                "Name": "Friendship Heights"
            },
            {
                "Code": "D13",
                "Lat": 38.9477848558,
                "Lon": -76.8718412865,
                "Name": "New Carrollton"
            },
            {
                "Code": "D10",
                "Lat": 38.9081784965,
                "Lon": -76.935256783,
                "Name": "Deanwood"
            },
            {
                "Code": "D11",
                "Lat": 38.9166318546,
                "Lon": -76.916628044,
                "Name": "Cheverly"
            }
        ]
    },

    lines: {
        "Lines": [
            {
                "DisplayName": "Red",
                "EndStationCode": "B11",
                "InternalDestination1": "A11",
                "InternalDestination2": "B08",
                "LineCode": "RD",
                "StartStationCode": "A15"
            },
            {
                "DisplayName": "Orange",
                "EndStationCode": "D13",
                "InternalDestination1": "",
                "InternalDestination2": "",
                "LineCode": "OR",
                "StartStationCode": "K08"
            },
            {
                "DisplayName": "Green",
                "EndStationCode": "E10",
                "InternalDestination1": "",
                "InternalDestination2": "",
                "LineCode": "GR",
                "StartStationCode": "F11"
            },
            {
                "DisplayName": "Yellow",
                "EndStationCode": "E06",
                "InternalDestination1": "E01",
                "InternalDestination2": "",
                "LineCode": "YL",
                "StartStationCode": "C15"
            },
            {
                "DisplayName": "Blue",
                "EndStationCode": "G05",
                "InternalDestination1": "",
                "InternalDestination2": "",
                "LineCode": "BL",
                "StartStationCode": "J03"
            }
        ]
    },

    getPosition: function () {
        'use strict';
        function showPosition(position) {
            WMATA.ll = [position.coords.latitude, position.coords.longitude];
            if (WMATA.trains === undefined) {
                WMATA.computeNearestStation();
                WMATA.gotLines();
            } else {
                WMATA.getTrains();
            }
        }
        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(showPosition, function () {
                alert("This device requires geolocation");
            });
        } else {
            window.alert("This device does not allow geolocation");
        }
    },

    /*getStations: function () {
        'use strict';
        WMATA.pureAjax('http://api.wmata.com/Rail.svc/json/JStations?api_key=' + WMATA.key + '&callback=WMATA.gotStations');
    },*/

    gotStations: function () {
        'use strict';
        WMATA.computeNearestStation();
        WMATA.gotLines();
    },

    getTrains: function () {
        'use strict';
        WMATA.pureAjax('http://api.wmata.com/StationPrediction.svc/json/GetPrediction/' + WMATA.closestStation + '?api_key=' + WMATA.key + '&callback=WMATA.gotTrains');
    },

    gotTrains: function (trains) {
        'use strict';
        WMATA.trains = trains;
        WMATA.displayResults(trains);
    },

    /*getLines: function () {
        //get lines for this/these rails
        'use strict';
        WMATA.pureAjax('http://api.wmata.com/Rail.svc/json/JLines?api_key=' + WMATA.key + '&callback=WMATA.gotLines');
    },*/

    gotLines: function (/*lines*/) {
        'use strict';
        //WMATA.lines = lines;
        //this gets rid of 1 request per load:
        WMATA.getTrains();
        if (WMATA.alerts === undefined) {
            WMATA.getAlerts();
        }
    },

    getAlerts: function () {
        'use strict';
        WMATA.pureAjax('http://api.wmata.com/Incidents.svc/json/Incidents?api_key=' + WMATA.key + '&callback=WMATA.gotAlerts');
    },

    gotAlerts: function (alerts) {
        'use strict';
        WMATA.alerts = alerts;
        WMATA.displayAlerts();
    },

    displayAlerts: function () {
        'use strict';
        var alerts = window.document.getElementById('alerts'),
            incident,
            i;
        if (window.document.getElementsByClassName('alert').length > 0) {
            alerts.innerHTML = '';
        }
        for (i = 0; i < WMATA.alerts.Incidents.length; i += 1) {
            incident = window.document.createElement('p');
            incident.appendChild(window.document.createTextNode(WMATA.alerts.Incidents[i].Description));
            incident.className = 'alert alert' + WMATA.alerts.Incidents[i].LinesAffected.substr(0, 2);
            alerts.appendChild(incident);
        }
    },

    computeNearestStation: function () {
        'use strict';
        var closest = [-1, 20000],
            station = window.document.getElementById('station'),
            lat1,
            lon1,
            lat2,
            lon2,
            R = 6371, //km
            dLat,
            dLon,
            a,
            c,
            d,
            i;
        for (i = 0; i < WMATA.stations.Stations.length; i += 1) {
            //haversine implementation
            lat1 = WMATA.ll[0];
            lat2 = WMATA.stations.Stations[i].Lat;
            lon1 = WMATA.ll[1];
            lon2 = WMATA.stations.Stations[i].Lon;

            dLat = (lat2 - lat1) * Math.PI / 180;
            dLon = (lon2 - lon1) * Math.PI / 180;
            lat1 = lat1 * Math.PI / 180;
            lat2 = lat2 * Math.PI / 180;

            a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
            c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            d = R * c;

            if (d < closest[1]) {
                closest = [i, d];
            }
        }

        WMATA.closestStation = WMATA.stations.Stations[closest[0]].Code;
        window.document.title = 'WMATA ' + WMATA.stations.Stations[closest[0]].Name + ' Station';
        station.innerText = WMATA.stations.Stations[closest[0]].Name;
        station.textContent = WMATA.stations.Stations[closest[0]].Name;

        if ((WMATA.stations.Stations[closest[0]].StationTogether1 !== "") && (WMATA.stations.Stations[closest[0]].StationTogether1 !== undefined)) {
            WMATA.closestStation = WMATA.closestStation + ',' + WMATA.stations.Stations[closest[0]].StationTogether1;
        }
    },

    displayResults: function (data) {
        'use strict';
        var schedule = window.document.getElementById('schedule'),
            results = ['Line', 'DestinationName', 'Min'],
            table1 = window.document.createElement('table'),
            thead1 = window.document.createElement('thead'),
            tbody1 = window.document.createElement('tbody'),
            headHTML = '<tr><th class="th1">LINE</th>' +
                '<th class="th2">DESTINATION</th>' +
                '<th class="th3">MIN</th></tr>',
            row,
            cell,
            i,
            j,
            k,
            startCodes = [],
            fromStart;
        if (window.document.getElementById('table1') !== null) {
            schedule.removeChild(window.document.getElementById('table1'));
        }

        WMATA.trains = data;
        thead1.id = 'thead1';
        thead1.innerHTML = headHTML;
        table1.id = "table1";
        table1.appendChild(thead1);

        for (i = 0; i < data.Trains.length; i += 1) {
            for (k = 0; k < WMATA.lines.Lines.length; k += 1) {
                if (WMATA.lines.Lines[k].LineCode === WMATA.trains.Trains[i].Line) {
                    if (startCodes.indexOf(WMATA.lines.Lines[k].StartStationCode) === -1) {
                        startCodes.push(WMATA.lines.Lines[k].StartStationCode);
                    }
                }
            }
            fromStart = startCodes.indexOf(WMATA.trains.Trains[i].DestinationCode) === -1;
            row = window.document.createElement('tr');
            for (j = 0; j < results.length; j += 1) {
                cell = window.document.createElement('td');
                cell.appendChild(window.document.createTextNode(data.Trains[i][results[j]].toUpperCase()));
                cell.className = 'cell' + (j + 1);
                row.appendChild(cell);
            }
            if (data.Trains[i].DestinationCode !== null) {
                tbody1.appendChild(row);
            }
        }
        table1.appendChild(tbody1);
        schedule.appendChild(table1);

        WMATA.rainbowify();
        window.setTimeout(function () {WMATA.getPosition();}, 15000);

    },

    rainbowify: function () {
        'use strict';
        var i = 0, k = 0,
            table1 = window.document.getElementById('table1'),
            lineCells = window.document.getElementsByClassName('cell1'),
            row;

        for (i = 1; i < table1.rows.length; i += 1) {
            row = table1.rows[i];
            row.className = "row " + 'row' + i;
        }

        for (k = 0; k < lineCells.length; k += 1) {
            if (lineCells[k].innerText !== undefined) {
                lineCells[k].id = lineCells[k].innerText;
            } else {
                lineCells[k].id = lineCells[k].textContent;
            }
        }
        if (WMATA.rainbow === undefined) {
            /mobile/i.test(navigator.userAgent) && setTimeout(function () {
                window.scrollTo(0, 1);
            }, 200);
            WMATA.rainbow = 'unicorn';
        }
    },

    pureAjax: function (url) {
        'use strict';
        var script = window.document.createElement('script');
        script.src = url;
        script.async = true;
        window.document.body.appendChild(script);
    },

    key: "e8apbxn8jucqbk7bvv2wn2qm"
};
(function () {
    'use strict';
    WMATA.getPosition();
}());