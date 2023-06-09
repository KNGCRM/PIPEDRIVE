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
 * The WebhooksDeleteForbiddenSchemaAllOf model module.
 * @module model/WebhooksDeleteForbiddenSchemaAllOf
 * @version 1.0.0
 */
class WebhooksDeleteForbiddenSchemaAllOf {
    /**
     * Constructs a new <code>WebhooksDeleteForbiddenSchemaAllOf</code>.
     * @alias module:model/WebhooksDeleteForbiddenSchemaAllOf
     */
    constructor() { 
        
        WebhooksDeleteForbiddenSchemaAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhooksDeleteForbiddenSchemaAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhooksDeleteForbiddenSchemaAllOf} obj Optional instance to populate.
     * @return {module:model/WebhooksDeleteForbiddenSchemaAllOf} The populated <code>WebhooksDeleteForbiddenSchemaAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhooksDeleteForbiddenSchemaAllOf();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');

                delete data['message'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The error message
 * @member {String} message
 */
WebhooksDeleteForbiddenSchemaAllOf.prototype['message'] = undefined;






export default WebhooksDeleteForbiddenSchemaAllOf;

