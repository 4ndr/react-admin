import './App.css';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';
import Users from './pages/users/Users';
import Register from './pages/Register';
import Login from './pages/Login';
import UserCreate from './pages/users/UserCreate';
import UserEdit from './pages/users/UserEdit';
import Roles from './pages/roles/Roles';
import RoleCreate from './pages/roles/RoleCreate';
import RoleEdit from './pages/roles/RoleEdit';
import Products from './pages/products/Products';
import ProductCreate from './pages/products/ProductCreate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={'/'} exact component={Dashboard}/>
        <Route path={'/register'} component={Register}/>
        <Route path={'/login'} component={Login}/>
        <Route path={'/users'} exact component={Users}/>
        <Route path={'/users/create'} component={UserCreate}/>
        <Route path={'/users/:id/edit'} component={UserEdit}/>
        <Route path={'/roles'} exact component={Roles}/>
        <Route path={'/roles/create'} exact component={RoleCreate}/>
        <Route path={'/roles/:id/edit'} exact component={RoleEdit}/>
        <Route path={'/products'} exact component={Products}/>
        <Route path={'/products/create'} exact component={ProductCreate}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
