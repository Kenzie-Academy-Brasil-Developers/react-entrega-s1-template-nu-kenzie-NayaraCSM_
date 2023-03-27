import styles from './styles.module.css';

export const TotalMoney = ({totalValue, infoList}) => {

    return(
        <section className={styles.totalMoney}>
            <div className={styles.infoTotalMoney}>
                <h2 className={styles.infoTotalMoney_title}>Valor total:</h2>
                <p className={styles.infoTotalMoney_description}>O valor se refere ao saldo</p>
            </div>
            {infoList.length > 0 ? (
                <div className={styles.total}>
                                        
                        <p>
                            <strong>R$ {totalValue}</strong>
                        </p>
                    
                </div>
            ) : (
                null
            )}
        </section>
    )
}