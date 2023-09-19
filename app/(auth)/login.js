import { Text, Button, TextInput, View, StyleSheet, Image, Pressable, ScrollView, Switch } from "react-native";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { colors, styles } from "@Assets/styles/Theme";
import { translate } from "@Services/i18n";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../src/store/reducers/authReducer";
import Checkbox from "expo-checkbox";

export default function LogIn() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false)

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectUser);

  useEffect(() => {
    if(isLoggedIn){
      router.replace("/(tabs)/home");
    }
  }, [isLoggedIn]);

  const validationSchema=Yup.object().shape({
      username: Yup.string()
        .required(translate('Username is required')),
      password: Yup.string()
        .max(20, translate('Password max 20'))
        .required(translate('Password is required')),
    });
 
  return (
    <ScrollView contentContainerStyle={{minHeight: '100%'}}>
      <View style={styles.centeredContainer}>
      <Image
        style={styles.logo}
        source={require('@Assets/images/logo-round.png')}
      />
      <Text style={styles.title}>{translate("Welcome Back")}</Text>
      <Text style={styles.subTitle}>{translate("Login to continue")}</Text>
      <Formik
        initialValues={{username: 'kminchelle', password: '0lelplR', rememberMe: true}}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          dispatch({ type: 'LOGIN_CALLED', payload: values });
        }}
      >

      {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched }) => (
      <View style={{width: '100%'}}>
        <View style={{width: '100%'}}>
          <View
            style={styles.inputIcon}
          >
            <FontAwesome5 style={{}} name="user" size={16} color={colors.text}/>
          </View>
          <TextInput
            style={styles.input}
            value={values.username}
            placeholderTextColor={colors.inputPlaceholder}
            onChangeText={handleChange('username')}
            placeholder={translate("Username or e-mail")}
          />
        </View>
        <Text style={styles.error}>{errors.username}</Text>

        <View style={{width: '100%'}}>
          <View
            style={styles.inputIcon}
          >
            <Feather style={{}} name="lock" size={16} color={colors.text}/>
          </View>
          <TextInput
            style={styles.input}
            value={values.password}
            placeholderTextColor={colors.inputPlaceholder}
            onChangeText={handleChange('password')}
            placeholder={translate("Password")}
            secureTextEntry={!showPassword}
          />
          <View
            style={styles.showPasswordIcon}
          >
              <FontAwesome5 
                onPress={() => setShowPassword(!showPassword)}
                style={{}} name={showPassword? "eye-slash": "eye"} size={16} color={colors.text}/>
          </View>
        </View>
        <Text style={styles.error}>{errors.password}</Text>
        <View style={styles.rowSpaceBetween}>
          <View style={[styles.row, {width: "auto"}]}>
            <Checkbox
              value={values.rememberMe}
              name="rememberMe"
              onValueChange={()=>{
                let value = !values.rememberMe;
                setFieldValue('rememberMe', value)
              }}
              color={values.rememberMe ? colors.text : undefined}
              style={styles.checkbox}
            />
            <Text
              onPress={()=>{
                let value = !values.rememberMe;
                setFieldValue('rememberMe', value)
              }}
              style={{marginLeft: 5}}
            >
                {translate("Remember me")}
            </Text>
          </View>
          <Text
            style={styles.forgotPasswordText}
            onPress={() => {
              router.push("/lost-password");
            }}
          >
            {translate("Forgot your Password?")}
          </Text>
        </View>
        <View>
        <Pressable style={styles.button} onPress={(e) => handleSubmit(e)}>
          <Text style={styles.buttonText}>{translate("Login")}</Text>
        </Pressable>
        </View>
      </View>
      )}
      </Formik>
      <View style={styles.socialButtonText}>
        <Text>{translate("Login with")}</Text>
      </View>
      <View style={styles.socialButtonContainer}>
        <View style={styles.socialButton}>
          <FontAwesome5 name="google" size={24} color='#FFFFFF' />
        </View>
        <View style={[styles.socialButton, {backgroundColor: '#4267B2'}]}>
          <FontAwesome5 name="facebook-f" size={24} color='#FFFFFF' />
        </View>
        <View style={[styles.socialButton, {backgroundColor: '#000000'}]}>
          <FontAwesome5 name="apple" size={24} color='#FFFFFF' />
        </View>
      </View>

      <View>
        <Text>
        {translate("Don't have account?")}
          <Text onPress={() => {
            router.push("/create-account");
          }} style={styles.registerText}>  {translate("Register")}</Text>
        </Text>
      </View>
      </View>
    </ScrollView>
  );
}
