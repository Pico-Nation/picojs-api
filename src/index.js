const api = require('./api/v1')
const apiGen = require('./apigen')
const processArgs = require('./process-args')

const PicoApi = function(config) {
  return apiGen('v1', api, config)
}

Object.assign(
  PicoApi,
  {
    processArgs,
    api,

    /** @deprecated */
    Testnet: function (config) {
      console.error('deprecated, change PicoApi.Testnet(..) to just PicoApi(..)')
      return PicoApi(config)
    },

    /** @deprecated */
    Localnet: function (config) {
      console.error('deprecated, change PicoApi.Localnet(..) to just PicoApi(..)')
      return PicoApi(config)
    }
  }
)

module.exports = PicoApi
