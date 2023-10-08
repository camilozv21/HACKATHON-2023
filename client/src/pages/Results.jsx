import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CarouselPlot } from "../components/CarouselPlot";

export const Results = () => {
  const { id } = useParams();
  const [analyst, setAnalyst] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://hackathon-2023-beryl.vercel.app/api/analyst/${id}`);
        const data = await response.json();
        setAnalyst(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <CarouselPlot datas={analyst} />
    </>
  );
};
