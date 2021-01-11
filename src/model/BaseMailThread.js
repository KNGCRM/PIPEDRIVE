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
import BaseMailThreadAllOf from './BaseMailThreadAllOf';
import BaseMailThreadAllOfParties from './BaseMailThreadAllOfParties';
import CommonMailThread from './CommonMailThread';
import NumberBooleanDefault0 from './NumberBooleanDefault0';

/**
 * The BaseMailThread model module.
 * @module model/BaseMailThread
 * @version 1.0.0
 */
class BaseMailThread {
    /**
     * Constructs a new <code>BaseMailThread</code>.
     * @alias module:model/BaseMailThread
     * @implements module:model/CommonMailThread
     * @implements module:model/BaseMailThreadAllOf
     */
    constructor() { 
        CommonMailThread.initialize(this);BaseMailThreadAllOf.initialize(this);
        BaseMailThread.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BaseMailThread</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseMailThread} obj Optional instance to populate.
     * @return {module:model/BaseMailThread} The populated <code>BaseMailThread</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseMailThread();
            CommonMailThread.constructFromObject(data, obj);
            BaseMailThreadAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('account_id')) {
                obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');

                delete data['account_id'];
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');

                delete data['user_id'];
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');

                delete data['subject'];
            }
            if (data.hasOwnProperty('snippet')) {
                obj['snippet'] = ApiClient.convertToType(data['snippet'], 'String');

                delete data['snippet'];
            }
            if (data.hasOwnProperty('read_flag')) {
                obj['read_flag'] = ApiClient.convertToType(data['read_flag'], NumberBooleanDefault0);

                delete data['read_flag'];
            }
            if (data.hasOwnProperty('mail_tracking_status')) {
                obj['mail_tracking_status'] = ApiClient.convertToType(data['mail_tracking_status'], 'String');

                delete data['mail_tracking_status'];
            }
            if (data.hasOwnProperty('has_attachments_flag')) {
                obj['has_attachments_flag'] = ApiClient.convertToType(data['has_attachments_flag'], NumberBooleanDefault0);

                delete data['has_attachments_flag'];
            }
            if (data.hasOwnProperty('has_inline_attachments_flag')) {
                obj['has_inline_attachments_flag'] = ApiClient.convertToType(data['has_inline_attachments_flag'], NumberBooleanDefault0);

                delete data['has_inline_attachments_flag'];
            }
            if (data.hasOwnProperty('has_real_attachments_flag')) {
                obj['has_real_attachments_flag'] = ApiClient.convertToType(data['has_real_attachments_flag'], NumberBooleanDefault0);

                delete data['has_real_attachments_flag'];
            }
            if (data.hasOwnProperty('deleted_flag')) {
                obj['deleted_flag'] = ApiClient.convertToType(data['deleted_flag'], NumberBooleanDefault0);

                delete data['deleted_flag'];
            }
            if (data.hasOwnProperty('synced_flag')) {
                obj['synced_flag'] = ApiClient.convertToType(data['synced_flag'], NumberBooleanDefault0);

                delete data['synced_flag'];
            }
            if (data.hasOwnProperty('smart_bcc_flag')) {
                obj['smart_bcc_flag'] = ApiClient.convertToType(data['smart_bcc_flag'], NumberBooleanDefault0);

                delete data['smart_bcc_flag'];
            }
            if (data.hasOwnProperty('mail_link_tracking_enabled_flag')) {
                obj['mail_link_tracking_enabled_flag'] = ApiClient.convertToType(data['mail_link_tracking_enabled_flag'], NumberBooleanDefault0);

                delete data['mail_link_tracking_enabled_flag'];
            }
            if (data.hasOwnProperty('write_flag')) {
                obj['write_flag'] = ApiClient.convertToType(data['write_flag'], 'Boolean');

                delete data['write_flag'];
            }
            if (data.hasOwnProperty('parties')) {
                obj['parties'] = BaseMailThreadAllOfParties.constructFromObject(data['parties']);

                delete data['parties'];
            }
            if (data.hasOwnProperty('drafts_parties')) {
                obj['drafts_parties'] = ApiClient.convertToType(data['drafts_parties'], [Object]);

                delete data['drafts_parties'];
            }
            if (data.hasOwnProperty('folders')) {
                obj['folders'] = ApiClient.convertToType(data['folders'], ['String']);

                delete data['folders'];
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');

                delete data['version'];
            }
            if (data.hasOwnProperty('snippet_draft')) {
                obj['snippet_draft'] = ApiClient.convertToType(data['snippet_draft'], 'String');

                delete data['snippet_draft'];
            }
            if (data.hasOwnProperty('snippet_sent')) {
                obj['snippet_sent'] = ApiClient.convertToType(data['snippet_sent'], 'String');

                delete data['snippet_sent'];
            }
            if (data.hasOwnProperty('message_count')) {
                obj['message_count'] = ApiClient.convertToType(data['message_count'], 'Number');

                delete data['message_count'];
            }
            if (data.hasOwnProperty('has_draft_flag')) {
                obj['has_draft_flag'] = ApiClient.convertToType(data['has_draft_flag'], NumberBooleanDefault0);

                delete data['has_draft_flag'];
            }
            if (data.hasOwnProperty('has_sent_flag')) {
                obj['has_sent_flag'] = ApiClient.convertToType(data['has_sent_flag'], NumberBooleanDefault0);

                delete data['has_sent_flag'];
            }
            if (data.hasOwnProperty('archived_flag')) {
                obj['archived_flag'] = ApiClient.convertToType(data['archived_flag'], NumberBooleanDefault0);

                delete data['archived_flag'];
            }
            if (data.hasOwnProperty('shared_flag')) {
                obj['shared_flag'] = ApiClient.convertToType(data['shared_flag'], NumberBooleanDefault0);

                delete data['shared_flag'];
            }
            if (data.hasOwnProperty('external_deleted_flag')) {
                obj['external_deleted_flag'] = ApiClient.convertToType(data['external_deleted_flag'], NumberBooleanDefault0);

                delete data['external_deleted_flag'];
            }
            if (data.hasOwnProperty('first_message_to_me_flag')) {
                obj['first_message_to_me_flag'] = ApiClient.convertToType(data['first_message_to_me_flag'], NumberBooleanDefault0);

                delete data['first_message_to_me_flag'];
            }
            if (data.hasOwnProperty('last_message_timestamp')) {
                obj['last_message_timestamp'] = ApiClient.convertToType(data['last_message_timestamp'], 'Date');

                delete data['last_message_timestamp'];
            }
            if (data.hasOwnProperty('first_message_timestamp')) {
                obj['first_message_timestamp'] = ApiClient.convertToType(data['first_message_timestamp'], 'Date');

                delete data['first_message_timestamp'];
            }
            if (data.hasOwnProperty('last_message_sent_timestamp')) {
                obj['last_message_sent_timestamp'] = ApiClient.convertToType(data['last_message_sent_timestamp'], 'Date');

                delete data['last_message_sent_timestamp'];
            }
            if (data.hasOwnProperty('last_message_received_timestamp')) {
                obj['last_message_received_timestamp'] = ApiClient.convertToType(data['last_message_received_timestamp'], 'Date');

                delete data['last_message_received_timestamp'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'Date');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'Date');

                delete data['update_time'];
            }
            if (data.hasOwnProperty('deal_id')) {
                obj['deal_id'] = ApiClient.convertToType(data['deal_id'], 'Number');

                delete data['deal_id'];
            }
            if (data.hasOwnProperty('deal_status')) {
                obj['deal_status'] = ApiClient.convertToType(data['deal_status'], 'String');

                delete data['deal_status'];
            }
            if (data.hasOwnProperty('all_messages_sent_flag')) {
                obj['all_messages_sent_flag'] = ApiClient.convertToType(data['all_messages_sent_flag'], NumberBooleanDefault0);

                delete data['all_messages_sent_flag'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * ID of the mail thread
 * @member {Number} id
 */
BaseMailThread.prototype['id'] = undefined;

/**
 * The connection account ID
 * @member {String} account_id
 */
BaseMailThread.prototype['account_id'] = undefined;

/**
 * ID of the user whom mail message will be assigned to
 * @member {Number} user_id
 */
BaseMailThread.prototype['user_id'] = undefined;

/**
 * The subject
 * @member {String} subject
 */
BaseMailThread.prototype['subject'] = undefined;

/**
 * A snippet
 * @member {String} snippet
 */
BaseMailThread.prototype['snippet'] = undefined;

/**
 * Whether the mail thread is read
 * @member {module:model/NumberBooleanDefault0} read_flag
 */
BaseMailThread.prototype['read_flag'] = undefined;

/**
 * Mail tracking status
 * @member {String} mail_tracking_status
 */
BaseMailThread.prototype['mail_tracking_status'] = undefined;

/**
 * Whether the mail thread has an attachment
 * @member {module:model/NumberBooleanDefault0} has_attachments_flag
 */
BaseMailThread.prototype['has_attachments_flag'] = undefined;

/**
 * Whether the mail thread has inline attachments
 * @member {module:model/NumberBooleanDefault0} has_inline_attachments_flag
 */
BaseMailThread.prototype['has_inline_attachments_flag'] = undefined;

/**
 * Whether the mail thread has real attachments (which are not inline)
 * @member {module:model/NumberBooleanDefault0} has_real_attachments_flag
 */
BaseMailThread.prototype['has_real_attachments_flag'] = undefined;

/**
 * Whether the mail thread is deleted
 * @member {module:model/NumberBooleanDefault0} deleted_flag
 */
BaseMailThread.prototype['deleted_flag'] = undefined;

/**
 * Whether the mail thread is synced
 * @member {module:model/NumberBooleanDefault0} synced_flag
 */
BaseMailThread.prototype['synced_flag'] = undefined;

/**
 * Whether one of the parties of the mail thread is Bcc
 * @member {module:model/NumberBooleanDefault0} smart_bcc_flag
 */
BaseMailThread.prototype['smart_bcc_flag'] = undefined;

/**
 * Whether the link tracking of the mail thread is enabled
 * @member {module:model/NumberBooleanDefault0} mail_link_tracking_enabled_flag
 */
BaseMailThread.prototype['mail_link_tracking_enabled_flag'] = undefined;

/**
 * We strongly advise you to avoid the use of this property. We will soon deprecate this property
 * @member {Boolean} write_flag
 */
BaseMailThread.prototype['write_flag'] = undefined;

/**
 * @member {module:model/BaseMailThreadAllOfParties} parties
 */
BaseMailThread.prototype['parties'] = undefined;

/**
 * Parties of the drafted mail thread
 * @member {Array.<Object>} drafts_parties
 */
BaseMailThread.prototype['drafts_parties'] = undefined;

/**
 * Folders in which messages from thread are being stored
 * @member {Array.<String>} folders
 */
BaseMailThread.prototype['folders'] = undefined;

/**
 * Version
 * @member {Number} version
 */
BaseMailThread.prototype['version'] = undefined;

/**
 * A snippet from a draft
 * @member {String} snippet_draft
 */
BaseMailThread.prototype['snippet_draft'] = undefined;

/**
 * A snippet from a message sent
 * @member {String} snippet_sent
 */
BaseMailThread.prototype['snippet_sent'] = undefined;

/**
 * An amount of messages
 * @member {Number} message_count
 */
BaseMailThread.prototype['message_count'] = undefined;

/**
 * Whether the mail thread has any drafts
 * @member {module:model/NumberBooleanDefault0} has_draft_flag
 */
BaseMailThread.prototype['has_draft_flag'] = undefined;

/**
 * Whether the mail thread has messages sent
 * @member {module:model/NumberBooleanDefault0} has_sent_flag
 */
BaseMailThread.prototype['has_sent_flag'] = undefined;

/**
 * Whether the mail thread is archived
 * @member {module:model/NumberBooleanDefault0} archived_flag
 */
BaseMailThread.prototype['archived_flag'] = undefined;

/**
 * Whether the mail thread is shared
 * @member {module:model/NumberBooleanDefault0} shared_flag
 */
BaseMailThread.prototype['shared_flag'] = undefined;

/**
 * Whether the mail thread has been deleted externally
 * @member {module:model/NumberBooleanDefault0} external_deleted_flag
 */
BaseMailThread.prototype['external_deleted_flag'] = undefined;

/**
 * Whether the mail thread was initialized by others
 * @member {module:model/NumberBooleanDefault0} first_message_to_me_flag
 */
BaseMailThread.prototype['first_message_to_me_flag'] = undefined;

/**
 * Last message timestamp
 * @member {Date} last_message_timestamp
 */
BaseMailThread.prototype['last_message_timestamp'] = undefined;

/**
 * The time when the mail thread has had the first message received or created
 * @member {Date} first_message_timestamp
 */
BaseMailThread.prototype['first_message_timestamp'] = undefined;

/**
 * The last time when the mail thread has had a message sent
 * @member {Date} last_message_sent_timestamp
 */
BaseMailThread.prototype['last_message_sent_timestamp'] = undefined;

/**
 * The last time when the mail thread has had a message received
 * @member {Date} last_message_received_timestamp
 */
BaseMailThread.prototype['last_message_received_timestamp'] = undefined;

/**
 * The time when the mail thread was inserted to database
 * @member {Date} add_time
 */
BaseMailThread.prototype['add_time'] = undefined;

/**
 * The time when the mail thread was updated in database received
 * @member {Date} update_time
 */
BaseMailThread.prototype['update_time'] = undefined;

/**
 * ID of the deal
 * @member {Number} deal_id
 */
BaseMailThread.prototype['deal_id'] = undefined;

/**
 * Status of the deal
 * @member {String} deal_status
 */
BaseMailThread.prototype['deal_status'] = undefined;

/**
 * Whether all the mail thread messages have been sent
 * @member {module:model/NumberBooleanDefault0} all_messages_sent_flag
 */
BaseMailThread.prototype['all_messages_sent_flag'] = undefined;


// Implement CommonMailThread interface:
/**
 * ID of the mail thread
 * @member {Number} id
 */
CommonMailThread.prototype['id'] = undefined;
/**
 * The connection account ID
 * @member {String} account_id
 */
CommonMailThread.prototype['account_id'] = undefined;
/**
 * ID of the user whom mail message will be assigned to
 * @member {Number} user_id
 */
CommonMailThread.prototype['user_id'] = undefined;
/**
 * The subject
 * @member {String} subject
 */
CommonMailThread.prototype['subject'] = undefined;
/**
 * A snippet
 * @member {String} snippet
 */
CommonMailThread.prototype['snippet'] = undefined;
/**
 * Whether the mail thread is read
 * @member {module:model/NumberBooleanDefault0} read_flag
 */
CommonMailThread.prototype['read_flag'] = undefined;
/**
 * Mail tracking status
 * @member {String} mail_tracking_status
 */
CommonMailThread.prototype['mail_tracking_status'] = undefined;
/**
 * Whether the mail thread has an attachment
 * @member {module:model/NumberBooleanDefault0} has_attachments_flag
 */
CommonMailThread.prototype['has_attachments_flag'] = undefined;
/**
 * Whether the mail thread has inline attachments
 * @member {module:model/NumberBooleanDefault0} has_inline_attachments_flag
 */
CommonMailThread.prototype['has_inline_attachments_flag'] = undefined;
/**
 * Whether the mail thread has real attachments (which are not inline)
 * @member {module:model/NumberBooleanDefault0} has_real_attachments_flag
 */
CommonMailThread.prototype['has_real_attachments_flag'] = undefined;
/**
 * Whether the mail thread is deleted
 * @member {module:model/NumberBooleanDefault0} deleted_flag
 */
CommonMailThread.prototype['deleted_flag'] = undefined;
/**
 * Whether the mail thread is synced
 * @member {module:model/NumberBooleanDefault0} synced_flag
 */
CommonMailThread.prototype['synced_flag'] = undefined;
/**
 * Whether one of the parties of the mail thread is Bcc
 * @member {module:model/NumberBooleanDefault0} smart_bcc_flag
 */
CommonMailThread.prototype['smart_bcc_flag'] = undefined;
/**
 * Whether the link tracking of the mail thread is enabled
 * @member {module:model/NumberBooleanDefault0} mail_link_tracking_enabled_flag
 */
CommonMailThread.prototype['mail_link_tracking_enabled_flag'] = undefined;
/**
 * We strongly advise you to avoid the use of this property. We will soon deprecate this property
 * @member {Boolean} write_flag
 */
CommonMailThread.prototype['write_flag'] = undefined;
// Implement BaseMailThreadAllOf interface:
/**
 * @member {module:model/BaseMailThreadAllOfParties} parties
 */
BaseMailThreadAllOf.prototype['parties'] = undefined;
/**
 * Parties of the drafted mail thread
 * @member {Array.<Object>} drafts_parties
 */
BaseMailThreadAllOf.prototype['drafts_parties'] = undefined;
/**
 * Folders in which messages from thread are being stored
 * @member {Array.<String>} folders
 */
BaseMailThreadAllOf.prototype['folders'] = undefined;
/**
 * Version
 * @member {Number} version
 */
BaseMailThreadAllOf.prototype['version'] = undefined;
/**
 * A snippet from a draft
 * @member {String} snippet_draft
 */
BaseMailThreadAllOf.prototype['snippet_draft'] = undefined;
/**
 * A snippet from a message sent
 * @member {String} snippet_sent
 */
BaseMailThreadAllOf.prototype['snippet_sent'] = undefined;
/**
 * An amount of messages
 * @member {Number} message_count
 */
BaseMailThreadAllOf.prototype['message_count'] = undefined;
/**
 * Whether the mail thread has any drafts
 * @member {module:model/NumberBooleanDefault0} has_draft_flag
 */
BaseMailThreadAllOf.prototype['has_draft_flag'] = undefined;
/**
 * Whether the mail thread has messages sent
 * @member {module:model/NumberBooleanDefault0} has_sent_flag
 */
BaseMailThreadAllOf.prototype['has_sent_flag'] = undefined;
/**
 * Whether the mail thread is archived
 * @member {module:model/NumberBooleanDefault0} archived_flag
 */
BaseMailThreadAllOf.prototype['archived_flag'] = undefined;
/**
 * Whether the mail thread is shared
 * @member {module:model/NumberBooleanDefault0} shared_flag
 */
BaseMailThreadAllOf.prototype['shared_flag'] = undefined;
/**
 * Whether the mail thread has been deleted externally
 * @member {module:model/NumberBooleanDefault0} external_deleted_flag
 */
BaseMailThreadAllOf.prototype['external_deleted_flag'] = undefined;
/**
 * Whether the mail thread was initialized by others
 * @member {module:model/NumberBooleanDefault0} first_message_to_me_flag
 */
BaseMailThreadAllOf.prototype['first_message_to_me_flag'] = undefined;
/**
 * Last message timestamp
 * @member {Date} last_message_timestamp
 */
BaseMailThreadAllOf.prototype['last_message_timestamp'] = undefined;
/**
 * The time when the mail thread has had the first message received or created
 * @member {Date} first_message_timestamp
 */
BaseMailThreadAllOf.prototype['first_message_timestamp'] = undefined;
/**
 * The last time when the mail thread has had a message sent
 * @member {Date} last_message_sent_timestamp
 */
BaseMailThreadAllOf.prototype['last_message_sent_timestamp'] = undefined;
/**
 * The last time when the mail thread has had a message received
 * @member {Date} last_message_received_timestamp
 */
BaseMailThreadAllOf.prototype['last_message_received_timestamp'] = undefined;
/**
 * The time when the mail thread was inserted to database
 * @member {Date} add_time
 */
BaseMailThreadAllOf.prototype['add_time'] = undefined;
/**
 * The time when the mail thread was updated in database received
 * @member {Date} update_time
 */
BaseMailThreadAllOf.prototype['update_time'] = undefined;
/**
 * ID of the deal
 * @member {Number} deal_id
 */
BaseMailThreadAllOf.prototype['deal_id'] = undefined;
/**
 * Status of the deal
 * @member {String} deal_status
 */
BaseMailThreadAllOf.prototype['deal_status'] = undefined;
/**
 * Whether all the mail thread messages have been sent
 * @member {module:model/NumberBooleanDefault0} all_messages_sent_flag
 */
BaseMailThreadAllOf.prototype['all_messages_sent_flag'] = undefined;




export default BaseMailThread;
