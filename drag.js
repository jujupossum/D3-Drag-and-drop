var svg = d3.select('#mesh').append('svg')
		.attr('class', 'svg')
        .attr('width', 500)
        .attr('height', 500)

svg.append("rect")
        .attr('width', 500)
        .attr('height', 500)
        .attr('fill', "#ffffff");

// add coordinates to vertical lines
svg.append("g")
	.attr("class", "x-axis").selectAll('.vertical')
	.data(d3.range(1, 500 / 25))
	.enter().append('line')
	.attr('class', 'vertical')
	.attr('class', 'line')
	.attr('x1', function (d) { return d * 25; })
	.attr('y1', 0)
	.attr('x2', function (d) { return d * 25; })
	.attr('y2', 500);

// add coordinates to horizontal lines
svg.append("g")                                       
	.attr("class", "y-axis").selectAll('.horizontal')
	.data(d3.range(1, 500 / 25))
	.enter().append('line')
	.attr('class', 'horizontal')
	.attr('class', 'line')
	.attr('x1', 0)
	.attr('y1', function (d) { return d * 25; })
	.attr('x2', 500)
	.attr('y2', function (d) { return d * 25; });