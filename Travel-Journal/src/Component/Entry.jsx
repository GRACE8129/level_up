import PropTypes from "prop-types"

function Entry(props) {
  return(
    <main>
    <div className="country-image-container">
        <img src={props.img.src} alt={props.img.alt} className="country-image" />
      </div>
      <div className="about">
        <div className="google-location">
          <img src="src/images/Marker.png" alt="location" className="country-location" />
          <p className="country">{props.country}</p>
          <a href="https://www.google.com/search?q=mount+fuji+location&sca_esv=98651d259623c413&sxsrf=AHTn8zpOHwBS6DpB6FWZhWnJvrn0Zli_
          // vw%3A1738588019423&ei=c7-gZ9TEGeawhbIPm7vn4Ag&gs_ssp=eJzj4tDP1TdIzi42MGD0Es7NL80rUUgrzcpUyMlPTizJzM8DAJryCoc&oq=mount+fuji+&gs_
          // lp=Egxnd3Mtd2l6LXNlcnAiC21vdW50IGZ1amkgKgIIADIKEC4YgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIFEAAYgAQyBRAAGIAEMgoQABiABBgUGIcC
          // MgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEjAGlCcBlicBnABeAGQAQCYAcABoAHAAaoBAzAuMbgBAcgBAPgBAZgCAqAC3gHCAgoQABiwAxjWBBhHwgINEAAYgAQY
          // sAMYQxiKBZgDAIgGAZAGDJIHAzEuMaAHhQg&sclient=gws-wiz-serp#eim=CAEQCxoSMzUuMzYwNjI1NTAwMDAwMDA1IgsxMzguNzI3MzYzNA" className="google">View On Google Maps</a>
        </div>
        <div className="about-location">
          <h1 className="location">{props.location}</h1>
          <h2 className="date">{props.date}</h2>
          <p className="write">{props.writeup}</p>
        </div>
      </div>
    </main>
  )
}



// Entry.PropTypes = {
//   img: PropTypes.string,
//   country:PropTypes.string,
//   location:PropTypes.string,
//   date: PropTypes.number,
//   writeup:PropTypes.string,
// }

export default Entry;