// ==============================
// ==============================
// ==============================
// IMPORTS
// ==============================

// === CORE ===
import { Fragment } from "react";
import NextLink from "next/link";

// === STORES ===
import { ModalStore, TabNavStore } from "../../stores";
import { view } from "react-easy-state";

// === PAGE WRAPPERS ===
import { withFrame } from "../../components/PageWrappers";

// === HELPERS ===
import { addSpacesBetweenCapitalLetters } from "../../lib/helpers/strings";
// === HELPERS ===
import {
    getLessonDifficultyText,
    getLessonTypeText,
    getLessonTypeColorClass
} from "../../lib/helpers/content/lessons";

// === ASSETS ===
import {
    logoFull,
    logoMark,
    dashboard,
    explore,
    auth,
    upgrade,
    search,
    library,
    menu,
    artists,
    lessons,
    composers,
    collections,
    courses
} from "../../lib/assets/icons";

// === MODALS ===
import {
    AuthModal,
    MenuModal,
    ArtistProfileModal,
    ComposerProfileModal,
    CollectionProfileModal,
    LessonPreviewModal,
    UpgradeModal
} from "../../components/Modals";

// === CUSTOM ===
//
// 1. Molecules
import {
    Spacer,
    SectionTitle,
    SectionContentWithFetchedData
} from "../../components/Molecules/Layout";

import { TabNav, TabNavItem } from "../../components/Molecules/Navigation";

import { FullWidthCard } from "../../components/Molecules/Cards";

// 2. Organisms
import {
    Navbar,
    Tabbar,
    Sidebar,
    Bannerbar
} from "../../components/Organisms/Frame";

// === STYLING ===
import style from "./Counter.scss";

// ==============================
// ==============================
// ==============================
// COMPONENT
// ==============================

class Counter extends React.Component {
    componentDidMount() {
        // === Update the current tab
        TabNavStore.switchToTab("lessons");
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
                    <AuthModal />
                    <MenuModal />
                    <ArtistProfileModal />
                    <ComposerProfileModal />
                    <CollectionProfileModal />
                    <LessonPreviewModal />
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
                        <PageTitle title="Library" />
                        <TabNav>
                            <TabNavItem
                                first
                                active={TabNavStore.currentTab === "lessons"}
                                onClick={() => TabNavStore.switchToTab("lessons")}
                            >
                                Lessons
              </TabNavItem>
                            <TabNavItem
                                active={TabNavStore.currentTab === "courses"}
                                onClick={() => TabNavStore.switchToTab("courses")}
                            >
                                Courses
              </TabNavItem>
                            <TabNavItem
                                active={TabNavStore.currentTab === "artists"}
                                onClick={() => TabNavStore.switchToTab("artists")}
                            >
                                Artists
              </TabNavItem>
                            <TabNavItem
                                active={TabNavStore.currentTab === "collections"}
                                onClick={() => TabNavStore.switchToTab("collections")}
                            >
                                Collections
              </TabNavItem>
                            <TabNavItem
                                last
                                active={TabNavStore.currentTab === "composers"}
                                onClick={() => TabNavStore.switchToTab("composers")}
                            >
                                Composers
              </TabNavItem>
                        </TabNav>
                        <Spacer vertical space={16} />
                        <div
                            id="lessonsContent"
                            className="tabContent paddingLeft-md paddingRight-md"
                        >
                            <FullWidthCard
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
                            </FullWidthCard>
                            <Spacer vertical space={48} />
                            <SectionTitle title="Featured Lessons" />
                            <SectionContentWithFetchedData dataURL="/lessons/featured?limit=8&shuffle=true" />
                            <Spacer vertical space={48} />
                            <FullWidthCard
                                onClick={ModalStore.openModal("upgradeModal")}
                                hasImage
                                imageURL="/static/images/banners/lessons_large.png"
                            >
                                <div className="labelWrapper paddingRight-md">
                                    <h6 className="fontFamily-primary fontSize-sm color-primary--main textTransform-uppercase letterSpacing-md">
                                        Get Unlimited Access
                  </h6>
                                </div>
                                <div className="titleWrapper max-w-420px paddingBottom-xs paddingRight-md">
                                    <h4 className="fontFamily-primary fontSize-xxl fontWeight-xl color-white--main textTransform-uppercase letterSpacing-xs lineHeight-md">
                                        Unlock the Entire tonebase Library
                  </h4>
                                </div>
                                <div className="messageWrapper max-w-480px paddingRight-xl paddingBottom-lg">
                                    <p className="fontSize-sm breakMd-fontSize-md lineHeight-lg color-black--text">
                                        Get on-demand and unlimited access to all current and future
                                        tonebase lessons, courses, artists and more by starting your
                                        free trial of tonebase Premium.
                  </p>
                                </div>
                                <div className="actionTriggers w-100">
                                    <button className="actionButton d-flex flex-row alignItems-center justifyContent-center bgColor-primary--main fontSize-sm breakLg-fontSize-sm fontFamily-primary textTransform-uppercase letterSpacing-sm paddingRight-sm paddingLeft-sm paddingTop-xs paddingBottom-xs lineHeight-lg textAlign-center borderRadius-sm">
                                        <span className="buttonIcon d-inline-block paddingRight-xxs breakLg-paddingRight-xs">
                                            <svg
                                                className="upgradeSVG"
                                                viewBox="0 0 16 16"
                                                fill="#ffffff"
                                                dangerouslySetInnerHTML={{ __html: upgrade }}
                                            />
                                        </span>
                                        <span className="buttonText">Go Premium &rarr;</span>
                                    </button>
                                </div>
                            </FullWidthCard>
                            <Spacer vertical space={48} />
                            <SectionTitle title="Popular This Week" />
                            <SectionContentWithFetchedData dataURL="/lessons/popular?limit=8&shuffle=true" />
                        </div>
                    </div>
                </div>
                {
                    // === BANNER BAR
                }
                <Bannerbar />
                {
                    // === TAB BAR
                }
                <Tabbar />
                <style jsx>{style}</style>
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

class HeaderCard extends React.Component {
    render() {
        return (
            <div className="pageContentItem headerCard w-100">
                <section className="pageSection headerSection paddingLeft-md paddingRight-md">
                    <div className="headerCardPadding position-relative">
                        {
                            // === IMAGE/VIDEO CONTENT + BACKGROUND
                        }
                        <div className="cardInner position-absolute t-0 b-0 l-0 r-0">
                            <div className="cardVisualContent position-relative h-100 w-100vw">
                                <div className="cardBackgroundWrapper position-relative h-100">
                                    <div className="cardBackground position-absolute t-0 b-0 r-0 l-0 overflow-hidden">
                                        {/* Video Goes Here */}
                                    </div>
                                </div>
                                <div className="cardControls position-absolute z-1">
                                    <button className="videoToggle cursor-pointer padding-0 margin-0 bgColor-transparent noBorder d-block fontFamily-primary textTransform-uppercase letterSpacing-md">
                                        Pause
                  </button>
                                </div>
                            </div>
                        </div>
                        {
                            // === TEXT CONTENT
                        }
                        <div className="cardInner position-absolute t-0 b-0 l-0 r-0">
                            <div className="cardTextContent position-relative d-table w-100 h-100">
                                <div className="d-table-cell v-a-middle">
                                    <div className="position-relative marginLeft-auto marginRight-auto max-w-100 textAlign-left">
                                        <div className="labelWrapper paddingBottom-xxs paddingRight-md">
                                            <h6 className="fontFamily-primary fontSize-xs color-primary--main textTransform-uppercase letterSpacing-md">
                                                Preview Of tonebase
                      </h6>
                                        </div>
                                        <div className="messageWrapper">
                                            <p className="fontSize-sm breakMd-fontSize-md lineHeight-lg">
                                                Sign up to unlock three free lessons, yours from now
                                                till the internet ends!
                      </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <style jsx>{`
          /* SIZING */
          .headerCardPadding {
            padding-top: 120%;
          }
          .cardVisualContent {
            margin-left: -50vw;
            margin-right: -50vw;
            left: 50%;
            right: 50%;
          }

          /* BACKGROUND */

          /* CONTROLS */
          .cardControls {
            right: 16px;
            bottom: 16px;
          }
        `}</style>
            </div>
        );
    }
}

export default withFrame(view(Counter));
