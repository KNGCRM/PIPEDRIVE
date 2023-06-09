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
 * The PutRolePipelinesBody model module.
 * @module model/PutRolePipelinesBody
 * @version 1.0.0
 */
class PutRolePipelinesBody {
    /**
     * Constructs a new <code>PutRolePipelinesBody</code>.
     * @alias module:model/PutRolePipelinesBody
     * @param visiblePipelineIds {Object} The pipeline IDs to make the pipelines visible (add) and/or hidden (remove) for the specified role. It requires the following JSON structure: `{ \"add\": \"[1]\", \"remove\": \"[3, 4]\" }`.
     */
    constructor(visiblePipelineIds) { 
        
        PutRolePipelinesBody.initialize(this, visiblePipelineIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, visiblePipelineIds) { 
        obj['visible_pipeline_ids'] = visiblePipelineIds;
    }

    /**
     * Constructs a <code>PutRolePipelinesBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutRolePipelinesBody} obj Optional instance to populate.
     * @return {module:model/PutRolePipelinesBody} The populated <code>PutRolePipelinesBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutRolePipelinesBody();

            if (data.hasOwnProperty('visible_pipeline_ids')) {
                obj['visible_pipeline_ids'] = ApiClient.convertToType(data['visible_pipeline_ids'], Object);

                delete data['visible_pipeline_ids'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The pipeline IDs to make the pipelines visible (add) and/or hidden (remove) for the specified role. It requires the following JSON structure: `{ \"add\": \"[1]\", \"remove\": \"[3, 4]\" }`.
 * @member {Object} visible_pipeline_ids
 */
PutRolePipelinesBody.prototype['visible_pipeline_ids'] = undefined;






export default PutRolePipelinesBody;

