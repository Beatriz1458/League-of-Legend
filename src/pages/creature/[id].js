import styles from './Creature.module.css'

export default function Creature({ creature }) {
console.log(creature);
    return (
        <div className={styles.container}>
            <div className={styles.imagem}>
                <img src={creature.image} />
            </div>
            <div className={styles.info}>
                <div className={styles.titulo} ><h2>{creature.name}</h2></div>
                {creature.drops && 
                    `<div>${creature.drops.join(', ')}</div>`
                }
                <div>{creature.description}</div>
                <div>{creature.common_locations}</div>   
            </div>
        </div>
    )
}
export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
}
export async function getStaticProps({ params }) {
    const res = await fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${params.id}`);

    const creature = await res.json();

    return {
        props: {
            creature: creature.data
        },
        revalidate: 10
    }
}