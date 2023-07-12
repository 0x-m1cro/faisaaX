import { Box, Text, UserMenuItem, TelosIcon, VelasIcon } from 'packages/uikit'
import { useRouter } from 'next/router'
import { useTranslation } from 'contexts/Localization'
import Wrapper from './Wrapper'

const chains = [
  { label: 'CORE Mainnet', Icon: VelasIcon },
  { label: 'CORE Testnet', Icon: TelosIcon },
]

const NetworkSelect = ({}) => {
  const { t } = useTranslation()
  // const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''
  // const selectedOne = chains.find((c) => c.url.toLowerCase() === origin.toLowerCase())

  return (
    <>
        <UserMenuItem
          key={chains[0].label}
          style={{ justifyContent: 'flex-start' }}
        >
          {chains[0]?.Icon ?? chains[0].Icon} 
          <Text bold pl="12px">
            {chains[0].label}
          </Text>
        </UserMenuItem>
   
    </>
  )
}

export const NetworkSwitcher = () => {
  const { t } = useTranslation()
  // const router = useRouter()
  // const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''
  // const selectedOne = chains.find((c) => c.url.toLowerCase() === origin.toLowerCase())

  return (
    <Box height="100%">
      <Wrapper mr="8px" placement="bottom" variant={'default'} text={t(chains[0].label || 'Select a Network')}>
        {() => <NetworkSelect />}
      </Wrapper>
    </Box>
  )
}
