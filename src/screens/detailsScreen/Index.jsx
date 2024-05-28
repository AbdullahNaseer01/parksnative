import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Modal,
  TouchableOpacity,
} from 'react-native';
import MainNavigator from '../../components/MainNavigator';
import {COLORS} from '../../constants/colors.constant';
import Location from '../../assets/icons/locationGreen.svg';

const DetailsScreen = ({route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const {park} = route.params;

  const previewImages = park?.images?.map(image => image.url);
  const activities = park?.activities?.map(activity => activity.name);

  const handleImagePress = image => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: park?.images[0]?.url || 'https://via.placeholder.com/150',
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.navigator}>
          <MainNavigator />
        </View>
      </View>
      <ScrollView style={styles.detailsContainer}>
        <Text style={styles.heading}>Name</Text>
        <View style={styles.locationContainer}>
          <Location width={15} height={15} />
          <Text style={styles.locationText}>{park.addresses[0].city}</Text>
        </View>
        <Text style={styles.detailsText}>
          {park?.description || 'Description not available'}
        </Text>
        <Text style={styles.heading}>Preview</Text>
        <FlatList
          horizontal
          data={previewImages}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleImagePress(item)}>
              <Image source={{uri: item}} style={styles.previewImage} />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.previewContainer}
        />
        <Text style={styles.heading}>Activities</Text>
        <FlatList
          horizontal
          data={activities}
          renderItem={({item}) => (
            <View style={styles.activityCard}>
              <Text style={styles.activityText}>{item}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.activitiesContainer}
        />
        <View>
          <Text style={styles.heading}>Map</Text>
          <View style={styles.mapContainer}></View>
        </View>
      </ScrollView>
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.modalBackground}
            onPress={closeModal}
          />
          <View style={styles.modalContent}>
            <Image source={{uri: selectedImage}} style={styles.fullImage} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    width: '100%',
    height: '40%',
    position: 'relative',
    borderBottomRightRadius: 26,
    borderBottomLeftRadius: 26,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    flex: 1,
    padding: 16,
    borderTopRightRadius: 26,
    borderTopLeftRadius: 26,
    backgroundColor: 'white',
    position: 'absolute',
    top: '35%',
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    backgroundColor: COLORS.WHITE,
  },
  heading: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.TEXTPRIMARY,
  },
  detailsText: {
    fontSize: 16,
    color: COLORS.TEXTSECONDARY,
  },
  navigator: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
    zIndex: 1,
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
  mapContainer: {
    width: '100%',
    height: 200,
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 12,
    marginVertical: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalBackground: {
    ...StyleSheet.absoluteFillObject,
  },
  modalContent: {
    width: '90%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
});
