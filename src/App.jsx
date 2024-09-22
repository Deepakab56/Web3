
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import './App.css'
import { createAppKit, useAppKit } from '@reown/appkit/react'





function App() {

 

  const projectId = '3d2f4a67db7c6153807505e32b5b651c'

  
  // function getBlockchainApiRpcUrl(chainId) {
  //   return `https://rpc.walletconnect.org/v1/?chainId=eip155:${chainId}&projectId=${projectId}`
  // }
  
  // 3. Set the chains
  const chains = [
    {
      chainId: 1,
      name: 'Ethereum',
      currency: 'ETH',
      explorerUrl: 'https://etherscan.io',
      rpcUrl: "https://rpc.ankr.com/eth",
      chainNamespace: 'eip155'
    },
    {
      chainId: 42161,
      name: 'Arbitrum',
      currency: 'ETH',
      explorerUrl: 'https://arbiscan.io',
      rpcUrl: "https://rpc.ankr.com/arbitrum",
      chainNamespace: 'eip155'
    }
  ]
  
  // 3. Create a metadata object - optional
  const metadata = {
    name: 'My Website',
    description: 'My Website description',
    url: 'https://mywebsite.com', // origin must match your domain & subdomain
    icons: ['https://avatars.mywebsite.com/']
  }
  
  // 4. Create Ethers Adapter
  const ethersAdapter = new EthersAdapter()
  
  // 5. Create a AppKit instance
  createAppKit({
    adapters: [ethersAdapter],
    networks: chains,
    projectId,
    features: {
      analytics: true // Optional - defaults to your Cloud configuration
    }
  })



  const {open } = useAppKit()
  return (
    <>
    <button onClick={open}>open</button>
    
    </>
  )
}

export default App
