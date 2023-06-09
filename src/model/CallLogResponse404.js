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
 * The CallLogResponse404 model module.
 * @module model/CallLogResponse404
 * @version 1.0.0
 */
class CallLogResponse404 {
    /**
     * Constructs a new <code>CallLogResponse404</code>.
     * @alias module:model/CallLogResponse404
     */
    constructor() { 
        
        CallLogResponse404.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CallLogResponse404</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CallLogResponse404} obj Optional instance to populate.
     * @return {module:model/CallLogResponse404} The populated <code>CallLogResponse404</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CallLogResponse404();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');

                delete data['error'];
            }
            if (data.hasOwnProperty('error_info')) {
                obj['error_info'] = ApiClient.convertToType(data['error_info'], 'String');

                delete data['error_info'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = ApiClient.convertToType(data['additional_data'], Object);

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
 * @member {Boolean} success
 */
CallLogResponse404.prototype['success'] = undefined;

/**
 * The description of the error
 * @member {String} error
 */
CallLogResponse404.prototype['error'] = undefined;

/**
 * A message describing how to solve the problem
 * @member {String} error_info
 */
CallLogResponse404.prototype['error_info'] = undefined;

/**
 * @member {Object} data
 */
CallLogResponse404.prototype['data'] = undefined;

/**
 * @member {Object} additional_data
 */
CallLogResponse404.prototype['additional_data'] = undefined;






export default CallLogResponse404;

