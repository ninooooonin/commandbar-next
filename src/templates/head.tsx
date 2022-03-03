import Head from 'next/head';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    type: PropTypes.string,
};

const defaultProps = {
    title: 'QueyBar: Built for CommandBar QA',
    description: `QueyBar (kyu 'ei bar): built to automate repetitive tasks on CommandBar QA.`,
    url: '',
    type: 'website'
}

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