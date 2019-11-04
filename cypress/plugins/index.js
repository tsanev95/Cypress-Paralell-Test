// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
const fs = require('fs-extra')
const path = require('path')

function getConfigFile(file, integrate) {

    fileName = file + (integrate ? '.integrate' : '');
    const pathToConfigFile = path.resolve('cypress/configFiles', `${fileName}.json`)

    return fs.readJson(pathToConfigFile)
}

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
    return new Promise(async (resolve, reject) => {

        if (config.env.integrate) {
            config.integrationFolder = path.resolve(__dirname, '../../cypress/integration/integrate');
        } else {
            config.integrationFolder = path.resolve(__dirname, '../../cypress/integration/obf');
            config.modifyObstructiveCode = false
        }

        const file = config.env.configFile || 'localhost';

        config.env.configData = JSON.stringify(await getConfigFile(file, config.env.integrate));
        config.env.testData = JSON.stringify(await getConfigFile('testData'));


        resolve(config);
    })

}
