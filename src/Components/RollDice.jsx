import styled from "styled-components";

const RollDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`../public/Images/dice_${currentDice}.png`} alt="1to6dice" />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;

  .dice {
    cursor: pointer;
  }

  img {
    max-width: 180px;
  }

  p {
  }
`;
