import React from "react";
import { render } from "@testing-library/react";

import { Badge } from "./Badge";

interface TestBadgeProps {
  status: "success" | "primary" | "danger" | "warning" | "default";
};

describe("Badge Component", () => {

  let props: TestBadgeProps;

  beforeEach(() => {
    props = {
      status: "default"
    };
  });

  const renderComponent = () => render(<Badge {...props} />);

  it("should have default className with default props", () => {
    const { getByTestId } = renderComponent();

    const badgeComponent = getByTestId("badge__component");

    expect(badgeComponent).toHaveClass("lp-badge--default");
  });

  it("should have secondary className with theme set as secondary", () => {
    props.status = "warning";

    const { getByTestId } = renderComponent();

    const badgeComponent = getByTestId("badge__component");

    expect(badgeComponent).toHaveClass("lp-badge--warning");
  });

});
