import Link from 'next/link';
import styles from './Card.module.css';
export default function Card({creature}) {
    return(
        <div className={styles.card}>
            <Link key={creature.id} href={`creature/${creature.id}`}>
                <a>
                    <div className={styles.image}>
                        <img src={creature.image} />
                    </div>
                    <div className={styles.titulo} >
                    <h2>{creature.name}</h2>
                    </div>
                </a>
            </Link>
        </div>
    )
}