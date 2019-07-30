// =============================
// =============================
// =============================
// IMPORTS
// =============================

// === 3RD PARTY ===
import axios from "axios";

// === STORES ===
import { view } from "react-easy-state";

// === HELPERS ===
import { createBaseDataURL } from "../../../../lib/helpers/data";

// === CUSTOM ===
import {
  ArtistCard,
  CollectionCard,
  ComposerCard,
  LessonCard
} from "../../Cards/Content";

// === DATA ===
import eightLessons from "../../../../lib/data/testing/eightLessons.json";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

class SectionContentWithFetchedData extends React.Component {
  state = {
    fetchingData: true,
    data: []
  };

  componentDidMount() {
    this.fetchData(this.props.dataURL);
  }

  fetchData = async (dataURL = "") => {
    console.log(">> Fetching data in SectionContentWithFetchedData");
    if (dataURL) {
      // Build the URL
      console.log("... Constructing dataURL");
      const finalDataURL = `${createBaseDataURL()}${dataURL}`;
      console.log("... final dataURL", finalDataURL);

      // Make the request
      const response = await axios.get(finalDataURL);
      const data = response && response.data;

      // Check for data
      if (data && data.length) {
        console.log("... Found data! =>", data);
        this.setState({
          fetchingData: false,
          data
        });
      }
    } else {
      console.log("... Did not find data =>", response);
      this.setState({
        fetchingData: false,
        data: []
      });
    }
  };

  render() {
    const { fetchingData = true, data = [] } = this.state;

    return (
      <div className="sectionContent w-100 min-w-100 d-flex flex-row flex-wrapAll">
        {data && data.length
          ? data.map(
              item =>
                !(
                  this.props.excludeSlug && this.props.excludeSlug === item.slug
                ) && (
                  <div
                    className={
                      this.props.wrapperClass ||
                      "col col-xs-6 col-md-4 col-lg-3"
                    }
                  >
                    {item.content_type === "artist" && (
                      <ArtistCard {...item} {...this.props} />
                    )}
                    {item.content_type === "composer" && (
                      <ComposerCard {...item} {...this.props} />
                    )}
                    {item.content_type === "course" && <span>Course</span>}
                    {item.content_type === "collection" && (
                      <CollectionCard {...item} {...this.props} />
                    )}
                    {item.content_type === "lesson" && (
                      <LessonCard {...item} {...this.props} />
                    )}
                  </div>
                )
            )
          : null}
        {data && (data.length === 1 && this.props.excludeSlug) && (
          <p className="color-black--text fontSize-sm breakMd-fontSize-md paddingLeft-xs">
            No items found!
          </p>
        )}
        {!this.props.dataURL && (
          <span>An error ocÿcurred => No dataURL passed</span>
        )}
        {!fetchingData && !data.length && (
          <span>No data was returned from the API</span>
        )}
      </div>
    );
  }
}

export default view(SectionContentWithFetchedData);
