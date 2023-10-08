import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { CarouselPlot } from "../components/CarouselPlot";

export const Results = () => {
  const { id } = useParams();
  const [analyst, setAnalyst] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://hackathon-2023-udov.vercel.app/api/analyst/${id}`);
        setAnalyst(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <CarouselPlot />
      {console.log(analyst)}
    </>
  );
};
