// =============================
// =============================
// =============================
// IMPORTS
// =============================

// === CORE ===
import { Fragment } from "react";

// === 3RD PARTY ===
import axios from "axios";

// === HELPERS ===
import { createBaseDataURL } from "../../lib/helpers/data";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

class NarrowGetter extends React.Component {
  state = {
    data: "",
    error: false
  };

  async componentDidMount() {
    await this.fetchData(
      this.props.type || "",
      this.props.slug || "",
      this.props.property || ""
    );
  }

  fetchData = async (type, slug, property) => {
    console.log(">> Fetch data in narrow getter =>", type, slug, property);
    if (type && slug && property) {
      console.log("... Found valid properties for narrow GET");

      const baseDataURL = createBaseDataURL();
      const dataURL = `${baseDataURL}/${type}s/narrow?slug=${slug}&property=${property}`;
      console.log("... Constructed dataURL in narrow GET =>", dataURL);

      const response = await axios.get(dataURL);
      const data = response && response.data ? response.data : null;
      console.log("... Received data in narrow GET =>", data);

      if (data) {
        console.log("... Setting narrow data in state");
        this.setState({
          data,
          error: false
        });
      } else {
        console.log(
          "... Error occured getting narrow data, API request failed"
        );
        this.setState({
          data: null,
          error: "Could not find data from API. Error #no_data_returned"
        });
      }
    } else {
      console.log(
        "... Error occured getting narrow data => One or more props is missing"
      );
      this.setState({
        data: null,
        error: "Could not find the informaton. Error #invalid_props_passed"
      });
    }
  };

  render() {
    const { data = null } = this.state;
    return <Fragment>{data || null}</Fragment>;
  }
}

export default NarrowGetter;
