import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component Testing", () => {
  it("renders Normal Weather react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Normal Weather/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("Render newWeather link", () => {
    render(<App />);
    const newWeatherLink = screen.getByText(/New Weather/i);
    expect(newWeatherLink).toBeInTheDocument();
  });

  it("Render finalWeather Link", () => {
    render(<App />);
    const finalWeatherLink = screen.getByText(/Styled WeatherApp/i);
    expect(finalWeatherLink).toBeInTheDocument();
  });

  it("Render Home Link", () => {
    render(<App />);
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();

    // after running your test on the command line, you should see the HTML output of your App component.
    // screen.debug();
  });
});

//  To check coverage put   this in package.json 's script -  "test:coverage": "react-scripts test --coverage"
//  then run -  npm test -- --coverage
