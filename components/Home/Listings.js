import {useEffect, useState} from 'react';
import Link from 'next/link';
import { useMarketplace } from '@thirdweb-dev/react';

// const marketPlaceAddress = process.env['MARKETPLACE_ADDRESS'];

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
        <div>
            Listings
        </div>
    )
}

export default Listings;