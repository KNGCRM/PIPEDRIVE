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
import BasePipelineWithSelectedFlag from './BasePipelineWithSelectedFlag';
import BaseResponse from './BaseResponse';
import GetAllPipelinesAllOf from './GetAllPipelinesAllOf';

/**
 * The GetAllPipelines model module.
 * @module model/GetAllPipelines
 * @version 1.0.0
 */
class GetAllPipelines {
    /**
     * Constructs a new <code>GetAllPipelines</code>.
     * @alias module:model/GetAllPipelines
     * @implements module:model/BaseResponse
     * @implements module:model/GetAllPipelinesAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);GetAllPipelinesAllOf.initialize(this);
        GetAllPipelines.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAllPipelines</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAllPipelines} obj Optional instance to populate.
     * @return {module:model/GetAllPipelines} The populated <code>GetAllPipelines</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAllPipelines();
            BaseResponse.constructFromObject(data, obj);
            GetAllPipelinesAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [BasePipelineWithSelectedFlag]);

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
GetAllPipelines.prototype['success'] = undefined;

/**
 * Pipelines array
 * @member {Array.<module:model/BasePipelineWithSelectedFlag>} data
 */
GetAllPipelines.prototype['data'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement GetAllPipelinesAllOf interface:
/**
 * Pipelines array
 * @member {Array.<module:model/BasePipelineWithSelectedFlag>} data
 */
GetAllPipelinesAllOf.prototype['data'] = undefined;




export default GetAllPipelines;

