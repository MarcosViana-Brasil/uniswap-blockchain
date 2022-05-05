require('@nomiclabs/hardhat-waffle')

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: '0.8.4',
    networks: {
        rinkeby: {
            url: 'https://eth-rinkeby.alchemyapi.io/v2/s6xHP9Bm6Qwe4v8Eoj68RcigjShhMcRb',
            accounts: [
                '8b8be5572e703c9634ac1643f65c0daab6c32d594f33cc6b99fa63c64d18ddf8',
            ],
        },
    },
}
