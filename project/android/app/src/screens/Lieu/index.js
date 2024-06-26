import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { useNavigation,useRoute } from '@react-navigation/native';
import SearchPlace from '../../components/SearchPlace';

const Lieu = () => {
  const navigation = useNavigation(); 
  const [lieu, setLieu] = useState('');
  const route = useRoute();

  const {marque, model, kilometrage,immatriculation,country,year,carburant,boite,selectedDoors,selectedSeats,agence } = route.params;
  const user_id=route.params.user_id;
  console.log("user_id récupéré :", user_id);
  console.log("user_id récupéré :", user_id);
  console.log("user_id récupéré :", marque);
  console.log("user_id récupéré :", model);
  console.log("user_id récupéré :", kilometrage);
  console.log("user_id récupéré :", immatriculation);
  console.log("user_id récupéré :", country);
  console.log("user_id récupéré :", year);
  console.log("user_id récupéré :", selectedDoors);
  console.log("user_id récupéré :", selectedSeats);
  console.log("user_id récupéré :", agence);
  console.log("user_id récupéré :", lieu);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleExit = () => {
    navigation.navigate('Home');
  };
  const handleSuivant = () => {
    // Utilisez les variables récupérées ici (marque, model, kilometrage, selectedDoors, selectedSeats)
    navigation.navigate('Prixjour', { user_id:user_id,marque:marque, model:model, kilometrage:kilometrage,immatriculation:immatriculation, country:country,year:year ,carburant:carburant, boite:boite, selectedDoors:selectedDoors, selectedSeats:selectedSeats,agence:agence,lieu:lieu });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon name="arrowleft" size={20} color="grey" style={styles.arrowIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleExit}>
          <Icon name="close" size={20} color="grey" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Ou donnerez-vous rendez-vous au locataire?{"\n"}</Text>
      <View style={styles.inputContainer}>
        <Icon2 name="search" size={20} color="grey" style={styles.icon} />
        <SearchPlace setLieu={setLieu}/>
        <Icon name="close" size={20} color="grey" style={styles.icon}/>

      </View>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Cette adresse sera utilisée pour permettre aux locataires de réserver votre voiture.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSuivant}>
          <Text style={styles.buttonText}>Suivant</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 70,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  infoBox: {
    backgroundColor: '#C9DDE0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 14,
    color: 'black',
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  button: {
    width: '40%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E77AA',
    borderRadius: 8,
    marginTop: 24,
    bottom:-285,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Lieu;
