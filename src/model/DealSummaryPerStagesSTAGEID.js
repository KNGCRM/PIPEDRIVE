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
import DealSummaryPerStagesSTAGEIDCURRENCYID from './DealSummaryPerStagesSTAGEIDCURRENCYID';

/**
 * The DealSummaryPerStagesSTAGEID model module.
 * @module model/DealSummaryPerStagesSTAGEID
 * @version 1.0.0
 */
class DealSummaryPerStagesSTAGEID {
    /**
     * Constructs a new <code>DealSummaryPerStagesSTAGEID</code>.
     * The currency summaries per stage. This parameter is dynamic and changes according to &#x60;stage_id&#x60; value.
     * @alias module:model/DealSummaryPerStagesSTAGEID
     */
    constructor() { 
        
        DealSummaryPerStagesSTAGEID.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DealSummaryPerStagesSTAGEID</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DealSummaryPerStagesSTAGEID} obj Optional instance to populate.
     * @return {module:model/DealSummaryPerStagesSTAGEID} The populated <code>DealSummaryPerStagesSTAGEID</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealSummaryPerStagesSTAGEID();

            if (data.hasOwnProperty('CURRENCY_ID')) {
                obj['CURRENCY_ID'] = DealSummaryPerStagesSTAGEIDCURRENCYID.constructFromObject(data['CURRENCY_ID']);

                delete data['CURRENCY_ID'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * @member {module:model/DealSummaryPerStagesSTAGEIDCURRENCYID} CURRENCY_ID
 */
DealSummaryPerStagesSTAGEID.prototype['CURRENCY_ID'] = undefined;






export default DealSummaryPerStagesSTAGEID;

