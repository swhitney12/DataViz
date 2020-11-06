var margin = {top:30, right: 20, bottom:30, left:50},
    height = 400 - margin.top - margin.bottom,
    width = 1000 - margin.left - margin.right;

var margin1 = {top:30, right: 20, bottom:30, left:50},
    height1 = 440 - margin.top - margin.bottom,
    width1 = 1000 - margin.left - margin.right;

var focusheight = 100;

chart = {
    
}

//function for date parsing
var parseDate = d3.timeParse("%Y-%m-%d");

var x = d3.scaleTime().range([margin.left, width - margin.right]);
var y = d3.scaleLinear().range([height - margin.bottom, margin.top]);

//setting up axes
xAxis = ƒ(g)

xAxis = g => g  
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

yAxis = ƒ(g)

yAxis = g => g
     .attr("transform", `translate(${margin.left},0)`)
     .call(d3.axisLeft(y))
     .call(g => g.select(".domain").remove())
     .call(g => g.select(".tick:last-of-type-text").clone()
        .attr("x", 3)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text(data.y));

//creating line
var valueline = d3.line()
    .x(function(d) { return x(d.Date);})
    .y(function(d) { return y(d.Close);});

//creating area
// var area = d3.area()
//     .x(function(d) { return x(d.Date); })
//     .y0(height - margin.bottom)
//     .y1(function(d) { return y(d.Close); });

//creating svg & viewbox for brushing
const svg = d3.select("body")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .attr("viewBox", [0,0,width,height]);

//creating brush
const brush = d3.brushX()
     .extent([[margin.left,margin.top],[width-margin.right,height-margin.bottom]])

//getting the data for line1
d3.csv("XOM-XOM.csv")
     .then(function(data) {
         data.forEach(function(d)  {
             d.Date = parseDate(d.Date);
             d.Close = +d.Close;
    });

 
    x.domain(d3.extent(data, function(d) { return d.Date; }));
    y.domain([0, d3.max(data, function(d) { return d.Close; })]);

    svg.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("d", valueline(data));

    // svg.append("path")
    //     .attr("class", "area")
    //     .attr("fill", "steelblue")
    //     .attr("d", area(data));

    svg.append("g")
        .attr("class", "x axis")
        .call(xAxis)

    svg.append("g")
         .call(brush);
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);
});

