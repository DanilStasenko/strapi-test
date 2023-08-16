'use strict';

/**
 * local-test router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::local-test.local-test');
