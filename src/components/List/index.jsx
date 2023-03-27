import { CardList } from "./CardList";
import styles from './styles.module.css';

export const List = ({ infoList, removeCardFromList}) => {
    return(
        <section>
            <h2 className={styles.list_title}>Resumo financeiro</h2>
            {infoList.length > 0 ? (
                <ul className={styles.list}>
                    {infoList.map((card) => {
                        return(
                           <CardList
                                key={card.id}
                                card={card}
                                removeCardFromList={removeCardFromList}
                            />
                        )
                    })}
                </ul>
            ) : (
                <p className={styles.list_empty}>Você ainda não possui nenhum lançamento</p>
            )}
        </section>
    );
};