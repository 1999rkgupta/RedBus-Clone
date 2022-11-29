import React from 'react'
import styles from "./_redBus.module.css"

const Redbus3 = () => {
  return (
    <section id={styles.redBus3}>
       <article>
        <img src="https://s1.rdbuz.com/web/images/home/promise.png" alt="" />
        <h1>WE PROMISE TO DELIVER</h1>
        <div className={styles.content}>

            <div className={styles.subContent}>
            <div className={styles.content1}>
                <img src="https://s2.rdbuz.com/web/images/home/benefits.png" alt="" />
                <h3>UNMATCHED BENEFITS</h3>
                <p>We take care of your travel beyond ticketing by <br /> providing you with innovative and unique <br /> benefits.</p>
            </div>
            <div className={styles.content2}>
                <img src="https://s1.rdbuz.com/web/images/home/customer_care.png" alt="" />
                <h3>SUPERIOR CUSTOMER <br /> SERVICE</h3>
                <p>We put our experience and relationships to <br /> good use and are available to solve your travel <br /> issues.</p>
            </div>
            <div className={styles.content3}>
                <img src="https://s1.rdbuz.com/web/images/home/lowest_Fare.png" alt="" />
                <h3>LOWEST PRICES</h3>
                <p>We always give you the lowest price with the <br /> best partner offers.always you the lowest price <br /> give you the lowest price</p>
            </div>
            </div>
        </div>
       </article>
    </section>
  )
}

export default Redbus3