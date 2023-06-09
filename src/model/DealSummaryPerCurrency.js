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
 * The DealSummaryPerCurrency model module.
 * @module model/DealSummaryPerCurrency
 * @version 1.0.0
 */
class DealSummaryPerCurrency {
    /**
     * Constructs a new <code>DealSummaryPerCurrency</code>.
     * The currency count summary
     * @alias module:model/DealSummaryPerCurrency
     */
    constructor() { 
        
        DealSummaryPerCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DealSummaryPerCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DealSummaryPerCurrency} obj Optional instance to populate.
     * @return {module:model/DealSummaryPerCurrency} The populated <code>DealSummaryPerCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealSummaryPerCurrency();

            if (data.hasOwnProperty('CURRENCY_ID')) {
                obj['CURRENCY_ID'] = ApiClient.convertToType(data['CURRENCY_ID'], 'Number');

                delete data['CURRENCY_ID'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * Deals count per currency. This parameter is dynamic and changes according to `currency_id` value.
 * @member {Number} CURRENCY_ID
 */
DealSummaryPerCurrency.prototype['CURRENCY_ID'] = undefined;






export default DealSummaryPerCurrency;

