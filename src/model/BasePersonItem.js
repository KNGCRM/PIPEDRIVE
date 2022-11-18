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
import BasePersonItemEmail from './BasePersonItemEmail';
import BasePersonItemPhone from './BasePersonItemPhone';
import PictureDataWithID from './PictureDataWithID';

/**
 * The BasePersonItem model module.
 * @module model/BasePersonItem
 * @version 1.0.0
 */
class BasePersonItem {
    /**
     * Constructs a new <code>BasePersonItem</code>.
     * @alias module:model/BasePersonItem
     */
    constructor() { 
        
        BasePersonItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BasePersonItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasePersonItem} obj Optional instance to populate.
     * @return {module:model/BasePersonItem} The populated <code>BasePersonItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasePersonItem();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('company_id')) {
                obj['company_id'] = ApiClient.convertToType(data['company_id'], 'Number');

                delete data['company_id'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], [BasePersonItemPhone]);

                delete data['phone'];
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], [BasePersonItemEmail]);

                delete data['email'];
            }
            if (data.hasOwnProperty('first_char')) {
                obj['first_char'] = ApiClient.convertToType(data['first_char'], 'String');

                delete data['first_char'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');

                delete data['update_time'];
            }
            if (data.hasOwnProperty('visible_to')) {
                obj['visible_to'] = ApiClient.convertToType(data['visible_to'], 'String');

                delete data['visible_to'];
            }
            if (data.hasOwnProperty('picture_id')) {
                obj['picture_id'] = PictureDataWithID.constructFromObject(data['picture_id']);

                delete data['picture_id'];
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'Number');

                delete data['label'];
            }
            if (data.hasOwnProperty('org_name')) {
                obj['org_name'] = ApiClient.convertToType(data['org_name'], 'String');

                delete data['org_name'];
            }
            if (data.hasOwnProperty('owner_name')) {
                obj['owner_name'] = ApiClient.convertToType(data['owner_name'], 'String');

                delete data['owner_name'];
            }
            if (data.hasOwnProperty('cc_email')) {
                obj['cc_email'] = ApiClient.convertToType(data['cc_email'], 'String');

                delete data['cc_email'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the person
 * @member {Number} id
 */
BasePersonItem.prototype['id'] = undefined;

/**
 * The ID of the company related to the person
 * @member {Number} company_id
 */
BasePersonItem.prototype['company_id'] = undefined;

/**
 * Whether the person is active or not
 * @member {Boolean} active_flag
 */
BasePersonItem.prototype['active_flag'] = undefined;

/**
 * A phone number supplied as a string or an array of phone objects related to the person. The structure of the array is as follows: `[{ \"value\": \"12345\", \"primary\": \"true\", \"label\": \"mobile\" }]`. Please note that only `value` is required.
 * @member {Array.<module:model/BasePersonItemPhone>} phone
 */
BasePersonItem.prototype['phone'] = undefined;

/**
 * An email address as a string or an array of email objects related to the person. The structure of the array is as follows: `[{ \"value\": \"mail@example.com\", \"primary\": \"true\", \"label\": \"main\" } ]`. Please note that only `value` is required.
 * @member {Array.<module:model/BasePersonItemEmail>} email
 */
BasePersonItem.prototype['email'] = undefined;

/**
 * The first letter of the name of the person
 * @member {String} first_char
 */
BasePersonItem.prototype['first_char'] = undefined;

/**
 * The date and time when the person was added/created. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} add_time
 */
BasePersonItem.prototype['add_time'] = undefined;

/**
 * The last updated date and time of the person. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} update_time
 */
BasePersonItem.prototype['update_time'] = undefined;

/**
 * The visibility group ID of who can see the person
 * @member {String} visible_to
 */
BasePersonItem.prototype['visible_to'] = undefined;

/**
 * @member {module:model/PictureDataWithID} picture_id
 */
BasePersonItem.prototype['picture_id'] = undefined;

/**
 * The label assigned to the person
 * @member {Number} label
 */
BasePersonItem.prototype['label'] = undefined;

/**
 * The name of the organization associated with the person
 * @member {String} org_name
 */
BasePersonItem.prototype['org_name'] = undefined;

/**
 * The name of the owner associated with the person
 * @member {String} owner_name
 */
BasePersonItem.prototype['owner_name'] = undefined;

/**
 * The BCC email associated with the person
 * @member {String} cc_email
 */
BasePersonItem.prototype['cc_email'] = undefined;






export default BasePersonItem;

