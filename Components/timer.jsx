import { useState, useEffect } from "react";
import Head from "next/head";

const Timer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const targetDate = new Date("2025-05-06T09:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((difference % (1000 * 60)) / 1000);

            setDays(d);
            setHours(h);
            setMinutes(m);
            setSeconds(s);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', margin: '0.5rem' }}>
            <Head>
                <title>Time until AS- you got this!</title>
            </Head>
            <div style={{ textAlign: 'center', padding: '0.5rem', margin: '0.5rem' }}>
                <h1 style={{ fontSize: '1.5rem' }}>Time until AS 1st subject-you got this!</h1>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    {days}d {hours}h {minutes}m {seconds}s
                </div>
            </div>
        </div>
    );
};

export default Timer;