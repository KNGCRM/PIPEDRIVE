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
import DeleteProductFollowerResponseData from './DeleteProductFollowerResponseData';

/**
 * The DeleteProductFollowerResponse model module.
 * @module model/DeleteProductFollowerResponse
 * @version 1.0.0
 */
class DeleteProductFollowerResponse {
    /**
     * Constructs a new <code>DeleteProductFollowerResponse</code>.
     * @alias module:model/DeleteProductFollowerResponse
     */
    constructor() { 
        
        DeleteProductFollowerResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteProductFollowerResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteProductFollowerResponse} obj Optional instance to populate.
     * @return {module:model/DeleteProductFollowerResponse} The populated <code>DeleteProductFollowerResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteProductFollowerResponse();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = DeleteProductFollowerResponseData.constructFromObject(data['data']);

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
DeleteProductFollowerResponse.prototype['success'] = undefined;

/**
 * @member {module:model/DeleteProductFollowerResponseData} data
 */
DeleteProductFollowerResponse.prototype['data'] = undefined;






export default DeleteProductFollowerResponse;

