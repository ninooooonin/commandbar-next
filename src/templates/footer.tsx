import Link from 'next/link';
import styled from 'styled-components';

// Components
import { URL } from '../components/general/text';
import { Wrapper as LayoutWrapper, Row, Column } from '../components/general/layout';

// Icons
import { BrandIcon } from '../components/general/icons';

// Constants
import Global from '../constants/Global';

const Container = styled.header`
    height: 250px;
    background-color: #000000;
    border: 1 solid red;
`;

const Wrapper = styled(LayoutWrapper)`
    display: flex;
`;

const AppFooter = (props: any) => {
    const { url } = Global;

    return (
        <Container>
            <Wrapper>
                <Column>
                    <Link href={url.home} passHref>
                        <URL>On Demand</URL>
                    </Link>
                </Column>
            </Wrapper>
        </Container>
    )
}
export default AppFooter;
