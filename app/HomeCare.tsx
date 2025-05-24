import React, { useEffect } from 'react'; 
import { View, Text, ScrollView, Linking, Image, TouchableOpacity } from 'react-native';
import indexStyles from './indexStyles';
import * as Speech from 'expo-speech';
const incidents = [
  {
    key: 'soapInEye',
    title: 'Soap or Shampoo in Eye',
    description:
      'Rinse the eye immediately with clean, lukewarm water for 10-15 minutes. Keep eyelids open and gently flush. If irritation persists, see a doctor.',
    image:
      'https://totalvisionsanfrancisco.com/wp-content/uploads/2025/02/soap-in-eyes-1024x672.jpg',
    linkLabel: 'Learn more first aid tips',
    linkUrl: 'https://www.healthdigest.com/617501/the-first-thing-you-should-do-if-you-get-soap-in-your-eye/',
  },
  {
    key: 'dropsMistake',
    title: 'Accidental Eye Drops in Children',
    description:
      'If a child accidentally gets medication drops not prescribed for them, rinse eyes gently with water and contact a healthcare provider immediately.',
    image:
      'https://eyelaboptometry.com/wp-content/uploads/2022/06/girl-using-eye-drops.jpg',
    linkLabel: 'Safe medication use guidelines',
    linkUrl: 'https://www.chop.edu/centers-programs/poison-control-center/eye-exposures',
  },
  {
    key: 'foreignObject',
    title: 'Foreign Object in Eye',
    description:
      'Do not rub the eye. Blink several times to try to remove the object or rinse with clean water. Seek medical help if object is embedded or pain persists.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Lv2H_RmaPhExJQOUwrQvYTdD5zIXrHW6lg&s',
    linkLabel: 'Foreign object eye care',
    linkUrl: 'https://headstart.gov/practicas-de-seguridad/articulo/preventing-responding-eye-injuries?utm_source=chatgpt.com',
  },
  {
    key: 'eyeAllergy',
    title: 'Eye Allergy or Irritation',
    description:
      'Avoid rubbing eyes. Use cold compresses or artificial tears to soothe itching. Consult a doctor if symptoms continue.',
    image:
      'https://lh6.googleusercontent.com/proxy/7XNuYOJgwBUA_lUFjhI7mXW1GKkp0X9AETyHrTBy2ytNiLs9uCbA614Ebcx9zf0Krpht5tzR1VxCm8iVjOlSaeNkK95BwPd6P0puw1eNH9_CKINWIsHPTz97hC_a1iOUtw',
    linkLabel: 'Eye allergy treatments',
    linkUrl: 'https://acaai.org/allergies/allergic-conditions/eye-allergy/',
  },
  {
    key: 'burnsHotLiquids',
    title: 'Burns from Hot Liquids or Steam',
    description:
      'Cool the burn area immediately with cool (not cold) water for 10-15 minutes. Do not apply ice directly. Cover with sterile gauze and seek medical help.',
    image:
      'https://burncenters.com/wp-content/uploads/2022/07/ChemicalEyeBurn_Blog2022.jpg',
    linkLabel: 'Burn first aid',
    linkUrl: 'https://www.webmd.com/eye-health/eye-burn-treatment',
  },

  {
    key: 'eyeScratch',
    title: 'Eye Scratch or Corneal Abrasion',
    description:
      'Do not rub the eye. Rinse gently with clean water or saline. Avoid trying to remove any object stuck in the eye. Seek medical attention immediately.',
    image:
      'https://agarwals-219c6.kxcdn.com/wp-content/uploads/2024/04/Cornea-Traetment-400x300.jpg',
    linkLabel: 'Eye injury first aid',
    linkUrl: 'https://www.dragarwal.com/blog/all-about-cornea/what-you-need-to-know-about-corneal-abrasion/',
  },
  
  // Add more incidents here if needed
];

 

export default function HomeCare() {

  useEffect(() => {
    Speech.speak("Home care");
  
    return () => {
      Speech.stop();  // stops any ongoing speech when unmounting
    };
  }, []);

  return (
    <ScrollView contentContainerStyle={indexStyles.container}>
      <Text style={indexStyles.title}>Home Eye Care Tips</Text>
      <Text style={indexStyles.subtitle}>
        Common incidents at home and how to manage them safely for kids and elders.
      </Text>

      {incidents.map(({ key, title, description, image, linkLabel, linkUrl }) => (
        <View key={key} style={{ marginBottom: 24 }}>
          <Text style={[indexStyles.title, { fontSize: 20, marginBottom: 8 }]}>{title}</Text>

          <Image
            source={{ uri: image }}
            style={{ width: '100%', height: 180, borderRadius: 8, marginBottom: 8 }}
            resizeMode="cover"
          />

          <Text style={{ fontSize: 16, color: '#333', marginBottom: 8 }}>{description}</Text>

          <TouchableOpacity onPress={() => Linking.openURL(linkUrl)}>
            <Text style={{ color: '#007AFF', fontSize: 16 }}>{linkLabel}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}
