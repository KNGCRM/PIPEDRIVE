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


import ApiClient from "../ApiClient";
import BulkDeleteResponse from '../model/BulkDeleteResponse';
import DeleteResponse from '../model/DeleteResponse';
import FieldResponse from '../model/FieldResponse';
import FieldTypeAsString from '../model/FieldTypeAsString';
import FieldsResponse from '../model/FieldsResponse';

/**
* OrganizationFields service.
* @module api/OrganizationFieldsApi
* @version 1.0.0
*/
export default class OrganizationFieldsApi {

    /**
    * Constructs a new OrganizationFieldsApi. 
    * @alias module:api/OrganizationFieldsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add a new organization field
     * Adds a new organization field. For more information on adding a new custom field, see <a href=\"https://pipedrive.readme.io/docs/adding-a-new-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">this tutorial</a>.
     * @param {String} name Name of the field
     * @param {Object} opts Optional parameters
     * @param {String} opts.options When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. All active items must be supplied and already existing items must have their ID supplied. New items only require a label. Example: `[{\\\"id\\\":123,\\\"label\\\":\\\"Existing Item\\\"},{\\\"label\\\":\\\"New Item\\\"}]`
     * @param {module:model/FieldTypeAsString} opts.fieldType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FieldResponse} and HTTP response
     */
    addOrganizationFieldWithHttpInfo(name, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling addOrganizationField");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': name,
        'options': opts['options'],
        'field_type': opts['fieldType'],
      };

      let formParamArray = [
        'name',
        'options',
        'fieldType',
      ];

      let contentTypes = ['application/x-www-form-urlencoded', ];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = FieldResponse;
      return this.apiClient.callApi(
        '/organizationFields', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a new organization field
     * Adds a new organization field. For more information on adding a new custom field, see <a href=\"https://pipedrive.readme.io/docs/adding-a-new-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">this tutorial</a>.
     * @param {String} name Name of the field
     * @param {Object} opts Optional parameters
     * @param {String} opts.options When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. All active items must be supplied and already existing items must have their ID supplied. New items only require a label. Example: `[{\\\"id\\\":123,\\\"label\\\":\\\"Existing Item\\\"},{\\\"label\\\":\\\"New Item\\\"}]`
     * @param {module:model/FieldTypeAsString} opts.fieldType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FieldResponse}
     */
    addOrganizationField(name, opts) {
      return this.addOrganizationFieldWithHttpInfo(name, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete an organization field
     * Marks a field as deleted. For more information on how to delete a custom field, see <a href=\"https://pipedrive.readme.io/docs/deleting-a-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">this tutorial</a>.
     * @param {Number} id ID of the field
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteResponse} and HTTP response
     */
    deleteOrganizationFieldWithHttpInfo(id) {
      const opts = {}
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteOrganizationField");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = DeleteResponse;
      return this.apiClient.callApi(
        '/organizationFields/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete an organization field
     * Marks a field as deleted. For more information on how to delete a custom field, see <a href=\"https://pipedrive.readme.io/docs/deleting-a-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">this tutorial</a>.
     * @param {Number} id ID of the field
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteResponse}
     */
    deleteOrganizationField(id) {
      return this.deleteOrganizationFieldWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete multiple organization fields in bulk
     * Marks multiple fields as deleted.
     * @param {String} ids Comma-separated field IDs to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BulkDeleteResponse} and HTTP response
     */
    deleteOrganizationFieldsWithHttpInfo(ids) {
      const opts = {}
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling deleteOrganizationFields");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': ids,
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = BulkDeleteResponse;
      return this.apiClient.callApi(
        '/organizationFields', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete multiple organization fields in bulk
     * Marks multiple fields as deleted.
     * @param {String} ids Comma-separated field IDs to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BulkDeleteResponse}
     */
    deleteOrganizationFields(ids) {
      return this.deleteOrganizationFieldsWithHttpInfo(ids)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get one organization field
     * Returns data about a specific organization field.
     * @param {Number} id ID of the field
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FieldResponse} and HTTP response
     */
    getOrganizationFieldWithHttpInfo(id) {
      const opts = {}
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getOrganizationField");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = FieldResponse;
      return this.apiClient.callApi(
        '/organizationFields/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get one organization field
     * Returns data about a specific organization field.
     * @param {Number} id ID of the field
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FieldResponse}
     */
    getOrganizationField(id) {
      return this.getOrganizationFieldWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all organization fields
     * Returns data about all organization fields
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FieldsResponse} and HTTP response
     */
    getOrganizationFieldsWithHttpInfo() {
      const opts = {}
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = FieldsResponse;
      return this.apiClient.callApi(
        '/organizationFields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all organization fields
     * Returns data about all organization fields
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FieldsResponse}
     */
    getOrganizationFields() {
      return this.getOrganizationFieldsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update an organization field
     * Updates an organization field. See an example of updating custom fields’ values in <a href=\" https://pipedrive.readme.io/docs/updating-custom-field-value \" target=\"_blank\" rel=\"noopener noreferrer\">this tutorial</a>.
     * @param {Number} id ID of the field
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Name of the field
     * @param {String} opts.options When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. All active items must be supplied and already existing items must have their ID supplied. New items only require a label. Example: `[{\\\"id\\\":123,\\\"label\\\":\\\"Existing Item\\\"},{\\\"label\\\":\\\"New Item\\\"}]`
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FieldResponse} and HTTP response
     */
    updateOrganizationFieldWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateOrganizationField");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': opts['name'],
        'options': opts['options'],
      };

      let formParamArray = [
        'name',
        'options',
      ];

      let contentTypes = ['application/x-www-form-urlencoded', ];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = FieldResponse;
      return this.apiClient.callApi(
        '/organizationFields/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update an organization field
     * Updates an organization field. See an example of updating custom fields’ values in <a href=\" https://pipedrive.readme.io/docs/updating-custom-field-value \" target=\"_blank\" rel=\"noopener noreferrer\">this tutorial</a>.
     * @param {Number} id ID of the field
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Name of the field
     * @param {String} opts.options When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. All active items must be supplied and already existing items must have their ID supplied. New items only require a label. Example: `[{\\\"id\\\":123,\\\"label\\\":\\\"Existing Item\\\"},{\\\"label\\\":\\\"New Item\\\"}]`
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FieldResponse}
     */
    updateOrganizationField(id, opts) {
      return this.updateOrganizationFieldWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
