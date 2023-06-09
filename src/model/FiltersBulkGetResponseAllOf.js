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
import FilterGetItem from './FilterGetItem';

/**
 * The FiltersBulkGetResponseAllOf model module.
 * @module model/FiltersBulkGetResponseAllOf
 * @version 1.0.0
 */
class FiltersBulkGetResponseAllOf {
    /**
     * Constructs a new <code>FiltersBulkGetResponseAllOf</code>.
     * @alias module:model/FiltersBulkGetResponseAllOf
     */
    constructor() { 
        
        FiltersBulkGetResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FiltersBulkGetResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FiltersBulkGetResponseAllOf} obj Optional instance to populate.
     * @return {module:model/FiltersBulkGetResponseAllOf} The populated <code>FiltersBulkGetResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FiltersBulkGetResponseAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [FilterGetItem]);

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
 * The array of filters
 * @member {Array.<module:model/FilterGetItem>} data
 */
FiltersBulkGetResponseAllOf.prototype['data'] = undefined;






export default FiltersBulkGetResponseAllOf;

