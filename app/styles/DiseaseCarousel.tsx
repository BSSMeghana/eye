import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const banners = [
  {
    id: 1,
    image: require('/Users/meghanabss/Downloads/eye/assets/images/cataract.png'),
  },
  {
    id: 2,
    image: require('/Users/meghanabss/Downloads/eye/assets/images/DR.png'),
  },
  {
    id: 3,
    image: require('/Users/meghanabss/Downloads/eye/assets/images/glaucoma.png'),
  },
];

export default function DiseaseCarousel() {
  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        autoplayTimeout={4}
        showsPagination
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        paginationStyle={{ bottom: 120 }}
        height={60}
      >
        {banners.map((item) => (
          <Image
            key={item.id}
            source={item.image}
            style={styles.bannerImage}
            resizeMode="contain"
          />
        ))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 335,
    height: 350,
    marginBottom: 10,
    overflow: 'hidden', // ensures image stays within rounded corners
  },
  bannerImage: {
    width: '100%',
    height: 340,
    borderRadius: 10,
    marginTop: -60,
  },
  dot: {
    backgroundColor: '#ccc',
    width: 7,
    height: 7,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  activeDot: {
    backgroundColor: '#007AFF',
    width: 7,
    height: 7,
    borderRadius: 5,
    marginHorizontal: 3,
  },
});
