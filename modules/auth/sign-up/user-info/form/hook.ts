import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import * as ImagePicker from "expo-image-picker";
import { zodResolver } from "@hookform/resolvers/zod";
import { userInfoSchema, type UserInfoFormData } from "./schema";

const resolver = zodResolver(userInfoSchema);

const defaultValues: UserInfoFormData = {
  idnp: "",
  email: "",
  avatar: "",
  lastName: "",
  firstName: "",
  dob: dayjs().subtract(16, "year").toDate(), // Set default to 16 years ago
};

export function useUserInfoForm() {
  const hook = useForm<UserInfoFormData>({
    resolver,
    defaultValues,
    mode: "onChange",
  });

  // Validate age is at least 16 years old
  const validateAge = (date: Date) => {
    const age = dayjs().diff(dayjs(date), "year");
    return age >= 16;
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 1,
    });

    if (!result.canceled) {
      hook.setValue("avatar", result.assets[0].uri);
    }
  };

  // Add age validation when date of birth changes
  hook.register("dob", {
    validate: validateAge,
  });

  return {
    ...hook,
    pickImage,
  };
}
