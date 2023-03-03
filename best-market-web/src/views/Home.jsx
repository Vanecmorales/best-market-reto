import Nav from "../components/Nav";
import FreeShipping from "../components/FreeShipping";
import Categories from "../components/Categories";
import Promotions from "../components/Promotions";
import Search from "../components/Search";
import Products from "../components/Products";
import Footer from "../components/Footer";



const Home = () => {
  return (
    <div className="homeContainer">
      <Nav />
      <FreeShipping />
      <div className="optionsHomeContainer">
        <section className="filtersContainer">
          <Categories />
          <Promotions />
        </section>
        <section className="searchContainer">
          <Search />
        </section>
      </div>
      <section className="productsListContainer">
        <Products/>
      </section>
      <footer className="footerContainer">
        <Footer/>
      </footer>
    </div>
  );
};

export default Home;
