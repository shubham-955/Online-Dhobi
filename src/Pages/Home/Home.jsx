import React from 'react'
import { CarouselUI } from '../../Components/CarouselUI/CarouselUI'
import { FadeCarousel } from '../../Components/FadeCarousel/FadeCarousel'
import styles from './Home.module.css'

export const Home = () => {

    return (
        <div className={styles.homeContainer}>
            <CarouselUI />
            <div className={styles.subContainer}>
                <img src={require('../../Gallery/gbb-uploads/order1.jpg')} className={styles.orderImg} alt="" />
                <div className={styles.title}>
                    <p>Offers On Packages</p>
                </div>
                <div className={styles.offersImg}>
                    <img src={require('../../Gallery/gbb-uploads/s1.jpg')} alt="" />
                    <img src={require('../../Gallery/gbb-uploads/s2.jpg')} alt="" />
                    <img src={require('../../Gallery/gbb-uploads/s3.jpg')} alt="" />
                    <img src={require('../../Gallery/gbb-uploads/s4.jpg')} alt="" />
                </div>
                <img src={require('../../Gallery/gbb-uploads/features2.jpg')} className={styles.orderImg} alt="" />
                <div className={styles.title}>
                    <p>Our Categories</p>
                </div>
                <div className={styles.categoriesSection}>
                    <div className={styles.leftSection}>
                        <img src={require("../../Gallery/gbb-uploads/bg-6.jpg")} className={styles.orderImg} alt="" />
                    </div>
                    <div className={styles.rightSection}>
                        <img src={require('../../Gallery/gbb-uploads/men.jpg')} alt="" />
                        <img src={require('../../Gallery/gbb-uploads/women.jpg')} alt="" />
                        <img src={require('../../Gallery/gbb-uploads/kid.jpg')} alt="" />
                        <img src={require('../../Gallery/gbb-uploads/house.jpg')} alt="" />
                    </div>
                </div>
                <div className={styles.title}>
                    <p>Our Features</p>
                </div>
                <FadeCarousel />
                <div className={styles.title}>
                    <p>Our Work Process</p>
                </div>
                <img src={require('../../Gallery/gbb-uploads/work_process.jpg')} className={styles.orderImg} alt="" />
                <div className={styles.title}>
                    <p>Our Services</p>
                </div>
                <div className={styles.offersImg}>
                    <div className={styles.service}>
                        <img src={require('../../Gallery/gbb-uploads/washfold.jpg')} alt="" />
                        <div className={styles.serviceTag}>
                            <p>Wash & Fold</p>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <img src={require('../../Gallery/gbb-uploads/iron.jpg')} alt="" />
                        <div className={styles.serviceTag}>
                            <p>Ironing</p>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <img src={require('../../Gallery/gbb-uploads/dryclean.jpg')} alt="" />
                        <div className={styles.serviceTag}>
                            <p>Dry Cleaning</p>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <img src={require('../../Gallery/gbb-uploads/washiron.jpg')} alt="" />
                        <div className={styles.serviceTag}>
                            <p>Wash & Iron</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
