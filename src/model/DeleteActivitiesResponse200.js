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
import DeleteActivitiesResponse200Data from './DeleteActivitiesResponse200Data';

/**
 * The DeleteActivitiesResponse200 model module.
 * @module model/DeleteActivitiesResponse200
 * @version 1.0.0
 */
class DeleteActivitiesResponse200 {
    /**
     * Constructs a new <code>DeleteActivitiesResponse200</code>.
     * @alias module:model/DeleteActivitiesResponse200
     */
    constructor() { 
        
        DeleteActivitiesResponse200.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteActivitiesResponse200</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteActivitiesResponse200} obj Optional instance to populate.
     * @return {module:model/DeleteActivitiesResponse200} The populated <code>DeleteActivitiesResponse200</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteActivitiesResponse200();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = DeleteActivitiesResponse200Data.constructFromObject(data['data']);

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
 * @member {Boolean} success
 */
DeleteActivitiesResponse200.prototype['success'] = undefined;

/**
 * @member {module:model/DeleteActivitiesResponse200Data} data
 */
DeleteActivitiesResponse200.prototype['data'] = undefined;






export default DeleteActivitiesResponse200;

