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
import GetRolesAllOf1AdditionalDataPagination from './GetRolesAllOf1AdditionalDataPagination';

/**
 * The GetRolesAllOf1AdditionalData model module.
 * @module model/GetRolesAllOf1AdditionalData
 * @version 1.0.0
 */
class GetRolesAllOf1AdditionalData {
    /**
     * Constructs a new <code>GetRolesAllOf1AdditionalData</code>.
     * The additional data in the Role list
     * @alias module:model/GetRolesAllOf1AdditionalData
     */
    constructor() { 
        
        GetRolesAllOf1AdditionalData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRolesAllOf1AdditionalData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRolesAllOf1AdditionalData} obj Optional instance to populate.
     * @return {module:model/GetRolesAllOf1AdditionalData} The populated <code>GetRolesAllOf1AdditionalData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRolesAllOf1AdditionalData();

            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = GetRolesAllOf1AdditionalDataPagination.constructFromObject(data['pagination']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetRolesAllOf1AdditionalDataPagination} pagination
 */
GetRolesAllOf1AdditionalData.prototype['pagination'] = undefined;






export default GetRolesAllOf1AdditionalData;
