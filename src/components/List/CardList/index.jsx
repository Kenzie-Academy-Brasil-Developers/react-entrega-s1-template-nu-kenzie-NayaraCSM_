import styles from './styles.module.css';

export const CardList = ({ card, removeCardFromList }) => {
    return(
        <li className={styles.card}>
            <div className={styles.card_left}>
                <h3 className={styles.description}>{card.description}</h3>
                <span className={styles.typeValue}>{card.typeValue}</span>            
            </div>
            <div className={styles.card_right}>
                <p className={styles.money}>R${card.money}</p>
                <button className='card-delet_button' onClick={() => removeCardFromList(card.id)}>Excluir</button>
            </div>
        </li>
    );
};