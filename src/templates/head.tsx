import Head from 'next/head';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    type: PropTypes.string,
};

const defaultProps = {
    title: 'ONDMD.',
    description: 'Hire nearby professionals on-demand.',
    url: '',
    type: 'website'
};

const AppHead = (props: any) => {
    const { title, description, url, type } = props;
    return (
        <Head>
            <title>{ title }</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content={type} />
        </Head>
    )
}

AppHead.propTypes = propTypes;
AppHead.defaultProps = defaultProps;

export default AppHead;