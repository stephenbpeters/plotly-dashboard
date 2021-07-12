// javascript plotly homework

// point ourselves to our json data file
var url = "./samples.json";

// build and populate our drop-down with our individuals
function buildDrop() {
    d3.json(url, function (data) {
        console.log(data);
        // build drop down from data
        d3.select('select')
            .selectAll('option')
            .data(data.names)
            .enter()
            .append('option')
            .text(function (d) { return d; });
        // end of dropdown	 
        console.log('hey, show our data please', data);
    });
    console.log('dropdown built');
    
};

buildDrop();
