/**
 * PipedriveAPIV1Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");

const controller = testerlib.StagesController;
const NumberBooleanEnum = testerlib.NumberBooleanEnum;

describe("StagesController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Returns data about all stages
     */
    it("should testTestGetAllStages response", function testTestGetAllStagesTest(done) {
        // parameters for the API call
        let pipelineId = null;

        controller.getAllStages(pipelineId, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        }).catch(() => undefined);
    });

    /**
     * Adds a new stage, returns the ID upon success.
     */
    it("should testTestAddANewStage response", function testTestAddANewStageTest(done) {
        // parameters for the API call
        let input = [];
        input['contentType'] = null;
        input['body'] = null;

        controller.addANewStage(input, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        }).catch(() => undefined);
    });

});