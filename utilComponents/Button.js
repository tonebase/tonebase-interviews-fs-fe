function Button({label, icon, query, labels, setLuckyLabel}){
  const buttonType = icon ? "icon-button" : "button"
  const buttonContent = icon ? <img className="icon" height={20} width={20} src="../static/icons/search.png"/> : label
  return (
    <>
    <button
      type="button"
      className={buttonType}
      onClick={e => {
        if(query && !labels) window.location.href=`http://www.google.com/search?q=${query.replace(' ', '+')}`
        else if(label === 'Piano' || label === 'Guitar')window.location.href=`https://www.tonebase.co/${label.toLowerCase()}`
      }}
      onMouseOver={e => {
        if(!labels) return
        const i = Math.round(Math.random())
        setLuckyLabel(labels[i])
      }}
      onMouseLeave={e => {
        if(!labels) return
        setLuckyLabel("I'm Feeling Lucky")
      }}>
        {buttonContent}
    </button>
    <style jsx>{`
      .button{
        background-image: -webkit-linear-gradient(top,#f5f5f5,#f1f1f1);
        background-color: #f2f2f2;
        border: 1px solid #f2f2f2;
        border-radius: 4px;
        color: #5F6368;
        font-family: arial,sans-serif;
        font-size: 14px;
        margin: 11px 4px;
        padding: 0 16px;
        line-height: 27px;
        height: 36px;
        min-width: 150px;
        text-align: center;
        cursor: pointer;
        user-select: none;
      }
      .icon-button{
        border: none;
        padding: 0;
        background-color: white;
        cursor: pointer;
      }

      .button:hover{
        box-shadow: 0 1px 1px rgba(0,0,0,0.1);
        background-image: -webkit-linear-gradient(top,#f8f8f8,#f1f1f1);
        background-color: #f8f8f8;
        border: 1px solid #c6c6c6;
        color: #222;
      }
    `}</style>
    </>
  )
}

export default Button
