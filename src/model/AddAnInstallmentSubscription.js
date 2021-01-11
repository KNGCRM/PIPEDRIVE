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
 * The AddAnInstallmentSubscription model module.
 * @module model/AddAnInstallmentSubscription
 * @version 1.0.0
 */
class AddAnInstallmentSubscription {
    /**
     * Constructs a new <code>AddAnInstallmentSubscription</code>.
     * @alias module:model/AddAnInstallmentSubscription
     * @param dealId {Number} ID of the Deal this Installment Subscription is associated with
     * @param currency {String} The currency of the Installment Subscription. Accepts a 3-character currency code.
     * @param payments {Array.<Object>} Array of payments. It requires a minimum structure as follows: [{ amount:SUM, description:DESCRIPTION, due_at:PAYMENT_DATE }]. Replace SUM with a payment amount, DESCRIPTION with an explanation string, PAYMENT_DATE with a date (format YYYY-MM-DD).
     */
    constructor(dealId, currency, payments) { 
        
        AddAnInstallmentSubscription.initialize(this, dealId, currency, payments);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, dealId, currency, payments) { 
        obj['deal_id'] = dealId;
        obj['currency'] = currency;
        obj['payments'] = payments;
    }

    /**
     * Constructs a <code>AddAnInstallmentSubscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddAnInstallmentSubscription} obj Optional instance to populate.
     * @return {module:model/AddAnInstallmentSubscription} The populated <code>AddAnInstallmentSubscription</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddAnInstallmentSubscription();

            if (data.hasOwnProperty('deal_id')) {
                obj['deal_id'] = ApiClient.convertToType(data['deal_id'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('payments')) {
                obj['payments'] = ApiClient.convertToType(data['payments'], [Object]);
            }
            if (data.hasOwnProperty('update_deal_value')) {
                obj['update_deal_value'] = ApiClient.convertToType(data['update_deal_value'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * ID of the Deal this Installment Subscription is associated with
 * @member {Number} deal_id
 */
AddAnInstallmentSubscription.prototype['deal_id'] = undefined;

/**
 * The currency of the Installment Subscription. Accepts a 3-character currency code.
 * @member {String} currency
 */
AddAnInstallmentSubscription.prototype['currency'] = undefined;

/**
 * Array of payments. It requires a minimum structure as follows: [{ amount:SUM, description:DESCRIPTION, due_at:PAYMENT_DATE }]. Replace SUM with a payment amount, DESCRIPTION with an explanation string, PAYMENT_DATE with a date (format YYYY-MM-DD).
 * @member {Array.<Object>} payments
 */
AddAnInstallmentSubscription.prototype['payments'] = undefined;

/**
 * Indicates that the Deal value must be set to the Installment Subscription's total value
 * @member {Boolean} update_deal_value
 */
AddAnInstallmentSubscription.prototype['update_deal_value'] = undefined;






export default AddAnInstallmentSubscription;
