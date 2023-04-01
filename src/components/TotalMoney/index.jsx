import { StyledTotalMoney } from './style';

export const TotalMoney = ({ totalValue, infoList }) => {
  return (
    <StyledTotalMoney>
      <div className='infoTotalMone' y>
        <h2 className='infoTotalMoney_title'>Valor total:</h2>
        <p className='infoTotalMoney_description'>O valor se refere ao saldo</p>
      </div>
      {infoList.length > 0 ? (
        <div className='total'>
          <p>
            <strong>R$ {totalValue}</strong>
          </p>
        </div>
      ) : null}
    </StyledTotalMoney>
  );
};
