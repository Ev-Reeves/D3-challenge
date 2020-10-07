//SVG dimensions
var svgWidth = 1000;
var svgHeight = 680;

var chartMargin = {
    top: 60,
    bottom: 60,
    right: 60,
    left: 60
};

var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

//selection
var svg = d3
    .select("body")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);

var chartGroup = svg.append("g")
    .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

//Loading csv data
d3.csv("data.csv").then(function(data) {
    console.log(data);
    data.forEach(function(data) {
        data.healthcare= +data.healthcare
    });
    data.forEach(function(data) {
        data.smokes= +data.smokes
    });
});






    