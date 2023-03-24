export const CardList = ({ card, removeCardFromList }) => {
    return(
        <li className='card'>
            <div className='left'>
                <h3>{card.description}</h3>
                <span className='typeValue'>{card.typeValue}</span>
            </div>
            <div className='right'>
                <span className='money'>R${card.money}</span>
                <button onClick={() => removeCardFromList(card.id)}>Excluir</button>
            </div>
        </li>
    );
};