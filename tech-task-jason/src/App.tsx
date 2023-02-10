import { useEffect } from 'react';
import { Layout, notification }  from 'antd';
import {
  Routes, Route
} from "react-router-dom";
import { useDispatch } from 'react-redux'
import NotFoundPage from './pages/NotFoundPage';

import './App.css'
import TitleDetails from './pages/TitleDetails';
import Titles from './pages/Titles';
import { getTitles } from './api/api';
import { addTitleData } from './reducers/titlesReducer';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const App: React.FC = () => {
  const dispatch = useDispatch()
  const { Content } = Layout;
  const [api] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: 'Error',
      description:
        "An error has occurred fetching data."
    });
  };

  useEffect(() => {
    getTitles()
      .then(data => {
      if(data > 400) {
        return openNotificationWithIcon('error')
      } else {
        return dispatch(addTitleData(data))
      }})
  }, []);

  return (
    <Layout 
      className={'main'} 
      style={{ minHeight:"100vh" }}
    >
      <Content style={{ paddingTop: '10px' }}>
        <Routes>
          <Route path={""} element={<Titles />} />
          <Route path={":titleNum"} element={<TitleDetails />} /> 
          <Route path={"*"} element={<NotFoundPage/>}/>
        </Routes>
      </Content>
    </Layout>
  )
}

export default App
