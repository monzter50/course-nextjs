function Home() {
  return(
    <div>
      <h1 className="holo">Welcome to Next.js!</h1>  
      <style jsx>{`
h1 {
  color: white;
}
  div {
    background: blue;
  }
`}</style>
<style global jsx>{`
    body {
      background: red;
    }
`}</style>
    </div>
  ) 
}

export default Home
