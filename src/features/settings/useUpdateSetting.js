import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Settings successfully updated");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (err) => {
      console.error(err.message);
      toast.error(err.message);
    },
  });

  return { isUpdating, updateSetting };
}
