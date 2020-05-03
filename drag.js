svg = d3.select('#mesh').append('svg')
.attr('width', 600)
        .attr('height', 600)
		.append('g')
		.attr('class', 'svg')
        .attr('width', 600)
        .attr('height', 600);

svg.append("rect")
        .attr('width', 600)
        .attr('height', 600)
        .attr('fill', "white");

// add coordinates to vertical lines
svg.append("g")
	.attr("class", "x-axis").selectAll('.vertical')
	.data(d3.range(1, 600 / 25))
	.enter().append('line')
	.attr('class', 'vertical')
	.attr('class', 'line')
	.style("stroke", "#dbdbdb")          // colour the line
    .style("stroke-width", 1) 
	.attr('x1', function (d) { return d * 25; })
	.attr('y1', 0)
	.attr('x2', function (d) { return d * 25; })
	.attr('y2', 600);

// add coordinates to horizontal lines
svg.append("g")                                       
	.attr("class", "y-axis").selectAll('.horizontal')
	.data(d3.range(1, 600 / 25))
	.enter().append('line')
	.attr('class', 'horizontal')
	.style("stroke", "#dbdbdb")          // colour the line
    .style("stroke-width", 1)
	.attr('class', 'line')
	.attr('x1', 0)
	.attr('y1', function (d) { return d * 25; })
	.attr('x2', 600)
	.attr('y2', function (d) { return d * 25; });