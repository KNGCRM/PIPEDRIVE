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
import AdditionalData from './AdditionalData';
import DealFlowResponseAllOfRelatedObjects from './DealFlowResponseAllOfRelatedObjects';
import PersonFlowResponseAllOfData from './PersonFlowResponseAllOfData';

/**
 * The PersonFlowResponseAllOf model module.
 * @module model/PersonFlowResponseAllOf
 * @version 1.0.0
 */
class PersonFlowResponseAllOf {
    /**
     * Constructs a new <code>PersonFlowResponseAllOf</code>.
     * @alias module:model/PersonFlowResponseAllOf
     */
    constructor() { 
        
        PersonFlowResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PersonFlowResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PersonFlowResponseAllOf} obj Optional instance to populate.
     * @return {module:model/PersonFlowResponseAllOf} The populated <code>PersonFlowResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonFlowResponseAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [PersonFlowResponseAllOfData]);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = AdditionalData.constructFromObject(data['additional_data']);

                delete data['additional_data'];
            }
            if (data.hasOwnProperty('related_objects')) {
                obj['related_objects'] = DealFlowResponseAllOfRelatedObjects.constructFromObject(data['related_objects']);

                delete data['related_objects'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/PersonFlowResponseAllOfData>} data
 */
PersonFlowResponseAllOf.prototype['data'] = undefined;

/**
 * @member {module:model/AdditionalData} additional_data
 */
PersonFlowResponseAllOf.prototype['additional_data'] = undefined;

/**
 * @member {module:model/DealFlowResponseAllOfRelatedObjects} related_objects
 */
PersonFlowResponseAllOf.prototype['related_objects'] = undefined;






export default PersonFlowResponseAllOf;

