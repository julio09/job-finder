import { Category, Feature, Footer, Header, Hero, InfoSection, Section, Testimonial, Sponsor, News } from './components';

function App() {
  return (
    <div className="App font-sans">
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
        <Sponsor />
        <News />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
