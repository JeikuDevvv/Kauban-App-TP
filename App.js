import { Router } from './src/routes/Router';
import { AuthProvider } from './src/contexts/Auth';

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
