import React from 'react'
import '../components/styles/Product.css'
import img from '../assets/gym.jpg'
function Product() {
    return (
        <div className='ProductContainer'>
            <div className='img-infos'>
                <img src={img} />
                <div className='productInfos' >
                    <h2>MuscleTech Cell-Tech</h2>
                    <p>
                        A MuscleTech Product
                        Hardcore Creatine Formula Designed to Help Increase Mass*
                        10g creatine per 2 scoop serving
                        Research backed + carb muscle builder
                        200mg ALA to support energy levels
                        5g amino + BCAA matrix
                    </p>
                </div>
            </div>

            <div className='product-desc'>
                On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains
                </div>
                <div className='BuyThis'>
                Acheter maintenant
                </div>
        </div>
    )
}

export default Product