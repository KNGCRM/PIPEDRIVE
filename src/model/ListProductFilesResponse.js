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
import AdditionalData from './AdditionalData';
import BaseResponse from './BaseResponse';
import ListProductFilesResponseAllOf from './ListProductFilesResponseAllOf';
import ProductFileItem from './ProductFileItem';

/**
 * The ListProductFilesResponse model module.
 * @module model/ListProductFilesResponse
 * @version 1.0.0
 */
class ListProductFilesResponse {
    /**
     * Constructs a new <code>ListProductFilesResponse</code>.
     * @alias module:model/ListProductFilesResponse
     * @implements module:model/BaseResponse
     * @implements module:model/ListProductFilesResponseAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);ListProductFilesResponseAllOf.initialize(this);
        ListProductFilesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListProductFilesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListProductFilesResponse} obj Optional instance to populate.
     * @return {module:model/ListProductFilesResponse} The populated <code>ListProductFilesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListProductFilesResponse();
            BaseResponse.constructFromObject(data, obj);
            ListProductFilesResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ProductFileItem]);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = AdditionalData.constructFromObject(data['additional_data']);

                delete data['additional_data'];
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
ListProductFilesResponse.prototype['success'] = undefined;

/**
 * The array of files
 * @member {Array.<module:model/ProductFileItem>} data
 */
ListProductFilesResponse.prototype['data'] = undefined;

/**
 * @member {module:model/AdditionalData} additional_data
 */
ListProductFilesResponse.prototype['additional_data'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement ListProductFilesResponseAllOf interface:
/**
 * The array of files
 * @member {Array.<module:model/ProductFileItem>} data
 */
ListProductFilesResponseAllOf.prototype['data'] = undefined;
/**
 * @member {module:model/AdditionalData} additional_data
 */
ListProductFilesResponseAllOf.prototype['additional_data'] = undefined;




export default ListProductFilesResponse;

