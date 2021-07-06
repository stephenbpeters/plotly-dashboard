// read in our data, print to console - works
// d3.json("./data/samples.json", function (d) {
// 	console.log(d);
// });



// taking from video of class
var url = "./data/samples.json";

function buildPlot() {
	d3.json(url, function (data) {
		console.log(data);
	});
};


// getting data again, built stuff for plot	

// function buildPlot() {
// 	d3.json(url).then(function(data) {
// 	  console.log(data);
// 	  // get values
// 	  var info = data.samples;
// 	  console.log("show data.samples");
// 	  console.log(info);
// 	});	
// 	
// 	};
	
buildPlot();	
console.log("test one?");
console.log('really');