import React, { useEffect, useState } from "react";

const UseEffectsComponents = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const promise1 = () =>{
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(["Joel", "Muya", "Jane", "Maggy", "Joseph"]);
        }, 5000);
      } catch (error) {
        reject(error);
      }
    });}

  //
  useEffect(() => {
    let isMounted = true;
    promise1()
      .then((dataJson) => {
        if (isMounted) setData(dataJson);
        setIsLoading(false);
      })

      .catch((error) => {
        console.log(`Error Fetching data:${error}`);
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return <div>Loading data: please be patient........</div>;
  }
  
  return (
    <div>
      <h3>Fetched data:</h3>
      <ol>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default UseEffectsComponents;
