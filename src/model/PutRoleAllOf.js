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
import PutRoleAllOfData from './PutRoleAllOfData';

/**
 * The PutRoleAllOf model module.
 * @module model/PutRoleAllOf
 * @version 1.0.0
 */
class PutRoleAllOf {
    /**
     * Constructs a new <code>PutRoleAllOf</code>.
     * @alias module:model/PutRoleAllOf
     */
    constructor() { 
        
        PutRoleAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutRoleAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutRoleAllOf} obj Optional instance to populate.
     * @return {module:model/PutRoleAllOf} The populated <code>PutRoleAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutRoleAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = PutRoleAllOfData.constructFromObject(data['data']);

                delete data['data'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * @member {module:model/PutRoleAllOfData} data
 */
PutRoleAllOf.prototype['data'] = undefined;






export default PutRoleAllOf;

