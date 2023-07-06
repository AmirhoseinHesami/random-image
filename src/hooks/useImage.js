import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useImage = (category = "", reload) => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setError(false);
    apiClient
      .get(`/randomimage?category=${category}&width=480&height=360`, {
        signal: controller.signal,
      })
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
  }, [category, reload]);

  return { image, error, isLoading };
};

export default useImage;
