import { FooterLinkType } from 'packages/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'mailto:support@wagyuswap.app',
      },
      {
        label: t('Brand'),
        href: 'https://docs.faisaa.finance/brand',
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/@wagyuswap.app',
      },
      // {
      //   label: t('Community'),
      //   href: 'https://docs.faisaa.finance/contact-us/telegram',
      // },
      // {
      //   label: t('Litepaper'),
      //   href: 'https://v2litepaper.pancakeswap.finance/',
      // },
      // {
      //   label: '—',
      // },
      // {
      //   label: t('Online Store'),
      //   href: 'https://pancakeswap.creator-spring.com/',
      // },
    ],
  },
  // {
  //   label: t('Help'),
  //   items: [
  //     {
  //       label: t('Customer Support'),
  //       href: 'https://docs.faisaa.finance/contact-us/customer-support',
  //     },
  //     {
  //       label: t('Troubleshooting'),
  //       href: 'https://docs.faisaa.finance/help/troubleshooting',
  //     },
  //     {
  //       label: t('Guides'),
  //       href: 'https://docs.faisaa.finance/get-started',
  //     },
  //   ],
  // },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/wagyuswapapp',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.faisaa.finance/wagyuswap',
      },
      // {
      //   label: t('Bug Bounty'),
      //   href: 'https://docs.faisaa.finance/code/bug-bounty',
      // },
      // {
      //   label: t('Audits'),
      //   href: 'https://docs.faisaa.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited',
      // },
      // {
      //   label: t('Careers'),
      //   href: 'https://docs.faisaa.finance/hiring/become-a-chef',
      // },
    ],
  },
]
