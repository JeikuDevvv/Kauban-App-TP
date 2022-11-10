import { useFonts } from 'expo-font';
export default function AccessFonts() {
  const AccessFontsFamily = () => {
    const [loaded] = useFonts({
      // Poppins
      'Poppins-Bold': require('../fonts/Poppins/Poppins-Bold.ttf'),
      'Poppins-Light': require('../fonts/Poppins/Poppins-Light.ttf'),
      'Poppins-SemiBold': require('../fonts/Poppins/Poppins-SemiBold.ttf'),
      'Poppins-Medium': require('../fonts/Poppins/Poppins-Medium.ttf'),
      'Poppins-LightItalic': require('../fonts/Poppins/Poppins-LightItalic.ttf'),
      'Poppins-Thin': require('../fonts/Poppins/Poppins-Thin.ttf'),
      'Poppins-Italic': require('../fonts/Poppins/Poppins-Italic.ttf'),
      'Poppins-ThinItalic': require('../fonts/Poppins/Poppins-ThinItalic.ttf'),
      'Poppins-MediumItalic': require('../fonts/Poppins/Poppins-MediumItalic.ttf'),
      // Quicksand
      'Quicksand-Bold': require('../fonts/Quicksand/Quicksand-Bold.ttf'),
      'Quicksand-Light': require('../fonts/Quicksand/Quicksand-Light.ttf'),
      'Quicksand-Medium': require('../fonts/Quicksand/Quicksand-Medium.ttf'),
      'Quicksand-LightItalic': require('../fonts/Quicksand/Quicksand-Regular.ttf'),
      'Quicksand-Thin': require('../fonts/Quicksand/Quicksand-SemiBold.ttf'),
      // Montserrat
      'Montserrat-Bold': require('../fonts/Montserrat/Montserrat-Bold.ttf'),
    });

    if (!loaded) {
      return null;
    }
  };

  return AccessFontsFamily;
}
