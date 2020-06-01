function FormField({value, handleChange}){
  return (
    <>
    <input
      className="search-bar"
      type="text"
      value={value}
      onChange={e => handleChange(e.target.value)}
      onKeyDown={e => {
        if(value && e.key === 'Enter') window.location.href=`http://www.google.com/search?q=${value.replace(' ', '+')}`
      }} />

    <style jsx>{`
      .search-bar{
        border-style: hidden;
        outline: none;
        width: 80%;
        margin: 0.2rem;
        -webkit-tap-highlight-color: transparent;
        font-size: 16px;
        line-height: 80%;
        height: 80%;
      }
    `}</style>
    </>
  )
}

export default FormField
