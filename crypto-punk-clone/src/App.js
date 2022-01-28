
import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react'
import axios from 'axios'
import NftList from './components/NftList';

function App() {
  const [nftListData, setNftListData] = useState([])

  useEffect(() => {
    const getMyNfts = async () => {

      const openSeaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x04e75e53AAe392C4CEf74c9429084c5a4BBa6386&order_direction=asc'
      )
      const nftData = openSeaData.data.assets
      console.log('openSeaData--->', nftData)
      setNftListData(nftData)
    }
    return getMyNfts()

  }, []);




  return (
    <div className='app'>
      <Header />
      <NftList nftListData={nftListData} />
    </div>

  );
}

export default App;
