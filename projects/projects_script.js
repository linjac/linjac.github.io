var projects = [
				["bordeaux-x-tanikawa",2018,"000"], 
				["spike",2020,"001"], 
				["theater-prosthesis",2019,"002"], 
				["fema-disaster-relief-housing",2018,"003"], 
				["Fiat",2007,"004"], 
				["Audi",2015,"005"]
				];


let projectInfo = []

for (i = 0; i < projects.length; i++) {
	let info = {
				name: projects[i][0],
				year: projects[i][1],
				id: projects[i][2], 
				pageURl: "./" + projects[i][0] , 
				avatarURL: "../assets/" + projects[i][0] + ".png", 
				thumbURL: "./" + projects[i][0] +"/thumbnail"}
	projectInfo.push(info)

}
// projects/index.html script
var iconContent = '<div class="row">';
var i;
for (i = 0; i < projectInfo.length; i++) {
	iconContent += '<div class="col-lg-6 col-xl-4">';
	iconContent += '<div class="container project-icon">';
	iconContent += '<a class="icon-item" href="./';
	iconContent += projectInfo[i].pageURl + '">';
	iconContent += '<div class="row">';
	iconContent += '<div class="col-12" style="padding:0;">';
	iconContent += '<img class="icon-thumbnail" src= "' + projectInfo[i].thumbURL + '">';
	iconContent += '</div></div>'
	iconContent += '<div class="row">'
	iconContent += '<div class="col-2 border icon-avatar-col">'
	iconContent += '<img class="icon-avatar" src= "' + projectInfo[i].avatarURL + '">';
	iconContent += '</div>';
	iconContent += '<div class="col-10 border-top border-right border-bottom">';
	iconContent += projectInfo[i].name + ", " + projectInfo[i].year;
    iconContent += '</div></div></a></div></div>';
}
iconContent += '</div>'

document.getElementById("populate-script").innerHTML = iconContent;

