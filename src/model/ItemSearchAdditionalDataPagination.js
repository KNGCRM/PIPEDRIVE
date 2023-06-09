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
 * The ItemSearchAdditionalDataPagination model module.
 * @module model/ItemSearchAdditionalDataPagination
 * @version 1.0.0
 */
class ItemSearchAdditionalDataPagination {
    /**
     * Constructs a new <code>ItemSearchAdditionalDataPagination</code>.
     * Pagination details of the list
     * @alias module:model/ItemSearchAdditionalDataPagination
     */
    constructor() { 
        
        ItemSearchAdditionalDataPagination.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemSearchAdditionalDataPagination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ItemSearchAdditionalDataPagination} obj Optional instance to populate.
     * @return {module:model/ItemSearchAdditionalDataPagination} The populated <code>ItemSearchAdditionalDataPagination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemSearchAdditionalDataPagination();

            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Number');

                delete data['start'];
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');

                delete data['limit'];
            }
            if (data.hasOwnProperty('more_items_in_collection')) {
                obj['more_items_in_collection'] = ApiClient.convertToType(data['more_items_in_collection'], 'Boolean');

                delete data['more_items_in_collection'];
            }
            if (data.hasOwnProperty('next_start')) {
                obj['next_start'] = ApiClient.convertToType(data['next_start'], 'Number');

                delete data['next_start'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * Pagination start
 * @member {Number} start
 */
ItemSearchAdditionalDataPagination.prototype['start'] = undefined;

/**
 * Items shown per page
 * @member {Number} limit
 */
ItemSearchAdditionalDataPagination.prototype['limit'] = undefined;

/**
 * Whether there are more list items in the collection than displayed
 * @member {Boolean} more_items_in_collection
 */
ItemSearchAdditionalDataPagination.prototype['more_items_in_collection'] = undefined;

/**
 * Next pagination start
 * @member {Number} next_start
 */
ItemSearchAdditionalDataPagination.prototype['next_start'] = undefined;






export default ItemSearchAdditionalDataPagination;

