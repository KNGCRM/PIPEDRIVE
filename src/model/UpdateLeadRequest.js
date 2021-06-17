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
import LeadValue from './LeadValue';

/**
 * The UpdateLeadRequest model module.
 * @module model/UpdateLeadRequest
 * @version 1.0.0
 */
class UpdateLeadRequest {
    /**
     * Constructs a new <code>UpdateLeadRequest</code>.
     * @alias module:model/UpdateLeadRequest
     */
    constructor() { 
        
        UpdateLeadRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateLeadRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateLeadRequest} obj Optional instance to populate.
     * @return {module:model/UpdateLeadRequest} The populated <code>UpdateLeadRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateLeadRequest();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');

                delete data['title'];
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Number');

                delete data['owner_id'];
            }
            if (data.hasOwnProperty('label_ids')) {
                obj['label_ids'] = ApiClient.convertToType(data['label_ids'], ['String']);

                delete data['label_ids'];
            }
            if (data.hasOwnProperty('person_id')) {
                obj['person_id'] = ApiClient.convertToType(data['person_id'], 'Number');

                delete data['person_id'];
            }
            if (data.hasOwnProperty('organization_id')) {
                obj['organization_id'] = ApiClient.convertToType(data['organization_id'], 'Number');

                delete data['organization_id'];
            }
            if (data.hasOwnProperty('is_archived')) {
                obj['is_archived'] = ApiClient.convertToType(data['is_archived'], 'Boolean');

                delete data['is_archived'];
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = LeadValue.constructFromObject(data['value']);

                delete data['value'];
            }
            if (data.hasOwnProperty('expected_close_date')) {
                obj['expected_close_date'] = ApiClient.convertToType(data['expected_close_date'], 'Date');

                delete data['expected_close_date'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * The name of the Lead
 * @member {String} title
 */
UpdateLeadRequest.prototype['title'] = undefined;

/**
 * The ID of the User which will be the owner of the created Lead. If not provided, the user making the request will be used.
 * @member {Number} owner_id
 */
UpdateLeadRequest.prototype['owner_id'] = undefined;

/**
 * The IDs of the Lead Labels which will be associated with the Lead
 * @member {Array.<String>} label_ids
 */
UpdateLeadRequest.prototype['label_ids'] = undefined;

/**
 * The ID of a Person which this Lead will be linked to. If the Person does not exist yet, it needs to be created first. A Lead always has to be linked to a Person or Organization or both. 
 * @member {Number} person_id
 */
UpdateLeadRequest.prototype['person_id'] = undefined;

/**
 * The ID of an Organization which this Lead will be linked to. If the Organization does not exist yet, it needs to be created first. A Lead always has to be linked to a Person or Organization or both.
 * @member {Number} organization_id
 */
UpdateLeadRequest.prototype['organization_id'] = undefined;

/**
 * A flag indicating whether the Lead is archived or not
 * @member {Boolean} is_archived
 */
UpdateLeadRequest.prototype['is_archived'] = undefined;

/**
 * @member {module:model/LeadValue} value
 */
UpdateLeadRequest.prototype['value'] = undefined;

/**
 * The date of when the Deal which will be created from the Lead is expected to be closed. In ISO 8601 format: YYYY-MM-DD.
 * @member {Date} expected_close_date
 */
UpdateLeadRequest.prototype['expected_close_date'] = undefined;






export default UpdateLeadRequest;

