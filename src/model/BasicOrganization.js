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
import VisibleTo from './VisibleTo';

/**
 * The BasicOrganization model module.
 * @module model/BasicOrganization
 * @version 1.0.0
 */
class BasicOrganization {
    /**
     * Constructs a new <code>BasicOrganization</code>.
     * @alias module:model/BasicOrganization
     */
    constructor() { 
        
        BasicOrganization.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BasicOrganization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasicOrganization} obj Optional instance to populate.
     * @return {module:model/BasicOrganization} The populated <code>BasicOrganization</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasicOrganization();

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
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * Organization name
 * @member {String} name
 */
BasicOrganization.prototype['name'] = undefined;

/**
 * The ID of the user who will be marked as the owner of this Organization. When omitted, the authorized User ID will be used.
 * @member {Number} owner_id
 */
BasicOrganization.prototype['owner_id'] = undefined;

/**
 * Visibility of the organization. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.<table><tr><th>Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner &amp; followers (private)</td></tr><tr><td>`3`</td><td>Entire company (shared)</td></tr></table>
 * @member {module:model/VisibleTo} visible_to
 */
BasicOrganization.prototype['visible_to'] = undefined;






export default BasicOrganization;

