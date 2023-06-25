import 'font-awesome/css/font-awesome.min.css';
import './assets/css/app.css';
import DashboardPage from './pages/DashboardPage';
import TypographyPage from './pages/TypographyPage'
import LoginPage from './pages/auth/LoginPage'
import ResetPassword from './pages/auth/ResetPassword';
import ProfilePage from './pages/profile/ProfilePage';
import ChangePasswordPage from './pages/profile/ChangePasswordPage';
import UserPreferencesPage from './pages/profile/UserPreferencesPage'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
<<<<<<< HEAD
        <Router>
            <Routes>
                <Route exact path='/' element={<DashboardPage/>} />
                <Route exact path='/login' element={<LoginPage/>} />
                <Route exact path='/reset-password' element={<ResetPassword/>} />
                <Route exact path='/profile' element={<ProfilePage/>} />
                <Route exact path='/change-password' element={<ChangePasswordPage/>} />
                <Route exact path='/preferences' element={<UserPreferencesPage/>} />
                <Route exact path='/typography' element={<TypographyPage/>} />
                
            </Routes>  
        </Router>
    )
}

export default App;
=======
    <div>
      <AppProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Game1" element={<MemoryGame />} />
          <Route path="/Game2" element={<RockPaperScissors />} >
            
          </Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        
      </AppProvider>
    </div>
  );
}

export default App;

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Not Found");
    setTimeout(() => {
      navigate('/');
    }, 3000);
  }, []);
  return (
    <div>
      Not Found
    </div>
  );
};
>>>>>>> 52c21933e3a9d6a49fa940d09bdbcc74292346b3
