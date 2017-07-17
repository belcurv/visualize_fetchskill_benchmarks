/* jshint esversion:6, browser: true */

import { chart as generateChart } from './chart';

export default class View {
    
    constructor() {
        this.container = document.getElementById('container');
    }
    
    render(data) {
        
        // clear container before each render
        this.container.innerHTML = '';
        
        // call 'generateChart'
        generateChart(data, this.container, {width: 800, height: 500});
    }
    
    
    /* ======================= render ======================= */

    /** render results to DOM
     *  @param   [string]   test_name   [the name of the function under test]
     *  @param   [number]   first       [fastest execution result]
     *  @param   [number]   last        [slowest execution result]
     *  @param   [number]   mean        [average execution result]
     *  @param   [number]   median      [middle execution result]
     *  @param   [number]   total       [sum of all execution results]
     */
    //function render(test_name, first, last, mean, median, total) {
    //    document.getElementById('output').innerHTML += `
    //        <p>Testing: ${test_name}
    //        <br>Fastest execution time: ${first.toFixed(3)} milliseconds
    //        <br>Mean execution time: ${mean.toFixed(3)} milliseconds
    //        <br>Median execution time: ${median.toFixed(3)} milliseconds
    //        <br>Slowest execution time: ${last.toFixed(3)} milliseconds
    //        <br>Total execution time: ${total.toFixed(3)} milliseconds</p>
    //    `;
    //}
    
}