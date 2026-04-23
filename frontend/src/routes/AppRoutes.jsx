import { Routes, Route } from 'react-router-dom';

// Placeholder components
const Landing = () => <div className="p-10 text-center text-primary text-3xl font-bold">Welcome to Spotly (Landing Page)</div>;
const Login = () => <div className="p-10 text-center">Login Page</div>;
const DriverDashboard = () => <div className="p-10 text-center">Driver Dashboard</div>;
const OwnerDashboard = () => <div className="p-10 text-center">Owner Dashboard</div>;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/driver" element={<DriverDashboard />} />
      <Route path="/owner" element={<OwnerDashboard />} />
    </Routes>
  );
};

export default AppRoutes;
