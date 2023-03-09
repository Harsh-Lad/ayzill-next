
"use client"
import styles from './page.module.css'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from 'next/image'
import firstSlide from '../../../public/images/slide.webp'
import secondSlide from '../../../public/images/slide1.webp'
import thirdSlide from '../../../public/images/slide2.webp'
import fourthSlide from '../../../public/images/slide3.webp'

export default function HomeSlider() {
    const [sliderRef] = useKeenSlider({
        mode: "snap",
        loop: true,
        slides: {
            origin: "center",
            perView: 1.2,
            spacing: 15,
        },
    })

    return (
        <>
            <div className="pt-5">
                <div ref={sliderRef} className="keen-slider pt-5">
                    <div className="keen-slider__slide number-slide1">
                        <Image src={firstSlide} />
                    </div>
                    <div className="keen-slider__slide number-slide2">
                        <Image src={secondSlide} />
                    </div>
                    <div className="keen-slider__slide number-slide3">
                        <Image src={thirdSlide} />
                    </div>
                    <div className="keen-slider__slide number-slide4">
                        <Image src={fourthSlide} />
                    </div>
                </div>
            </div>
        </>
    )
}