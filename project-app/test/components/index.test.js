import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from "../test-utils";

import Footer from "../../components/Footer";

describe("footer", () => {
  it("should render footer", () => {
    render(<Footer/>);

    const heading = screen.getByText(
        "Built by the Environment Variables"
    );

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(heading).toBeInTheDocument();
  });
});