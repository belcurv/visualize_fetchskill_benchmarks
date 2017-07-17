/* jshint esversion:6, devel:true */

import * as DD from './dataDictionary';
import { benchmark } from './benchmark';


/* ============================ utility methods ============================ */

/* flattens the 2d skills dictionary
 *
 * @params   [object]   dict    [the 2d skills object]
 * @returns  [object]           [flattned & re-keyed skills map]
 */
function flattenDictionary(dict) {

    const result_obj = {};
    const dict_keys = Object.keys(dict);
    dict_keys.forEach( k => {
        dict[k].forEach( skill => {
            result_obj[skill] = k;
        });
    });
    return result_obj;
}


/* ========================== function under test ========================== */
function fetchSkill(request) {
  var matchSkill = request,
      allSkills = Object.keys(DD);
  for (let i = 0; i < allSkills.length; i += 1) {
    if (DD[allSkills[i]].indexOf(request) !== -1) {
      matchSkill = allSkills[i];
    }
  }
  return matchSkill;
}


/* ================================ exports ================================ */

export default class Model {
    
    constructor() {
        this.dictionary = DD;
        this.flatDictionary = flattenDictionary(DD);
    }
    
    getResults() {
        // benchmark('fetchSkill 1', fetchSkill, render);
    }

}

//benchmark('fetchSkill 1', fetchSkill, render);