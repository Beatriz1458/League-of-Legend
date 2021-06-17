
import Card from '../components/Card/Card';
import styles from './Home.module.css';

export default function Home({creatures}) {
  return (
    <>
      <div className={styles.container}>
      { creatures && creatures.map(creature => {
        return (
                <Card key={creature.id} creature={creature} />
            )
          }
        )
      }
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://botw-compendium.herokuapp.com/api/v2/category/creatures');
  const creatures = await res.json();
  return {
    props: {
      creatures: creatures.data.food
    },
    revalidate: 10
  }
}