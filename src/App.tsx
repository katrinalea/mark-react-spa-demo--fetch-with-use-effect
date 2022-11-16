import { useEffect, useState } from "react";

interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}
interface Kanye {
  quote: string;
}

function App() {
  const [joke, setJoke] = useState<Joke>();
  const [kanyeQuote, setKanyeQuote] = useState<Kanye>();

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch(
        "https://jokestemp.neillbogie.repl.co/jokes/general/random"
      );
      const jsonBody: Joke[] = await response.json();
      setJoke(jsonBody[0]);
    };
    fetchJoke(); 

  }, []);

  useEffect(() => {
    const fetchKanye = async () => {
      const kanyeResponse = await fetch(
        "https://api.kanye.rest/"
      );
      const kanyeBody: Kanye[] = await kanyeResponse.json();
      console.log(kanyeBody)
      setKanyeQuote(kanyeBody[0]);
    };
    fetchKanye();
    
    fetchKanye();}, [])
  

  // useEffect(() => {
  //   fetch("https://jokestemp.neillbogie.repl.co/jokes/general/random")
  //     .then(response => response.json())
  //     .then((jsonBody: Joke[]) => setJoke(jsonBody[0]));
  // }, [])

  return (
    <>
      <h1>Joke app</h1>
      {joke && (
        // This is a conditional rendering strategy
        //  using 'short-circuiting': if the left-hand
        //  side of an && is false, then JavaScript
        //  doesn't bother to evaluate the right-hand
        //  side (since the overall expression is false
        //  regardless)
        //
        // Exploiting that feature to conditional render JSX!
        <>
          <p>
            <b>{joke.setup}</b>
          </p>
          <p>
            <i>{joke.punchline}</i>
          </p>
        </>
        
      )}
      <>
      <h1> Kanye Quote</h1>
      {kanyeQuote && ( 
        <>
        <p>{kanyeQuote.quote}</p>
        </>
      )} 
      </>
    </>
    
  );
}

export default App;
