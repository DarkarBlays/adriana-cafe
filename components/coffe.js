import Image from 'next/image';
import styles from '../styles/coffe.module.css';

export default function Coffee({ cafe }) {
    const { name, image, price, rating, votes, popular, available } = cafe;

    return (
        <div className={styles.cardsContainer}>
            <div className={styles.card}>
                <div className={styles.image}>
                    <Image src={image} width={200} height={100} alt={`Cafe ${name}`} />
                </div>
                <div className={styles.info}>
                    <h3 className={styles.title}>{name}</h3>
                    <p className={styles.text}>{price}</p>
                    <p className={styles.text}>{rating}</p>
                    <p className={styles.text}>({votes} Votes)</p>
                </div>
            </div>
        </div>
    );
}
