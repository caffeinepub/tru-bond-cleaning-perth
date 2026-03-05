import { useMutation } from "@tanstack/react-query";
import type { ServiceType } from "../backend";
import { useActor } from "./useActor";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: ServiceType;
  message: string;
  preferredDate: bigint;
}

export function useSubmitContactForm() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) throw new Error("Backend not available");
      return actor.submitContactForm(
        data.name,
        data.email,
        data.phone,
        data.serviceType,
        data.message,
        data.preferredDate,
      );
    },
  });
}
