const HDWallet = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
             return new HDWallet("skill adult actor lunar real layer grocery noble news drink pyramid host", "https://rinkeby.infura.io/v3/1ed94860be73419489f2b88276e498ae")
        },
         network_id: '4',
         gas: 4500000,
         gasPrice: 10000000000,
       }
  }
};
