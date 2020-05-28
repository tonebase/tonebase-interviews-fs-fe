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

    /* Render our Home Page */
    return (
        <div id='bodyWrapper' className='bodyWrapper'>
            <div id='pageBody' className='pageBody alignItems-center'>
                <Navbar />
                <div className='appWrapper'>
                    <h1 className='search-header'>Google</h1>
                    <SearchBar className='search-input' />
                    <h2 className='search-subtitle fontWeight-lg paddingTop-md marginTop-xl z-0'>Google, but for Spotify.</h2>
                    <h2 className='search-subtitle fontWeight-lg z-0'>Search for artists and visit their Spotify page.</h2>
                </div>
            </div>
            {
                // Custom CSS  
            }
            <style jsx>{`
            .search-header{
                 font-size: 5rem;
                 color: rgb(100, 201, 100);
            }
            .search-subtitle{
                color: rgb(100, 201, 100);
            }
            `}</style>
        </div>
    );
};
export default withFrame(view(Home));