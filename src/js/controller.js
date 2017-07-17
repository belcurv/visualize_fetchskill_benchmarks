/* jshint esversion:6, devel:true */

export default class Controller {
    
    constructor(model, view) {
        this.model = model;
        this.view  = view;
    }
    
    render(data) {
        this.view.render(data);
    }
    
    setView() {
        this.model.benchmarks()
            .then( data => this.render(data) );
    }
    
}
