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
 * The UpdateAnInstallmentSubscription model module.
 * @module model/UpdateAnInstallmentSubscription
 * @version 1.0.0
 */
class UpdateAnInstallmentSubscription {
    /**
     * Constructs a new <code>UpdateAnInstallmentSubscription</code>.
     * @alias module:model/UpdateAnInstallmentSubscription
     * @param payments {Array.<Object>} Array of payments. It requires a minimum structure as follows: [{ amount:SUM, description:DESCRIPTION, due_at:PAYMENT_DATE }]. Replace SUM with a payment amount, DESCRIPTION with a explanation string, PAYMENT_DATE with a date (format YYYY-MM-DD).
     */
    constructor(payments) { 
        
        UpdateAnInstallmentSubscription.initialize(this, payments);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, payments) { 
        obj['payments'] = payments;
    }

    /**
     * Constructs a <code>UpdateAnInstallmentSubscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAnInstallmentSubscription} obj Optional instance to populate.
     * @return {module:model/UpdateAnInstallmentSubscription} The populated <code>UpdateAnInstallmentSubscription</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAnInstallmentSubscription();

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
 * Array of payments. It requires a minimum structure as follows: [{ amount:SUM, description:DESCRIPTION, due_at:PAYMENT_DATE }]. Replace SUM with a payment amount, DESCRIPTION with a explanation string, PAYMENT_DATE with a date (format YYYY-MM-DD).
 * @member {Array.<Object>} payments
 */
UpdateAnInstallmentSubscription.prototype['payments'] = undefined;

/**
 * Indicates that the Deal value must be set to Installment Subscription's total value
 * @member {Boolean} update_deal_value
 */
UpdateAnInstallmentSubscription.prototype['update_deal_value'] = undefined;






export default UpdateAnInstallmentSubscription;
