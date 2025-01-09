import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import { images } from "../../constants";

const SignUp = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="flex justify-center w-full my-6 px-4 h-full">
          <Image
            className="w-[115px] h-[35px]"
            resizeMode="contain"
            source={images.logo}
          />
          <Text className="text-white text-2xl text-semibold mt-10 font-psemibold">
            Logo in Aora
          </Text>
          <FormField
            title="Name"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Sign in"
            handelPress={submit}
            containerStyles="mt-7"
            isloading={isSubmitting}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
