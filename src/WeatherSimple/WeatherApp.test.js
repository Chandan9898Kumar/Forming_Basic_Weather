import { render, screen,cleanup, fireEvent } from "@testing-library/react";
import WeatherApp from "./WeatherApp";

afterEach(cleanup);
describe("Render Weather App Component", () => {
  it("should render text", () => {
    render(<WeatherApp />);
    const text = screen.getByText(/Weather App/i);
    expect(text).toBeInTheDocument();
    screen.debug()
  });

it('should hit on input filed',()=>{
   render(<WeatherApp />)
   const fireText = screen.getByTestId("inputField");
   // Here we tested input field by triggering event.
   fireEvent.change(fireText, { target: { value: 'data'} })
    
})

});
