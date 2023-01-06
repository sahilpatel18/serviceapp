import React from 'react'
import ProfileCard from './ProfileCard'

const App = () => {

    return (
        <div>
            <div>Personal Digital
                <ProfileCard title="Alexa" handle="@alexa123" />
                <ProfileCard title="Jordan" handle="@jor23" />
                <ProfileCard title="Michael" handle="@mikelee12" />
                
            </div>
        </div>
    )
}

export default App