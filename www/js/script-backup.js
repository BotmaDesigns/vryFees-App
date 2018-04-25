
function getShows()
{
fetch('http://vryfees.botmasoftware.com/api.ashx', {
  mode: 'cors'}).then(function(response) {
  return response.json();
}).then(function(data) {
  //console.log(data);
                for (i=0;i<data.length;i++){
					document.getElementById(data[i].Categories).innerHTML += "</br>" + "<a href='show"+i+".html'>" + data[i].Name +"</a>" + "</br>";
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
					document.getElementById("shows").innerHTML += "</br>" + "<a href='show"+i+".html'>" + data[i].Name +"</a>" + "</br>";
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
						if(data[i].Schedules[j].StartTime == todayDate){
							var div = document.createElement("div");
							div.setAttribute("class", "venueSchedule").innerHTML = "write this info down";
						};                
					}
                }
                }).catch(function() {
                  console.log("Booo");
                });
}

function getVenueInfo(){
	fetch('http://vryfees.botmasoftware.com/api.ashx', {
	mode: 'cors'}).then(function(response) {
	return response.json();
	}).then(function(data) {
					document.getElementById("googleMapVenue").innerHTML = "<a href='"+data[0].Venue+"'>View in Google Maps</a>";
		}).catch(function() {
			console.log("Booo");
		});
}

function populateInfo(showNum){
	fetch('http://vryfees.botmasoftware.com/api.ashx', {
	mode: 'cors'}).then(function(response) {
	return response.json();
	}).then(function(data) {
		document.getElementById("buyTicket").innerHTML = "<a href='"+data[showNum].Computicket+"'>book tickets now on CompuTicket.com</a>";
		document.getElementById("title").innerHTML = data[showNum].Name;
		document.getElementById("showDesc").innerHTML = "<span class='bold'>Genre:</span> " + data[showNum].Genres + "<p>" + data[showNum].Synopses + "</p><p><span class='bold'>Author:</span> " + data[showNum].Authors + "</p>" + "<span class='bold'>Actors:</span> ";
			for (j=0;j<data[showNum].Actors.length;j++){
                document.getElementById("showDesc").innerHTML += data[showNum].Actors[j].Name + ", ";
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
