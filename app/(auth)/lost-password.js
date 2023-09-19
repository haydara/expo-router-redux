import { Text, View, TextInput, ScrollView, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { colors, styles } from "../../assets/styles/Theme";
import { FontAwesome5 } from "@expo/vector-icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { translate } from "../../src/services/i18n";
import { useDispatch } from "react-redux";

export default function LostPassword() {
  const router = useRouter();
  const dispatch = useDispatch();

  const {handleChange, handleSubmit, values, errors} = useFormik({
    initialValues: {username: '', password: ''},
    validationSchema: Yup.object().shape({
      email: Yup
        .string()
        .required(translate('E-mail is required'))
        .email(translate('Not a proper email')),
        }),
    onSubmit: values => {
      dispatch({ type: 'FORGOT_PASSWORD_CALLED', payload: values });
    },
  });

  return (
    <ScrollView contentContainerStyle={{minHeight: '100%'}}>
      <View style={styles.centeredContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo-round.png')}
        />
        <Text style={styles.title}>{translate("Lost password")}</Text>
        <Text style={styles.subTitle}>{translate("Fill your email for password recovery")}</Text>
        <View style={{width: '100%'}}>
          <View
            style={styles.inputIcon}
          >
            <FontAwesome5 name="envelope" size={16} color={colors.text}/>
          </View>
          <TextInput
              placeholder="E-mail"
              nativeID="email"
              value={values.email}
              onChangeText={handleChange('email')}
              placeholderTextColor={colors.inputPlaceholder}
              style={styles.input}
          />
        </View>
        <Text style={styles.error}>{errors.email}</Text>

        <View style={[styles.rowSpaceBetween, styles.mt15]}>
          <Pressable 
            style={[styles.dualButton,{backgroundColor: colors.darkText}]} 
            onPress={() => {
              router.back();
            }}
          >
            <Text style={styles.buttonText}>{translate("Back")}</Text>
          </Pressable>
          <Pressable style={styles.dualButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>{translate("Register")}</Text>
          </Pressable>
        </View>

      </View>
    </ScrollView>
  );
}
