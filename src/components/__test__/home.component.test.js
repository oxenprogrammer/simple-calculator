import Enzyme, { shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import HomeComponent from "../home.component";
import toJson from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });

describe("Home Component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<HomeComponent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
