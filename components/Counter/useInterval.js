import counter from "../../stores/CounterStore"

const useInterval = () => {
    const id = setInterval(() => {
        const hour = (new Date).getHours();
        //Increment count every hour between 9am-5pm or decrement count between 6pm-8am
        hour >= 9 && hour <= 17 ? counter.increment() : counter.decrement()
    }, 1000 * 60 * 60)
    return () => clearInterval(id);
}

export default useInterval;