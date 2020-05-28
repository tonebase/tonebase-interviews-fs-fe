/* Import useEffect */
import { useEffect } from 'react';

/* Import Store */
import { view } from "react-easy-state";
import { SearchStore } from '../../stores';

/* Import Organisms & PageWrapper to speed up development */
import { SearchBar } from '../../components/Organisms/Frame';
import { Navbar } from '../../components/Organisms/Frame';
import { withFrame } from '../../components/PageWrappers';

/* Our 'Home' page: Renders our Navbar organism (which I edited to fit with this page) and our Search organism */
function Home() {

    /* On mount, fetch an access token for the Spotify Api */
    useEffect(() => {
        SearchStore.getToken();
    })
    return (
        <div id='bodyWrapper' className='bodyWrapper'>
            <div id='pageBody' className='pageBody alignItems-center'>
                <Navbar />
                <div className='appWrapper'>
                    <h1>Google</h1>
                    <SearchBar className='search-input' />
                    <h2 className='paddingTop-md marginTop-xxl z-0'>Google, but for Spotify.</h2>
                </div>
            </div>
        </div>
    );
};
export default withFrame(view(Home));