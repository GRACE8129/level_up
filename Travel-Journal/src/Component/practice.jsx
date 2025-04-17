import Jokes from "./jokes";


function Turtles() {
    const JokeElement = Jokes.map((joke, i) => {
      return <Joke 
                setup={joke.setup}
                punchline={joke.punchline}
                key={i}
              />
    })


  return (
    <main>
      {JokeElement}
    </main>
  )
}

function Joke(props) {
  return (
    <>
      <h1>{props.setup}</h1>
      <p>{props.punchline}</p>
    </>
  )
}




export default Turtles;