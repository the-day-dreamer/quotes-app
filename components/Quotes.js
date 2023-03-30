import styles from '@/styles/Quotes.module.css'
import { useState } from 'react';
import Form from './Form';
const Quotes = () => {
    const [quotes, setQuotes] = useState()
    const [author, setAuthor] = useState()
    const [cat , setCat] = useState()
    const pull_data = (data) => {
        setCat(data)
        console.log(cat)
      }
    const handleQuotes = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
                'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_HOST
            }
        };

        fetch(`https://famous-quotes4.p.rapidapi.com/random?category=${cat}&count=1`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setQuotes(response[0].text)
                setAuthor(response[0].author)
            })
            .catch(err => console.error(err));
    }
    return (
        <div className={styles.quotes}>
            <div className={styles.quotesLeft}>
                <div className={styles.quotesLeftBox}>
                    <div className={styles.boxText}>{quotes}</div>
                    <div className={styles.boxAuthor}>-{author}</div>
                </div>
                <div className={styles.buttonBox}><button className={styles.quotesLeftButton} onClick={handleQuotes}>GENERATE QUOTES</button></div>
            </div>
            <div className={styles.quotesRight}>
                <div className={styles.insideBoxLeft}></div>
                <div className={styles.insideBoxRight}>
                    <Form func={pull_data}/>
                </div>
            </div>
        </div>
    );
}

export default Quotes;