import ReactGA from "react-ga";

const myGa = () => {
    const GA_ID = "G-0MRX6B8JY1";
    ReactGA.initialize(GA_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
};

export default myGa;
