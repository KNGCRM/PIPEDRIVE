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
import AdditionalDataWithPaginationDetails from './AdditionalDataWithPaginationDetails';
import FileData from './FileData';

/**
 * The GetAllFiles model module.
 * @module model/GetAllFiles
 * @version 1.0.0
 */
class GetAllFiles {
    /**
     * Constructs a new <code>GetAllFiles</code>.
     * @alias module:model/GetAllFiles
     */
    constructor() { 
        
        GetAllFiles.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAllFiles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAllFiles} obj Optional instance to populate.
     * @return {module:model/GetAllFiles} The populated <code>GetAllFiles</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAllFiles();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [FileData]);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = AdditionalDataWithPaginationDetails.constructFromObject(data['additional_data']);

                delete data['additional_data'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * If the request was successful or not
 * @member {Boolean} success
 */
GetAllFiles.prototype['success'] = undefined;

/**
 * The array of all uploaded files
 * @member {Array.<module:model/FileData>} data
 */
GetAllFiles.prototype['data'] = undefined;

/**
 * @member {module:model/AdditionalDataWithPaginationDetails} additional_data
 */
GetAllFiles.prototype['additional_data'] = undefined;






export default GetAllFiles;

