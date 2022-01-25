require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy raise stereo hole half clinic equal gate'; 
let testAccounts = [
"0x4f5a44e0539a821ad7ba83500db60796d1a293ad72f13704530ad8f5bd9457da",
"0x03ee23fd72559b3907a9ee87d5c324c984731ce22f0be7610c5023bacdd5b151",
"0xd750fcbe69db3008cee330b3f979cb81c6cd5c50aa5433be184d444cdfc00ef7",
"0x0c7237763be98e241b17f4b73648595d86191c14da12a746258d63fed0964f17",
"0x78a30cdabbec7e42d1bae916e700b4da146c61bb5aa76b22f47e48d2dff4bef8",
"0xe8cf4189aa52117eeeaff3836e06c09afaff74fbf46b96c64b1f8f28fbae5aa9",
"0xceac7732b7aa4ee24414d42c75f0865f059fc3b77afec5898673d0d6ff2189c2",
"0xdeb0b6cb8d41585634f80e6fbbcf9bc72234d9522df19c97c3e8a8abc699c2d2",
"0x8e7f8f5e7e30ce1822de2a1b7634b7fb9eeb1fe518dea19d649beb30e086905b",
"0xb5b141c3e18c43a718f4c77cfe32f9e7fbfbea1b8011a8f9a87e430b21dc03c3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

