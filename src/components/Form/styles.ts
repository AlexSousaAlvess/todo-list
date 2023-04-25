import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '100%',
    paddingHorizontal: 36,
    paddingTop:145,
    position: 'absolute'
  },
  input:{
    backgroundColor: '#262626',
    height: 54,
    flex: 1,
    marginRight: 10,
    borderRadius: 6,
    padding: 16,
    fontSize: 16,
    color: '#F2F2F2',
  },
  button:{
    width: 52,
    height: 52,
    backgroundColor: '#1E6F9F',
    borderRadius:6,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;