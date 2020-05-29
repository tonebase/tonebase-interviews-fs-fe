import {
    Navbar,
    Tabbar,
    Sidebar,
    Bannerbar
} from "../components/Organisms/Frame";
import { view } from "react-easy-state";
import { withFrame } from "../components/PageWrappers"
import Counter from "../components/Counter/Counter"

class Index extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Tabbar />,
                <Sidebar />,
                <Bannerbar />
                <Counter />
            </React.Fragment >);
    }
}

export default withFrame(view(Index))
