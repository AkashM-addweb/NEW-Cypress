/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// /**
//  * @type {Cypress.PluginConfig}
//  */
// module.exports = (on, config) => {
//   // `on` is used to hook into various events Cypress emits
//   // `config` is the resolved Cypress config
// }

// const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
const { initPlugin } = require('cypress-plugin-snapshots/plugin');
let percyHealthCheck = require('@percy/cypress/task')
require('@applitools/eyes-cypress')(module)

module.exports = (on, config) => {
  // addMatchImageSnapshotPlugin(on, config);
  initPlugin(on, config);
  on("task", percyHealthCheck);
  return config;  

};