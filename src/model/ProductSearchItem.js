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
import ProductSearchItemItem from './ProductSearchItemItem';

/**
 * The ProductSearchItem model module.
 * @module model/ProductSearchItem
 * @version 1.0.0
 */
class ProductSearchItem {
    /**
     * Constructs a new <code>ProductSearchItem</code>.
     * @alias module:model/ProductSearchItem
     */
    constructor() { 
        
        ProductSearchItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductSearchItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductSearchItem} obj Optional instance to populate.
     * @return {module:model/ProductSearchItem} The populated <code>ProductSearchItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductSearchItem();

            if (data.hasOwnProperty('result_score')) {
                obj['result_score'] = ApiClient.convertToType(data['result_score'], 'Number');

                delete data['result_score'];
            }
            if (data.hasOwnProperty('item')) {
                obj['item'] = ProductSearchItemItem.constructFromObject(data['item']);

                delete data['item'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * Search result relevancy
 * @member {Number} result_score
 */
ProductSearchItem.prototype['result_score'] = undefined;

/**
 * @member {module:model/ProductSearchItemItem} item
 */
ProductSearchItem.prototype['item'] = undefined;






export default ProductSearchItem;
