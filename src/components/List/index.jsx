import { CardList } from "./CardList";

export const List = ({ infoList, removeCardFromList}) => {
    return(
        <>
            <h2>Resumo financeiro</h2>
            {infoList.length > 0 ? (
                <ul>
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
                <p>Você ainda não possui nenhum lançamento</p>
            )}
        </>
    );
};