function getShows()
{
fetch('http://vryfees.botmasoftware.com/api.ashx', {
  mode: 'cors'}).then(function(response) {
  return response.json();
}).then(function(data) {
  //console.log(data);
                for (i=0;i<data.length;i++){
					document.getElementById(data[i].Categories).innerHTML += "</br>" + "<a href='show.html?showNum="+i+"'>" + data[i].Name +"</a>" + "</br>";
                }
                }).catch(function() {
                  console.log("Booo");
                });
}

function nameShows()
{
fetch('http://vryfees.botmasoftware.com/api.ashx', {
  mode: 'cors'}).then(function(response) {
  return response.json();
}).then(function(data) {
  //console.log(data);
                for (i=0;i<data.length;i++){
					document.getElementById("shows").innerHTML += "</br><a href='show.html?showNum="+i+"'>" + data[i].Name +"</a></br>";
                }
                }).catch(function() {
                  console.log("Booo");
                });
}

function getToday(){
	
	var todayDate = new Date();
	document.getElementById("today").innerHTML = todayDate.toDateString();
		
	fetch('http://vryfees.botmasoftware.com/api.ashx', {
  mode: 'cors'}).then(function(response) {
  return response.json();
}).then(function(data) {
                for (i=0;i<data.length;i++){
					for (j=0;j<data[i].Schedules.length;j++){
						if(data[i].Schedules[j].StartTime.toDateString() == todayDate){
							var div = document.createElement("div");
							div.setAttribute("class", "venueSchedule").innerHTML = "write this info down";
						};                
					}
                }
                }).catch(function() {
                  console.log("Booo");
                });
}

function nameVenues()
{
fetch('http://vryfees.botmasoftware.com/venues.ashx', {
  mode: 'cors'}).then(function(response) {
  return response.json();
}).then(function(data) {
  //console.log(data);
                for (i=0;i<data.length;i++){
					document.getElementById("venues").innerHTML += "<tr><td><a href='venue.html?venueNum=" + data[i].Name + "'>" + data[i].Name +"</a></td></tr>";
                }
                }).catch(function() {
                  console.log("Booo");
                });
}

function getVenueInfo(venueNum){
	fetch('http://vryfees.botmasoftware.com/venues.ashx', {
	mode: 'cors'}).then(function(response) {
	return response.json();
	}).then(function(data) {
			for(i=0;i<data.length;i++){
				if(data[i].Name == venueNum){
					document.getElementById("venueName").innerHTML = data[i].Name;
					document.getElementById("googleMapVenue").innerHTML = "<a href='" + data[i].GoogleMaps + "'>View in Google Maps</a>";
				}
			}		
		}).catch(function() {
			console.log("Booo");
		});
}

function populateVenueInfo(venueNum){
	fetch('http://vryfees.botmasoftware.com/api.ashx', {
	mode: 'cors'}).then(function(response) {
	return response.json();
	}).then(function(data) {
		document.getElementById("venueImg").innerHTML = "<img src='img/venues/" + venueNum + ".jpg' style='width:auto; height:100%;'></img>";
		for (i=0;i<data.length;i++){
			for (j=0;j<data[i].Schedules.length;j++){
				if (data[i].Schedules[j].Venue.Name == venueNum){
					var date = new Date(data[i].Schedules[j].StartTime);
					document.getElementById("schedule").innerHTML += "<tr><td><a href='show.html?showNum=" + i + "'>" + data[i].Name + "</a></td><td>" + date.toDateString() + "</td><td>" + date.getHours() + ":" + date.getMinutes() + "</td></tr>";
				}
			}
		}
		}).catch(function() {
			console.log("Booo");
		});
}


function populateInfo(showNum){
	fetch('http://vryfees.botmasoftware.com/api.ashx', {
	mode: 'cors'}).then(function(response) {
	return response.json();
	}).then(function(data) {
		document.getElementById("showImg").innerHTML = "<img src='img/shows/" + data[showNum].Name + ".jpg' style='width:auto; height:100%;'></img>";
		document.getElementById("buyTicket").innerHTML = "<a href='"+data[showNum].Computicket + "'>book tickets now on CompuTicket.com</a>";
		document.getElementById("title").innerHTML = data[showNum].Name;
		document.getElementById("showDesc").innerHTML = "<span class='bold'>Genre:</span> " + data[showNum].Genres + "<p>" + data[showNum].Synopses + "</p><p><span class='bold'>Author:</span> " + data[showNum].Authors + "</p>" + "<span class='bold'>Actors:</span> ";
			for (j=0;j<data[showNum].Actors.length;j++){
					document.getElementById("showDesc").innerHTML += data[showNum].Actors[j].Name + ", ";
                }
			for (j=0;j<data[showNum].Schedules.length;j++){
				var date = new Date(data[showNum].Schedules[j].StartTime);
					document.getElementById("schedule").innerHTML += "<tr><td>" + date.toDateString() + "</td><td><a href='venue.html?venueNum=" + data[showNum].Schedules[j].Venue.Name + "'>" + data[showNum].Schedules[j].Venue.Name + "</a></td><td>" + date.getHours() + ":" + date.getMinutes() + "</td></tr>";
				}
		}).catch(function() {
			console.log("Booo");
		});
}


function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
        x.className += " showMenu";
    } else {
        x.className = "menu";
    }
}

function showSchedule(y) {
	var x = document.getElementById(y);
	if (x.className === "catSchedule") {
		x.className += " show";
	} else {
		x.className = "catSchedule";
	}
}


/*function createTableCat(tableData) {
  var table = document.createElement('table');
  var tableBody = document.createElement('tbody');
  table.setAttribute("id", "comedy");
  table.className="catSchedule";

  tableData.forEach(function(rowData) {
    var row = document.createElement('tr');

    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}

createTable([["row 1, cell 1", "row 1, cell 2"], ["row 2, cell 1", "row 2, cell 2"]]);*/
