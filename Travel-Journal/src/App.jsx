import Header from "./Component/header.jsx";
import Entry  from "./Component/Entry.jsx";
import Turtles from "./Component/practice.jsx";

function App() {
  return (
    <>
      <Header />
      <Entry 
      img={{
        src:"src/images/japan.webp",
        alt: "country image"
      }}
      country="Japan"
      location="Mount Fuji"
      date="12 Jan,2021 - 24 Jan, 2021"
      writeup={`Mount Fuji is the tallest mountain in japan, standing at 3,776 meters(12,380 feet).
            Mount Fuji is the single most popular tourist site in japan, for both japanese and foreign tourists.`}
      />

      <Entry
      img={{
        src:"src/images/Australia.webp",
        alt: "country image"
      }}
       country="AUSTRALIA"
       location="Sydney Opera House"
       date="27 May,2021 - 8 Jun, 2021"
       writeup={`The Sydney Opera House is a multi-venue performing arts center in Sydney.
       located on the banks of the Sydney Harbour, it is often regarded as one of the 20th 
       century's most famous and distinctive buildings`}
      />

      <Entry
      img={{
        src:"src/images/Norway.webp",
        alt: "country image"
      }}
      country="NORWAY"
      location="Geirangerfjord"
      date="01 Oct,2021 - 18 Nov, 2021"
      writeup={`The Geiranger Fjord is is a multi-venue performing arts center in Sydney.
       located on the banks of the Sydney Harbour, it is often regarded as one of the 20th 
       century's most famous and distinctive buildings`}
      />


      <Turtles />

    </>
  );
}

export default App;
