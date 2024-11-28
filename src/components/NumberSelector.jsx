/* eslint-disable react/prop-types */
import styled from "styled-components"
const NumberSelector = ({error, setError, selectedNumber, setSelectedNumber}) => {
  const arrayNum = [1,2,3,4,5,6]

console.log(selectedNumber);

const numberSelectorHandler = (val)=> {
  setSelectedNumber(val)
  setError("")
}
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrayNum.map((val, i) => (
          <Box
            key={i}
            onClick={() => numberSelectorHandler(val)}
            isSelected={val == selectedNumber}
          >
            {val}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex{
    display: flex;
    gap: 24px;
  }
  p{
    font-size: 24px;
    
  }
  .error {
    color: red;
  }
`

const Box = styled.div `

  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props)=>props.isSelected ? "black": "white"};
  color: ${(props)=>!props.isSelected ? "black": "white"};

`