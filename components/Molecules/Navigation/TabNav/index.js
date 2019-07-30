// ==============================
// ==============================
// ==============================
// COMPONENT
// ==============================

function TabNav(props) {
  return (
    <div className="tabNav pageContentItem w-100 d-flex alignItems-center justifyContent-start overflowX-scroll breakMd-overflow-hidden paddingTop-md paddingBottom-md">
      {props.children}
      <style jsx>{`
        .tabNav::-webkit-scrollbar,
        .tabNav::-webkit-scrollbar-track,
        .tabNav::-webkit-scrollbar-thumb {
          display: none !important;
        }
      `}</style>
    </div>
  );
}

export default TabNav;
