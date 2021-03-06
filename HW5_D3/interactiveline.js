//create margins for focus and context
var margin = {top:10, right: 10, bottom:100, left:40},
    margin2 = {top:330, right:10, bottom: 5, left:40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom,
    height2 = 700 - margin2.top - margin2.bottom;


//data variable
var myData = null;

//booleans to tell which data is presented
var data1 = true;
var data2 = false;

//datanames to use for data read in
var data1name = "XOM-XOM.csv";
var data2name = "TSLA-TSLA.csv";

//creating svg & viewbox for brushing
    const svg = d3.select("body")
        .append("svg")
        .attr("width", width) 
        .attr("height", height); 

//create focus
    var focus = svg.append("g")
        .attr("class", "focus")
        .attr("viewBox", [0,0,width,height]);

//function for date parsing
var parseDate = d3.timeParse("%Y-%m-%d");

var x = d3.scaleUtc().range([margin.left, width - margin.right]);
    x2 = d3.scaleUtc().range([margin2.left, width - margin2.right]);
    y = d3.scaleLinear().range([height - margin.bottom, margin.top]);
    y2 = d3.scaleLinear().range([height2 - margin2.bottom, margin2.top]);

//setting up axes

xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0).tickFormat(d3.timeFormat("%b %d")));

xAxis2 = g => g
    .attr("transform", `translate(0,${height2 - margin2.bottom})`)
    .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

 yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));

    var context = svg.append("g")
        .attr("class", "context")
        .attr("viewBox", [0,0,width,height2]);

    const brush = d3.brushX()
        .extent([[margin2.left,margin2.top - 10],[width-margin2.right,height2-margin2.bottom]])
        .on("brush", brushed)
        .on("end", brushended);
    
    const defaultSelection = [x(d3.utcYear.offset(x.domain()[1], -1)), x.range()[1]];
    
    //brushended function
    function brushended(event) {
        if(event.selection === null) {
            const dx = x(1) - x(0);
            const [[cx]] = d3.pointers(event);
            const [x0, x1] = [cx - dx / 2, cx + dx / 2];
            const[X0,X1] = x.range();
            d3.select(this)
                .call(brush.move, x1 > X1 ? [X1 - dx, X1]
                    : x0 < X0 ? [X0, X0 + dx]
                    :[x0, x1]);
        } else {
            var [brushL, brushR] = d3.brushSelection(this);
            if(brushR - brushL < 100) {
                d3.select(this)
                .call(brush.move, [brushL - 50, brushR+50]);
            }
        }
    }

    //brushed function
    function brushed(event) {
        let selection = event.selection;
        if(selection === null) {
            renderGraph(myData);
        } else {
            focus.selectAll("*").remove();
            value = selection.map(x2.invert, x2).map(d3.utcDay.round);
            let filterednodes = myData.filter(d => value[0] <= d.Date && d.Date <= value[1]);     
            renderGraph(filterednodes);
        }
    }

 

//creating line
var valueline = d3.line()
    .x(function(d) { return x(d.Date);})
    .y(function(d) { return y(d.Close);});

//creating line2
var valueline2 = d3.line()
    .x(function(d) { return x2(d.Date); })
    .y(function(d) { return y2(d.Close); });

//getting the data for line1
d3.csv(data1name)
     .then(function(data) {
         data.forEach(function(d)  {
             d.Date = parseDate(d.Date);
             d.Close = +d.Close;
    });

    //putting data into a variable for brush use
    myData = data;

   //setting domains
    x2.domain(d3.extent(data, function(d) { return d.Date; }));
    y2.domain([0, d3.max(data, function(d) { return d.Close; })]);

    renderGraph(myData);

    //appending line to context
    context.append("path")
       .attr("class", "line2")
       .attr("fill", "none")
       .attr("stroke", "#bc6fc9")
       .attr("d", valueline2(data));
   
    //appending x axis to context
    context.append("g")
       .attr("class", "x axis2")
       .call(xAxis2);
   
    //adding brush to context
    context.append("g")
       .attr("class", "brush")
       .call(brush);
});

//function to render graphs
function renderGraph(nodes) {

    //updating the domains
    x.domain(d3.extent(nodes, function(d) { return d.Date; }));
    y.domain([0, d3.max(nodes, function(d) { return d.Close; })]);

    //appending the line to focus
    focus.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", "#bc6fc9")
        .attr("d", valueline(nodes));

    //appending x axis to focus
    focus.append("g")
        .attr("class", "x axis")
        .call(xAxis);

    //appending y axis to focus
    focus.append("g")
        .attr("class", "y axis")
        .call(yAxis);
    
    //y axis label append to focus
    focus.append("text")
        .attr("class", "y axis label")
        .attr("font-family", "Arial")
        .style("font-size", "10px")
        .attr("font-size", "10")
        .attr("transform", "rotate(-90)")
        .attr("y", margin.left - 40)
        .attr("x", margin.top - (height/2) + 40)
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Close $");

}

//switch data function
function updateData() {

    //check which data is active, swap to indicate other data is now active
    var dataname = null;
    if(data1 == true) { 
        dataname = data2name;
        data1 = false;
        data2 = true;
    } else {
        dataname = data1name;
        data2 = false;
        data1 = true;
    }

    //feed in data to switch to
    d3.csv(dataname)
        .then(function(data) {
            data.forEach(function(d)  {
                d.Date = parseDate(d.Date);
                d.Close = +d.Close;
            });

        //update myData variable for brush use
        myData = data;

        //setting domains
        x.domain(d3.extent(data, function(d) { return d.Date; }));
        y.domain([0, d3.max(data, function(d) { return d.Close; })]);
        x2.domain(x.domain());
        y2.domain(y.domain());

        //create transition for focus data
        var focus = d3.select("body").transition();

        //Inputting new data to transition to for focus
        focus.select(".line")
            .duration(750)
            .attr("d", valueline(data));
        focus.select(".x.axis")
            .duration(750)
            .call(xAxis);
        focus.select(".y.axis")
            .duration(750)
            .call(yAxis);

        //create transition for context data
        var context = d3.select("body").transition();
        
        //Inputting new data to transition to for context
        context.select(".line2")
            .duration(750)
            .attr("d", valueline2(data));
        context.select(".x.axis2")
            .duration(750)
            .call(xAxis2);
    });
}
