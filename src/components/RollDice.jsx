import styled from "styled-components"

// eslint-disable-next-line react/prop-types
const RollDice = ({currentDice, rollDice}) => {

  return (
    <DiceContainer>
        <div className="dice" onClick={rollDice}>
            <img src={`/images/dice/dice_${currentDice}.png`} alt="" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
    
  )
}

export default RollDice

const DiceContainer = styled.div`
margin-top: 48px;
   display: flex;
   justify-content: center;
    flex-direction: column;
    align-items: center;

    .dice{
        cursor: pointer;
    }

   p{
    font-size: 24px;
   }
`