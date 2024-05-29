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
import MapView from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Button';
import {addToWishlist, removeFromWishlist} from '../../store/slices/authSlice';
const DetailsScreen = ({route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const data = route.params.data;
  const dataType = route.params.dataType;
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const previewImages = data?.images?.map(image => image.url);
  const activities = data?.activities?.map(activity => activity.name);
  const articlesTags = data?.tags?.map(tag => tag);

  const handleImagePress = image => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const isItemInWishlist = user?.wishlist.includes(data);
  const handleWishlistPress = () => {
    if (isItemInWishlist) {
      dispatch(removeFromWishlist(data));
    } else {
      dispatch(addToWishlist(data));
    }
  };

  const renderDetails = () => {
    switch (dataType) {
      case 'parks':
        return (
          <>
            <Text style={styles.heading}>{data?.name}</Text>
            <View style={styles.locationContainer}>
              <Location width={15} height={15} />
              <Text style={styles.locationText}>
                {data?.addresses[0]?.city}
              </Text>
            </View>
            <Text style={styles.detailsText}>
              {data?.description || 'Description not available'}
            </Text>
            <Text style={styles.heading}>Activities</Text>
            <FlatList
              horizontal
              data={activities}
              renderItem={({item}) => (
                <View style={styles.activityCard}>
                  <Text style={styles.activityText}>{item}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.activitiesContainer}
            />
            <View>
              <Text style={styles.heading}>Map</Text>
              <View style={styles.mapContainer}>
                <MapView
                  initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                />
              </View>
            </View>
          </>
        );
      case 'articles':
        return (
          <>
            <Text style={styles.heading}>Title</Text>
            <Text style={styles.detailsText}>{data?.title}</Text>
            <Text style={styles.heading}>Author</Text>
            <Text style={styles.detailsText}>{data?.author}</Text>
            <Text style={styles.heading}>Listing Description</Text>
            <Text style={styles.detailsText}>{data?.listingDescription}</Text>
            <Text style={styles.heading}>Tags</Text>
            <FlatList
              horizontal
              data={articlesTags}
              renderItem={({item}) => (
                <View style={styles.activityCard}>
                  <Text style={styles.activityText}>{item}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.activitiesContainer}
            />
          </>
        );
      case 'campGround':
        return (
          <>
            <Text style={styles.heading}>{data?.name}</Text>
            <View style={styles.locationContainer}>
              <Location width={15} height={15} />
              <Text style={styles.locationText}>
                {data?.addresses[0]?.city}
              </Text>
            </View>
            <Text style={styles.detailsText}>
              {data?.description || 'Description not available'}
            </Text>
            <View>
              <Text style={styles.heading}>Map</Text>
              <View style={styles.mapContainer}></View>
            </View>
          </>
        );
      case 'events':
        return (
          <>
            <Text style={styles.heading}>Event Name</Text>
            <Text style={styles.detailsText}>{data?.title}</Text>
            <Text style={styles.heading}>Date</Text>
            <Text style={styles.detailsText}>{data?.date}</Text>
            <Text style={styles.heading}>Description</Text>
            <Text style={styles.detailsText}>{data?.description}</Text>
          </>
        );
      case 'lessonPlans':
        return (
          <>
            <Text style={styles.heading}>Lesson Title</Text>
            <Text style={styles.detailsText}>{data?.title}</Text>
            <Text style={styles.heading}>Grade Level</Text>
            <Text style={styles.detailsText}>{data?.gradeLevel}</Text>
            <Text style={styles.heading}>Subject</Text>
            <Text style={styles.detailsText}>{data?.subject[0] || ''}</Text>
          </>
        );
      default:
        return <Text style={styles.detailsText}>Data not available</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri:
              data?.images &&
              data.images[0]?.url &&
              data.images[0].url.startsWith('http')
                ? data.images[0].url
                : 'https://static1.anpoimages.com/wordpress/wp-content/uploads/2021/02/06/national-park-service-hero.jpg',
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.navigator}>
          <MainNavigator data={data} dataType={dataType} />
        </View>
      </View>
      <ScrollView style={styles.detailsContainer}>
        {renderDetails()}
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
