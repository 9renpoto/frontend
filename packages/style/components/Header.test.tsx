import { h } from "preact";
import { render } from "preact-render-to-string";
import { Header } from "./Header";

describe("Header", () => {
  it("render", () => {
    const tree = render(<Header baseUrl="" titles={["hello"]} />);
    expect(tree).toMatchSnapshot();
  });
});
