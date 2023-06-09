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
import ItemSearchAdditionalData from './ItemSearchAdditionalData';
import OrganizationSearchResponseAllOf from './OrganizationSearchResponseAllOf';
import OrganizationSearchResponseAllOfData from './OrganizationSearchResponseAllOfData';

/**
 * The OrganizationSearchResponse model module.
 * @module model/OrganizationSearchResponse
 * @version 1.0.0
 */
class OrganizationSearchResponse {
    /**
     * Constructs a new <code>OrganizationSearchResponse</code>.
     * @alias module:model/OrganizationSearchResponse
     * @implements module:model/BaseResponse
     * @implements module:model/OrganizationSearchResponseAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);OrganizationSearchResponseAllOf.initialize(this);
        OrganizationSearchResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationSearchResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationSearchResponse} obj Optional instance to populate.
     * @return {module:model/OrganizationSearchResponse} The populated <code>OrganizationSearchResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationSearchResponse();
            BaseResponse.constructFromObject(data, obj);
            OrganizationSearchResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = OrganizationSearchResponseAllOfData.constructFromObject(data['data']);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = ItemSearchAdditionalData.constructFromObject(data['additional_data']);

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
OrganizationSearchResponse.prototype['success'] = undefined;

/**
 * @member {module:model/OrganizationSearchResponseAllOfData} data
 */
OrganizationSearchResponse.prototype['data'] = undefined;

/**
 * @member {module:model/ItemSearchAdditionalData} additional_data
 */
OrganizationSearchResponse.prototype['additional_data'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement OrganizationSearchResponseAllOf interface:
/**
 * @member {module:model/OrganizationSearchResponseAllOfData} data
 */
OrganizationSearchResponseAllOf.prototype['data'] = undefined;
/**
 * @member {module:model/ItemSearchAdditionalData} additional_data
 */
OrganizationSearchResponseAllOf.prototype['additional_data'] = undefined;




export default OrganizationSearchResponse;

