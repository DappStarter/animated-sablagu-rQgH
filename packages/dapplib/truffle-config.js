require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remind history give glide flush turn'; 
let testAccounts = [
"0x668ce73dce56dbaf320181528214e781cc5ad46f34612a8bbef39cebb6af3ca6",
"0xcd361bac1bc95675a50d98d5746f589e7f8cd78fe4876d5519896e3206e62b8a",
"0xc91481f3b1d7e9d14732fb6d048194ddd67fb33b23f8ba25296f3677a860815e",
"0x1c5b417efb409fb8de7cc96a8b3a35c745a3af6422092da88e55bfa755b80cb5",
"0x74c5484663fccd9ba9734d011f1aea955facc523e4578d769bac95587f5fb3a4",
"0xa1e7f1c192aeb860071da27741c0ebe22628490bda3099899acb99ae9deac043",
"0xb8b2caaaa8e686fc4b47978a217a31b10fa1f271997a18a1cde5e5d51eeeb6b0",
"0x157df2257b9c9209ba6610aa3a3ff1f92ed69354c8584646e998baaf1eb33b29",
"0xa2ebeda8c47dc9346d6f4c823d9bc52c590d6422c4df15338809a7c778d82d25",
"0xd3fb0ed21de22eee401bcf9a2ec29f19623f92bbcd725ef9bb6a657c3890e717"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


