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
import BaseResponse from './BaseResponse';
import ListPermittedUsersResponse2AllOf from './ListPermittedUsersResponse2AllOf';

/**
 * The ListPermittedUsersResponse2 model module.
 * @module model/ListPermittedUsersResponse2
 * @version 1.0.0
 */
class ListPermittedUsersResponse2 {
    /**
     * Constructs a new <code>ListPermittedUsersResponse2</code>.
     * @alias module:model/ListPermittedUsersResponse2
     * @implements module:model/BaseResponse
     * @implements module:model/ListPermittedUsersResponse2AllOf
     */
    constructor() { 
        BaseResponse.initialize(this);ListPermittedUsersResponse2AllOf.initialize(this);
        ListPermittedUsersResponse2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListPermittedUsersResponse2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListPermittedUsersResponse2} obj Optional instance to populate.
     * @return {module:model/ListPermittedUsersResponse2} The populated <code>ListPermittedUsersResponse2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListPermittedUsersResponse2();
            BaseResponse.constructFromObject(data, obj);
            ListPermittedUsersResponse2AllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
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
 * If the response is successful or not
 * @member {Boolean} success
 */
ListPermittedUsersResponse2.prototype['success'] = undefined;

/**
 * The list of permitted Users IDs
 * @member {Array.<Number>} data
 */
ListPermittedUsersResponse2.prototype['data'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement ListPermittedUsersResponse2AllOf interface:
/**
 * The list of permitted Users IDs
 * @member {Array.<Number>} data
 */
ListPermittedUsersResponse2AllOf.prototype['data'] = undefined;




export default ListPermittedUsersResponse2;

