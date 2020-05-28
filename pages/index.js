import { store, view } from "@risingstack/react-easy-state";
import { useEffect } from "react";
import TaskScheduler from "./Scheduler.js";

export default view(() => {
  const counter = store({ count: 0 });
  const scheduler = new TaskScheduler();

  //useEffect sets up our initial refresh
  useEffect(() => {
    scheduler.registerTask({
      run: () => {
        counter.count++;
      },
      startHr: 9,
      endHr: 17
    });
    scheduler.registerTask({
      run: () => {
        counter.count--;
      },
      startHr: 18,
      endHr: 8
    });

    //start an hourly interval to update on the hour
    scheduler.start();

    //cleans up the remaining timeouts and intervals
    return () => scheduler.clearPending();
  }, []);
  return (
    <>
      <button
        onClick={() => {
          counter.count++;
        }}
      >
        +
      </button>
      <p>{counter.count}</p>
      <button
        onClick={() => {
          counter.count--;
        }}
      >
        -
      </button>
    </>
  );
});
