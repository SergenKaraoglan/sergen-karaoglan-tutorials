import Head from "next/head";
import { useState } from "react";

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
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [reactionTime, setReactionTime] = useState(0);

  let timecolor = !isStarted
    ? "bg-blue-600"
    : !isFinished
    ? "bg-red-600"
    : "bg-green-600";

  function main() {
    if (!isStarted) {
      start();
    } else if (isFinished && reactionTime == 0) {
      const end = new Date().getTime();
      setReactionTime(end - time);
    } else {
      setIsFinished(false);
      clearTimeout(timer);
      setReactionTime(0);
      setIsStarted(false);
    }
  }

  function start() {
    setTimer(setTimeout(finish, Math.random() * 4000 + 500));
    setIsStarted(true);
  }

  function finish() {
    setTime(new Date().getTime());
    setIsFinished(true);
  }

  return (
    <>
      <div
        onClick={main}
        className={
          "m-auto text-center pt-10 text-white h-screen-4/5 flex justify-center items-center " +
          timecolor
        }
      >
        <span className="m-0 inline-block">
          {!isStarted ? (
            <>
              <h1 className="text-4xl sm:text-5xl">Reaction Test</h1>
              <p className="text-lg sm:text-xl">
                When screen turns red, click to test reaction. Click now to
                begin.
              </p>
            </>
          ) : !isFinished ? (
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
