import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontFamily: 'HelveticaNeue',
    color: '#52575D',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  textName: {
    fontFamily: 'HelveticaNeue',
    color: '#52575D',
    fontSize: 36,
    fontWeight: '200',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  profileImage: {
    marginTop: 20,
    width: 220,
    height: 220,
    borderRadius: 110,
    overflow: 'hidden',
    borderColor: '#000000',
  },
  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
});

export default Styles;
