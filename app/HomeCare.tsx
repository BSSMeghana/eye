import React from 'react';
import { View, Text, ScrollView, Linking, Image, TouchableOpacity } from 'react-native';
import indexStyles from './indexStyles';

const incidents = [
  {
    key: 'soapInEye',
    title: 'Soap or Shampoo in Eye',
    description:
      'Rinse the eye immediately with clean, lukewarm water for 10-15 minutes. Keep eyelids open and gently flush. If irritation persists, see a doctor.',
    image:
      'data:image/jpeg;base64,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',
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
