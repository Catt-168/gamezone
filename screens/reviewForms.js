import { Formik } from "formik";
import React from "react";
import { Text, TextInput, View } from "react-native";
import * as yup from "yup";
import FlatButton from "../shared/button";
import { globalStyles } from "../styles/global";

const ReviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .number()
    .required()
    .test("is-num-1-5", "Rating Must be number 1 - 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForms({ onAdd }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        validationSchema={ReviewSchema}
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          onAdd(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.textInput}
              placeholder="Review Title"
              onChangeText={props.handleChange("title")}
              values={props.values.title}
              onBlur={props.handleBlur("title")}
            />
            <Text style={globalStyles.error}>
              {props.touched.title && props.errors.title}
            </Text>
            <TextInput
              multiline
              minHeight={60}
              style={globalStyles.textInput}
              placeholder="Review Body"
              onChangeText={props.handleChange("body")}
              values={props.values.body}
            />
            <Text style={globalStyles.error}>
              {props.touched.body && props.errors.body}
            </Text>
            <TextInput
              style={globalStyles.textInput}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange("rating")}
              values={props.values.rating}
              keyboardType="numeric"
            />
            <Text style={globalStyles.error}>
              {props.touched.rating && props.errors.rating}
            </Text>
            <FlatButton text="Submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
