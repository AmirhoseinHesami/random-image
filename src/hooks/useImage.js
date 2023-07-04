import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useImage = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get("/randomimage?category", { signal: controller.signal })
      .then((res) => setImage(URL.createObjectURL(res.data)))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { image, error };
};

export default useImage;
