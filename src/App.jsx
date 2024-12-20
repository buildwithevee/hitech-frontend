import { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import MainLayout from './layout/MainLayout';

import Loader from './layout/Loader';
import { Toaster } from "react-hot-toast"
import LoginPage from './components/auth/LoginPage';
// Lazy load components
const AdminDashboard = lazy(() => import('./components/adminPannel/AdminDashboard'));
const Users = lazy(() => import('./components/adminPannel/Users'));
const Reports = lazy(() => import('./components/adminPannel/Reports'));
const Notifications = lazy(() => import('./components/adminPannel/Notifications'));
const Jobcard = lazy(() => import('./components/adminPannel/Jobcard'));
const Settings = lazy(() => import('./components/adminPannel/Settings'));
// const Login = lazy(() => import('./pages/AdminLogin')); // Assuming you have a Login component
const ChangePassword = lazy(() => import('./components/adminPannel/ChangePassword'));
const AddJobCard = lazy(() => import('./components/adminPannel/AddJobCard'));
const AddImages = lazy(() => import('./components/adminPannel/AddImages'));
const AssignWorker = lazy(() => import('./components/adminPannel/AssignWorker'));
const ReturnedJobCard = lazy(() => import('./components/adminPannel/ReturnedJobcard'));
const CompletedJobCard = lazy(() => import('./components/adminPannel/CompletedJobCard'));
const BilledJobCard = lazy(() => import('./components/adminPannel/BilledJobCard'));
const Workers = lazy(() => import('./components/adminPannel/Workers'));
const JobCardView = lazy(() => import('./components/adminPannel/JobCardView'));
const EditJobCardForm = lazy(() => import('./components/adminPannel/EditJobcard'));

function App() {
  const [isAuth, setIsAuth] = useState(false);


  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuth(true);
    }
  }, [])
  useEffect(() => {
    // Redirect logged-in users to /admin if they are trying to visit the root URL
    if (isAuth && window.location.pathname === "/") {
      window.location.replace("/admin");  // Use window.location.replace() for redirection
    }
  }, [isAuth]);
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Routes that require sidebar and header */}
          {isAuth && <Route path="/" element={<MainLayout />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/jobcard" element={<Jobcard />} />
            <Route path="/admin/edit-jobcard/:id" element={<EditJobCardForm />} />
            <Route path='/admin/jobcard/:id' element={<JobCardView />} />
            <Route path="/admin/add-jobcard" element={<AddJobCard />} />
            <Route path="/admin/pending" element={<AssignWorker />} />
            <Route path="/admin/returned" element={<ReturnedJobCard />} />
            <Route path="/admin/completed" element={<CompletedJobCard />} />
            <Route path="/admin/billed" element={<BilledJobCard />} />

            <Route path="/admin/workers" element={<Workers />} />
            <Route path="/admin/complete-jobcard" element={<AddImages />} >
              <Route path="/admin/complete-jobcard/:id" element={<AddImages />} />
            </Route>

            <Route path="/admin/reports" element={<Reports />} />
            <Route path="/admin/notifications" element={<Notifications />} />
            <Route path="/admin/settings" element={<Settings />} >
              <Route path="/admin/settings/:id" element={<Settings />} />

            </Route>
            <Route path="/admin/change-password" element={<ChangePassword />} />

          </Route>}

          {/* Routes that don't require sidebar and header */}
          {!isAuth && <Route path="/" element={<LoginPage />} />}

        </Routes>
        <Toaster position='top-center' />
      </Suspense>

    </Router>
  );
}

export default App;

