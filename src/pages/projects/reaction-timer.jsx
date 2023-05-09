import Head from "next/head";
import { useState, useRef, useEffect } from "react";

export default function ReactionTimer() {
  return (
    <>
      <Head>
        <title>Reaction Timer | Sergen Karaoglan</title>
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
      : status == "waiting" || status == "fail"
      ? "bg-red-600"
      : "bg-green-600";

  function handleClick() {
    if (status == "start") {
      start();
    } else if (status == "waiting") {
      clearTimeout(timer.current);
      seStatus("fail");
    } else if (status == "finished" && reactionTime == 0) {
      const end = new Date().getTime();
      let reactionTime = end - time.current;
      setReactionTime(reactionTime);
      submitTime(reactionTime);
    } else {
      start();
    }
  }

  function start() {
    setReactionTime(0);
    timer.current = setTimeout(finish, Math.random() * 4000 + 500);
    seStatus("waiting");
  }
  function finish() {
    time.current = new Date().getTime();
    seStatus("finished");
  }

  async function submitTime(reactionTime) {
    reactionTime = { name: "Sergen", score: reactionTime };
    const response = await fetch("/api/reaction-leaderboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reactionTime),
    });
    console.log(response);
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
          ) : status == "fail" ? (
            <>
              <h1 className="text-4xl sm:text-5xl">Too early.</h1>
              <p className="text-lg sm:text-xl">Click to retry</p>
            </>
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
      {/* <Leaderboard score={reactionTime}/> */}
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

function Leaderboard({score}) {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("/api/reaction-leaderboard")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [score])

  

  return (
    <div className="m-auto w-fit">
      <h3 className="text-xl sm:text-2xl">Leaderboard</h3>
      {isLoading && <p>Loading...</p>}
      <ol className="list-disc list-inside">
        {data && data.map((item, index) => (
          <li key={index}>{item.name} - {item.score}ms</li>
        ))}
      </ol>
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
