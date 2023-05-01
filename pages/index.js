import Header from '../components/header';
import Carousel from '../components/carousel'
import Main from '../components/main';
import Features from '../components/features';
import Details from '../components/details';
import Statistics from '../components/statistics';
import Comments from '../components/comments';
import Price from '../components/price';
import Conclusion from '../components/conclusion';
import Footer from '../components/footer';
// import Career from '../components/career';
export default function Home() {
  return (
    <>
      <Header />
      
      <Carousel />
      <Main />
      <Features />
      <Details />
      {/* <Statistics /> */}
      <Comments />
      <Price />
      {/* <Conclusion /> */}
      <Footer />
      {/* <Career/> */}
    </>
  );
}
