height = 110;
width = 700;

var lineGenerator = d3.line();
var points = [
	[0, 80],
	[100, 80],
	[100, 0],
	[0, 0],
    [0, 80]
];

var pathData = lineGenerator(points);

const svg = d3.select('body')
		.append('svg')
		.attr('width', width)
		.attr('height', height)
        .attr('viewBox', [0,0,width,height]);

svg.append('path')
    .attr('d', pathData)
    .attr('fill', 'red')
    .attr('stroke', 'red');


        