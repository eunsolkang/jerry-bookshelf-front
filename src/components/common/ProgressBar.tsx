import styled from "styled-components";
import theme from "../../lib/styles/theme";

const ProgressBarBlock = styled.div<{value: number}>`
    width: 100%;
    box-sizing: border-box;
    position: relative;
    .progress-bar-background{
        position: absolute;
        border-radius: 20px;
        width: calc(100%);
        height: 5px;
        background-color: #F1F1F1;
    }
    .progress-bar-value{
        position: absolute;
        border-radius: 20px;
        width: calc(${(props) => props.value}%);
        height: 5px;
        background-color: ${theme.colors.primary};
    }
`

const ProgressBar = ({value}: {value: number}) => {
    return (
        <ProgressBarBlock value={value} className='progress-bar'>
            <div className='progress-bar-background'></div>
            <div className='progress-bar-value'></div>
        </ProgressBarBlock>
    );
}

export default ProgressBar;