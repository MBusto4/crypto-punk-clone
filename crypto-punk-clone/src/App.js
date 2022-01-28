
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import { useState, useEffect } from 'react'
import axios from 'axios'

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
      <CollectionCard
        id={0}
        name={'Missing Tooth Smiley'}
        traits={[{ 'value': '8' }]}
        image={'https://lh3.googleusercontent.com/xceq4iY8cugIESnwC5aiDeUGW9dgvSnZEAWCk1uSlEF-K4Bi_PILkoAAjegorc_JHRv3Nj3porpU1Ar_3KXRwts1EAuOjMk8n3JlUg=w600'} />
    </div>

  );
}

export default App;
