import CounterButton from "../components/CounterButton";
import ResetButton from "../components/ResetButton";
import CountFiveButton from "../components/CountFiveButton";
import styles from "../styles/Home.module.css";
import { useState } from 'react';
import React from 'react';
import Image from "next/image";

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className={styles.title}>
      <div>{count}</div>
      <div className={styles.grid}>
        <div onClick={() => setCount(count + 1)}>
          <CounterButton/>
        </div>
        <div onClick={() => setCount(count + 5)}>
          <CountFiveButton/>
        </div>
        <div onClick={() => setCount(0)}>
          <ResetButton />
        </div>
      </div>
    </div>
  )
}



export default function Home() {
  const underline = {textDecorationLine: "underline"};
  return (
    <div className={styles.main}>
      <Image src="/../public/images/AlexPic.png" height={250} width={300} className={styles.ProfilePic} />
      <div className={styles.title} style={underline}>Alex Joon Kim</div>
      <h1>Test Project Site with React</h1>
      <h2 className={styles.paragraph}> Hello everyone, my name is Alex Kim and I’m a 2nd year Computer Science major in the School of Engineering and Applied Sciences. I’m from Ashburn, Virginia, and I am also hoping to minor in the Engineering Business Minor as well.
          Unlike most people within the IPP program, I am currently in this opportunity independently. Even so, I am very excited to work with my team and create a project that can help others in the university community.</h2>

      <h2 className={styles.paragraph}> In my free time I like to weightlift, play sports, or hang out with friends. I also love listening to music, and always appreciate new recommendations or listening parties.
          At UVA, I am currently in the barbell club and heavily involved with my professional engineering fraternity Theta Tau. I am very excited to work new people so please feel free to reach out to me for personal/professional interests!</h2>
      <Counter />
    </div>
  )
}
