const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'to-do_list',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

