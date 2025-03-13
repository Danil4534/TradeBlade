import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import HowtoStart from "../components/HowToStartUse/HowtoStart";
import Numbers from "../components/Numbers/Numbers";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import Reviews from "../components/Reviews/Reviews";
import SliderComponent from "../components/Slider/SliderComponent";
import BoxStyle from "../components/StyledBox/BoxStyle";
import TradeBlade from "../components/TradeBlade/TadeBlade";

function Main() {
  return (
    <>
      <section>
        <Banner />
      </section>
      <section id="numbers">
        <BoxStyle
          bgColorForLeftItem="#fff"
          bgColorForRightItem="rgba(3, 7, 24, 1)"
        />
        <Numbers />
      </section>
      <section id="profit">
        <SliderComponent />
      </section>
      <section id="about">
        <BoxStyle
          bgColorForLeftItem="#fff"
          bgColorForRightItem="rgba(3, 7, 24, 1)"
        />
        <About />
      </section>
      <section>
        <TradeBlade />
      </section>
      <section id="howToUse">
        <BoxStyle
          bgColorForLeftItem="rgba(106, 84, 255, 1)"
          bgColorForRightItem="rgba(3, 7, 24, 1)"
        />
        <HowtoStart />
      </section>
      <section>
        <Reviews />
      </section>
      <section>
        <FAQ />
      </section>
      <section>
        <RegisterForm />
      </section>
      <Footer />
    </>
  );
}

export default Main;
