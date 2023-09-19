import { Text, View, TextInput, Image, Pressable, ScrollView } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { colors, styles } from "@Assets/styles/Theme";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

export default function CreateAccount() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch();

  const {handleChange, handleSubmit, values, errors} = useFormik({
    initialValues: {username: '', password: ''},
    validationSchema: Yup.object().shape({
      username: Yup.string().required('Username is required'),
      email: Yup
        .string()
        .required('E-mail is required')
        .email('Not a proper email'),
      password: Yup.string()
        .max(20, 'Password max 20')
        .required('Password is required'),
      confirm_password: Yup.string()
        .max(20, 'Confirm password max 20')
        .required('Confirm password is required')
        .test(
          'equal',
          'Passwords do not match!',
          function(v) {
            const ref = Yup.ref('password');
            return v == this.resolve(ref);
          }
        ),
        }),
    onSubmit: values => {
      dispatch({ type: 'REGISTER_CALLED', payload: values });
      router.back();
    },
  });


  return (
    <ScrollView contentContainerStyle={{minHeight: '100%'}}>
      <View style={styles.centeredContainer}>
        <Image
          style={styles.logo}
          source={require('@Assets/images/logo-round.png')}
        />
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subTitle}>Fill your information</Text>
        <View style={{width: '100%'}}>
          <View
            style={styles.inputIcon}
          >
            <FontAwesome5 name="user" size={16} color={colors.text}/>
          </View>
          <TextInput
              placeholder="username"
              nativeID="username"
              value={values.username}
              onChangeText={handleChange('username')}
              placeholderTextColor={colors.inputPlaceholder}
              style={styles.input}
          />
        </View>
        <Text style={styles.error}>{errors.username}</Text>
        <View style={{width: '100%'}}>
          <View
            style={styles.inputIcon}
          >
            <FontAwesome5 name="envelope" size={16} color={colors.text}/>
          </View>
          <TextInput
              placeholder="email"
              nativeID="email"
              value={values.email}
              onChangeText={handleChange('email')}
              placeholderTextColor={colors.inputPlaceholder}
              style={styles.input}
          />
        </View>
        <Text style={styles.error}>{errors.email}</Text>
        <View style={{width: '100%'}}>
          <View
            style={styles.inputIcon}
          >
            <Feather name="lock" size={16} color={colors.text}/>
          </View>
          <TextInput
              placeholder="password"
              secureTextEntry={!showPassword}
              nativeID="password"
              placeholderTextColor={colors.inputPlaceholder}
              value={values.password}
              onChangeText={handleChange('password')}
              style={styles.input}
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
        <View style={{width: '100%'}}>
          <View
            style={styles.inputIcon}
          >
            <Feather name="lock" size={16} color={colors.text}/>
          </View>
          <TextInput
              placeholder="confirm_password"
              secureTextEntry={!showPassword}
              nativeID="confirm_password"
              placeholderTextColor={colors.inputPlaceholder}
              value={values.confirm_password}
              onChangeText={handleChange('confirm_password')}
              style={styles.input}
            />
          <View
            style={styles.showPasswordIcon}
          >
            <FontAwesome5 
              onPress={() => setShowPassword(!showPassword)}
              style={{}} name={showPassword? "eye-slash": "eye"} size={16} color={colors.text}/>
          </View>
        </View>
        <Text style={styles.error}>{errors.confirm_password}</Text>
        <View style={[styles.rowSpaceBetween, styles.mt15]}>
          <Pressable 
            style={[styles.dualButton,{backgroundColor: colors.darkText}]} 
            onPress={() => {
              router.back();
            }}
          >
            <Text style={styles.buttonText}>Back</Text>
          </Pressable>
          <Pressable style={styles.dualButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Register</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

