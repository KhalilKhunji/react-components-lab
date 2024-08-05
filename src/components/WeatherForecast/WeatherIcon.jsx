const WeatherIcon = ({forecast: {img, imgAlt}}) => {
    return(
        <img src={img} alt={imgAlt} />
    );
};

export default WeatherIcon;