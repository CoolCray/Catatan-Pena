// src/App.js
import Header from '../layout/header';
import Content from '../pages/content';
import Footer from '../layout/footer';


function home() {

  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default home;