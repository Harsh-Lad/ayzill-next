import styles from './page.module.css'

export default function blogs() {
    return (
        <>
            <div className={styles.parentContainer + " pt-5"}>
                <div className={styles.formWrapper + " "}>
                    <form action="">
                        <p className={styles.formHead + " "}>Sign up</p>
                        <p className={styles.formSubHead + " my-2"}>Become a member of Ayzill Water</p>
                        <p className={styles.formSubHead1 + " mb-3"}>Enter your basic details</p>

                        <input type="text" className="form-control my-3 w-100" placeholder="Your Name" />
                        <input type="email" className="form-control my-3 w-100" placeholder="Email id" />
                        <input type="tel" className="form-control my-3 w-100" placeholder="Phone" />
                        <input type="password" className="form-control my-3 w-100" placeholder="Password" />
                        <input type="password" className="form-control my-3 w-100" placeholder="Password" />

                        <div className="">
                            <button type="button" class="btn btn-primary">Continue</button>
                            <button type="button" class="btn m-0 p-0 d-block my-1">Already have an account?</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}