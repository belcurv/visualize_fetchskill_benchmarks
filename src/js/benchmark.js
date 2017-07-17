/* jshint esversion:6, browser:true */

/* ============================ utility methods ============================ */

/** fastest result
 *  @param     [array]    series   [list of execution times]
 *  @returns   [number]            [first number in the array]
*/
function first(series) {
    series.sort();
    return series[0];
}

/** slowest result
 *  @param     [array]    series   [list of execution times]
 *  @returns   [number]            [last number in the array]
*/
function last(series) {
    series.sort();
    return series[series.length - 1];
}

/** average result
 *  @param     [array]    series   [list of execution times]
 *  @returns   [number]            [mean number in the array]
 */
function mean(series) {
    const sum = series.reduce((a, c) => a + c, 0);
    return sum / series.length;
}

/** middle result
 *  @param     [array]    series   [list of execution times]
 *  @returns   [number]            [median number in the array]
*/
function median(series) {
    series.sort();
    return series[Math.ceil(series.length / 2)];
}

/** sum of all results
 *  @param     [array]    series   [list of execution times]
 *  @returns   [number]            [sum of all numbers in the array]
*/
function total(series) {
    return series.reduce( (a, c) => a + c, 0);
}


/* ============================ public methods ============================= */

/** benchmark runner - generates results & fires callback
 *  @param   [string]     test_name   [name of the function under test]
 *  @param   [function]   test        [the function under test]
 *  @param   [function]   callback    [function to fire when done]
*/
function benchmark(test_name, test, callback) {
    const ts = [];
    for (let i = 0; i < 10000; i++) {
        const before = performance.now();
        test("angular");
        ts.push(performance.now() - before);
  }
  callback(test_name, first(ts), last(ts), mean(ts), median(ts), total(ts));
}


/* ================================ exports ================================ */

export { benchmark };
