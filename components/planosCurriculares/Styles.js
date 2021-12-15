import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    top: 10,
    width: '100%',
    flex: 1,
  },
  header: {
    fontSize: 40,
    marginLeft: 23,
    fontWeight: 'bold',
    color: '#000',
  },
  card: {
    flex: 1,
    marginTop: 15,
    backgroundColor: '#ebebeb',
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
  },
  Text: {
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  item: {
    height: 100,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  titleCard: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  inputSearch: {
    marginTop: 13,
    height: 39,
    width: '90%',
    backgroundColor: '#EBEBEB',
    borderRadius: 20,
    paddingLeft: 15,
  },
  textInputView: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 5,
  },
});

export default styles;
