import styled from "styled-components";

const fontSizes = {
    title: "2rem",
    subTitle: "1.25rem",
    boxSubTitle: "0.75rem",
    listTitle: "1.5rem", 
}

const mobileFonts = {
    listTitle: "1.3rem"
}

const colors = {
    black: '#000',
    primary: '#fcbe11',
    secondary: '#e0e1e2',
    secondaryText: 'rgba(0,0,0,.6)',
    text: '#303441',
    border: '#1e2828',
    lightenSubTitle: '#d4d4d4',
    lightenTitle: '#fff',
    disabled: '#ced4da'
}

const flex = {
    columnCenter: `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,
    rowCenter: `
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `
}

const theme = {
    colors,
    fontSizes,
    flex,
    mobileFonts
}

export default theme;