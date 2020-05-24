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
                            <FullWidthCard >
                                <CounterCard />
                            </FullWidthCard>
                            {/* <FullWidthCard
                                onClick={ModalStore.openModal("composerProfileModal", {
                                    slug: "Brouwer"
                                })}
                                hasVideo
                                videoID="328027322"
                            >
                                <div className="labelWrapper paddingRight-md">
                                    <h6 className="fontFamily-primary fontSize-sm color-primary--main textTransform-uppercase letterSpacing-md">
                                        Lesson Of The Week
                  </h6>
                                </div>
                                <div className="titleWrapper max-w-420px paddingBottom-xs paddingRight-md">
                                    <h4 className="fontFamily-primary fontSize-xxl fontWeight-xl color-white--main textTransform-uppercase letterSpacing-xs lineHeight-md">
                                        Leo Brouwer Teaches Un Dia De Noviembre
                  </h4>
                                </div>
                                <div className="messageWrapper max-w-480px paddingRight-xl paddingBottom-lg">
                                    <p className="fontSize-sm breakMd-fontSize-md lineHeight-lg color-black--text">
                                        Legendary guitarist and composer Leo Brouwer shares the
                                        inspiration behind Un Dia De Noviembre and his overall
                                        approach to composing for film.
                  </p>
                                </div>
                                <div className="actionTriggers w-100">
                                    <button className="actionButton d-flex flex-row alignItems-center justifyContent-center bgColor-primary--main fontSize-sm breakLg-fontSize-sm fontFamily-primary textTransform-uppercase letterSpacing-sm paddingRight-sm paddingLeft-sm paddingTop-xs paddingBottom-xs lineHeight-lg textAlign-center borderRadius-sm">
                                        <span className="buttonText">Lesson Details &rarr;</span>
                                    </button>
                                </div>
                            </FullWidthCard> */}
                        </div>
                    </div>
                </div>
            </div>
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
                    <div className="titleText">
                        <h2 className="fontFamily-primary fontSize-xxl breakLg-fontSize-xxxl fontWeight-xl color-white--main textTransform-uppercase letterSpacing-md">
                            {this.props.title}
                        </h2>
                    </div>
                    {this.props.subtitle && (
                        <div className="subtitleText">
                            <p className="fontSize-sm breakMd-fontSize-md lineHeight-lg">
                                {this.props.subtitle}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}


export default withFrame(view(Counter));
