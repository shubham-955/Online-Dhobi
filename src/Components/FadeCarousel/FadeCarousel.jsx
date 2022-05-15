import React from 'react'
import styles from './FadeCarousel.module.css'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { NavigateNext, NavigateBefore } from '@material-ui/icons';

export const FadeCarousel = () => {

    const properties = {
        canSwipe: false,
        autoPlay: true,
        indicators: true,
        arrows: false
        // prevArrow: <div className={styles.leftArrow}>
        //     <NavigateBefore style={{ color: 'black', fontSize: 30 }} />
        // </div>,
        // nextArrow: <div className={styles.rightArrow}>
        //     <NavigateNext style={{ color: 'black', fontSize: 30 }} />
        // </div>
    }

    return (
        <div className={styles.sliderContainer}>
            <Fade easing="ease" {...properties}>
                <div className={styles.eachSlide}>
                    <img src={require('../../Gallery/gbb-uploads/slid1.jpg')} alt="" />
                </div>
                <div className={styles.eachSlide}>
                    <img src={require('../../Gallery/gbb-uploads/slid2.jpg')} alt="" />
                </div>
            </Fade>
        </div>
    )
}
