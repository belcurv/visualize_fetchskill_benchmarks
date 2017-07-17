/* jshint esversion:6, browser:true*/

// https://bl.ocks.org/mbostock/3887051

/* ================================= setup ================================= */
import * as d3 from 'd3';


/* ============================ private methods ============================ */


/* ============================ public methods ============================= */

// generate grouped bar chart
const chart = (data, targetEl, configMap) => {
    
    // setup
    const width  = configMap ? configMap.width  : 800,
          height = configMap ? configMap.height : 500,
          color  = d3.scaleOrdinal(d3.schemeCategory20c);
    
    // select target and add <svg> and <g>roup
    const svg = d3.select(targetEl)
        .append('svg')
            .attr('viewbox', `0 0 ${width} ${height}`)
            .attr('preserveAspectRatio', 'xMinYMin meet')
        .append('g')
        .append('text')
            .text(JSON.stringify(data, null, 2));
    
};


/* ================================ exports ================================ */

export { chart };
