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
import BaseResponseWithStatus from './BaseResponseWithStatus';
import WebhookBadRequestAllOf from './WebhookBadRequestAllOf';

/**
 * The WebhookBadRequest model module.
 * @module model/WebhookBadRequest
 * @version 1.0.0
 */
class WebhookBadRequest {
    /**
     * Constructs a new <code>WebhookBadRequest</code>.
     * @alias module:model/WebhookBadRequest
     * @implements module:model/BaseResponseWithStatus
     * @implements module:model/WebhookBadRequestAllOf
     */
    constructor() { 
        BaseResponseWithStatus.initialize(this);WebhookBadRequestAllOf.initialize(this);
        WebhookBadRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookBadRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookBadRequest} obj Optional instance to populate.
     * @return {module:model/WebhookBadRequest} The populated <code>WebhookBadRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookBadRequest();
            BaseResponseWithStatus.constructFromObject(data, obj);
            WebhookBadRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');

                delete data['status'];
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], Object);

                delete data['errors'];
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
WebhookBadRequest.prototype['success'] = undefined;

/**
 * The status of the response
 * @member {String} status
 */
WebhookBadRequest.prototype['status'] = undefined;

/**
 * List of errors
 * @member {Object} errors
 */
WebhookBadRequest.prototype['errors'] = undefined;


// Implement BaseResponseWithStatus interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponseWithStatus.prototype['success'] = undefined;
/**
 * The status of the response
 * @member {String} status
 */
BaseResponseWithStatus.prototype['status'] = undefined;
// Implement WebhookBadRequestAllOf interface:
/**
 * List of errors
 * @member {Object} errors
 */
WebhookBadRequestAllOf.prototype['errors'] = undefined;




export default WebhookBadRequest;

