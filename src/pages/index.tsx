import Image from 'next/image';
import {useEffect} from "react";

export default function Home() {
    useEffect(() => {
        console.log("Hello World")
    }, []);
  return (
      <>
        <h1>Hello</h1>
          <h1>World</h1>
          <div style={{width: '100px', height: '100px', position: 'relative'}}>
              <Image src="https://blue-heart-93dc.manuelfesantos.workers.dev/ceramics-background-1.jpeg" alt="logo" fill/>
          </div>
      </>
  );
}
