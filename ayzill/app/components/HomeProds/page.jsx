import Image from "next/image"
import HomeBtn from "../HomeBtn/page"
import styles from "./page.module.css"

export default async function HomeProds() {

    const prods = await fetch('http://127.0.0.1:8000/allProds/')
    const res = await prods.json()


    return (
        <>
        {res.map((pro) => {
            return(
            <div className="row pt-4 align-items-center" key={pro.id}>
                <div className="col-3 d-flex align-items-center justify-content-center" >
                    <Image src={`http://127.0.0.1:8000${pro.productImage}`} loading="lazy" alt="250ml bottle" className="rounded" width={250} height={250} data-aos="fade-right" />
                </div>
                <div className={styles.proContain + " col-9 d-flex flex-column justify-content-center"}>


                    <p className={styles.mlBadge + " badge rounded-pill text-bg-primary px-3"} data-aos="slide-up">{pro.bottleSize}ml</p>
                    <p className={styles.helpTextThirdSection12 + " mt-3  px-1"} data-aos="fade-left" >
                        {pro.productDesc}
                    </p>
                    <HomeBtn />
                </div>
            </div>)
        })}
        </>

    )

}