import { ToastContainer } from 'react-toastify';
import { CreatePost, Layout } from './components';
import { Authorization, Chats, Edit, Feed, Groups, Home, Profile, Settings } from './pages';
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from 'hoc/PrivateRoute';
import Chat from 'pages/Chat/Chat';

function App() {

  return (
    <>
      <Routes>


        <Route path='/' element={<Layout />}>

          <Route index element={<CreatePost />} />

          <Route path=':profileId' element={<Profile />} />

          <Route
            path='edit'
            element={
              <PrivateRoutes>
                <Edit />
              </PrivateRoutes>} />

          <Route
            path='settings'
            element={
              <PrivateRoutes>
                <Settings />
              </PrivateRoutes>} />

          <Route path='/feed' element={<Feed />} />

          <Route path='/groups' element={<Groups />} />

          <Route path='/chats' element={<Chats />} />
          <Route path='/chats/:id' element={<Chat />} />
        </Route>


        <Route path='/auth' element={<Authorization />} />


      </Routes>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  );
}

export default App;
