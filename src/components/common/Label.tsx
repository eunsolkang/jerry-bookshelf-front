import theme from "lib/styles/theme";
import styled from "styled-components";

type LabelType = {
    type: "invaild" | "valid" | "info",
}
const LabelStyled = styled.div<LabelType>`
    display: flex;
    img{
        width: 18px;
        height: 18px;
        margin-right: 4px;
    }
    .text{
        font-size: ${theme.fontSizes.normal};
        color: ${(props) => {
            if(props.type === "info"){
                return theme.colors.subtitle;
            } else if (props.type === "invaild"){
                return theme.colors.invalid;
            } else if (props.type === "valid"){
                return theme.colors.valid;
            }
        }}
    }
`

const Label:React.FC<LabelType> = ({children, type}) => {
    
    return (
        <LabelStyled type={type} className="label">
            <img src={`/icon/icon-${type}.svg`}></img>
            <div className="text">
                {children}
            </div>
        </LabelStyled>
    )
}

export default Label;