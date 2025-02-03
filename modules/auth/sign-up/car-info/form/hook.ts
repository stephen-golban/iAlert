import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { carInfoSchema, type CarInfoFormData } from "./schema";

const resolver = zodResolver(carInfoSchema);

const defaultValues: CarInfoFormData = {
  carPlate: "",
  brand: "",
  model: "",
};

export function useCarInfoForm() {
  const hook = useForm<CarInfoFormData>({
    resolver,
    defaultValues,
    mode: "all",
  });

  return {
    ...hook,
  };
}
