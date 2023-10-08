import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { CarouselPlot } from '../components/CarouselPlot'
import axios from 'axios';

export const Results = () => {
    const [analyst, setAnalyst] = useState({});
    const { id } = useParams();

    const getAnalyst = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/analyst/${id}`);
            console.log(response)
            setAnalyst(response)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getAnalyst();
    }, [])

  return (
    <>
        <CarouselPlot imag={analyst} />
    </>
  )
}

