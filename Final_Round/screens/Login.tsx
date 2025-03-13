import { RootStackParamList } from '@/utils/types';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from 'react';
import { StyleSheet } from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const Login = ({ navigation }: Props) => {
  return (
    <>

    </>
  )
};

export default Login;

const styles = StyleSheet.create({});