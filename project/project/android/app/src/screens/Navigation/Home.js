import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchPlace from '../../components/SearchPlace';
import CalendarPicker from '../../components/CalendarPicker';
import CarBrand from '../../components/CarBrand';
import CarModel from '../../components/CarModel';
import TransmissionType from '../../components/TransmissionType';
import CarItem from '../../components/CarItem';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation();

  const [calendarVisible, setCalendarVisible] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState('');

  const toggleCalendar = () => {
    setCalendarVisible(!calendarVisible);
  };

  const today = new Date().toISOString().split('T')[0];

  const carItemsData = [
    { name: "Toyota Camry", price: "500 MAD/jr", rating: 4.5, numReviews: 90 },
    { name: "Honda Accord", price: "600 MAD/jr", rating: 4.3, numReviews: 85 },
    { name: "Nissan Altima", price: "550 MAD/jr", rating: 4.4, numReviews: 88 },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.text}>EasyDrive</Text>
        <View style={styles.searchContainer}>
          <SearchPlace />
          <TouchableOpacity onPress={toggleCalendar} style={styles.iconContainer}>
            <Icon name="calendar" size={30} color="#5E77AA" />
          </TouchableOpacity>
        </View>
        <View style={styles.dropdownContainer}>
          <CarBrand onSelectBrand={setSelectedBrand} />
          <CarModel selectedBrand={selectedBrand} />
          <TransmissionType />
        </View>
        <View style={styles.inlineContainer}>
          <View style={styles.rechContainer}>
            <Text style={styles.rechText}>100 résultats</Text>
          </View>
          <TouchableOpacity style={styles.filterIconContainer}>
            <Icon name="filter" size={24} color="#5E77AA" />
          </TouchableOpacity>
        </View>
        {carItemsData.map((car, index) => (
          <CarItem
            key={index}
            image={require('../../assets/owner.jpg')}
            name={car.name}
            price={car.price}
            rating={car.rating}
            numReviews={car.numReviews}
          />
        ))}
      </ScrollView>
      {calendarVisible && (
        <>
          <CalendarPicker
            startDate={today}
            onChange={({ startDate, endDate }) => console.log({ startDate, endDate })}
          />
          <TouchableOpacity onPress={toggleCalendar} style={styles.closeButton}>
            <Icon name="times" size={30} color="#5E77AA" />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 10,
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#5E77AA',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    padding: 10,
  },
  dropdownContainer: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginTop: 20,
    alignItems: 'flex-start',
    marginLeft: 5,
  },
  inlineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rechContainer: {
    marginLeft: 5,
    marginTop: 10,
    alignItems: 'flex-start',
  },
  rechText: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  filterIconContainer: {
    marginRight: 15,
    marginTop: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
});

export default Home;
