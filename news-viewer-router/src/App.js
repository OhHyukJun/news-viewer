import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () =>{ //category URL 파라미터가 없어도 NewsPage 컴포넌트를 보여줘야하고, 있어도 보여줘야 하기 때문에 Route를 두 번 사용
  return (
   <Routes>
      <Route path="/" element={<NewsPage />}/>
      <Route path="/:category" element={<NewsPage/>} />
   </Routes>
  );
};

export default App;