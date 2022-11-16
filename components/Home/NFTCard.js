import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai';


const style = {};

const NFTCard = ({listing}) => {
    // console.log(listing);
    return (
        <div className={style.wrapper}>
            <div className={style.imageContainer}>
                <Image
                    className={style.nftImage}
                    src={listing.asset.image}
                    height={340}
                    width={340}
                    alt='nft'
                />
            </div>
            <div className = {style.nftLowerContainer}>
                <div className = {style.nftInfoContainer}>
                    <div>
                        {listing.asset.collection && (
                            <div className = {style.collectionTitle}>
                                {listing.asset?.collection?.name}
                            </div>
                        )}
                        <div className = {style.nftTitle}>{listing.asset.name}</div>
                    </div>
                    <div className={style.priceContainer}>
                        <div className = {style.priceTitle}>Buy at</div>
                        <div className = {style.wethImageContainer}>
                            <Image
                                height={16}
                                width={16}
                                src = '/weth-logo.svg'
                                alt= 'weth'
                            />
                            <div className = {style.priceValue}>
                                {listing.buyoutCurrencyValuePerToken?.displayValue}
                            </div>
                        </div>
                    </div>
                </div>
                <div className = {style.likesContainer}>
                    <AiOutlineHeart className={style.heartIcon}/>
                    <div className = {style.likeCounter}>
                        {listing.asset?.stats?.favorites ?? 0}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFTCard;