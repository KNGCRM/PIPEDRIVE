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
import ChannelObject from '../model/ChannelObject';
import ChannelObjectResponse from '../model/ChannelObjectResponse';
import DeleteChannelSuccess from '../model/DeleteChannelSuccess';
import DeleteConversationSuccess from '../model/DeleteConversationSuccess';
import InlineResponse200 from '../model/InlineResponse200';
import InlineResponse400 from '../model/InlineResponse400';
import InlineResponse4001 from '../model/InlineResponse4001';
import InlineResponse403 from '../model/InlineResponse403';
import InlineResponse4031 from '../model/InlineResponse4031';
import InlineResponse404 from '../model/InlineResponse404';
import MessageObject from '../model/MessageObject';

/**
* Channels service.
* @module api/ChannelsApi
* @version 1.0.0
*/
export default class ChannelsApi {

    /**
    * Constructs a new ChannelsApi. 
    * @alias module:api/ChannelsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient;
    }



    /**
     * Add a channel
     * Adds a new messaging channel, only admins are able to register new channels. It will use the getConversations endpoint to fetch conversations, participants and messages afterward. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * @param {Object} opts Optional parameters
     * @param {module:model/ChannelObject} opts.channelObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ChannelObjectResponse} and HTTP response
     */
    addChannelWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['channelObject'];

      if (opts['name'] === undefined || opts['name'] === null) {
        throw new Error("Missing the required parameter 'name' when calling addChannel");
      }
      if (opts['provider_channel_id'] === undefined || opts['provider_channel_id'] === null) {
        throw new Error("Missing the required parameter 'provider_channel_id' when calling addChannel");
      }

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

      let contentTypes = ['application/json', ];
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
      let returnType = ChannelObjectResponse;
      return this.apiClient.callApi(
        '/channels', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a channel
     * Adds a new messaging channel, only admins are able to register new channels. It will use the getConversations endpoint to fetch conversations, participants and messages afterward. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * @param {Object} opts Optional parameters
     * @param {module:model/ChannelObject} opts.channelObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ChannelObjectResponse}
     */
    addChannel(opts) {
      return this.addChannelWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete a channel
     * Deletes an existing messenger’s channel and all related entities (conversations and messages). To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * @param {String} id The ID of the channel provided by the integration
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteChannelSuccess} and HTTP response
     */
    deleteChannelWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteChannel");
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
      let returnType = DeleteChannelSuccess;
      return this.apiClient.callApi(
        '/channels/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a channel
     * Deletes an existing messenger’s channel and all related entities (conversations and messages). To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * @param {String} id The ID of the channel provided by the integration
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteChannelSuccess}
     */
    deleteChannel(id) {
      return this.deleteChannelWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete a conversation
     * Deletes an existing conversation. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * @param {String} channelId The ID of the channel provided by the integration
     * @param {String} conversationId The ID of the conversation provided by the integration
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteConversationSuccess} and HTTP response
     */
    deleteConversationWithHttpInfo(channelId, conversationId) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling deleteConversation");
      }

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw new Error("Missing the required parameter 'conversationId' when calling deleteConversation");
      }

      let pathParams = {
        'channel-id': channelId,
        'conversation-id': conversationId,
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
      let returnType = DeleteConversationSuccess;
      return this.apiClient.callApi(
        '/channels/{channel-id}/conversations/{conversation-id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a conversation
     * Deletes an existing conversation. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * @param {String} channelId The ID of the channel provided by the integration
     * @param {String} conversationId The ID of the conversation provided by the integration
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteConversationSuccess}
     */
    deleteConversation(channelId, conversationId) {
      return this.deleteConversationWithHttpInfo(channelId, conversationId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Receives an incoming message
     * Adds a message to a conversation. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * @param {Object} opts Optional parameters
     * @param {module:model/MessageObject} opts.messageObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    receiveMessageWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['messageObject'];

      if (opts['id'] === undefined || opts['id'] === null) {
        throw new Error("Missing the required parameter 'id' when calling receiveMessage");
      }
      if (opts['channel_id'] === undefined || opts['channel_id'] === null) {
        throw new Error("Missing the required parameter 'channel_id' when calling receiveMessage");
      }
      if (opts['sender_id'] === undefined || opts['sender_id'] === null) {
        throw new Error("Missing the required parameter 'sender_id' when calling receiveMessage");
      }
      if (opts['conversation_id'] === undefined || opts['conversation_id'] === null) {
        throw new Error("Missing the required parameter 'conversation_id' when calling receiveMessage");
      }
      if (opts['message'] === undefined || opts['message'] === null) {
        throw new Error("Missing the required parameter 'message' when calling receiveMessage");
      }
      if (opts['status'] === undefined || opts['status'] === null) {
        throw new Error("Missing the required parameter 'status' when calling receiveMessage");
      }
      if (opts['created_at'] === undefined || opts['created_at'] === null) {
        throw new Error("Missing the required parameter 'created_at' when calling receiveMessage");
      }

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

      let contentTypes = ['application/json', ];
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
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/channels/messages/receive', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Receives an incoming message
     * Adds a message to a conversation. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * @param {Object} opts Optional parameters
     * @param {module:model/MessageObject} opts.messageObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    receiveMessage(opts) {
      return this.receiveMessageWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
