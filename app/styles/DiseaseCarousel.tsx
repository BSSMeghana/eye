import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { colors, radius } from '../../constants/theme';
import { useResponsiveLayout } from '../../hooks/useResponsiveLayout';

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
  const { contentWidth, isTiny } = useResponsiveLayout();
  const carouselWidth = Math.min(contentWidth, 430);
  const carouselHeight = isTiny ? 240 : 300;

  return (
    <View style={[styles.container, { height: carouselHeight, width: carouselWidth }]}>
      <Swiper
        autoplay
        autoplayTimeout={4}
        showsPagination
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        paginationStyle={{ bottom: 18 }}
        height={carouselHeight}
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
    marginBottom: 10,
    overflow: 'hidden', // ensures image stays within rounded corners
  },
  bannerImage: {
    borderRadius: radius.md,
    height: '100%',
    width: '100%',
  },
  dot: {
    backgroundColor: colors.border,
    width: 7,
    height: 7,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  activeDot: {
    backgroundColor: colors.primary,
    width: 7,
    height: 7,
    borderRadius: 5,
    marginHorizontal: 3,
  },
});
