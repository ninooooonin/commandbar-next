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
    action: PropTypes.any
};

const defaultProps = {
    title: '',
    description: '',
    action: {}
};

const Container = styled(LayoutSection)`
    margin-bottom: 20px;
    min-height: 125px;
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

const Action = styled(Row)`

`;

const Section = (props: any) => {
    const { title, description, action } = props;

    const setAction = (type: string) => {
        if (type == Global.action.SWITCH) {
            return <Switch active={false} />
        } else if (type == Global.action.BUTTON) {
            return <Switch active={true} />
        } else {
            return null;
        }
    }

    return (
        <Container>
            <TopWrapper>
                <H6>{title}</H6>
                {setAction(action.type)}
            </TopWrapper>
            <Wrapper>
                <Paragraph>{description}</Paragraph>
            </Wrapper>
        </Container>
    )
}

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;