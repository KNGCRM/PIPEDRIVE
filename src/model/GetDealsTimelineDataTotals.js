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
 * The GetDealsTimelineDataTotals model module.
 * @module model/GetDealsTimelineDataTotals
 * @version 1.0.0
 */
class GetDealsTimelineDataTotals {
    /**
     * Constructs a new <code>GetDealsTimelineDataTotals</code>.
     * The total values of deals for the given period
     * @alias module:model/GetDealsTimelineDataTotals
     */
    constructor() { 
        
        GetDealsTimelineDataTotals.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetDealsTimelineDataTotals</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetDealsTimelineDataTotals} obj Optional instance to populate.
     * @return {module:model/GetDealsTimelineDataTotals} The populated <code>GetDealsTimelineDataTotals</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDealsTimelineDataTotals();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');

                delete data['count'];
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], Object);

                delete data['values'];
            }
            if (data.hasOwnProperty('weighted_values')) {
                obj['weighted_values'] = ApiClient.convertToType(data['weighted_values'], Object);

                delete data['weighted_values'];
            }
            if (data.hasOwnProperty('open_count')) {
                obj['open_count'] = ApiClient.convertToType(data['open_count'], 'Number');

                delete data['open_count'];
            }
            if (data.hasOwnProperty('open_values')) {
                obj['open_values'] = ApiClient.convertToType(data['open_values'], Object);

                delete data['open_values'];
            }
            if (data.hasOwnProperty('weighted_open_values')) {
                obj['weighted_open_values'] = ApiClient.convertToType(data['weighted_open_values'], Object);

                delete data['weighted_open_values'];
            }
            if (data.hasOwnProperty('won_count')) {
                obj['won_count'] = ApiClient.convertToType(data['won_count'], 'Number');

                delete data['won_count'];
            }
            if (data.hasOwnProperty('won_values')) {
                obj['won_values'] = ApiClient.convertToType(data['won_values'], Object);

                delete data['won_values'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The number of deals for the given period
 * @member {Number} count
 */
GetDealsTimelineDataTotals.prototype['count'] = undefined;

/**
 * The total values of deals grouped by deal currency
 * @member {Object} values
 */
GetDealsTimelineDataTotals.prototype['values'] = undefined;

/**
 * The total weighted values of deals for the given period grouped by deal currency. The weighted value of a deal is calculated as probability times deal value.
 * @member {Object} weighted_values
 */
GetDealsTimelineDataTotals.prototype['weighted_values'] = undefined;

/**
 * The number of open deals for the given period
 * @member {Number} open_count
 */
GetDealsTimelineDataTotals.prototype['open_count'] = undefined;

/**
 * The total values of open deals for the given period grouped by deal currency
 * @member {Object} open_values
 */
GetDealsTimelineDataTotals.prototype['open_values'] = undefined;

/**
 * The total weighted values of open deals for the given period grouped by deal currency. The weighted value of a deal is calculated as probability times deal value.
 * @member {Object} weighted_open_values
 */
GetDealsTimelineDataTotals.prototype['weighted_open_values'] = undefined;

/**
 * The number of won deals for the given period
 * @member {Number} won_count
 */
GetDealsTimelineDataTotals.prototype['won_count'] = undefined;

/**
 * The total values of won deals for the given period grouped by deal currency
 * @member {Object} won_values
 */
GetDealsTimelineDataTotals.prototype['won_values'] = undefined;






export default GetDealsTimelineDataTotals;

