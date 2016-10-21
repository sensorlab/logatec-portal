/*
 * CITI-SENSE sensor reading visualization widget, jQuery plugin
 *
 * Copyright(c) 2014, CITI-SENSE, U-Hopper, Andrei Tamilin
 *
 */
// avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

var intervals = [];

// sensor readings visualization widget
(function($){
    $.fn.extend({
        sensorstatistics: function (settings) {
            var $this = $(this);
            var serviceUrl = 'wfs.php?url=';
            
            function CitisenseSensorWidget(settings){
                // unique id
                var uuid     = new Date().getTime();
                var uri      = serviceUrl + "http://citisense-v2.elasticbeanstalk.com/LastRecord/webproxy/lastrecord/sensorID/";
                var chart = null;

                // default settings    
                var options = {
                    uuid: uuid,
                    uri: uri,
                    id: "",
                    type: "realtime",
                    title: "",
                    subtitle: "",
                    from: null,
                    to: null,
                    min: 0,
                    max: 0,
                    bands: [],
                    async: true,
                    refresh: 0,
                    cache: false,
                    before: function(el, options){                    	
                    },
                    after: function(el, options){
                        // if ($(".next-days", el).length) {
                            // $(".next-days", el).delay(500).toggle("fast");
                        // }
                    },
                    success: function(el, jsonData, options){						
                        displayChart(el, parseWfsResponse(jsonData));
                    },
                    fail: function(el, options){
                        el.html('<div class="error"><span>'+options.msgError+'</span></div>');
                    }
                };
                
                var parseWfsResponse = function(wfsJson) {
                    var measurements = [];
                    
                    var observations = [];

                    if (wfsJson.FeatureCollection.member) {
                        if (wfsJson.FeatureCollection.member instanceof Array) {
                            observations = wfsJson.FeatureCollection.member;
                        }
                        else {
                           observations.push(wfsJson.FeatureCollection.member); 
                        }
                    }
                    
                    for (var i=0,len=observations.length; i<len;i++) {
                        var observation = observations[i];
                        if (observation.Observation.contains.Measurement) {
                            measurements.push(observation.Observation.contains.Measurement);
                        }
                    }
                    return measurements;
                };
                
                // The function getSensorData excutes an Ajax request to get sensor data
                var getSensorData = function(el){
					var urlParams = "";
					
					switch (options.type) {
						case 'realtime': urlParams = "action=lastrecord&id=" + options.id; break;
						case 'historic': urlParams = "action=allmeasurements&id=" + options.id; break;
					}
                    
                    if (options.from) {
                        var ts = new Date(options.from);
                        urlParams += ("&from=" + ts.getTime()/1000);
                    }
                    
                    if (options.to) {
                        var ts = new Date(options.to);
                        urlParams += ("&to=" + ts.getTime()/1000);
                    }
					
					var url = options.uri + options.id + '.jsn';

                    // call before method
                    options.before(el);

                    $.ajax({
                        url : url,
                        type: 'GET',
                        dataType: 'json',
                        async: options.async,
                        // beforeSend : options.before(el, options)
                    }).done(function(response){
                        options.success(el, response);
                    }).fail(function(options) {
                        options.fail(el);
                    });
                };
                /** 
                 * This function display the chart
                 * @param el a jQuery object
                 * @param chartData a JSON object contains the chart data
                 */
                var displayChart =  function(el, measurements) {
					if (chart == null) {
						console.log('Creating new chart for ' + options.type);

						var chartOptions = $.extend(true, {chart: {renderTo: el[0]}}, getChartByType(options.type, measurements));
						chart = new Highcharts.Chart(chartOptions);
					}
					else {
						console.log('Reusing existing chart ' + options.type);
                        if (measurements.length > 0)
                            chart.series[0].setData([Math.round(Number(measurements[0].value))]);
					}
                };

				var getChartByType = function(type, measurements){
					
					var chartOptions = {
			            credits: {
			                enabled: false
			            },
			            exporting: {
			                enabled: false
			            },
			            title: {
							text: options.title ? options.title : false
			            },
			            subtitle: {
			                text: options.subtitle ? options.subtitle : false
			            },
			            legend: {
			                layout: 'vertical',
			                align: 'center',
			                verticalAlign: 'bottom',
			                borderWidth: 0,
			                enabled: false
			            },
				        // plotOptions: {
				        	// series: {
				        		// animation: false
				        	// }
				        // },
			            series: []
					};
					switch (type) {
						case 'realtime' : {
                            var measurement = measurements.length > 0 ? measurements[0] : {};
                            var data = [];
                            if (measurement.value) {
                                data.push(Math.round(Number(measurement.value)));
                            }
							chartOptions = $.extend(true, chartOptions, {
                                chart: {
                                    type: 'gauge',
                                    plotBackgroundColor: null,
                                    plotBackgroundImage: null,
                                    plotBorderWidth: 0,
                                    plotShadow: false
                                },
                                pane: {
                                    startAngle: -150,
                                    endAngle: 150
                                },

                                // the value axis
                                yAxis: {
                                    min: options.min,
                                    max: options.max,

                                    minorTickInterval: 'auto',
                                    minorTickWidth: 1,
                                    minorTickLength: 10,
                                    minorTickPosition: 'inside',
                                    minorTickColor: '#666',

                                    tickPixelInterval: 30,
                                    tickWidth: 2,
                                    tickPosition: 'inside',
                                    tickLength: 10,
                                    tickColor: '#666',
                                    labels: {
                                        step: 2,
                                        rotation: 'auto'
                                    },
                                    title: {
                                        text: measurement.uom ? measurement.uom : ""
                                    },
                                    plotBands: options.bands
                                },

                                series: [{
                                    name: options.title,
                                    data: data,
                                    tooltip: {
                                        valueSuffix: ' ' + (measurement.uom ? measurement.uom : "")
                                    }
                                }]
					        });
                            
							break;
						}
						case 'historic' : {
                            var measurement = measurements.length > 0 ? measurements[0] : {};
                            var data = [];
                            
                            for (var i=0, len=measurements.length; i<len; i++) {
                                var date = new Date(measurements[i].measuretime);
                                var value = Math.round(Number(measurements[i].value));
                                data.push([date.getTime(), value]);
                            }
							chartOptions = $.extend(true, chartOptions, {
								legend: {
									enabled: false
								},
					            xAxis: {
					                type: 'measuretime'
								},
								yAxis: {
									title: {
										text: 'Measurements'
									},
									plotLines: [{
										value: 0,
										width: 1,
										color: '#808080'
									}],
									min: options.min,
//									allowDecimals: false
                                    plotBands: options.bands
								},
					            tooltip: {
					                // valueSuffix: ' participant(s)'
					            },
								tooltip: {
						    	    pointFormat: '{point.y}',
						        },
					            series: [{
//					            	type: 'column',
					            	name: 'Measurement',
									data: data
					            }]
					        });
                            
							break;
                        }
					}
					return chartOptions;
				};
                /**
                 * setDefaults function set the default settings
                 * @param settings JSON object
                 */                                
                var setDefaults = function(settings) {
                    $.extend(options, settings);
                    return this;
                };
                // set dafault settings
                setDefaults(settings || {});
                
				$this.addClass('civicflow-stat-widget');
                getSensorData($this);
                if (options.refresh > 0)
                	var interval = setInterval(function(){getSensorData($this);}, options.refresh);
                	intervals.push(interval);
            };
            // initialisation 
            return this.each(function() { 
				if (!$("link[href='css/jquery.sensor.statistics.css']").length)
					$("<link href='css/jquery.sensor.statistics.css' rel='stylesheet'>").appendTo("head");
           		
				if (!$("script[src='js/highcharts-all.js']").length)           		
					$("<script src='js/highcharts-all.js'>").appendTo("head");

                new CitisenseSensorWidget(settings);
                return this;
            });
        }        
    });
})(jQuery);
