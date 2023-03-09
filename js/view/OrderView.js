
/**
 * Represents the View. View holds refences to all GUI elements user interacts with.
 * The View exposes methods to interact with the view elements. 
 */
export class FormView {
    constructor() {
        /*
        * Collection of all form inputs.
        * @type {NodeList}
        */
        this.inputs = null;
        this.form = document.querySelector('#form-sneakers-name');
    }

    /**
     * Creates form inputs based on the injected JS object with data.
     * 
     * @param {Object} dataObject - JS object containing input data for this form
     * @returns {undefined}
     */
    createInputs(dataObject) {
        for (let property in dataObject) {
            this.form.querySelector('fieldset').insertAdjacentHTML('beforeend',
                `
                <div class="form-group w-96 mx-auto mt-3">
                    <label for="exampleFormControlInput1"><b>${property}</b></label>
                    <br />
                    <input name='${property}' 
                           value='${dataObject[property]}' 
                           type='text' 
                           class="form-control rounded-lg" id='${property}'>
                </div>
                    
                    `);
        }

        this.inputs = this.form.querySelectorAll('input[type=text]');
    }

}