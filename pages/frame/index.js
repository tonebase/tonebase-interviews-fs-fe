// ==============================
// ==============================
// ==============================
// IMPORTS
// ==============================

// === CORE ===
import { Fragment } from 'react';
import NextLink from 'next/link';

// === STORES ===
import { ModalStore, TabNavStore } from '../../stores';
import { view } from 'react-easy-state';

// === PAGE WRAPPERS ===
import { withFrame } from '../../components/PageWrappers';

// === HELPERS ===
import { addSpacesBetweenCapitalLetters } from '../../lib/helpers/strings';
// === HELPERS ===
import {
  getLessonDifficultyText,
  getLessonTypeText,
  getLessonTypeColorClass,
} from '../../lib/helpers/content/lessons';

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
  courses,
} from '../../lib/assets/icons';

// === MODALS ===
import {
  AuthModal,
  MenuModal,
  ArtistProfileModal,
  ComposerProfileModal,
  CollectionProfileModal,
  LessonPreviewModal,
  UpgradeModal,
} from '../../components/Modals';

// === CUSTOM ===
//
// 1. Molecules
import {
  Spacer,
  SectionTitle,
  SectionContentWithFetchedData,
} from '../../components/Molecules/Layout';

import { TabNav, TabNavItem } from '../../components/Molecules/Navigation';

import { FullWidthCard } from '../../components/Molecules/Cards';

// 2. Organisms
import {
  Navbar,
  Tabbar,
  Sidebar,
  Bannerbar,
} from '../../components/Organisms/Frame';

// === STYLING ===
import style from './Frame.scss';

// ==============================
// ==============================
// ==============================
// COMPONENT
// ==============================

class Frame extends React.Component {
  render() {
    return (
      <div id='bodyWrapper' className='bodyWrapper'>
        <Counter />
        <style jsx>{style}</style>
      </div>
    );
  }
}

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      start: Date.now(),
      cancel: null,
    };
    this.autoUpdateTime = this.autoUpdateTime.bind(this);
    this.manualUpdateTime = this.manualUpdateTime.bind(this);
  }

  autoUpdateTime() {
    let hours = new Date().getHours;
    if (hours > 9 && hours <= 17) {
      this.setState({ value: ++value });
    } else {
      this.setState({ value: --value });
    }
  }

  manualUpdateTime(factor) {
    this.setState({ value: value + factor });
  }

  componentDidMount() {
    // create a timer to check every second if an hour has gone by
    let cancel = setInterval(() => {
      // 3.6e6 ms === 1 hour
      if (Date.now() - this.state.start > 3.6e6) {
        this.autoUpdateTime();
      } else if (Date.now() - this.state.start > 3.6e4) {
        console.log('wait a second, will ya');
      }
    }, 1000);
    this.setState({ cancel: cancel });
  }

  componentWillUnmount() {
    clearInterval(this.state.cancel);
  }

  render() {
    return <>{this.state.value}</>;
  }
}

export default withFrame(view(Frame));
