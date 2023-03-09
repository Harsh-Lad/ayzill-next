import styles from './page.module.css'
import Image from 'next/image'

export default async function BlogCard() {
    const prods = await fetch('http://127.0.0.1:8000/allBlogs/')
    const res = await prods.json()

    return (

        res.map((pro) => {
            return (
                <div className="col-lg-4 col-md-4 col-sm-12" key={pro.id}>
                    <div className={styles.blogCardMain + " card"}>
                        <Image src={`http://127.0.0.1:8000${pro.blogImage}`} width={320} height={180} className={styles.productImage + " card-img-top"} alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{pro.blogName}</h5>
                            <p className="card-text">{pro.productDesc}</p>
                            <a href="#" className="btn btn-primary mt-2">Go somewhere</a>
                        </div>
                    </div>
                </div>
            )
        })

    )
}