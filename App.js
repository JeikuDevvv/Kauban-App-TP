/* eslint-disable react/react-in-jsx-scope */
import { Router } from './src/routes/Router';
import { AuthProvider } from './src/contexts/Auth';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    // Poppins
    'Poppins-Bold': require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins/Poppins-Light.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-LightItalic': require('./assets/fonts/Poppins/Poppins-LightItalic.ttf'),
    'Poppins-Thin': require('./assets/fonts/Poppins/Poppins-Thin.ttf'),
    'Poppins-Italic': require('./assets/fonts/Poppins/Poppins-Italic.ttf'),
    'Poppins-ThinItalic': require('./assets/fonts/Poppins/Poppins-ThinItalic.ttf'),
    'Poppins-MediumItalic': require('./assets/fonts/Poppins/Poppins-MediumItalic.ttf'),
    // Quick Sand
    'Quicksand-Bold': require('./assets/fonts/Quicksand/Quicksand-Bold.ttf'),
    'Quicksand-Light': require('./assets/fonts/Quicksand/Quicksand-Light.ttf'),
    'Quicksand-Medium': require('./assets/fonts/Quicksand/Quicksand-Medium.ttf'),
    'Quicksand-LightItalic': require('./assets/fonts/Quicksand/Quicksand-Regular.ttf'),
    'Quicksand-Thin': require('./assets/fonts/Quicksand/Quicksand-SemiBold.ttf'),
    // Montserrat
    'Montserrat-Medium': require('./assets/fonts/Montserrat/Montserrat-Medium.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat/Montserrat-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
