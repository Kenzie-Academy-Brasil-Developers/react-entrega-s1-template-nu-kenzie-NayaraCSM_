export const TotalMoney = ({totalValue, infoList}) => {

    return(
        <>
            <div className='infoTotalMoney'>
                <h2>Valor total:</h2>
                <p>O valor se refere ao saldo</p>
            </div>
            {infoList.length > 0 ? (
                <div>
                                        
                        <p>
                            <strong>{totalValue}</strong>
                        </p>
                    
                </div>
            ) : (
                null
            )}
        </>
    )
}