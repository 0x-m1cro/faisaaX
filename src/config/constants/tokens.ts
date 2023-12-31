import { ChainId, Token } from '@faisaa-finance/sdk'
import { serializeToken } from 'state/user/hooks/helpers'
import { CHAIN_ID } from './networks'
import { SerializedToken } from './types'
import addresses from './addresses.json'

const { MAINNET, TESTNET } = ChainId

interface TokenList {
  [symbol: string]: Token
}

const defineTokens = <T extends TokenList>(t: T) => t

export const mainnetTokens = {
  wvlx: new Token(MAINNET, addresses[1116].WVLX, 18, 'WCORE', 'Wrapped CORE', 'https://faisaa.finance/'),
  // bnb here points to the wbnb contract. Wherever the currency VLX is required, conditional checks for the symbol 'VLX' can be used
  vlx: new Token(MAINNET, addresses[1116].WVLX, 18, 'VLX', 'VLX', 'https://faisaa.finance/'),
  cake: new Token(MAINNET, addresses[1116].WAGToken, 18, 'FAISAA', 'FAISAA Token', 'https://faisaa.finance/'),
  usdt: new Token(
    MAINNET,
    '0x01445C31581c354b7338AC35693AB2001B50b9aE',
    6,
    'USDT',
    'Multichain Tether USD',
    'https://faisaa.finance/',
  ),
  weth: new Token(
    MAINNET,
    '0x85219708c49aa701871Ad330A94EA0f41dFf24Ca',
    18,
    'WETH',
    'Multichain WETH',
    'https://faisaa.finance/',
  ),
  bnb: new Token(MAINNET, '0x2b8e9cd44c9e09d936149549a8d207c918ecb5c4', 18, 'BNB', 'BNB', 'https://faisaa.finance/'),
  busd: new Token(
    MAINNET,
    '0xc111c29A988AE0C0087D97b33C6E6766808A3BD3',
    18,
    'BUSD',
    'Velas BUSD',
    'https://faisaa.finance/',
  ),
  usdc: new Token(
    MAINNET,
    '0xe2C120f188eBd5389F71Cf4d9C16d05b62A58993',
    6,
    'USDC',
    'Velas USDC',
    'https://faisaa.finance/',
  ),
  avax: new Token(
    MAINNET,
    '0x525bd1f949ffa2a0c5820f3b6fe61bb897466ff7',
    18,
    'AVAX',
    'Velas AVAX',
    'https://faisaa.finance/',
  ),
  ftm: new Token(
    MAINNET,
    '0xc9b3aa6e91d70f4ca0988d643ca2bb93851f3de4',
    18,
    'FTM',
    'Velas FTM',
    'https://faisaa.finance/',
  ),
  matic: new Token(
    MAINNET,
    '0x6ab0b8c1a35f9f4ce107ccbd05049cb1dbd99ec5',
    18,
    'MATIC',
    'Velas Polygon',
    'https://faisaa.finance/',
  ),
  bitorb: new Token(
    MAINNET,
    '0x09bce7716d46459df7473982fd27a96eabd6ee4d',
    6,
    'BITORB',
    'Bitorbit',
    'https://bitorbit.com',
  ),
  scar: new Token(
    MAINNET,
    '0x8d9fb713587174ee97e91866050c383b5cee6209',
    18,
    'SCAR',
    'Velhalla',
    'https://velhalla.io/',
  ),
  astro: new Token(
    MAINNET,
    '0x72eb7ca07399ec402c5b7aa6a65752b6a1dc0c27',
    18,
    'ASTRO',
    'AstroSwap',
    'https://www.astroswap.app/',
  ),
  swapz: new Token(
    MAINNET,
    '0x9b6fbF0ea23faF0d77B94d5699B44062e5E747Ac',
    18,
    'SWAPZ',
    'SWAPZ.app',
    'https://swapz.app',
  ),
  usdv: new Token(
    MAINNET,
    '0xcd7509b76281223f5b7d3ad5d47f8d7aa5c2b9bf',
    18,
    'USDV',
    'USD Velero Stablecoin',
    'https://velero.finance/',
  ),
  vdgt: new Token(
    MAINNET,
    '0xd12f7a98c0d740e7ec82e8caf94eb79c56d1b623',
    18,
    'VDGT',
    'VELERO',
    'https://velero.finance/',
  ),
  dai: new Token(MAINNET, '0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d', 18, 'DAI', 'dai', 'https://makerdao.com/'),
  wbtc: new Token(
    MAINNET,
    '0x639a647fbe20b6c8ac19e48e2de44ea792c62c5c',
    18,
    'WBTC',
    'Wrapped Bitcoin',
    'https://wbtc.network/',
  ),
  vlxpad: new Token(
    MAINNET,
    '0xa065e0858417dfc7abc6f2bd4d0185332475c180',
    18,
    'VLXPAD',
    'Velas Pad',
    'https://velaspad.io/',
  ),
  syrup: new Token(TESTNET, addresses[1116].WAGStake, 18, 'xFAISAA', 'xFAISAA Token', 'https://faisaa.finance/'),
  // te6: new Token(TESTNET, addresses[1115].TE6, 6, 'TE6', 'ERC20 Token', 'https://faisaa.finance/'),
  // te9: new Token(TESTNET, addresses[1115].TE9, 9, 'TE9', 'ERC20 Token', 'https://faisaa.finance/'),
  // te12: new Token(TESTNET, addresses[1115].TE12, 12, 'TE12', 'ERC20 Token', 'https://faisaa.finance/'),
  // te18: new Token(TESTNET, addresses[1115].TE18, 18, 'TE18', 'ERC20 Token', 'https://faisaa.finance/'),
}

export const testnetTokens = {
  wvlx: new Token(TESTNET, addresses[1115].WVLX, 18, 'WCORE', 'Wrapped CORE', 'https://faisaa.finance/'),
  cake: new Token(TESTNET, addresses[1115].WAGToken, 18, 'FAISAA', 'FAISAA Token', 'https://faisaa.finance/'),
  syrup: new Token(TESTNET, addresses[1115].WAGStake, 18, 'xFAISAA', 'xFAISAA Token', 'https://faisaa.finance/'),
  usdt: new Token(
    TESTNET,
    addresses[1115].USDT,
    18,
    'USDT',
    'CORE USDT',
    'https://faisaa.finance/',
  ),
  busd: new Token(
    TESTNET,
    addresses[1115].USDT,
    18,
    'BUSD',
    'CORE BUSD',
    'https://faisaa.finance/',
  ),
  weth: new Token(
    TESTNET,
    addresses[1115].WVLX,
    18,
    'WETH',
    'CORE WETH',
    'https://faisaa.finance/',
  ),
  // te6: new Token(TESTNET, addresses[1115].TE6, 6, 'TE6', 'ERC20 Token', 'https://faisaa.finance/'),
  // te9: new Token(TESTNET, addresses[1115].TE9, 9, 'TE9', 'ERC20 Token', 'https://faisaa.finance/'),
  // te12: new Token(TESTNET, addresses[1115].TE12, 12, 'TE12', 'ERC20 Token', 'https://faisaa.finance/'),
  // te18: new Token(TESTNET, addresses[1115].TE18, 18, 'TE18', 'ERC20 Token', 'https://faisaa.finance/'),
}

const tokens = () => {
  const chainId = CHAIN_ID

  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (parseInt(chainId, 10) === ChainId.TESTNET) {
    return Object.keys(testnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] }
    }, {} as typeof testnetTokens)
    // return Object.keys(mainnetTokens).reduce((accum, key) => {
    //   return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    // }, {} as typeof testnetTokens & typeof mainnetTokens)
  }

  return testnetTokens
}

const unserializedTokens = tokens()

type SerializedTokenList = Record<keyof typeof unserializedTokens, SerializedToken>

export const serializeTokens = () => {
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {} as SerializedTokenList)

  return serializedTokens as any
}

export default unserializedTokens
