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
import GetRolePipelinesAllOf from './GetRolePipelinesAllOf';
import GetRolePipelinesAllOfData from './GetRolePipelinesAllOfData';

/**
 * The GetRolePipelines model module.
 * @module model/GetRolePipelines
 * @version 1.0.0
 */
class GetRolePipelines {
    /**
     * Constructs a new <code>GetRolePipelines</code>.
     * @alias module:model/GetRolePipelines
     * @implements module:model/BaseResponse
     * @implements module:model/GetRolePipelinesAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);GetRolePipelinesAllOf.initialize(this);
        GetRolePipelines.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRolePipelines</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRolePipelines} obj Optional instance to populate.
     * @return {module:model/GetRolePipelines} The populated <code>GetRolePipelines</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRolePipelines();
            BaseResponse.constructFromObject(data, obj);
            GetRolePipelinesAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = GetRolePipelinesAllOfData.constructFromObject(data['data']);

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
 * If the response is successful or not
 * @member {Boolean} success
 */
GetRolePipelines.prototype['success'] = undefined;

/**
 * @member {module:model/GetRolePipelinesAllOfData} data
 */
GetRolePipelines.prototype['data'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement GetRolePipelinesAllOf interface:
/**
 * @member {module:model/GetRolePipelinesAllOfData} data
 */
GetRolePipelinesAllOf.prototype['data'] = undefined;




export default GetRolePipelines;

