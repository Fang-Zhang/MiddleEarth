import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAddress, useMarketplace } from '@thirdweb-dev/react';
import { BigNumber } from 'ethers';

import TopNavbarLayout from '../../../layouts/TopNavbarLayout';

const styles = {}

const NFT = () => {
    const [loading, setLoading] = useState(false);

    return (
        <TopNavbarLayout>
            <div className={styles.wrapper}>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div className={styles.nftContainer}>
                        <div className={styles.leftContainer}>
                            <div className={styles.leftElement}>
                                {/* <NFTImage /> */}
                            </div>
                            <div className={styles.leftElement}>
                                {/* <NFTDetails /> */}
                            </div>
                        </div>
                        <div className={styles.rightContainer}>
                            {/* <NFTBasicInfo /> */}
                            <div className={styles.buyoutContainer}>
                                {/* <NFTSalesInfo /> */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </TopNavbarLayout>
    )
}

export default NFT;