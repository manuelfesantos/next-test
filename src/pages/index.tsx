import Image from 'next/image';
import {useEffect, useState} from "react";

export default function Home() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevState => prevState + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);
  return (
      <>
        <h1>Hello</h1>
          <h1>World</h1>
          <div style={{width: '100px', height: '100px', position: 'relative'}}>
              <Image src="https://blue-heart-93dc.manuelfesantos.workers.dev/ceramics-background-2.jpeg" alt="logo" fill/>
          </div>
          <h1>{count}</h1>
      </>
  );
}
