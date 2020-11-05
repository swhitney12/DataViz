margin = ({top:20, right: 20, bottom:20, left:20});
height = 300;
width = 1000;

var parseDate = d3.timeFormat("%d-%b-%y").parse;

xAxis = g => g  
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x));

yAxis = g => g
     .attr("transform", `translate(${margin.left},0)`)
     .call(d3.axisLeft(y));

var valueline = d3.line()
    .x(function(d) {return x(d.Date);})
    .y(function(d) {return y(d.Close);})

x = d3.scaleLinear([0,10], [margin.left, width - margin.right]);
y = d3.scaleLinear([0,10], [margin.left, height - margin.bottom])

const svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0,0,width,height]);

const brush = d3.brushX()
    .extent([[margin.left,margin.top],[width-margin.right,height-margin.bottom]])

//getting the data for line1
d3.csv("XOM - XOM.csv", function(error,data) {
    data.forEach(function(d) {
        d.date = parseDate(d.Date);
        d.close = +d.Close;
    });

    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain([0, d3.max(data, function(d) { return d.close; })]);

    svg.append("path")
        .attr("class", "line")
        .attr("d", valueline(data));

    svg.append("g").call(xAxis);
    svg.append("g")
        .call(brush);
    svg.append("g").call(yAxis);
});

