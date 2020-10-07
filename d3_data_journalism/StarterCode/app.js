//SVG dimensions
var svgWidth = 880;
var svgHeight = 640;

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
        .domain([0,26])
        .range([0, chartWidth])
    svg.append("g")
        .attr("transform", "translate(100, "+ chartHeight +  ")")
        .call(d3.axisBottom(x));
    var y = d3.scaleLinear()
        .domain([0,30])
        .range([chartHeight-30, 0])
    svg.append("g")  
        .attr("transform", "translate(100, 30)")
        .call(d3.axisLeft(y))  

    var gdots =  svg.selectAll("g.dot")
        .data(data)
        .enter().append('g');

    // svg.append("g")
    //     .selectAll("dot")
    //     .data(data)
    //     .enter()
    gdots.append("circle")
        .attr("cx", function(data) { return x(data.healthcare) })
        .attr("cy", function(data) { return y(data.smokes) })
        .attr("r", 14)
        .attr("fill", "#69b3a2")
        .attr("transform", "translate(100, 30)")
 
    gdots.append("text")
        .text(function(data) { return data.abbr })
        .attr("x", function(data) { return x(data.healthcare) })
        .attr("y", function(data) { return y(data.smokes) })
        .attr("transform", "translate(88, 34)")

    chartGroup.append("text")
    .attr("transform", `translate(${chartWidth / 2}, ${chartHeight })`)
        .classed("healthcare-text text", true)
        .text("Healthcare Coverage Rate (%)");
    
    chartGroup.append("text")
    .attr("transform", `translate(-20, ${chartHeight/2 }) rotate(270)`)
        .classed("healthcare-text text", true)
        .text("Smoking (%)");
});






    