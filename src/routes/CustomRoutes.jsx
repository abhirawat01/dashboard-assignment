import { Routes, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import Welcome from '../components/Welcome/Welcome';


export default function CustomRoutes() {
    return (
        <Routes>
            <Route path="/"  element={ <Welcome/> }/>
            <Route path="/dashboard" element={ <Dashboard/> } />
        </Routes>
    )
}