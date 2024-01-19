import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const ImageContext = createContext();

const ImageProvider = ({ children }) => {
  const [imagesData, setImagesData] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const getImages = async () => {
      try {
        const {
          data: { hits },
        } = await axios.get(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${category}&image_type=all&per_page=20`
        );
        setImagesData(hits);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getImages();
  }, [category]);

  return (
    <ImageContext.Provider
      value={{ imagesData, setImagesData, category, setCategory, loading }}
    >
      {children}
    </ImageContext.Provider>
  );
};

const useImages = () => useContext(ImageContext);
export { ImageProvider, useImages };
