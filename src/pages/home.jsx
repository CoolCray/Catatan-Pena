// src/App.js
import Header from '../layout/header';
import Content from '../pages/content';
import Footer from '../layout/footer';


function home() {

  return (
    <div className='w-screen h-screen flex flex-col'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default home;