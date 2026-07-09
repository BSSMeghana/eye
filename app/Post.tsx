import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { useResponsiveLayout } from '../hooks/useResponsiveLayout';
import styles from './styles/PostStyles';

interface PostProps {
  title: string;
  date: string;
  category: string;
  summary: string;
  image?: ImageSourcePropType | string;
}

export default function Post({ title, date, category, summary, image }: PostProps) {
  const { isCompact, isLargePhone, isTiny } = useResponsiveLayout();
  const imageSource = typeof image === 'string' ? { uri: image } : image;

  return (
    <View style={[styles.postContainer, isCompact && styles.compactContainer, isLargePhone && styles.largeContainer]}>
      {imageSource && (
        <Image
          source={imageSource}
          style={[
            styles.postImage,
            isCompact && styles.compactImage,
            isTiny && styles.tinyImage,
            isLargePhone && styles.largeImage,
          ]}
          resizeMode="cover"
        />
      )}
      <Text style={[styles.postMeta, isTiny && styles.compactMeta]}>{category} - {date}</Text>
      <Text style={[styles.postTitle, isCompact && styles.compactTitle]}>{title}</Text>
      <Text style={[styles.postSummary, isCompact && styles.compactSummary]}>{summary}</Text>
    </View>
  );
}
