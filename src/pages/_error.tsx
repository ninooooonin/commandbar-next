import Error404 from '../pages/error/404';
import Error500 from '../pages/error/500';

const Error = ({ statusCode }: any) => {
    return statusCode ? <Error500 /> : <Error404 />
}
  
Error.getInitialProps = ({ res, err }: any) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}
  
export default Error