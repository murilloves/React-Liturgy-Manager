import styled from 'styled-components';

export const Button = styled.button`
  color: #888;
  background: #fff;
  border: 1px solid #bbb;
  border-radius: 5px;
  font-weight: 600;
  font-size: ${props => props.size ? `${props.size}px` : '14px' };
  padding: ${props => props.size ? `${2/3 * props.size}px ${props.size}px` : '9px 14px' };
  max-height: ${props => props.size ? `${props.size * 2 + props.size - 5}px` : '36px'};
  cursor: pointer;
  transition: 0.2s;
  outline: none;

  :hover {
    background: #fafafa;
  }
  :active {
    box-shadow: inset 0 0 100px 0 #00000010;
  }
`

export const ButtonPrimary = styled(Button)`
  color: #fff;
  background: #2929ef;
  border-color: #2929ef;

  :hover { background: #1515dc; }
  :focus { background: #1515c5; }
`

export const ButtonSecondary = styled(Button)`
  color: #666;
  background: #dddddd;
  border-color: #dddddd;

  :hover { background: #c5c5c5; color: #555 }
  :focus { background: #c5c5c5; color: #444 }
`

export const ButtonDanger = styled(Button)`
  color: #fff;
  background: #ff3333;
  border-color: #ff3333;

  :hover { background: #ff2222; }
  :focus { background: #ff0505; }
`

export const ButtonSuccess = styled(Button)`
  color: #fff;
  background: #00c853;
  border-color: #00c853;

  :hover { background: #00b844; }
  :focus { background: #00a844; }
`

export const ButtonWarning = styled(Button)`
  color: #333;
  background: #fed14c;
  border-color: #fed14c;

  :hover { background: #ffbb33; }
  :focus { background: #ffaa33; }
`

