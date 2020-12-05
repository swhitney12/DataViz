height = 1000;
width = 1000;

const svg = d3.select('body')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .attr('viewBox', [0,0,width,height]);

projection = d3.geoMercator()
        .center([-100, 33])
        .scale([1000]);

geoGenerator = d3.geoPath()
        .projection(projection);
d3.json("txstate.json").then(function(texas) {
    console.log(texas.features);
    tracts = texas.features;

    drawViz(tracts);
});

function drawViz(tracts) {
    svg.selectAll("path")
        .data(tracts)
        .enter()
        .append("path")
        .attr("class", "tracts")
        .attr("stroke", "grey")
        .attr("Fill", )
        .attr("d", geoGenerator);
}

function handleMouseOver(d) {
    svg.selectAll("circle").remove();
    console.log(d);

    var feature = d.target.__data__;
    console.log(feature);

    svg.append("circle")
        .attr("stroke", "blue")
        .attr("fill", "blue")
        .attr("cx", d => geoGenerator.centroid(feature[0]))
        .attr("cy", d => geoGenerator.centroid(feature[1]))
        .attr("r", 3);
}