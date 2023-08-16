'use strict';

/**
 * local-test controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::local-test.local-test');
