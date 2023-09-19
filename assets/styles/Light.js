import { StyleSheet } from "react-native";


const colors =  {
  background: '#f8faff',
  text: '#3573ff',
  darkText: '#002842',
  inputBorder: '#3573ff',
  inputPlaceholder: '#a5cce2',
  inputText: '#001742',
};
const Light = {
        colors: colors,
        styles: {
          centeredContainer: {
            flex: 1,
            padding: 20,
            paddingVertical: 40,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.background,
          },
          title:{
            color: colors.text,
            fontSize: 28,
            fontWeight: 'bold',
          },
          subTitle:{
            color: '#004200',
            fontWeight: 'bold',
            marginBottom: 30
          },
          input: {
            width: '100%',
            height: 44,
            padding: 10,
            paddingLeft: 40,
            borderWidth: 1,
            borderColor: colors.inputBorder,
            borderRadius: 7,
          },
          checkbox: {
            margin:0,
            padding:0,
          },
        
          inputIcon: {
            position: "absolute",
            zIndex: 1,
            left: 12,
            top: 12
          },
          showPasswordIcon:{
            position: "absolute",
            zIndex: 1,
            right: 12,
            top: 12
          },
          error:{
            color: 'red',
            marginBottom: 5,
          },
          forgotPasswordText:{
            width: '50%',
            textAlign: 'right',
          },
          logo:{
            width: 128,
            height: 128,
            margin: 30,
          },
          button:{
            width: '100%',
            height: 40,
            backgroundColor: colors.text,
            borderRadius: 7,
          },
          dualButton:{
            width: '45%',
            height: 40,
            backgroundColor: colors.text,
            borderRadius: 7,
          },
          buttonText:{
            height: '100%',
            textAlignVertical: 'center',
            textAlign: 'center',
            color: colors.background,
            fontSize: 16,
            fontWeight: 'bold',
          },
          socialButtonText:{
            marginTop: 20,
            marginBottom: 10,
          },
          socialButtonContainer:{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            maxHeight: 50,
            marginBottom: 30,
          },
          addButton:{ 
            top: -40, 
            position: 'absolute', 
            padding: 35, 
            left: "50%", 
            marginLeft: -35, 
            borderRadius: 50, 
            overflow:'hidden', 
            backgroundColor: colors.text,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
          },
          rowEvenly:{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            maxHeight: 50,
            marginBottom: 30,
          },
          row:{
            width: '100%',
            flexDirection: 'row',
          },
          toolbarRightWidget:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 100,
            marginRight: 0,
          },
          rowSpaceBetween:{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxHeight: 50,
            marginBottom: 30,
          },
          socialButton:{
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#DB4437',
            borderRadius:50,
          },
          registerText:{
            color: colors.text,
            fontWeight: 'bold',
          },
          mt5:{
            marginTop: 5,
          },
          mt10:{
            marginTop: 10,
          },
          mt15:{
            marginTop: 15,
          },
        }
      }
export default Light;