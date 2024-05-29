import React, {useEffect} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Location from '../assets/icons/locationGreen.svg';
import {COLORS} from '../constants/colors.constant';

export const renderData = (data, handleImagePress) => {
  useEffect(() => {
    console.log(data.type, '<==========data type ');
  }, [data]);

  if (data.type === 'parks') {
    return renderParkDetails(data, handleImagePress);
  } else if (data.type === 'articles') {
    return renderArticleDetails(data, handleImagePress);
  } else if (data.type === 'campgrounds') {
    return renderCampgroundDetails(data, handleImagePress);
  } else if (data.type === 'events') {
    return renderParkDetails(data, handleImagePress);
  } else if (data.type === 'lessonPlans') {
    return renderParkDetails(data, handleImagePress);
  }
  return <Text>No specific data type handler found</Text>;
};

const renderParkDetails = (data, handleImagePress) => (
  <>
    <Text style={styles.heading}>Name: {data.name}</Text>
    <View style={styles.locationContainer}>
      <Location width={15} height={15} />
      <Text style={styles.locationText}>{data.addresses[0]?.city}</Text>
    </View>
    <Text style={styles.detailsText}>{data.description}</Text>
    {data.images && renderImages(data.images, handleImagePress)}
    {data.activities && renderActivities(data.activities)}
  </>
);

const renderArticleDetails = (data, handleImagePress) => (
  <>
    <Text style={styles.heading}>Title: {data.title}</Text>
    <Text style={styles.detailsText}>{data.content}</Text>
    {data.images && renderImages(data.images, handleImagePress)}
  </>
);

const renderCampgroundDetails = (data, handleImagePress) => (
  <>
    <Text style={styles.heading}>Campground Name: {data.name}</Text>
    <Text style={styles.detailsText}>{data.description}</Text>
    {data.images && renderImages(data.images, handleImagePress)}
  </>
);

const renderImages = (images, handleImagePress) => (
  <>
    <Text style={styles.heading}>Images</Text>
    <FlatList
      horizontal
      data={images}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => handleImagePress(item.url)}>
          <Image source={{uri: item.url}} style={styles.previewImage} />
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.previewContainer}
    />
  </>
);

const renderActivities = activities => (
  <>
    <Text style={styles.heading}>Activities</Text>
    <FlatList
      horizontal
      data={activities}
      renderItem={({item}) => (
        <View style={styles.activityCard}>
          <Text style={styles.activityText}>{item.name}</Text>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.activitiesContainer}
    />
  </>
);

const styles = StyleSheet.create({
  heading: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.TEXTPRIMARY,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 18,
  },
  locationText: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.TEXTLINK,
    marginLeft: 8,
  },
  detailsText: {
    fontSize: 16,
    color: COLORS.TEXTSECONDARY,
  },
  previewContainer: {
    paddingVertical: 16,
  },
  previewImage: {
    width: 90,
    height: 90,
    borderRadius: 9,
    marginRight: 9,
  },
  activitiesContainer: {
    paddingVertical: 16,
  },
  activityCard: {
    backgroundColor: COLORS.SECONDARY,
    padding: 10,
    marginRight: 9,
    borderRadius: 8,
  },
  activityText: {
    fontSize: 14,
    color: COLORS.TEXTSECONDARY,
  },
});
