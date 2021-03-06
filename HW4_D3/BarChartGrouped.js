var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 600 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

// Parse the date / time
var	parseTime = d3.time.format("%I:%M%p").parse;

var x0 = d3.scale.ordinal().rangeRoundBands([0, width], .3);

var x1 = d3.scale.ordinal();

var y = d3.scale.linear().range([height, 0]);

var color = d3.scale.ordinal()
    .range(["#DA70D6", "#F02688"]);

var xAxis = d3.svg.axis()
    .scale(x0)
    .orient("bottom")
    .tickFormat(d3.time.format("%I:%M%p"));

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(3);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

d3.csv("bar-data-grouped.csv", function(error, data) {
  var ageGroups = d3.keys(data[0]).filter(function(key) { return key !== "Time"; });
    data.forEach(function(d) {
        d.Time = parseTime(d.Time);
        d.ages= ageGroups.map(function(name) {return {name: name, value: +d[name]};});
    });
    
  x0.domain(data.map(function(d) { return d.Time; }));
  x1.domain(ageGroups).rangeRoundBands([0, x0.rangeBand()]);
  y.domain([0, d3.max(data, function(d) { return d3.max(d.ages, function (d) { return d.value; }); })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("text")  
    .attr("class", "x axis")
    .call(xAxis)           
    .attr("transform",
          "translate(" + (width/2) + " ," + 
                         (height + margin.top + 50) + ")")
    .style("text-anchor", "middle")
    .text("Bedtime");    

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - (height/2))
      .attr("dy", ".71em")
      .style("text-anchor", "middle")
      .text("Total Students");

  var Time = svg.selectAll(".Time")
    .data(data)
    .enter().append("g")
    .attr("class", "g")
    .attr("transform", function(d) { return "translate(" + x0(d.Time) + ",0)"; });
  
  Time.selectAll("rect")
    .data(function(d) {return d.ages; })
    .enter().append("rect")
    .attr("width", x1.rangeBand())
    .attr("x", function(d) { return x1(d.name); })
    .attr("y", function(d) { return y(d.value); })
    .attr("height", function(d) {return height - y(d.value); })
    .style("fill", function(d) {return color(d.name); });

  var legend = svg.selectAll(".legend")
    .data(ageGroups.slice().reverse())
    .enter().append("g")
    .attr("class", "legend")
    .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend.append("rect")
    .attr("x", width - 18)
    .attr("width", 18)
    .attr("height", 18)
    .style("fill", color);

  legend.append("text")
    .attr("x", width - 24)
    .attr("y", 9)
    .attr("dy", ".35em")
    .style("text-anchor", "end")
    .text(function(d) { return d; });

});