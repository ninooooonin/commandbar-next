import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
    onClick: PropTypes.func,
    active: PropTypes.bool,
    size: PropTypes.string
};

const defaultProps = {
    onClick: null,
    active: false,
    size: 'small'
};

const Button = styled.button`
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

        &:hover { box-shadow: 0px 0px 0px 2px #d9d9fc; }
    }

    &.small {
        width: 36px;

        i {
            height: 16px;
            width: 16px;

            &:hover {
                width: 18px;
            }
        }
    }

    &.medium {
        width: 45px;

        i {
            height: 21px;
            width: 21px;

            &:hover {
                width: 22.5px;
            }
        }
    }

`

const Indicator = styled.i`
    background-color: #FFFFFF;
    border-radius: 32px;
    transition: all 0.2s cubic-bezier(0.22, 1, 0.36, 1);
`

const Switch = (props: any) => {
    const { active, onClick, size } = props;
    return (
        <Button role='switch' onClick={onClick} className={`${size} ${active ? 'active': ''}`}>
            <Indicator />
        </Button>
    )
}

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;