import Enzyme, { shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import QuoteComponent from "../quote.component";
import toJson from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });

describe("Quote Component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<QuoteComponent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
