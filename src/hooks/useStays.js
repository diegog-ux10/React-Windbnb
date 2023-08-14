import { useEffect, useMemo, useState } from "react";

// Función para traer los datos de "stays.json".
const getData = async ({ onSuccess }) => {
  // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
  try {
    const res = await fetch("stays.json");
    const resJson = await res.json();
    // Aquí guardamos los datos de "stays.json" en la variable data.
    onSuccess(resJson);
  } catch (error) {
    console.log(error);
  }
};

export const useStays = () => {
  const [data, setData] = useState([]);
  const [requestStatus, setRequestStatus] = useState("loading");
  const cities = useMemo(() => {
    if (data.length) {
      return data.map((stay) => stay.city);
    }
    return [];
  }, [data]);
  const [filters, setFilters] = useState({ city: "", guests: "" });
  const stays = useMemo(() => {
    let stays = data;
    if (filters.city) {
      stays = stays.filter((stay) => stay.city === filters.city);
    }
    if (filters.guests) {
      const maxGuests = Number(filters.guests);
      stays = stays.filter((stay) => stay.maxGuests >= maxGuests);
    }
    return stays;
  }, [data, filters]);

  useEffect(() => {
    getData({
      onSuccess: (data) => {
        setData(data);
        setRequestStatus("success");
      },
    });
  }, []);

  // useEffect(() => {
  //   if (data.length) {
  //     setFilteredData(data);
  //   }
  // }, [data]);

  return { stays, cities, requestStatus, setFilters, filters };
};
