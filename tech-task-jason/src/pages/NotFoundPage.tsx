import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, this page does not exist."
    extra={<Link to={"/"}><Button type="primary">Go Home</Button></Link>}
  />
);

export default NotFoundPage;