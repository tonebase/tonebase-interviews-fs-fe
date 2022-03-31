import "../../enzyme-setup";

import Home from ".";
import { HomeStore } from ".";
import { shallow } from "enzyme";

let wrapper = null;
describe("Home", () => {
  // After each test, reset HomeStore.count
  afterEach(() => {
    wrapper.unmount();
    HomeStore.count = 0;
  });

  it('should increment by 1 when "+" is clicked.', () => {
    wrapper = shallow(<Home />);

    expect(wrapper.find({ children: "+" })).toBeTruthy();
    wrapper.find({ children: "+" }).simulate("click");

    expect(wrapper.find("label").text()).toBe("1");
  });

  it('should decrement by 1 when "-" is clicked.', () => {
    wrapper = shallow(<Home />);

    expect(wrapper.find({ children: "-" })).toBeTruthy();
    wrapper.find({ children: "-" }).simulate("click");

    expect(wrapper.find("label").text()).toBe("-1");
  });

  // eight increments and fourteen decrements inclusive gives a final result of -6
  it("should increment or decrement depending on the given hour, and show -6 after 24 updates (hours)", () => {
    const home = new Home();

    for (let h = 0; h < 24; h++) {
      home.updateCount(h);
    }

    expect(HomeStore.count).toBe(-6);
  });

  it("should tick at the beginning of every hour", () => {
    const home = new Home();

    expect(HomeStore.count).toBe(0);

    let nineOClock = new Date(2022, 3, 14, 9, 0, 0);
    let midnight = new Date(2022, 3, 15, 0, 0, 0);

    home.tick(nineOClock);
    home.tick(midnight);

    expect(HomeStore.count).toBe(0);
  });
});
