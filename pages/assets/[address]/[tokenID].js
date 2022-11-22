import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAddress, useMarketplace } from '@thirdweb-dev/react';
import { BigNumber } from 'ethers';

import TopNavbarLayout from '../../../layouts/TopNavbarLayout';
import NFTImage from '../../../components/NFTDetails/NFTImage';
import NFTSalesInfo from '../../../components/NFTDetails/NFTSalesInfo';

const styles = {
    wrapper: `h-[100vh] mx-auto flex max-w-2xl`,
    nftContainer: `flex flex-col lg:flex-row`,
    leftContainer: `flex flex-col space-y-4`,
    leftElement: `hidden lg:block`,
    rightElement: `flex flex-1 flex-col space`,
    buyoutContainer: `flex-1`,
}

const NFT = () => {
    const [listing, setListing] = useState();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { tokenID } = router.query;
    const marketplace = useMarketplace('0x2284eD2822E00E196Ed0D7D3AA603f9E56e65684');
    const address = useAddress();

    useEffect(() => {
        getListing();
    },[])

    useEffect(() => {
        if (!address) {
            router.replace('/');
        }
    }, [address])

    const getListing = async () => {
        try {
            setLoading(true);
            const listing = await marketplace.getListing(BigNumber.from(tokenID));
            setListing(listing);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }
    // console.log('Listing:', listing);
    const buyNFT = async () => {
        try {
            await marketplace.buyoutListing(tokenID, 1);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <TopNavbarLayout>
            <div className={styles.wrapper}>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div className={styles.nftContainer}>
                        <div className={styles.leftContainer}>
                            <div className={styles.leftElement}>
                                <NFTImage image = {listing?.asset?.image}/>
                            </div>
                            <div className={styles.leftElement}>
                                {/* <NFTDetails /> */}
                            </div>
                        </div>
                        <div className={styles.rightContainer}>
                            {/* <NFTBasicInfo /> */}
                            <div className={styles.buyoutContainer}>
                                <NFTSalesInfo 
                                    price = {listing?.buyoutCurrencyValuePerToken.displayValue}
                                    buyNFT = {buyNFT}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </TopNavbarLayout>
    )
}

export default NFT;