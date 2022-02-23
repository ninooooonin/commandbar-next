import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
    onClick: PropTypes.func,
    active: PropTypes.bool
};

const defaultProps = {
    onClick: null,
    active: false
};

const Button = styled.button`
    width: 45px;
    border-radius: 32px;
    background-color: #DFDFDF;
    position: relative;
    border: 0px;
    display: flex;
    align-items: center;
    padding: 3px;
    justify-content: flex-start;
    transition: all 0.2s cubic-bezier(0.22, 1, 0.36, 1);
    cursor: pointer;
    box-shadow: 0px 0px 0px 2px #EFEFEF;

    &.active {
        background-color: #4242CB;
        justify-content: flex-end;
    }
`

const Indicator = styled.i`
    height: 21px;
    width: 21px;
    background-color: #FFFFFF;
    border-radius: 32px;
    transition: all 0.2s cubic-bezier(0.22, 1, 0.36, 1);

    &:hover {
        width: 22.5px;
    }
`

const Switch = (props: any) => {
    const { active, onClick } = props;
    return (
        <Button role='switch' onClick={onClick} className={`${active ? 'active': ''}`}>
            <Indicator />
        </Button>
    )
}

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;