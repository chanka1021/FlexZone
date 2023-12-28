import React from 'react'
import styled from 'styled-components'
import { IoCaretBackCircleOutline, IoCaretForwardCircleOutline } from "react-icons/io5";
import img from '../assets/gym.jpg'
import img2 from '../assets/sec1.jpg'
import { useState } from 'react';

function ImageCarousel(props) {
    const images = [img, img2, img, img2]

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    const Gallery = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    `;
    const ImgContainer = styled.img`
    max-height: 400px !important;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    `
    const BtnsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    `

    const Btn = styled.div`
    padding: 5px;
    color: #524ff7;
    font-size: 35px;
    cursor: pointer;
    `

    return (
        <Gallery>
            <ImgContainer src={images[currentImageIndex]} />
            <BtnsContainer>
                <Btn onClick={handlePrevious}><IoCaretBackCircleOutline /></Btn>
                <Btn onClick={handleNext} ><IoCaretForwardCircleOutline /></Btn>
            </BtnsContainer>
        </Gallery>
    )   
}

export default ImageCarousel