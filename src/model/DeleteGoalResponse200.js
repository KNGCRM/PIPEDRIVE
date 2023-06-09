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
 * The DeleteGoalResponse200 model module.
 * @module model/DeleteGoalResponse200
 * @version 1.0.0
 */
class DeleteGoalResponse200 {
    /**
     * Constructs a new <code>DeleteGoalResponse200</code>.
     * @alias module:model/DeleteGoalResponse200
     */
    constructor() { 
        
        DeleteGoalResponse200.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteGoalResponse200</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteGoalResponse200} obj Optional instance to populate.
     * @return {module:model/DeleteGoalResponse200} The populated <code>DeleteGoalResponse200</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteGoalResponse200();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * If the request was successful or not
 * @member {Boolean} success
 */
DeleteGoalResponse200.prototype['success'] = undefined;






export default DeleteGoalResponse200;

