import React from "react";
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "9044675a4f496b829976e52a9bba110a";

class App extends React.Component {

    state = {
        city: undefined,
        country: undefined,
        temperature:undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await API_CALL.json();

        if (city && country) {
//            console.log(data); //Classes need it I think

            this.setState({
                city: data.name,
                country: data.sys.country,
                temperature: data.main.temp,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            });
        } else {
            this.setState({
                city: undefined,
                country: undefined,
                temperature: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please don't be an asshole and enter the location."
            });
        }
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 title-container">
                                    <Titles/>
                                </div>

                                <div className="col-xs-7 form-container">
                                    <Form getWeather={this.getWeather}/>
                                    <Weather
                                        city={this.state.city}
                                        country={this.state.country}
                                        temperature={this.state.temperature}
                                        humidity={this.state.humidity}
                                        description={this.state.description}
                                        error={this.state.error}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;