import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useImage = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get("/randomimage?category", { signal: controller.signal })
      .then((res) => {
        setLoading(false);
        setImage(URL.createObjectURL(res.data));
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { image, error, isLoading };
};

export default useImage;
