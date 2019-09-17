import styled from 'styled-components';

export const InputText = styled.input`
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 600;
  color: #666;
  outline: none;
  width: 100%;

  ::placeholder {
    font-weight: 300;
  }
`

export const InputTextarea = styled.textarea`
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 600;
  color: #666;
  outline: none;
  width: 100%;
  height: 15vh;

  ::placeholder {
    font-weight: 300;
  }
`

export const InputNumber = styled(InputText)`
  text-align: center;
`
