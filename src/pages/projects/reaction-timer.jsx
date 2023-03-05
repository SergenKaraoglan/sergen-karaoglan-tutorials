import Head from "next/head";
import { useState } from "react";

export default function ReactionTimer() {
  return (
    <>
      <Head>
        <title>Reaction Timer | Projects | Sergen Karaoglan</title>
      </Head>
      <ReactionInterface />
    </>
  );
}

function ReactionInterface() {
  const [time, setTime] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [timer, setTimer] = useState(null);
  const [reactionTime, setReactionTime] = useState(0);

  let timecolor = isStarted ? "bg-red-600" : "bg-blue-600";
  timecolor = isFinished ? "bg-green-600" : timecolor;

  function main() {
    if (!isStarted) {
      setTimer(setTimeout(finish, Math.random() * 4000 + 500));
      setIsStarted(true);
    } else if (isStarted && isFinished && reactionTime == 0) {
      const end = new Date().getTime();
      setReactionTime(end - time);
    } else {
      setIsStarted(false);
      setIsFinished(false);
      clearTimeout(timer);
    }
  }

  function finish() {
    setTime(new Date().getTime());
    setIsFinished(true);
  }

  return (
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
            <h1 className="text-5xl">Reaction Test</h1>
            <p className="text-lg">
              When screen turns red, click to test reaction. Click now to begin.
            </p>
          </>
        ) : !isFinished ? (
          <h1 className="text-5xl">Wait ...</h1>
        ) : reactionTime == 0 ? (
          <h1 className="text-5xl">GO!</h1>
        ) : (
          <h1 className="text-5xl">{reactionTime}ms</h1>
        )}
      </span>
    </div>
  );
}
