import {useEffect, useState} from 'react';
import Link from 'next/link';
import { useMarketplace } from '@thirdweb-dev/react';
import NFTCard from './NFTCard';

// const marketPlaceAddress = process.env['MARKETPLACE_ADDRESS'];
const style = {};

const Listings = () => {
    const [listings, setListings] = useState([]);
    // const marketplace = useMarketplace(marketPlaceAddress);
    const marketplace = useMarketplace("0x2284eD2822E00E196Ed0D7D3AA603f9E56e65684");
    console.log(listings);

    useEffect(() => {
        getListings();
    }, []);

    const getListings = async () => {
        try {
            const list = await marketplace.getActiveListings();
            // console.log(list);
            setListings(list);
        } catch (err) {console.error(err);}
    }

    return (
        <div className = {style.wrapper}>
            {listings?.length > 0 ? (
                <>
                    {listings?.map((listing, index) => (
                        <Link
                            href = {`/assets/${listing.assetContractAddress}/${listing.id}`}
                            key = {index}
                        >
                            <a>
                                <NFTCard/>
                            </a>
                        </Link>
                    ))}
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}

export default Listings;