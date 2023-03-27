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
 * The DealCollectionResponseObject model module.
 * @module model/DealCollectionResponseObject
 * @version 1.0.0
 */
class DealCollectionResponseObject {
    /**
     * Constructs a new <code>DealCollectionResponseObject</code>.
     * @alias module:model/DealCollectionResponseObject
     */
    constructor() { 
        
        DealCollectionResponseObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DealCollectionResponseObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DealCollectionResponseObject} obj Optional instance to populate.
     * @return {module:model/DealCollectionResponseObject} The populated <code>DealCollectionResponseObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealCollectionResponseObject();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('creator_user_id')) {
                obj['creator_user_id'] = ApiClient.convertToType(data['creator_user_id'], 'Number');

                delete data['creator_user_id'];
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');

                delete data['user_id'];
            }
            if (data.hasOwnProperty('person_id')) {
                obj['person_id'] = ApiClient.convertToType(data['person_id'], 'Number');

                delete data['person_id'];
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = ApiClient.convertToType(data['org_id'], 'Number');

                delete data['org_id'];
            }
            if (data.hasOwnProperty('stage_id')) {
                obj['stage_id'] = ApiClient.convertToType(data['stage_id'], 'Number');

                delete data['stage_id'];
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');

                delete data['title'];
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');

                delete data['value'];
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');

                delete data['currency'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');

                delete data['update_time'];
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');

                delete data['status'];
            }
            if (data.hasOwnProperty('probability')) {
                obj['probability'] = ApiClient.convertToType(data['probability'], 'Number');

                delete data['probability'];
            }
            if (data.hasOwnProperty('lost_reason')) {
                obj['lost_reason'] = ApiClient.convertToType(data['lost_reason'], 'String');

                delete data['lost_reason'];
            }
            if (data.hasOwnProperty('visible_to')) {
                obj['visible_to'] = ApiClient.convertToType(data['visible_to'], 'String');

                delete data['visible_to'];
            }
            if (data.hasOwnProperty('close_time')) {
                obj['close_time'] = ApiClient.convertToType(data['close_time'], 'String');

                delete data['close_time'];
            }
            if (data.hasOwnProperty('pipeline_id')) {
                obj['pipeline_id'] = ApiClient.convertToType(data['pipeline_id'], 'Number');

                delete data['pipeline_id'];
            }
            if (data.hasOwnProperty('won_time')) {
                obj['won_time'] = ApiClient.convertToType(data['won_time'], 'String');

                delete data['won_time'];
            }
            if (data.hasOwnProperty('lost_time')) {
                obj['lost_time'] = ApiClient.convertToType(data['lost_time'], 'String');

                delete data['lost_time'];
            }
            if (data.hasOwnProperty('expected_close_date')) {
                obj['expected_close_date'] = ApiClient.convertToType(data['expected_close_date'], 'Date');

                delete data['expected_close_date'];
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'Number');

                delete data['label'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the deal
 * @member {Number} id
 */
DealCollectionResponseObject.prototype['id'] = undefined;

/**
 * The ID of the deal creator
 * @member {Number} creator_user_id
 */
DealCollectionResponseObject.prototype['creator_user_id'] = undefined;

/**
 * The ID of the user
 * @member {Number} user_id
 */
DealCollectionResponseObject.prototype['user_id'] = undefined;

/**
 * The ID of the person associated with the deal
 * @member {Number} person_id
 */
DealCollectionResponseObject.prototype['person_id'] = undefined;

/**
 * The ID of the organization associated with the deal
 * @member {Number} org_id
 */
DealCollectionResponseObject.prototype['org_id'] = undefined;

/**
 * The ID of the deal stage
 * @member {Number} stage_id
 */
DealCollectionResponseObject.prototype['stage_id'] = undefined;

/**
 * The title of the deal
 * @member {String} title
 */
DealCollectionResponseObject.prototype['title'] = undefined;

/**
 * The value of the deal
 * @member {Number} value
 */
DealCollectionResponseObject.prototype['value'] = undefined;

/**
 * The currency associated with the deal
 * @member {String} currency
 */
DealCollectionResponseObject.prototype['currency'] = undefined;

/**
 * The creation date and time of the deal in UTC. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} add_time
 */
DealCollectionResponseObject.prototype['add_time'] = undefined;

/**
 * The last update date and time of the deal in UTC. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} update_time
 */
DealCollectionResponseObject.prototype['update_time'] = undefined;

/**
 * The status of the deal
 * @member {String} status
 */
DealCollectionResponseObject.prototype['status'] = undefined;

/**
 * The success probability percentage of the deal
 * @member {Number} probability
 */
DealCollectionResponseObject.prototype['probability'] = undefined;

/**
 * The reason for losing the deal
 * @member {String} lost_reason
 */
DealCollectionResponseObject.prototype['lost_reason'] = undefined;

/**
 * The visibility of the deal
 * @member {String} visible_to
 */
DealCollectionResponseObject.prototype['visible_to'] = undefined;

/**
 * The date and time of closing the deal in UTC. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} close_time
 */
DealCollectionResponseObject.prototype['close_time'] = undefined;

/**
 * The ID of the pipeline associated with the deal
 * @member {Number} pipeline_id
 */
DealCollectionResponseObject.prototype['pipeline_id'] = undefined;

/**
 * The date and time of changing the deal status to won in UTC. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} won_time
 */
DealCollectionResponseObject.prototype['won_time'] = undefined;

/**
 * The date and time of changing the deal status to lost in UTC. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} lost_time
 */
DealCollectionResponseObject.prototype['lost_time'] = undefined;

/**
 * The expected close date of the deal
 * @member {Date} expected_close_date
 */
DealCollectionResponseObject.prototype['expected_close_date'] = undefined;

/**
 * The label assigned to the deal
 * @member {Number} label
 */
DealCollectionResponseObject.prototype['label'] = undefined;






export default DealCollectionResponseObject;

