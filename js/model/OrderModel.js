export class FormModel {
    constructor() {
        this.name = "";
        this.lastName = "";
        this.phone = "";
        this.init();
    }

    /**
     * Initializes this object properties. New properties are added based on the
     * data loaded from  localStorage.
     * 
     * @returns {undefined}
     */
    init() {
        let sneakers = JSON.parse(localStorage.getItem('sneakers'));
        for (let property in sneakers) {
            this[property] = sneakers[property];
        }
    }

    /**
     * Converts this object to a data object for the view. We could have also 
     * returned Object.entries(this), but in this case, we would be dealing 
     * with an array of arrays.
     * 
     * @returns {Object} a simple data object with inputs for the form view 
     */
    getInputData() {
        // 1. stringify this object to get rid of this object methods
        let inputsString = JSON.stringify(this);
        // 2. return as plain JS data object
        return JSON.parse(inputsString);
    }

    /**
     * Stores sneakers data accross browser sessions. Window.localStorage is used 
     * to store the model as a JSON string under the key 'sneakers'.
     * 
     * @returns {undefined}
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage}
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON}
     */
    persist() {
        localStorage.setItem('sneakers', JSON.stringify(this));
    }

}