import React from 'react'
import styles from './CarouselUI.module.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { NavigateNext, NavigateBefore } from '@material-ui/icons';

export const CarouselUI = () => {

    const properties = {
        canSwipe: false,
        autoPlay: true,
        indicators: true,
        prevArrow: <div className={styles.leftArrow}>
            <NavigateBefore style={{ color: 'black', fontSize: 35 }} />
        </div>,
        nextArrow: <div className={styles.rightArrow}>
            <NavigateNext style={{ color: 'black', fontSize: 35 }} />
        </div>
    }

    return (
        <div className={styles.sliderContainer}>
            <Slide easing="ease" {...properties}>
                <div className={styles.eachSlide}>
                    <img src={require('../../Gallery/slider/slider-11.jpg')} alt="" />
                </div>
                <div className={styles.eachSlide}>
                    <img src={require('../../Gallery/slider/slider-12.jpg')} alt="" />
                </div>
                <div className={styles.eachSlide}>
                    <img src={require('../../Gallery/slider/slider-13.jpg')} alt="" />
                </div>
                <div className={styles.eachSlide}>
                    <img src={require('../../Gallery/slider/slider-14.jpg')} alt="" />
                </div>
                <div className={styles.eachSlide}>
                    <img src={require('../../Gallery/slider/22.jpg')} alt="" />
                </div>
            </Slide>
        </div>
    )
}
