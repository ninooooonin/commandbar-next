import Head from 'next/head';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components
import Switch from '../components/entry/switch';
import { H6, Paragraph, Code, Label } from '../components/general/text';
import { Section as LayoutSection, Row } from '../components/general/layout';

// Constant
import Global from '../constants/Global';

const propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    instruction: PropTypes.string,
    action: PropTypes.any
};

const defaultProps = {
    title: '',
    description: '',
    instruction: '',
    action: {}
};

const Container = styled(LayoutSection)`
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 3px 5px #eeeeee;    
    padding: 20px;

    &:last-child {
        margin-bottom: 0px;
    }

    h6 {
        font-size: 16px;
    }

    p {
        font-size: 15px;
        line-height: 18px;
        max-width: 90%;
        /* border: 1px solid red; */
    }
`

const TopWrapper = styled(Row)`
    align-items: center;
    justify-content: space-between;
`

const Wrapper = styled.div`
    margin-top: 8px;
`

const Instruction = styled(Paragraph)`
    max-width: 100% !important;
    font-size: 14px !important;
    color: #4242ca;
    margin-top: 12px;
    padding: 12px 12px 12px 16px;
    background-color: #e9e9ff;
    border-radius: 0px;
    border-left: 3px solid #4242ca;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
`;

const Button = styled.button`
    padding: 5px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    background-color: #262626;
    border-radius: 5px;
    border: 0px;
    cursor: pointer;
    
    span {
        color: #FFFFFF;
        font-size: 14px;
    }
`;


const Action = (props: any) => {
    const { label, onClick } = props;

    return (
        <Button onClick={onClick}>
            <span>{label}</span>
        </Button>
    )
}

const Section = (props: any) => {
    const { title, description, instruction, action } = props;

    const setAction = (action: any) => {
        if (action.type == Global.action.SWITCH) {
            return <Switch active={action.value} onClick={action.onClick} />
        } else if (action.type == Global.action.BUTTON) {
            return <Action label={'Run'} onClick={null} />
        } else {
            return null;
        }
    }

    return (
        <Container>
            <TopWrapper>
                <H6>{title}</H6>
                {setAction(action)}
            </TopWrapper>
            <Wrapper>
                <Paragraph>{description}</Paragraph>
                { instruction && <Instruction>{instruction}</Instruction> }
            </Wrapper>
        </Container>
    )
}

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;