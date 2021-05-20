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
import VisibleTo from './VisibleTo';

/**
 * The BasicPerson model module.
 * @module model/BasicPerson
 * @version 1.0.0
 */
class BasicPerson {
    /**
     * Constructs a new <code>BasicPerson</code>.
     * @alias module:model/BasicPerson
     */
    constructor() { 
        
        BasicPerson.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BasicPerson</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasicPerson} obj Optional instance to populate.
     * @return {module:model/BasicPerson} The populated <code>BasicPerson</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasicPerson();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Number');

                delete data['owner_id'];
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = ApiClient.convertToType(data['org_id'], 'Number');

                delete data['org_id'];
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], ['String']);

                delete data['email'];
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], ['String']);

                delete data['phone'];
            }
            if (data.hasOwnProperty('visible_to')) {
                obj['visible_to'] = ApiClient.convertToType(data['visible_to'], VisibleTo);

                delete data['visible_to'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * Person name
 * @member {String} name
 */
BasicPerson.prototype['name'] = undefined;

/**
 * ID of the user who will be marked as the owner of this person. When omitted, the authorized user ID will be used.
 * @member {Number} owner_id
 */
BasicPerson.prototype['owner_id'] = undefined;

/**
 * ID of the organization this person will belong to.
 * @member {Number} org_id
 */
BasicPerson.prototype['org_id'] = undefined;

/**
 * Email addresses (one or more) associated with the person, presented in the same manner as received by GET request of a person.
 * @member {Array.<String>} email
 */
BasicPerson.prototype['email'] = undefined;

/**
 * Phone numbers (one or more) associated with the person, presented in the same manner as received by GET request of a person.
 * @member {Array.<String>} phone
 */
BasicPerson.prototype['phone'] = undefined;

/**
 * Visibility of the person. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.<table><tr><th>Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner &amp; followers (private)</td></tr><tr><td>`3`</td><td>Entire company (shared)</td></tr></table>
 * @member {module:model/VisibleTo} visible_to
 */
BasicPerson.prototype['visible_to'] = undefined;






export default BasicPerson;

