var library = (function() {
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){
			var d = new Date();
			var e = String(Math.floor(d.getTime() / 1000));
			return e;
		},
		UnixMillisecond: function(){
			var d = new Date();
			var e = String(d.getTime());
			return e;
		}
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){
						var d = new Date();
						var e = String(d.toLocaleTimeString());
						return e;
					},
	   	    WithOutSeconds: function() {
						 var d = new Date();
						 var e = String(d.toLocaleTimeString().replace(/:\d{2}\s/,' '));
						 return e;
					}
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){
					var d = new Date();
					var e = String(d.getFullYear());
					var f = String(d.getMonth() + 1);
					var g = String(d.getDate());
					var h = f + '/' + g + '/' + e;
					return h;
				},
			Name: function(){
					var d = new Date();
					var e = String(d.getFullYear());
					var f = d.getMonth() + 1;
					var g = String(d.getDate());
					var month = '';
					
					switch(f){
						case 1:
							month = 'January';
							break;
						case 2:
							month = 'February';
							break;
						case 3:
							month = 'March';
							break;
						case 4: 
							month = 'April';
							break;
						case 5:
							month = 'May';
							break;
						case 6:
							month = 'June';
							break;
						case 7:
							month = 'July';
							break;
						case 8:
							month = 'August';
							break;
						case 9:
							month = 'September';
							break;
						case 10:
							month = 'October';
							break;
						case 11:
							month = 'November';
							break;
						case 12:
							month = 'December';
							break;	
						default:
							break;
					}
					var h = month + ' ' + g + ', ' + e;
					return h;
			}
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){
				var d = new Date();
				var e = String(d.getSeconds());
				return e;
			},
			DblDigit: function(){
				var d = new Date();
				var e = String(d.getSeconds());

				if(e.length < 2){
					e = '0' + e;
				}

				return e;
			}
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){
				var d = new Date();
				var e = String(d.getMinutes());
				return e;
			},
			DblDigit: function(){
				var d = new Date();
				var e = String(d.getMinutes());

				if(e.length < 2){
					e = '0' + e;
				}

				return e;
			}
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {
						var d = new Date();
						var e = String(d.getHours());
						return e;
			},
			TwelveHour: function() {
				var d = new Date();
						var e = d.getHours();
						var f = '';

						switch(e){
							case 0:
								f = '12';
								break;
							case 1:
								f = '1';
								break;
							case 2:
								f = '2';
								break;
							case 3:
								f = '3';
								break;
							case 4:
								f = '4';
								break;
							case 5:
								f = '5';
								break;
							case 6:
								f = '6';
								break;
							case 7:
								f = '7';
								break;
							case 8:
								f = '8';
								break;
							case 9:
								f = '9';
								break;
							case 10:
								f = '10';
								break;
							case 11:
								f = '11';
								break;
							case 12:
								f = '12';
								break;
							case 13:
								f = '1';
								break;
							case 14:
								f = '2';
								break;
							case 15:
								f = '3';
								break;
							case 16:
								f = '4';
								break;
							case 17:
								f = '5';
								break;
							case 18:
								f = '6';
								break;
							case 19:
								f = '7';
								break;
							case 20:
								f = '8';
								break;
							case 21:
								f = '9';
								break;
							case 22:
								f = '10';
								break;
							case 23:
								f = '11';
								break;
						}
						return f;
			},
			AMPM: (function() {
				return {
					UpperCase: function(){
						var d = new Date();
						var e = d.getHours();
						var f = '';
						if(e < 12){
							f = 'AM';
						}else{
							f = 'PM';
						}
						return f;
					},
					LowerCase: function(){
						var d = new Date();
						var e = d.getHours();
						var f = '';
						if(e < 12){
							f = 'am';
						}else{
							f = 'pm';
						}
						return f;
					}
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
				var d = new Date();
				var e = d.getDay();
				var day = '';
				switch(e){
					case 1:
						day = 'Monday';
						break;
					case 2:
						day = 'Tuesday';
						break;
					case 3:
						day = 'Wednesday';
						break;
					case 4:
						day = 'Thursday';
						break;
					case 5:
						day = 'Friday';
						break;
					case 6:
						day = 'Saturday';
						break;
					case 7:
						day = 'Sunday';
						break;
				}
				return day;
			},
			AbrDayOfWeek: function(){
				var d = new Date();
				var e = d.getDay();
				var day = '';
				switch(e){
					case 1:
						day = 'Mon';
						break;
					case 2:
						day = 'Tue';
						break;
					case 3:
						day = 'Wed';
						break;
					case 4:
						day = 'Thu';
						break;
					case 5:
						day = 'Fri';
						break;
					case 6:
						day = 'Sat';
						break;
					case 7:
						day = 'Sun';
						break;
				}
				return day;
			},
			FirstTwoOfWeek: function(){
				var d = new Date();
				var e = d.getDay();
				var day = '';
				switch(e){
					case 1:
						day = 'Mo';
						break;
					case 2:
						day = 'Tu';
						break;
					case 3:
						day = 'We';
						break;
					case 4:
						day = 'Th';
						break;
					case 5:
						day = 'Fr';
						break;
					case 6:
						day = 'Sa';
						break;
					case 7:
						day = 'Su';
						break;
				}
				return day;
			},
			WeekOfYear: function(){
				var d = new Date();
				var e = d.getMonth() + 1;
				var f = d.getDate();
				var week = '';

				switch(e){
					case 1:
						if(f < 10){
							week = '1';
						}
						else if(f < 17){
							week = '2';
						}
						else if(f < 24){
							week = '3';
						}
						else if(f < 31){
							week = '4';
						}
						else{
							week = '5';
						}
						break;
					case 2:
						if(f < 7){
							week = '5';
						}
						else if(f < 14){
							week = '6';
						}
						else if(f < 21){
							week = '7';
						}
						else if(f < 28){
							week = '8';
						}
						else{
							week = '9';
						}
						break;
					case 3:
						if(f < 6){
							week = '9';
						}
						else if(f < 13){
							week = '10';
						}
						else if(f < 20){
							week = '11';
						}
						else if(f < 27){
							week = '12';
						}
						else{
							week = '13';
						}
						break;
					case 4:
						if(f < 3){
							week = '13';
						}
						else if(f < 10){
							week = '14';
						}
						else if(f < 17){
							week = '15';
						}
						else if(f < 24){
							week = '16';
						}
						else{
							week = '17';
						}
						break;
					case 5:
						if(f < 8){
							week = '18';
						}
						else if(f < 15){
							week = '19';
						}
						else if(f < 22){
							week = '20';
						}
						else if(f < 29){
							week = '21';
						}
						else{
							week = '22';
						}
						break;
					case 6:
						if(f < 5){
							week = '22';
						}
						else if(f < 12){
							week = '23';
						}
						else if(f < 19){
							week = '24';
						}
						else if(f < 26){
							week = '25';
						}
						else{
							week = '26';
						}
						break;
					case 7:
						if(f < 3){
							week = '26';
						}
						else if(f < 10){
							week = '27';
						}
						else if(f < 17){
							week = '28';
						}
						else if(f < 24){
							week = '29';
						}
						else if(f < 31){
							week = '30';
						}
						else{
							week = '31';
						}
						break;
					case 8:
						if(f < 7){
							week = '31';
						}
						else if(f < 14){
							week = '32';
						}
						else if(f < 21){
							week = '33';
						}
						else if(f < 28){
							week = '34';
						}
						else{
							week = '35';
						}
						break;
					case 9:
						if(f < 4){
							week = '35';
						}
						else if(f < 11){
							week = '36';
						}
						else if(f < 18){
							week = '37';
						}
						else if(f < 25){
							week = '38';
						}
						else{
							week = '39';
						}
						break;
					case 10:
					if(f < 2){
							week = '39';
						}
						else if(f < 9){
							week = '40';
						}
						else if(f < 16){
							week = '41';
						}
						else if(f < 23){
							week = '42';
						}
						else if(f < 30){
							week = '43';
						}
						break;
					case 11:
						if(f < 6){
							week = '43';
						}
						else if(f < 13){
							week = '44';
						}
						else if(f < 20){
							week = '45';
						}
						else if(f < 27){
							week = '46';
						}
						else{
							week = '47';
						}
						break;
					case 12:
						if(f < 4){
							week = '47';
						}
						else if(f < 11){
							week = '48';
						}
						else if(f < 18){
							week = '49';
						}
						else if(f < 25){
							week = '50';
						}
						else{
							week = '51';
						}
						break;
					default:
						break;
				}
				return week;
			}
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){
						var d = new Date();
						var date = d.getDate();
						date = date.toString();
						return date;
					},
					Ordinal: function(){
						var d = new Date();
						var e = d.getDate();
						var ordinalDate = '';

						switch(e){
							case 1: 
								ordinalDate = '1st';
								break;
							case 2:
								ordinalDate = '2nd';
								break;
							case 3:
								ordinalDate = '3rd';
								break;
							case 4:
								ordinalDate = '4th';
								break;
							case 5:
								ordinalDate = '5th';
								break;
							case 6:
								ordinalDate = '6th';
								break;
							case 7:
								ordinalDate = '7th';
								break;
							case 8:
								ordinalDate = '8th';
								break;
							case 9:
								ordinalDate = '9th';
								break;
							case 10:
								ordinalDate = '10th';
								break;
							case 11:
								ordinalDate = '11th';
								break;
							case 12:
								ordinalDate = '12th';
								break;
							case 13:
								ordinalDate = '13th';
								break;
							case 14:
								ordinalDate = '14th';
								break;
							case 15:
								ordinalDate = '15th';
								break;
							case 16:
								ordinalDate = '16th';
								break;
							case 17:
								ordinalDate = '17th';
								break;
							case 18:
								ordinalDate = '18th';
								break;
							case 19:
								ordinalDate = '19th';
								break;
							case 20:
								ordinalDate = '20th';
								break;
							case 21:
								ordinalDate = '21st';
								break;
							case 22:
								ordinalDate = '22nd';
								break;
							case 23:
								ordinalDate = '23rd';
								break;
							case 24:
								ordinalDate = '24th';
								break;
							case 25:
								ordinalDate = '25th';
								break;
							case 26:
								ordinalDate = '26th';
								break;
							case 27:
								ordinalDate = '27th';
								break;
							case 28:
								ordinalDate = '28th';
								break;
							case 29:
								ordinalDate = '29th';
								break;
							case 30:
								ordinalDate = '30th';
								break;
							case 31:
								ordinalDate = '31st';
								break;
							default:
								break;
						}

						return ordinalDate;
					},
					DateDblDigit: function(){
						var d = new Date();
						var e = String(d.getDate());
						var dblDigitDate = String(e);
						if(e < 10){
							dblDigitDate = '0' + e;
						}
						return dblDigitDate;
					}
				}
			})(),
			MonthNumber: function(){
				var d = new Date();
				return String(d.getMonth() + 1);
			},
			MonthNumberDblDigit: function(){
				var d = new Date();
				var month = d.getMonth() + 1;
				var dblDigitMonth = String(month);
			
				if(month < 10){
					dblDigitMonth = '0' + dblDigitMonth;
				}

				return String(dblDigitMonth);
			},
			AbrOfCurrentMonth: function(){
				var d = new Date();
				var month = d.getMonth() + 1;
				var abrMonth = '';

				switch(month){
					case 1:
						abrMonth = 'Jan';
						break;
					case 2:
						abrMonth = 'Feb';
						break;
					case 3: 
						abrMonth = 'Mar';
						break;
					case 4:
						abrMonth = 'Apr';
						break;
					case 5:
						abrMonth = 'May';
						break;
					case 6:
						abrMonth = 'Jun';
						break;
					case 7: 
						abrMonth = 'Jul';
						break;
					case 8: 
						abrMonth = 'Aug';
						break;
					case 9: 
						abrMonth = 'Sep';
						break;
					case 10: 
						abrMonth = 'Oct';
						break;
					case 11: 
						abrMonth = 'Nov';
						break;
					case 12:
						abrMonth = 'Dec';
						break;
					default:
						break;
				}

				return abrMonth;
			},
			CurrentMonth: function(){
				var d = new Date();
				var month = d.getMonth() + 1;
				var curMonth = '';

				switch(month){
					case 1:
						curMonth = 'January';
						break;
					case 2:
						curMonth = 'February';
						break;
					case 3: 
						curMonth = 'March';
						break;
					case 4:
						curMonth = 'April';
						break;
					case 5:
						curMonth = 'May';
						break;
					case 6:
						curMonth = 'June';
						break;
					case 7: 
						curMonth = 'July';
						break;
					case 8: 
						curMonth = 'August';
						break;
					case 9: 
						curMonth = 'September';
						break;
					case 10: 
						curMonth = 'October';
						break;
					case 11: 
						curMonth = 'November';
						break;
					case 12:
						curMonth = 'December';
						break;
					default:
						break;
				}

				return curMonth;
			}
		}
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){
						var d = new Date();
						var e = d.getMonth() + 1;
						var f = d.getDate();
						var dayOfYearNumeral = '';

						switch(e){
							case 1:
								dayOfYearNumeral = f;
								break;
							case 2:
								dayOfYearNumeral = String(31 + f);
								break;
							case 3: 
								dayOfYearNumeral = String(60 + f);
								break;
							case 4:
								dayOfYearNumeral = String(91 + f);
								break;
							case 5:
								dayOfYearNumeral = String(121 + f);
								break;
							case 6:
								dayOfYearNumeral = String(152 + f);
								break;
							case 7: 
								dayOfYearNumeral = String(182 + f);
								break;
							case 8: 
								dayOfYearNumeral = String(213 + f);
								break;
							case 9: 
								dayOfYearNumeral = String(244 + f);
								break;
							case 10: 
								dayOfYearNumeral = String(274 + f);
								break;
							case 11: 
								dayOfYearNumeral = String(305 + f);
								break;
							case 12:
								dayOfYearNumeral = String(335 + f);
								break;
							default:
								break;
						}
						return dayOfYearNumeral;
					},
					Ordinal: function(){
						var d = new Date();
						var e = d.getMonth() + 1;
						var f = d.getDate();
						var g = '';
						var dayOfYearNumeral = '';
						var dayOfYearOrdinal;

						switch(e){
							case 1:
								dayOfYearNumeral = f;
								break;
							case 2:
								dayOfYearNumeral = String(31 + f);
								break;
							case 3: 
								dayOfYearNumeral = String(60 + f);
								break;
							case 4:
								dayOfYearNumeral = String(91 + f);
								break;
							case 5:
								dayOfYearNumeral = String(121 + f);
								break;
							case 6:
								dayOfYearNumeral = String(152 + f);
								break;
							case 7: 
								dayOfYearNumeral = String(182 + f);
								break;
							case 8: 
								dayOfYearNumeral = String(213 + f);
								break;
							case 9: 
								dayOfYearNumeral = String(244 + f);
								break;
							case 10: 
								dayOfYearNumeral = String(274 + f);
								break;
							case 11: 
								dayOfYearNumeral = String(305 + f);
								break;
							case 12:
								dayOfYearNumeral = String(335 + f);
								break;
							default:
								break;
						}

						g = String(dayOfYearNumeral.substr(dayOfYearNumeral.length - 1));

						switch(g){
								case '0':
									dayOfYearOrdinal = String(dayOfYearNumeral + 'th');
									break;
								case '1': 
									dayOfYearOrdinal = String(dayOfYearNumeral + 'st');
									break;
								case '2':
									dayOfYearOrdinal = String(dayOfYearNumeral + 'nd');
									break;
								case '3':
									dayOfYearOrdinal = String(dayOfYearNumeral + 'rd');
									break;
								case '4':
									dayOfYearOrdinal = String(dayOfYearNumeral + 'th');
									break;
								case '5': 
									dayOfYearOrdinal = String(dayOfYearNumeral + 'th');
									break;
								case '6': 
									dayOfYearOrdinal = String(dayOfYearNumeral + 'th');
									break;
								case '7':
									dayOfYearOrdinal = String(dayOfYearNumeral + 'th');
									break;
								case '8':
									dayOfYearOrdinal = String(dayOfYearNumeral + 'th');
									break;
								case '9':
									dayOfYearOrdinal = String(dayOfYearNumeral + 'th');
									break;
								default:
									break;
						}
						return dayOfYearOrdinal;
					}
				}
			})(),
			YearFull: function(){
				var d = new Date();
				var e = d.getFullYear();
				return String(e);
			},
			YearAbr: function(){
				var d = new Date();
				var e = String(d.getFullYear());
				var f = String(e.substr(e.length - 2));
				return f;
			}
		}
	})(),
	Defaults: function(){
		var d = new Date();
		var e = String(d.getFullYear());
		var f = String(d.getMonth() + 1);

		if(f.length < 2){
			f = '0' + f;
		}

		var g = String(d.getDate());
		var h = String(d.getHours());

		if(h.length < 2){
			h = '0' + h;
		}

		var i = String(d.getMinutes());

		if(i.length < 2){
			i = '0' + i;
		}

		var j = String(d.getSeconds());
		
		if(j.length < 2){
			j = '0' + j;
		}

		var k = e + '-' + f + '-' + g + 'T' + h + ':' + i + ':' + j;
		return k;
	}
  }
})();