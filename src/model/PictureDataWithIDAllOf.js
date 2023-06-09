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
 * The PictureDataWithIDAllOf model module.
 * @module model/PictureDataWithIDAllOf
 * @version 1.0.0
 */
class PictureDataWithIDAllOf {
    /**
     * Constructs a new <code>PictureDataWithIDAllOf</code>.
     * @alias module:model/PictureDataWithIDAllOf
     */
    constructor() { 
        
        PictureDataWithIDAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PictureDataWithIDAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PictureDataWithIDAllOf} obj Optional instance to populate.
     * @return {module:model/PictureDataWithIDAllOf} The populated <code>PictureDataWithIDAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PictureDataWithIDAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the picture associated with the item
 * @member {Number} id
 */
PictureDataWithIDAllOf.prototype['id'] = undefined;






export default PictureDataWithIDAllOf;

