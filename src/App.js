import React from 'react'
import ProfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

console.log(AlexaImage)

const App = () => {
    return (
        <div>
            <div>Personal Digital
                <ProfileCard image={AlexaImage} title="Alexa" handle="@alexa123" />
                <ProfileCard image={CortanaImage} title="Cortana" handle="@cortana123" />
                <ProfileCard image={SiriImage} title="Siri" handle="@siri123" />
                
            </div>
        </div>
    )
}

export default App