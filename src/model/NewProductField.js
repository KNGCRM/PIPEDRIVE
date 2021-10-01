/**
 * Pipedrive API v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The NewProductField model module.
 * @module model/NewProductField
 * @version 1.0.0
 */
class NewProductField {
    /**
     * Constructs a new <code>NewProductField</code>.
     * @alias module:model/NewProductField
     * @param name {String} Name of the field
     * @param fieldType {module:model/NewProductField.FieldTypeEnum} Type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td><tr><td>`text`</td><td>Long text (up to 65k characters)</td><tr><td>`double`</td><td>Numeric value</td><tr><td>`monetary`</td><td>Monetary field (has a numeric value and a currency value)</td><tr><td>`date`</td><td>Date (format YYYY-MM-DD)</td><tr><td>`set`</td><td>Options field with a possibility of having multiple chosen options</td><tr><td>`enum`</td><td>Options field with a single possible chosen option</td><tr><td>`user`</td><td>User field (contains a user ID of another Pipedrive user)</td><tr><td>`org`</td><td>Organization field (contains an organization ID which is stored on the same account)</td><tr><td>`people`</td><td>Person field (contains a product ID which is stored on the same account)</td><tr><td>`phone`</td><td>Phone field (up to 255 numbers and/or characters)</td><tr><td>`time`</td><td>Time field (format HH:MM:SS)</td><tr><td>`timerange`</td><td>Time-range field (has a start time and end time value, both HH:MM:SS)</td><tr><td>`daterange`</td><td>Date-range field (has a start date and end date value, both YYYY-MM-DD)</td><tr><td>`address`</td><td>Address field (autocompleted by Google Maps)</dd></table>
     */
    constructor(name, fieldType) { 
        
        NewProductField.initialize(this, name, fieldType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, fieldType) { 
        obj['name'] = name;
        obj['field_type'] = fieldType;
    }

    /**
     * Constructs a <code>NewProductField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewProductField} obj Optional instance to populate.
     * @return {module:model/NewProductField} The populated <code>NewProductField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewProductField();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], [Object]);

                delete data['options'];
            }
            if (data.hasOwnProperty('field_type')) {
                obj['field_type'] = ApiClient.convertToType(data['field_type'], 'String');

                delete data['field_type'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * Name of the field
 * @member {String} name
 */
NewProductField.prototype['name'] = undefined;

/**
 * When `field_type` is either `set` or `enum`, possible options must be supplied as a JSON-encoded sequential array, for example:</br>`[{\"label\":\"red\"}, {\"label\":\"blue\"}, {\"label\":\"lilac\"}]`
 * @member {Array.<Object>} options
 */
NewProductField.prototype['options'] = undefined;

/**
 * Type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td><tr><td>`text`</td><td>Long text (up to 65k characters)</td><tr><td>`double`</td><td>Numeric value</td><tr><td>`monetary`</td><td>Monetary field (has a numeric value and a currency value)</td><tr><td>`date`</td><td>Date (format YYYY-MM-DD)</td><tr><td>`set`</td><td>Options field with a possibility of having multiple chosen options</td><tr><td>`enum`</td><td>Options field with a single possible chosen option</td><tr><td>`user`</td><td>User field (contains a user ID of another Pipedrive user)</td><tr><td>`org`</td><td>Organization field (contains an organization ID which is stored on the same account)</td><tr><td>`people`</td><td>Person field (contains a product ID which is stored on the same account)</td><tr><td>`phone`</td><td>Phone field (up to 255 numbers and/or characters)</td><tr><td>`time`</td><td>Time field (format HH:MM:SS)</td><tr><td>`timerange`</td><td>Time-range field (has a start time and end time value, both HH:MM:SS)</td><tr><td>`daterange`</td><td>Date-range field (has a start date and end date value, both YYYY-MM-DD)</td><tr><td>`address`</td><td>Address field (autocompleted by Google Maps)</dd></table>
 * @member {module:model/NewProductField.FieldTypeEnum} field_type
 */
NewProductField.prototype['field_type'] = undefined;





/**
 * Allowed values for the <code>field_type</code> property.
 * @enum {String}
 * @readonly
 */
NewProductField['FieldTypeEnum'] = {

    /**
     * value: "varchar"
     * @const
     */
    "varchar": "varchar",

    /**
     * value: "varchar_auto"
     * @const
     */
    "varchar_auto": "varchar_auto",

    /**
     * value: "text"
     * @const
     */
    "text": "text",

    /**
     * value: "double"
     * @const
     */
    "double": "double",

    /**
     * value: "monetary"
     * @const
     */
    "monetary": "monetary",

    /**
     * value: "date"
     * @const
     */
    "date": "date",

    /**
     * value: "set"
     * @const
     */
    "set": "set",

    /**
     * value: "enum"
     * @const
     */
    "enum": "enum",

    /**
     * value: "user"
     * @const
     */
    "user": "user",

    /**
     * value: "org"
     * @const
     */
    "org": "org",

    /**
     * value: "people"
     * @const
     */
    "people": "people",

    /**
     * value: "phone"
     * @const
     */
    "phone": "phone",

    /**
     * value: "time"
     * @const
     */
    "time": "time",

    /**
     * value: "timerange"
     * @const
     */
    "timerange": "timerange",

    /**
     * value: "daterange"
     * @const
     */
    "daterange": "daterange",

    /**
     * value: "address"
     * @const
     */
    "address": "address"
};



export default NewProductField;

