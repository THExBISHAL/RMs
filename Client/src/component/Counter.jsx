import { useEffect, useState } from "react";

function Counter() {
  let initialData = {
    count: 0,
    mala: 0,
  };
  const [count, setCount] = useState(0);
  const [counters, setCounters] = useState(initialData);
  const [mala, setMala] = useState(0);

  const now = new Date();
  const date = now.toLocaleDateString();

  const handleCounter = async () => {
    let newCount = count + 1;
    let newMala = mala;

    if (count === 107) {
      newMala = mala + 1;
      newCount = 0;
    }

    setCount(newCount);
    setMala(newMala);

    if (newCount === 1 && newMala === 0) {
      await fetch("https://rms-backend-f9u6.onrender.com/api/counter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ count: newCount, mala: newMala, date }),
      });
    } else {
      await fetch("https://rms-backend-f9u6.onrender.com/api/counter", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ count: newCount, mala: newMala, date }),
      });
    }
  };

  useEffect(() => {
    const fetchCounter = async () => {
      const res = await fetch("https://rms-backend-f9u6.onrender.com/api/counter", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();

      if (!data) {
        setCount(0);
        setMala(0);
      }

      setCount(data.count);
      setMala(data.mala);
      setCounters(data);
    };

    fetchCounter();
  }, []);

  return (
    <div className="bg-yellow-700 w-full h-full flex flex-col justify-around items-center text-yellow-900">
      <div>
        <h1 className="flex items-center gap-5 text-3xl font-medium">
          Today = '{mala}'
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <button
          className="px-6 py-3 h-150 w-100 bg-yellow-800 border border-black text-black rounded-lg "
          onClick={handleCounter}
        >
          {count}
        </button>
      </div>
    </div>
  );
}

export default Counter;
