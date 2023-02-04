import { useEffect, useState } from 'react';
import axios from 'axios';

// axios.defaults.proxy.host = 'http://localhost:8800/api'
// axios.defaults.proxy.port = 8800

// axios.defaults.proxy.host = "http://localhost:8800/api"
// axios.defaults.proxy.port = '8800'

// axios.defaults.baseURL = 'http://localhost:8800/api'

// const axios = require("axios")
// const { useState, useEffect } = require("react")

const useFetch = (url) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {

  }, []);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        setLoading(true)
        const res = await axios.get(url)
        setData(res.data)
      } catch (error) {
        setError(error)
      }
      setLoading(false)
    }
    fetchData(url)
  }, []);

  const reFetch = async () => {
    try {
      setLoading(true);
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
