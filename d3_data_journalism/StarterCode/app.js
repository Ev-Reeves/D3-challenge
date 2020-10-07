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
    var x = d3.scaleLinear()
        .domain([0,100])
        .range([0, svgWidth])
    svg.append("g")
        .attr("transform", "translate(0, "+ chartHeight +")")
        .call(d3.axisBottom(x));
    var y = d3.scaleLinear()
        .domain([0,100])
        .range([svgHeight, 0])
    svg.append("g")  
        .call(d3.axisLeft(y))  

    svg.append("g")
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
            .attr("cx", function(data) { return x(data.healthcare)})
            .attr("cy", function(data) { return x(data.smokes)})
            .attr("r", 1.5)
            .attr("fill", "#69b3a2")

});






    