'use strict';

/**
 * local-test service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::local-test.local-test');
