import styles from '@/styles/Form.module.css'
import { useState } from 'react';
const Form = (props) => {
    const[category , setCategory] = useState()
    
    props.func(category)
    return (
        <div className={styles.form}>

            <label for="category" className={styles.label}>Choose a category:</label>
            <div className={styles.optionBox}>
                <select id="quotes" className={styles.option} value = {category} onChange = {e=>{setCategory(e.target.value)}}>
                    <option value="all">all</option>
                    <option value="age">age</option>
                    <option value="alone">alone</option>
                    <option value="amazing">amazing</option>
                    <option value="anger">anger</option>
                    <option value="anniversary">anniversary</option>
                    <option value="beauty">beauty</option>
                    <option value="best">best</option>
                    <option value="birthday">birthday</option>
                    <option value="business">business</option>
                    <option value="car">car</option>
                    <option value="change">change</option>
                    <option value="computers">Computers</option>
                    <option value="cool">cool</option>
                    <option value="courage">courage</option>
                    <option value="dad">dad</option>
                    <option value="dating">dating</option>
                    <option value="death">death</option>
                    <option value="design">design</option>
                    <option value="dreams">dreams</option>
                    <option value="education">education</option>
                    <option value="environmental">environmental</option>
                    <option value="equality">equality</option>
                    <option value="experience">experience</option>
                    <option value="failure">failure</option>
                    <option value="faith">faith</option>
                    <option value="family">family</option>
                    <option value="fear">fear</option>
                    <option value="finance">finance</option>
                    <option value="fitness">fitness</option>
                    <option value="food">food</option>
                    <option value="forgiveness">forgiveness</option>
                    <option value="freedom">freedom</option>
                    <option value="friendship">friendship</option>
                    <option value="funny">funny</option>
                    <option value="future">future</option>
                    <option value="gardening">gardening</option>
                    <option value="god">god</option>
                    <option value="good">good</option>
                    <option value="great">great</option>
                    <option value="happiness">happiness</option>
                    <option value="health">health</option>
                    <option value="history">history</option>
                    <option value="home">home</option>
                    <option value="hope">hope</option>
                    <option value="humor">humor</option>
                    <option value="imagination">imagination</option>
                    <option value="inspirational">inspirational</option>
                    <option value="intelligence">intelligence</option>



                </select>
            </div>
        </div>
    );
}

export default Form;