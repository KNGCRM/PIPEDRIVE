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
import AddNoteRequestAllOf from './AddNoteRequestAllOf';
import NoteParams from './NoteParams';
import NumberBoolean from './NumberBoolean';

/**
 * The AddNoteRequest model module.
 * @module model/AddNoteRequest
 * @version 1.0.0
 */
class AddNoteRequest {
    /**
     * Constructs a new <code>AddNoteRequest</code>.
     * @alias module:model/AddNoteRequest
     * @implements module:model/AddNoteRequestAllOf
     * @implements module:model/NoteParams
     * @param content {String} The content of the note in HTML format. Subject to sanitization on the back-end.
     */
    constructor(content) { 
        AddNoteRequestAllOf.initialize(this, content);NoteParams.initialize(this);
        AddNoteRequest.initialize(this, content);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, content) { 
        obj['content'] = content;
    }

    /**
     * Constructs a <code>AddNoteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddNoteRequest} obj Optional instance to populate.
     * @return {module:model/AddNoteRequest} The populated <code>AddNoteRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddNoteRequest();
            AddNoteRequestAllOf.constructFromObject(data, obj);
            NoteParams.constructFromObject(data, obj);

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');

                delete data['content'];
            }
            if (data.hasOwnProperty('lead_id')) {
                obj['lead_id'] = ApiClient.convertToType(data['lead_id'], 'String');

                delete data['lead_id'];
            }
            if (data.hasOwnProperty('deal_id')) {
                obj['deal_id'] = ApiClient.convertToType(data['deal_id'], 'Number');

                delete data['deal_id'];
            }
            if (data.hasOwnProperty('person_id')) {
                obj['person_id'] = ApiClient.convertToType(data['person_id'], 'Number');

                delete data['person_id'];
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = ApiClient.convertToType(data['org_id'], 'Number');

                delete data['org_id'];
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');

                delete data['user_id'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('pinned_to_lead_flag')) {
                obj['pinned_to_lead_flag'] = ApiClient.convertToType(data['pinned_to_lead_flag'], NumberBoolean);

                delete data['pinned_to_lead_flag'];
            }
            if (data.hasOwnProperty('pinned_to_deal_flag')) {
                obj['pinned_to_deal_flag'] = ApiClient.convertToType(data['pinned_to_deal_flag'], NumberBoolean);

                delete data['pinned_to_deal_flag'];
            }
            if (data.hasOwnProperty('pinned_to_organization_flag')) {
                obj['pinned_to_organization_flag'] = ApiClient.convertToType(data['pinned_to_organization_flag'], NumberBoolean);

                delete data['pinned_to_organization_flag'];
            }
            if (data.hasOwnProperty('pinned_to_person_flag')) {
                obj['pinned_to_person_flag'] = ApiClient.convertToType(data['pinned_to_person_flag'], NumberBoolean);

                delete data['pinned_to_person_flag'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The content of the note in HTML format. Subject to sanitization on the back-end.
 * @member {String} content
 */
AddNoteRequest.prototype['content'] = undefined;

/**
 * The ID of the lead the note will be attached to. This property is required unless one of (`deal_id/person_id/org_id`) is specified.
 * @member {String} lead_id
 */
AddNoteRequest.prototype['lead_id'] = undefined;

/**
 * The ID of the deal the note will be attached to. This property is required unless one of (`lead_id/person_id/org_id`) is specified.
 * @member {Number} deal_id
 */
AddNoteRequest.prototype['deal_id'] = undefined;

/**
 * The ID of the person this note will be attached to. This property is required unless one of (`deal_id/lead_id/org_id`) is specified.
 * @member {Number} person_id
 */
AddNoteRequest.prototype['person_id'] = undefined;

/**
 * The ID of the organization this note will be attached to. This property is required unless one of (`deal_id/lead_id/person_id`) is specified.
 * @member {Number} org_id
 */
AddNoteRequest.prototype['org_id'] = undefined;

/**
 * The ID of the user who will be marked as the author of the note. Only an admin can change the author.
 * @member {Number} user_id
 */
AddNoteRequest.prototype['user_id'] = undefined;

/**
 * The optional creation date & time of the note in UTC. Can be set in the past or in the future. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} add_time
 */
AddNoteRequest.prototype['add_time'] = undefined;

/**
 * If set, the results are filtered by note to lead pinning state (`lead_id` is also required)
 * @member {module:model/NumberBoolean} pinned_to_lead_flag
 */
AddNoteRequest.prototype['pinned_to_lead_flag'] = undefined;

/**
 * If set, the results are filtered by note to deal pinning state (`deal_id` is also required)
 * @member {module:model/NumberBoolean} pinned_to_deal_flag
 */
AddNoteRequest.prototype['pinned_to_deal_flag'] = undefined;

/**
 * If set, the results are filtered by note to organization pinning state (`org_id` is also required)
 * @member {module:model/NumberBoolean} pinned_to_organization_flag
 */
AddNoteRequest.prototype['pinned_to_organization_flag'] = undefined;

/**
 * If set, the results are filtered by note to person pinning state (`person_id` is also required)
 * @member {module:model/NumberBoolean} pinned_to_person_flag
 */
AddNoteRequest.prototype['pinned_to_person_flag'] = undefined;


// Implement AddNoteRequestAllOf interface:
/**
 * The content of the note in HTML format. Subject to sanitization on the back-end.
 * @member {String} content
 */
AddNoteRequestAllOf.prototype['content'] = undefined;
/**
 * The ID of the lead the note will be attached to. This property is required unless one of (`deal_id/person_id/org_id`) is specified.
 * @member {String} lead_id
 */
AddNoteRequestAllOf.prototype['lead_id'] = undefined;
/**
 * The ID of the deal the note will be attached to. This property is required unless one of (`lead_id/person_id/org_id`) is specified.
 * @member {Number} deal_id
 */
AddNoteRequestAllOf.prototype['deal_id'] = undefined;
/**
 * The ID of the person this note will be attached to. This property is required unless one of (`deal_id/lead_id/org_id`) is specified.
 * @member {Number} person_id
 */
AddNoteRequestAllOf.prototype['person_id'] = undefined;
/**
 * The ID of the organization this note will be attached to. This property is required unless one of (`deal_id/lead_id/person_id`) is specified.
 * @member {Number} org_id
 */
AddNoteRequestAllOf.prototype['org_id'] = undefined;
// Implement NoteParams interface:
/**
 * The ID of the user who will be marked as the author of the note. Only an admin can change the author.
 * @member {Number} user_id
 */
NoteParams.prototype['user_id'] = undefined;
/**
 * The optional creation date & time of the note in UTC. Can be set in the past or in the future. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} add_time
 */
NoteParams.prototype['add_time'] = undefined;
/**
 * If set, the results are filtered by note to lead pinning state (`lead_id` is also required)
 * @member {module:model/NumberBoolean} pinned_to_lead_flag
 */
NoteParams.prototype['pinned_to_lead_flag'] = undefined;
/**
 * If set, the results are filtered by note to deal pinning state (`deal_id` is also required)
 * @member {module:model/NumberBoolean} pinned_to_deal_flag
 */
NoteParams.prototype['pinned_to_deal_flag'] = undefined;
/**
 * If set, the results are filtered by note to organization pinning state (`org_id` is also required)
 * @member {module:model/NumberBoolean} pinned_to_organization_flag
 */
NoteParams.prototype['pinned_to_organization_flag'] = undefined;
/**
 * If set, the results are filtered by note to person pinning state (`person_id` is also required)
 * @member {module:model/NumberBoolean} pinned_to_person_flag
 */
NoteParams.prototype['pinned_to_person_flag'] = undefined;




export default AddNoteRequest;

