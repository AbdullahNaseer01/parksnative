import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MainCard from '../../components/MainCard';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {dataMapping, getDefaultImageUrl} from '../../constants/dataMapping';
import {COLORS} from '../../constants/colors.constant';

const getNestedProperty = (obj, path, defaultValue) => {
  return (
    path.split('.').reduce((o, p) => {
      if (o && p.includes('[')) {
        const [key, index] = p.split(/\[|\]/).filter(Boolean);
        return o[key] ? o[key][index] : defaultValue;
      }
      return o ? o[p] : defaultValue;
    }, obj) || defaultValue
  );
};

const WishList = () => {
  const navigation = useNavigation();
  const wishlist = useSelector(state => state.auth.user?.wishlist);

  const handleNavigate = screen => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>WishList</Text>
      {!wishlist || wishlist.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Nothing in your wishlist</Text>
          <TouchableOpacity
            onPress={() => handleNavigate('search')}
            style={styles.linkButton}>
            <Text style={styles.linkButtonText}>Go to Search</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleNavigate('Home')}
            style={styles.linkButton}>
            <Text style={styles.linkButtonText}>Go to Home</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.cardContainer}>
          {wishlist.map((data, index) => {
            const dataType = data?.dataType;
            const mapping = dataMapping[dataType] || {};
            const imageUrl = getNestedProperty(
              data?.data,
              mapping.imageUrl,
              getDefaultImageUrl(),
            );
            const name = getNestedProperty(
              data?.data,
              mapping.name,
              'No name available',
            );
            const city = getNestedProperty(
              data?.data,
              mapping.city,
              'Unknown location',
            );
            const description = getNestedProperty(
              data?.data,
              mapping.description,
              'No description available',
            );

            return (
              <MainCard
                key={index}
                name={name}
                location={city}
                imageURL={imageUrl}
                styleProp={styles.cardItem}
                handlePress={() => {
                  navigation.navigate('detailsScreen', {
                    data: data?.data,
                    dataType: data?.dataType,
                  });
                }}
              />
            );
          })}
        </View>
      )}
    </ScrollView>
  );
};

export default WishList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.TEXTPRIMARY,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 18,
    color: COLORS.TEXTSECONDARY,
    marginBottom: 20,
  },
  linkButton: {
    padding: 10,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 8,
    marginVertical: 5,
  },
  linkButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardItem: {
    backgroundColor: 'red',
    width: '46%',
    marginBottom: 16,
  },
});
