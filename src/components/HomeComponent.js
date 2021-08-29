import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import { FadeTransform } from 'react-animation-components';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import { Link } from 'react-router-dom';
import Hero from "./hero";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { fetchEtf, fetchNdf, fetchNmmf } from '../redux/ActionCreators';
import { useSelector, useDispatch } from 'react-redux';

function Home(props) {

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
    dispatch(fetchEtf());
    dispatch(fetchNdf());
    dispatch(fetchNmmf());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const etf = useSelector(state => state.etf);
  const ndf = useSelector(state => state.ndf);
  const nmmf = useSelector(state => state.nmmf);

  const dispatch = useDispatch();

  const RenderEtfCard = ({ item }) => {

    if (item.isLoading) {
      return (
        <Loading />
      );
    }
    else if (item.errMess) {
      return (
        <h4>{item.errMess}</h4>
      );
    }
    else

      return (
        <FadeTransform in transformProps={{ exitTransform: 'scale(0.5) translateY(-50%)' }}>
          <Card>
            <Card.Img src={baseUrl + item.image} alt={item.name} />
            <Card.Body className="text-center">
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{`${item.description.substring(0, 75)}......`}</Card.Text>

              <Link to={`/etf`}>
                <div style={{ justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: 20, }}>
                  <button className="btn btn-md btn-info" style={{
                    width: 250,
                    backgroundColor: "#4682B4",
                    padding: 15,
                    justifyContent: "center",
                    marginBottom: 20,
                    borderRadius: 24,
                  }}>
                    Read More
                </button>
                </div>
              </Link>

            </Card.Body>
          </Card>

        </FadeTransform>
      );
  }

  const RenderNdfCard = ({ item, isLoading, errMess }) => {

    if (item.isLoading) {
      return (
        <Loading />
      );
    }
    else if (item.errMess) {
      return (
        <h4>{item.errMess}</h4>
      );
    }
    else

      return (
        <FadeTransform in transformProps={{ exitTransform: 'scale(0.5) translateY(-50%)' }}>
          <Card>
            <Card.Img src={baseUrl + item.image} alt={item.name} />
            <Card.Body className="text-center">
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{`${item.description.substring(0, 75)}......`}</Card.Text>

              <Link to={`/ndf`}>
                <div style={{ justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: 20, }}>
                  <button className="btn btn-md btn-info" style={{
                    width: 250,
                    backgroundColor: "#4682B4",
                    padding: 15,
                    justifyContent: "center",
                    marginBottom: 20,
                    borderRadius: 24,
                  }}>
                    Read More
                </button>
                </div>
              </Link>

            </Card.Body>
          </Card>

        </FadeTransform>
      );
  }

  const RenderNmmfCard = ({ item }) => {

    if (item.isLoading) {
      return (
        <Loading />
      );
    }
    else if (item.errMess) {
      return (
        <h4>{item.errMess}</h4>
      );
    }
    else

      return (
        <FadeTransform in transformProps={{ exitTransform: 'scale(0.5) translateY(-50%)' }}>
          <Card>
            <Card.Img src={baseUrl + item.image} alt={item.name} />
            <Card.Body className="text-center">
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{`${item.description.substring(0, 75)}......`}</Card.Text>

              <Link to={`/nmmf`}>
                <div style={{ justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: 20, }}>
                  <button className="btn btn-md btn-info" style={{
                    width: 250,
                    backgroundColor: "#4682B4",
                    padding: 15,
                    justifyContent: "center",
                    marginBottom: 20,
                    borderRadius: 24,
                  }}>
                    Read More
                </button>
                </div>
              </Link>

            </Card.Body>
          </Card>

        </FadeTransform>
      );
  }

  const Features = () => {
    return (
      <section className="features">
        <div className="container">

          <div className="section-title" style={{ paddingBottom: 50 }}>
            <h2>Features</h2>
            <p>Our investment management expertise is brought to bear in catering to the spectrum of needs of our clientele comprising individuals, corporates (private and public), co-operative societies, religious institutions, non-governmental organizations through the following services and multi-currency denominated products.</p>
          </div>

          <div className="row" data-aos="fade-up" style={{ paddingBottom: 30 }}>
            <div className="col-md-5">
              <img src="assets/images/features-1.svg" class="img-fluid" alt="" />
            </div>
            <div className="col-md-7 pt-4">
              <h3>Services</h3>
              <p className="fst-italic">
                Our Services
            </p>
              <ul>
                <li><i className="bi bi-check"></i> Wealth Management (private, retail and institutional)</li>
                <li><i className="bi bi-check"></i> Private Trust</li>
                <li><i className="bi bi-check"></i> Stockbroking</li>
                <li><i className="bi bi-check"></i> Comprehensive financial planning</li>
                <li><i className="bi bi-check"></i> Stockbroking</li>
              </ul>
            </div>
          </div>

          <div className="row" data-aos="fade-up" style={{ paddingBottom: 30 }}>
            <div className="col-md-5 order-1 order-md-2">
              <img src="assets/images/features-2.svg" className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1">
              <h3>Products</h3>
              <p className="fst-italic">
                Our Products
            </p>
              <ul>
                <li><i className="bi bi-check"></i> Mutual funds</li>
                <li><i className="bi bi-check"></i> Money market and Fixed investments</li>
                <li><i className="bi bi-check"></i> Structured products</li>
              </ul>
            </div>
          </div>

          <div className="row" data-aos="fade-up" style={{ paddingBottom: 30 }}>
            <div className="col-md-5">
              <img src="assets/images/features-3.svg" class="img-fluid" alt="" />
            </div>
            <div className="col-md-7 pt-5">
              <h3>Ancillary Services</h3>
              <p>Our Ancillary Services</p>
              <ul>
                <li><i className="bi bi-check"></i> Endowment fund management and administration</li>
                <li><i className="bi bi-check"></i> Employee saving schemes</li>
                <li><i className="bi bi-check"></i> Asset replacement</li>
                <li><i className="bi bi-check"></i> Specialized investment plan</li>
              </ul>
            </div>
          </div>

          <div className="row" data-aos="fade-up" style={{ paddingBottom: 30 }}>
            <div className="col-md-5 order-1 order-md-2">
              <img src="assets/images/features-4.svg" className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1">
              <h3>Promise</h3>
              <p className="fst-italic">
                Our Promise
            </p>
              <ul>
                <li><i className="bi bi-check"></i> We will provide consistent, convenient and straight-through product and services across all our touch points</li>
                <li><i className="bi bi-check"></i> We recognize the uniqueness of our customers and will serve them in the manner they prefer</li>
                <li><i className="bi bi-check"></i> We will uphold the highest levels of integrity, confidentiality and transparency at all times</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const Etf = etf.etf.map((etf) => {

    return (
      <div key={etf._id} className="col-12 col-md-4 ">
        <RenderEtfCard item={etf} />
        <p></p>
      </div>
    );
  });

  const Ndf = ndf.ndf.map((ndf) => {

    return (
      <div key={ndf._id} className="col-12 col-md-4 ">
        <RenderNdfCard item={ndf} />
        <p></p>
      </div>
    );
  });

  const Nmmf = nmmf.nmmf.map((nmmf) => {

    return (
      <div key={nmmf._id} className="col-12 col-md-4 ">
        <RenderNmmfCard item={nmmf} />
        <p></p>
      </div>
    );
  });

  return (
    <div className="container">
      <p></p>
      <Hero />
      <p></p>
      <p></p>
      <p></p>
      <div className="row align-items-start">
        {Ndf}
        {Nmmf}
        {Etf}
      </div>
      <p></p>
      <p></p>
      <p></p>
      <Features />
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
}

export default Home;