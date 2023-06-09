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
import BaseWebhook from './BaseWebhook';

/**
 * The WebhooksAllOf model module.
 * @module model/WebhooksAllOf
 * @version 1.0.0
 */
class WebhooksAllOf {
    /**
     * Constructs a new <code>WebhooksAllOf</code>.
     * @alias module:model/WebhooksAllOf
     */
    constructor() { 
        
        WebhooksAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhooksAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhooksAllOf} obj Optional instance to populate.
     * @return {module:model/WebhooksAllOf} The populated <code>WebhooksAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhooksAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [BaseWebhook]);

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
 * The array of Webhooks
 * @member {Array.<module:model/BaseWebhook>} data
 */
WebhooksAllOf.prototype['data'] = undefined;






export default WebhooksAllOf;

