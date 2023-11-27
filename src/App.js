import {Header,Hero,InfoSection,Section,Category,Feature,Testimonial,Footer} from './components'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Hero />
        <InfoSection />
        <Section />
        <Category />
        <Feature />
        <Testimonial />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
