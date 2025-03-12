import React from "react";
import { StyleSheet, View, Button, Alert } from "react-native";
import RazorpayCheckout from "react-native-razorpay";

const Payment = () => {
  const handlePayment = () => {
    var options = {
      description: "Test Transaction",
      image: "https://your-logo-url.com/logo.png",
      currency: "INR",
      key: "rzp_test_1234567890abcdef", // Use any test key (not verified)
      amount: 100 * 100,
      name: "Your App Name",
      order_id: "order_test_1234567890abcdef", // Dummy Order ID
      prefill: {
        email: "test@example.com",
        contact: "9999999999",
        name: "Test User",
      },
      theme: { color: "#3399cc" },
    };

    RazorpayCheckout.open(options)
      .then((data) => {
        Alert.alert("Payment Success", `Payment ID: rzp_test_payment_123456`);
      })
      .catch((error) => {
        Alert.alert("Payment Failed", error.description);
      });
  };

  return (
    <View style={styles.container}>
      <Button title="Pay Now" onPress={handlePayment} color="#3399cc" />
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
