import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/Login';
import BlogPage from './pages/Blog';

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

export default function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <Routes>
      {/* Page par défaut */}
      <Route path="/" element={<Navigate to={isLoggedIn ? '/blog' : '/login'} replace />} />

      {/* Login */}
      <Route path="/login" element={<LoginPage />} />

      {/* Blog protégé */}
      <Route
        path="/blog"
        element={
          <ProtectedRoute>
            <BlogPage />
          </ProtectedRoute>
        }
      />

      {/* fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
