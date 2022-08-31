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
 * The NewOrganizationAllOf model module.
 * @module model/NewOrganizationAllOf
 * @version 1.0.0
 */
class NewOrganizationAllOf {
    /**
     * Constructs a new <code>NewOrganizationAllOf</code>.
     * @alias module:model/NewOrganizationAllOf
     * @param name {String} The name of the organization
     */
    constructor(name) { 
        
        NewOrganizationAllOf.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>NewOrganizationAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewOrganizationAllOf} obj Optional instance to populate.
     * @return {module:model/NewOrganizationAllOf} The populated <code>NewOrganizationAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewOrganizationAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The name of the organization
 * @member {String} name
 */
NewOrganizationAllOf.prototype['name'] = undefined;

/**
 * The optional creation date & time of the organization in UTC. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} add_time
 */
NewOrganizationAllOf.prototype['add_time'] = undefined;






export default NewOrganizationAllOf;

