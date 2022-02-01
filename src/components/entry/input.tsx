import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const propTypes = {
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    styles: PropTypes.any,
    type: PropTypes.string,
    value: PropTypes.string
};

const defaultProps = {
    disabled: false,
    onChange: null,
    placeholder: '',
    styles: {},
    type: 'text',
    value: ''
};

const InputContainer: any = styled.div`
    height: 54px;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    background-color: #F6F7F8;
`;

const StyledInput: any = styled.input`
    height: inherit;
    width: inherit;
    font-family: var(--font-regular);
    font-size: 16px;
    padding: 0px 15px;
    background-color: inherit;
    border: 0px;
    outline: 0px;
    color: #525C66;

    &::placeholder {
        color: #828B94;
    }
`;

const Input = (props: any) => {
    const {disabled, onChange, placeholder, styles, type, value} = props;
    return (
        <InputContainer className={styles}>
            <StyledInput 
                disabled={disabled} 
                onChange={({target}: any) =>  onChange(target.value)}
                placeholder={placeholder} 
                type={type}
                value={value}
            />
        </InputContainer>
    )
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;