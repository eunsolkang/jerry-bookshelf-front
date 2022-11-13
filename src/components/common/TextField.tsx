import styled from "styled-components";
import theme from "../../lib/styles/theme";

type TextFieldType = {
    required?: boolean,
    labelText: string,
    placeholder: string,
}
const TextFieldStyled = styled.div`
    .text-field-label{
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: bold;
        .required-circle{
            width: 5px;
            height: 5px;
            background-color: ${theme.colors.invalid};
            border-radius: 20px;
            margin-left: 2px;
        }
    }
    .text-field-input{
        margin-top: 8px;
        input{
            width: 100%;
            outline: none;
            border: none;
            font-size: 16px;
            border-radius: 24px;
            padding: 7px 23px;
            box-sizing: border-box;
        }
    }
`

const TextField:React.FC<TextFieldType> = ({labelText, required, placeholder}) => (
    <TextFieldStyled  className='text-field'>
        <div className="text-field-label">
            {labelText}
            {required && <div className="required-circle"></div>}
        </div>
        <div className="text-field-input">
            <input placeholder={placeholder}></input>
        </div>
    </TextFieldStyled>
)

export default TextField;