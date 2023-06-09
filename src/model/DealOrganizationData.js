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
 * The DealOrganizationData model module.
 * @module model/DealOrganizationData
 * @version 1.0.0
 */
class DealOrganizationData {
    /**
     * Constructs a new <code>DealOrganizationData</code>.
     * The organization which is associated with the deal
     * @alias module:model/DealOrganizationData
     */
    constructor() { 
        
        DealOrganizationData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DealOrganizationData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DealOrganizationData} obj Optional instance to populate.
     * @return {module:model/DealOrganizationData} The populated <code>DealOrganizationData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealOrganizationData();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('people_count')) {
                obj['people_count'] = ApiClient.convertToType(data['people_count'], 'Number');

                delete data['people_count'];
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Number');

                delete data['owner_id'];
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');

                delete data['address'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
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
 * The name of the organization associated with the deal
 * @member {String} name
 */
DealOrganizationData.prototype['name'] = undefined;

/**
 * The number of people connected with the organization that is associated with the deal
 * @member {Number} people_count
 */
DealOrganizationData.prototype['people_count'] = undefined;

/**
 * The ID of the owner of the organization that is associated with the deal
 * @member {Number} owner_id
 */
DealOrganizationData.prototype['owner_id'] = undefined;

/**
 * The address of the organization that is associated with the deal
 * @member {String} address
 */
DealOrganizationData.prototype['address'] = undefined;

/**
 * Whether the associated organization is active or not
 * @member {Boolean} active_flag
 */
DealOrganizationData.prototype['active_flag'] = undefined;

/**
 * The BCC email of the organization associated with the deal
 * @member {String} cc_email
 */
DealOrganizationData.prototype['cc_email'] = undefined;






export default DealOrganizationData;

