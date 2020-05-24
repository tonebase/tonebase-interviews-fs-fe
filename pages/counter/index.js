// ==============================
// IMPORTS
// ==============================

// === STORES ===
import { ModalStore, TabNavStore } from "../../stores";
import { view } from "react-easy-state";

// === PAGE WRAPPERS ===
import { withFrame } from "../../components/PageWrappers";

// === MODALS ===
import {
    UpgradeModal
} from "../../components/Modals";

// === CUSTOM ===
//
// 1. Molecules

import {
    Spacer
} from "../../components/Molecules/Layout";

import { TabNav, TabNavItem } from "../../components/Molecules/Navigation";

import CounterCard from "../../components/Molecules/Cards/Counter";

import { FullWidthCard } from "../../components/Molecules/Cards";

// 2. Organisms
import {
    Navbar,
    Sidebar,
    Tabbar
} from "../../components/Organisms/Frame";

// ==============================
// COMPONENT
// ==============================

class Counter extends React.Component {
    componentDidMount() {
        // === Update the current tab
        TabNavStore.switchToTab("counter");
    }

    //Opens upgrade modal AND shifts tab
    modalAndMenuOpener(callTab, callModal) {
        callTab()
        callModal()
    }

    render() {
        return (
            <div id="bodyWrapper" className="bodyWrapper">
                {
                    // === NAV BAR
                }
                <Navbar />
                {
                    // === SIDEBAR
                }
                <Sidebar />
                <div id="pageBody" className="pageBody">
                    {
                        // === MODALS
                    }
                    <UpgradeModal />
                    {
                        // === BODY CONTENT
                    }
                    <div
                        id="appWrapper"
                        className="appWrapper breakLg-paddingLeft-md breakLg-paddingRight-md"
                    >
                        <span className="hidden-lg hidden-xl">
                            <Spacer vertical space={24} />
                        </span>
                        <span className="hidden-xs hidden-sm hidden-md">
                            <Spacer vertical space={32} />
                        </span>
                        <PageTitle title="Counter" />
                        <TabNav>
                            <TabNavItem
                                first
                                active={TabNavStore.currentTab === "counter"}
                                onClick={() => TabNavStore.switchToTab("counter")}
                            >
                                Counter
                            </TabNavItem>
                            <TabNavItem
                                active={TabNavStore.currentTab === "upgrade"}
                                onClick={() => this.modalAndMenuOpener(
                                    () => TabNavStore.switchToTab("upgrade"),
                                    ModalStore.openModal("upgradeModal"))}
                            >
                                Go Premium
                            </TabNavItem>
                        </TabNav>
                        <Spacer vertical space={16} />
                        <div
                            id="lessonsContent"
                            className="tabContent paddingLeft-md paddingRight-md"
                        >
                            <FullWidthCard
                                hasImage
                                className="cardImage" imageURL="https://www.pianoarticlesweekly.com/wp-content/uploads/2019/04/Metronome-practice-photo.jpg"
                            >
                                <CounterCard />
                            </FullWidthCard>
                        </div>
                    </div>
                </div>
                <Tabbar />
            </div >
        );
    }
}

class PageTitle extends React.Component {
    render() {
        return (
            <div className="pageTitle pageContentItem paddingLeft-md paddingRight-md">
                <div
                    className="pageTitleInner w-100 paddingBottom-lg"
                    style={{ borderBottom: "1px solid #333" }}
                >
                    <h2 className="fontFamily-primary fontSize-xxl breakLg-fontSize-xxxl fontWeight-xl color-white--main textTransform-uppercase letterSpacing-md">
                        {this.props.title}
                    </h2>
                </div>
            </div>
        );
    }
}


export default withFrame(view(Counter));
