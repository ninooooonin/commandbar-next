import styled, { css } from 'styled-components';

export const Button:any = styled.button`
    height: 56px;
    width: 100%;
    font-family: var(--font-medium);
    font-size: 18px;
    padding: 0px;
    border: 0px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #FFFFFF;

    .icon {
        margin-right: 12px;
    }
`;

export const AuthButton:any = styled(Button)`
    background-color: #1FC749;
`;

export const AuthBackButton:any = styled(Button)`
    background-color: #FFFFFF;
    border: 2px solid #E0E2E6;
    height: 52px;
    width: 52px;

    .icon {
        margin-right: 3px;
    }
`;

export const GoogleButton:any = styled(Button)`
    background-color: #4285F4;

    .google {
        width: 28px;
        height: 28px;
        background-color: #FFFFFF;
        border-radius: 50px;
        margin-right: 12px;

        svg {
            width: 20px;
            height: 20px;
        }
    }
`;

