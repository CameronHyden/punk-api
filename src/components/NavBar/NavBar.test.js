import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from "./NavBar";

it("should match NavBar component snapshot", () => {
  const { container } = render(<NavBar />);

  expect(container).toMatchSnapshot();
});
