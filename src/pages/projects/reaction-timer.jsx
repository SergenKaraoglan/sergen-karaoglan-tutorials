import Head from "next/head";
import { useState, useRef } from "react";

export default function ReactionTimer() {
  return (
    <>
      <Head>
        <title>Reaction Timer | Projects | Sergen Karaoglan</title>
        <meta
          name="description"
          content="Benchmark your reaction time with this simple reaction timer."
        />
      </Head>
      <ReactionInterface />
    </>
  );
}

function ReactionInterface() {
  const time = useRef(0);
  const timer = useRef(null);
  const [status, seStatus] = useState("start");
  const [reactionTime, setReactionTime] = useState(0);

  let timecolor =
    status == "start"
      ? "bg-blue-600"
      : status == "waiting"
      ? "bg-red-600"
      : "bg-green-600";

  function handleClick() {
    if (status == "start") {
      start();
    } else if (status == "finished" && reactionTime == 0) {
      const end = new Date().getTime();
      setReactionTime(end - time.current);
    } else {
      clearTimeout(timer.current);
      setReactionTime(0);
      seStatus("start");
    }
  }

  function start() {
    timer.current = setTimeout(finish, Math.random() * 4000 + 500);
    seStatus("waiting");
  }

  function finish() {
    time.current = new Date().getTime();
    seStatus("finished");
  }

  return (
    <>
      <div
        onClick={handleClick}
        className={
          "m-auto text-center pt-10 text-white h-screen-4/5 flex justify-center items-center " +
          timecolor
        }
      >
        <span className="m-0 inline-block">
          {status == "start" ? (
            <>
              <h1 className="text-4xl sm:text-5xl">Reaction Test</h1>
              <p className="text-lg sm:text-xl">
                When screen turns green, click to test reaction. Click now to
                begin.
              </p>
            </>
          ) : status == "waiting" ? (
            <h1 className="text-4xl sm:text-5xl">Wait...</h1>
          ) : reactionTime == 0 ? (
            <h1 className="text-4xl sm:text-5xl">GO!</h1>
          ) : (
            <>
              <h1 className="text-4xl sm:text-5xl">{reactionTime}ms</h1>
              <p className="text-lg sm:text-xl">Click to retry</p>
            </>
          )}
        </span>
      </div>
      <Score score={reactionTime} />
    </>
  );
}

function Score({ score }) {
  const [bestScore, setScore] = useState(0);
  if (score) {
    if (score < bestScore || bestScore == 0) {
      setScore(score);
    }
  }

  return (
    <div className="text-center p-10">
      <h2 className="text-2xl sm:text-3xl">
        Best Score: {bestScore > 0 ? bestScore : "___"}ms
      </h2>
    </div>
  );
}

function Resources() {
  return (
    <>
      <h3 className="text-xl sm:text-2xl">Resources</h3>
      <ul className="list-disc list-inside">
        <li>
          <a href="https://www.youtube.com/watch?v=9Y5Bx6ZThdM">
            Build a Reaction Timer with React
          </a>
        </li>
      </ul>
    </>
  );
}
