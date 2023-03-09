/**
 * Responds to user inputs. Here, we use the FormData, a JS built-in class that 
 * provides a way to easily construct a set of key/value pairs representing form 
 * fields and their values.
 * 
 * More at {@link https://developer.mozilla.org/en-US/docs/Web/API/FormData FormData}.
 */

/**
* A controller for a form, responsible for responding to user inputs. It uses the
* FormData built-in class to easily construct key/value pairs representing form fields
* and their values.
*
* @class
* @param {Object} model - The model to update with the form data.
* @param {Object} view - The view that displays the form to the user.
*/

export class FormController {

    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.createInputs(this.model.getInputData());

        // register one event handler for all input 'change' events
        this.view.inputs.forEach((input) => {
            input.addEventListener('change', this.handleInputChange);
        });

        // register form submit handler
        this.view.form.addEventListener('submit', this.handleFormSubmit);

    }

    /**
    *
    * Event handler for when an input value changes. Updates the model with the new value.
    * @function
    * @param {Object} event - The input change event.
    */
    handleInputChange = (event) => {
        //update model
        let input = event.target;
        this.model[input.name] = input.value;
    }

    /**
    * Event handler for when the form is submitted. Prevents the default form submission
    * action and persists the model data to the server. 
    * @function
    * @param {Object} event - The form submission event.
    */
    handleFormSubmit = (event) => {
        //prevent the default action of a form (prevent submitting it)
        event.preventDefault();
        this.model.persist();
    }

}