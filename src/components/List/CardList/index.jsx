import { StyledCardList } from './style';

export const CardList = ({ card, removeCardFromList }) => {
  return (
    <StyledCardList>
      <div className={card.typeValue}>
        <div className='card_left'>
          <h3 className='description'>{card.description}</h3>
          <span className='typeValue'>{card.typeValue}</span>
        </div>
        <div className='card_right'>
          <p className='money'>R${card.money}</p>
          <button
            className='card-delet_button'
            onClick={() => removeCardFromList(card.id)}
          >
            Excluir
          </button>
        </div>
      </div>
    </StyledCardList>
  );
};
