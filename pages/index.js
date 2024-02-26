import { useState, useEffect } from 'react';
import Layout from "../components/layout";
import styles from '../styles/index.module.css';
import Coffe from '../components/coffe'

export default function Home() {
  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json');
        const data = await response.json();
        setCoffeeData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Layout
        title={"Welcome Adriana's Cafe."}
        description={'Cafeteria'}
      />
      <main>
        <div className={styles.container}>
          <div className={styles.head}>
            <h1>Our Collection</h1>
            <p className={styles.text}>
              Introducing our Coffee Collection, a selection of unique coffees from
              different roast types and origins, expertly roasted in small batches
              and shipped fresh weekly.
            </p>
            <nav className={styles.navegacion}>
              <a href="/">All Products</a>
              <a href="/">Available Now</a>
            </nav>
          </div>
          <div className={styles.grid}>
            {coffeeData.map(coffee => (
              <Coffe key={coffee.id} cafe={coffee} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}