import { selectData } from '../store/selectData.js';

/**
 * Represents the application model. The model contains the data, the information 
 * regarding the sneakers such as: material, color and swoosh. The model can obtain data either 
 * from a database or files, which could be located locally or externally. This 
 * class holds a reference to an exernal file that contains data for select options.
 * 
 * The model does not talk directly to a view, instead is made available to a 
 * controller which accesses it when needed. 
 */
export class SneakersModel {
    static store = selectData; // external resource

    /**
     * Creates an object representing the sneakers model.
     * 
     * @returns {SneakersModel} The object representing the sneakers model.
     */
    constructor() {
        this.material = "undefined";
        this.color = "undefined";
        this.swoosh = "undefined";
    }

    /**
     * Returns an array of this object's properties names.
     * The returned array is used by View to dynamically render the selects. 
     * For each Model property, a select is being rendered in View.
     * 
     * @returns {Array} array of property names (strings)
     */
    getProperties() {
        return Object.keys(this);
    }

    /**
     * Gets the data from the external resource to be used as select options.
     * 
     * @param {String} selectID - select ID
     * @returns {Array} array of select's options (strings)
     */
    getOptions(selectID) {
        // 1. extract the data from the external resource (SneakersModel.store).
        let options; // a JS object
        switch (selectID) {
            case 'material':
                options = Object.keys(SneakersModel.store);
                break;
            case 'color':
                options = Object.keys(SneakersModel.store[this.material]);
                break;
            case 'swoosh':
                options = Object.keys(SneakersModel.store[this.material][this.color]);
                break;
        }

        // 2. return select options
        return options;
    }

    /**
     * Resets this object's properties to "undefined". Not all properties are
     * going to be reset, only those that are listed after the property defined 
     * by this method parameter. 
     * 
     * @param {type} property - property from which the reset starts.
     */
    resetNextProperties(property) {
        let properties = Object.keys(this);
        let index = properties.indexOf(property);
        while (++index < properties.length) {
            this[properties[index]] = "undefined";
        }
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