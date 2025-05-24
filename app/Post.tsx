import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface PostProps {
  title: string;
  date: string;
  category: string;
  summary: string;
  image?: string; // Optional
}

export default function Post({ title, date, category, summary, image }: PostProps) {
  return (
    <View style={styles.postContainer}>
      {image && (
        <Image source={{ uri: image }} style={styles.postImage} resizeMode="cover" />
      )}
      <Text style={styles.postTitle}>{title}</Text>
      <Text style={styles.postMeta}>{date} | {category}</Text>
      <Text style={styles.postSummary}>{summary}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 20,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    elevation: 2, // For shadow on Android
    shadowColor: '#000', // For shadow on iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  postImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 12,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 4,
  },
  postMeta: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  postSummary: {
    fontSize: 16,
    color: '#333',
  },
});
