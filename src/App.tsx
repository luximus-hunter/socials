import Center from './components/Center';
import Footer from './components/Footer';
import Header from './components/Header';
import SocialCards from './components/SocialCards';

function App(): JSX.Element {
  return (
    <div className='App'>
      <Center>
        <Header />
        <SocialCards />
        <Footer />
      </Center>
    </div>
  );
}

export default App;
