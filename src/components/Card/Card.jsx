import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Card.module.css";

const Card = ({data}) => {
    return (
        <>
            {data && data.map((item, index) => (
                <Link key={index} to={`/detailpage/${item.id}`} className={styles.cardLink}>
                    <div className={styles.card}>
                        <img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg" alt="recipies" />
                        {/* <img src={item.image} alt={item.city} /> */}
                        <h3 className={styles.cardTitle}>{`${item.nameOfThePlace}`}</h3>
                    </div>
                </Link>
            ))}
        </>
    );
}

export default Card