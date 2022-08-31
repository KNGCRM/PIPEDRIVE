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
import BasicOrganization from './BasicOrganization';
import UpdateOrganizationAllOf from './UpdateOrganizationAllOf';
import VisibleTo from './VisibleTo';

/**
 * The UpdateOrganization model module.
 * @module model/UpdateOrganization
 * @version 1.0.0
 */
class UpdateOrganization {
    /**
     * Constructs a new <code>UpdateOrganization</code>.
     * @alias module:model/UpdateOrganization
     * @implements module:model/UpdateOrganizationAllOf
     * @implements module:model/BasicOrganization
     */
    constructor() { 
        UpdateOrganizationAllOf.initialize(this);BasicOrganization.initialize(this);
        UpdateOrganization.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateOrganization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateOrganization} obj Optional instance to populate.
     * @return {module:model/UpdateOrganization} The populated <code>UpdateOrganization</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateOrganization();
            UpdateOrganizationAllOf.constructFromObject(data, obj);
            BasicOrganization.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Number');

                delete data['owner_id'];
            }
            if (data.hasOwnProperty('visible_to')) {
                obj['visible_to'] = ApiClient.convertToType(data['visible_to'], VisibleTo);

                delete data['visible_to'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The name of the organization
 * @member {String} name
 */
UpdateOrganization.prototype['name'] = undefined;

/**
 * The ID of the user who will be marked as the owner of this organization. When omitted, the authorized user ID will be used.
 * @member {Number} owner_id
 */
UpdateOrganization.prototype['owner_id'] = undefined;

/**
 * The visibility of the organization. If omitted, the visibility will be set to the default visibility setting of this item type for the authorized user. Read more about visibility groups <a href=\"https://support.pipedrive.com/en/article/visibility-groups\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>.<h4>Essential / Advanced plan</h4><table><tr><th style=\"width:40px\">Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner &amp; followers</td><tr><td>`3`</td><td>Entire company</td></tr></table><h4>Professional / Enterprise plan</h4><table><tr><th style=\"width:40px\">Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner only</td><tr><td>`3`</td><td>Owner's visibility group</td></tr><tr><td>`5`</td><td>Owner's visibility group and sub-groups</td></tr><tr><td>`7`</td><td>Entire company</td></tr></table>
 * @member {module:model/VisibleTo} visible_to
 */
UpdateOrganization.prototype['visible_to'] = undefined;


// Implement UpdateOrganizationAllOf interface:
/**
 * The name of the organization
 * @member {String} name
 */
UpdateOrganizationAllOf.prototype['name'] = undefined;
// Implement BasicOrganization interface:
/**
 * The ID of the user who will be marked as the owner of this organization. When omitted, the authorized user ID will be used.
 * @member {Number} owner_id
 */
BasicOrganization.prototype['owner_id'] = undefined;
/**
 * The visibility of the organization. If omitted, the visibility will be set to the default visibility setting of this item type for the authorized user. Read more about visibility groups <a href=\"https://support.pipedrive.com/en/article/visibility-groups\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>.<h4>Essential / Advanced plan</h4><table><tr><th style=\"width:40px\">Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner &amp; followers</td><tr><td>`3`</td><td>Entire company</td></tr></table><h4>Professional / Enterprise plan</h4><table><tr><th style=\"width:40px\">Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner only</td><tr><td>`3`</td><td>Owner's visibility group</td></tr><tr><td>`5`</td><td>Owner's visibility group and sub-groups</td></tr><tr><td>`7`</td><td>Entire company</td></tr></table>
 * @member {module:model/VisibleTo} visible_to
 */
BasicOrganization.prototype['visible_to'] = undefined;




export default UpdateOrganization;

