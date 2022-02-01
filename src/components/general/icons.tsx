import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

// Constants
import Images from '../../constants/Images';

const { icons } = Images;

const Icon: any = styled(ReactSVG)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;

    span {
        display: flex;
    }
`;

export const AngleLeftIcon: any = (props: any) => {
    return (
        <Icon src={icons.angle_left} wrapper={'span'} className={props.styles} />
    )
}

export const BrandIcon: any = (props: any) => {
    return (
        <Icon src={icons.brand} wrapper={'span'} className={props.styles} />
    )
}

export const GoogleIcon: any = (props: any) => {
    return (
        <Icon src={icons.google} wrapper={'span'} className={props.styles} />
    )
}

export const MailIcon: any = (props: any) => {
    return (
        <Icon src={icons.mail} wrapper={'span'} className={props.styles}/>
    )
}