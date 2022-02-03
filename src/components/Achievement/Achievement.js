import React, { useContext} from 'react';

import './Achievement.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { AchievementData } from '../../data/AchievementData'
import AchievementCard from './AchievementCard';

function Achievement() {

    const { theme } = useContext(ThemeContext);
    return (
        <>
            {AchievementData.achievements.length > 0 && (
                <div className="achievement" id="achievement" style={{backgroundColor: theme.secondary}}>
                <div className="achievement-body">
                    <h1 style={{color: theme.primary}}>Achievements</h1>
                    <h4 style={{color:theme.tertiary}}>{AchievementData.bio}</h4>
                </div>
                <div className="achievement-cards">
                    {AchievementData.achievements.map(achieve => ( 
                        <AchievementCard 
                        key={achieve.id}
                        id={achieve.id}
                        title={achieve.title}
                        details={achieve.details}
                        date={achieve.date}
                        field={achieve.field}
                        image={achieve.image}/>
                    ))}
                </div>
            </div>
            )}
        </>
    )
}

export default Achievement