import { TranslateFunction } from 'contexts/Localization/types'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Trade anything. No registration, no hassle.'),
  bodyText: t('Trade any token on CORE DAO Blockchain in seconds, just by connecting your wallet.'),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.faisaa.finance//',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'VLX', alt: t('VLX token') },
      { src: 'BTC', alt: t('BTC token') },
      { src: 'FAISAA', alt: t('FAISAA token') },
    ],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Earn passive income with crypto.'),
  bodyText: t('Faisaa makes it easy to make your crypto work for you.'),
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: t('Explore'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.faisaa.app/products/yield-farming',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: t('Pie chart') },
      { src: 'stonks', alt: t('Stocks chart') },
      { src: 'folder', alt: t('Folder with cake token') },
    ],
  },
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('FAISAA makes our world go round.'),
  bodyText: t(
    'FAISAA token is at the heart of the ecosystem. Trade, farm, stake and win... heck, you can even vote with it!',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0xabf26902fd7b624e0db40d31171ea9dddf078351',
    text: t('Buy FAISAA'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.faisaa.app/tokenomics/',
    text: t('Learn'),
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
      { src: 'bottom-right', alt: t('Small 3d faisaa') },
      { src: 'top-right', alt: t('Small 3d faisaa') },
      { src: 'coin', alt: t('FAISAA token') },
      { src: 'top-left', alt: t('Small 3d faisaa') },
    ],
  },
})
