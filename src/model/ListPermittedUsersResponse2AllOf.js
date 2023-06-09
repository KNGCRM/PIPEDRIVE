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
 * The ListPermittedUsersResponse2AllOf model module.
 * @module model/ListPermittedUsersResponse2AllOf
 * @version 1.0.0
 */
class ListPermittedUsersResponse2AllOf {
    /**
     * Constructs a new <code>ListPermittedUsersResponse2AllOf</code>.
     * @alias module:model/ListPermittedUsersResponse2AllOf
     */
    constructor() { 
        
        ListPermittedUsersResponse2AllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListPermittedUsersResponse2AllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListPermittedUsersResponse2AllOf} obj Optional instance to populate.
     * @return {module:model/ListPermittedUsersResponse2AllOf} The populated <code>ListPermittedUsersResponse2AllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListPermittedUsersResponse2AllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], ['Number']);

                delete data['data'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * The list of permitted Users IDs
 * @member {Array.<Number>} data
 */
ListPermittedUsersResponse2AllOf.prototype['data'] = undefined;






export default ListPermittedUsersResponse2AllOf;

