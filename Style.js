import{StyleSheet} from "react-native"

export default Style=StyleSheet.create({
// Text:{
// color:"red",
// backgroundColor: "black",
// fontSize:30,
// fontWeight:500,
// // textAlignVertical:"center",
// textAlign:"center",
// height:100,
// margin:20
// }





shadowBox: {
    flexDirection: 'row',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 360,
    margin: 10,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    margin: 10,
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 100,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
})

