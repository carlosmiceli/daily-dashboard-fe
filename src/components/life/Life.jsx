import * as React from 'react';
import Typography from '@mui/material/Typography';
import './styles.css';

const averageLifespan = 77;

export default function AverageDaysAlive() {
    const [daysAlive, setDaysAlive] = React.useState(0);

    React.useEffect(() => {
        const birthDate = new Date(1987, 0, 8);
        const currentDate = new Date();
        const ageInDays = (currentDate - birthDate) / (1000 * 60 * 60 * 24);
        const remainingDays = averageLifespan * 365 - ageInDays;
        setDaysAlive(Math.round(remainingDays));

        const intervalId = setInterval(() => {
            setDaysAlive((prevDaysAlive) => prevDaysAlive - 1);
        }, 86400000); // 1 day

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            <div className='daysAlive'>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                    You have approximately {daysAlive} days left to live.
                </Typography>
            </div>
        </div>
    );
}




