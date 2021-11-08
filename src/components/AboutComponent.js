import React, { useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { Fade, Stagger } from 'react-animation-components';
import { Progress } from 'reactstrap';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { fetchLeaders } from '../redux/ActionCreators';
import { useSelector, useDispatch } from 'react-redux';

function LeaderList() {
    return (
        <section className="facts section-bg" data-aos="fade-up">
            <div className="container">
                <div className="row counters">
                    <div className="col-lg-3 col-6 text-center">
                        <span>
                            <CountUp end={500} duration={5} style={{ fontSize: 70 }} />
                        </span>
                        <p>Clients</p>
                    </div>
                    <div className="col-lg-3 col-6 text-center">
                        <span>
                            <CountUp end={5} duration={5} style={{ fontSize: 70 }} />
                        </span>
                        <p>Products</p>
                    </div>
                    <div className="col-lg-3 col-6 text-center">
                        <span>
                            <CountUp end={100} duration={5} style={{ fontSize: 70 }} />
                        </span>
                        <p>Hours Of Support</p>
                    </div>
                    <div className="col-lg-3 col-6 text-center">
                        <span>
                            <CountUp end={20} duration={5} style={{ fontSize: 70 }} />
                        </span>
                        <p>Hard Workers</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function About(props) {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
        dispatch(fetchLeaders());
    }, []);

    const leaders = useSelector(state => state.leaders);

    const dispatch = useDispatch();

    const leader = leaders.leaders.map((leader) => {

        if (leaders.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (leaders.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>{leaders.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else

            return (
                <Stagger in>
                    <div key={leader.id} className="col-12 mt-5">
                        <Fade in>
                            <Media tag="li">
                                <Media left middle>
                                    <Media object src={baseUrl + leader.image} alt={leader.name} />
                                </Media>
                                <Media body className="ml-5">
                                    <Media heading>{leader.name}</Media>
                                    <p>{leader.description}</p>
                                </Media>
                            </Media>
                        </Fade>
                    </div>
                </Stagger>
            );
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>NOVAMBL Asset Management is a wholly owned subsidiary of NOVA Merchant Bank Limited Holding Company. </p>
                    <p>Our value proposition has been well curated to proactively cater to our clients’ financial goals for enhancement, consolidation, and distribution of wealth through private wealth management, retail asset management, institutional asset management and private trust service platforms. </p>
                    <p>Ours is a twin-promise of efficiency and best-in-class service delivery leveraging exceptional investment management, investment advisory and financial planning services to individuals and corporate entities who entrust their assets to us. We seek to provide our clients with unrivaled investment performance across a wide range of asset classes through superior market insight, technical expertise and strong execution capabilities.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Our Core Values</CardHeader>
                        <CardBody>
                            <section className="skills" data-aos="fade-up">
                                <div className="container">
                                    <div>
                                        <Progress animated bar color="success" value="100" >
                                            Uniqueness 100%
                                        </Progress>
                                        <Progress animated bar color="info" value="100" >
                                            Passion 100%
                                        </Progress>
                                        <Progress animated bar color="warning" value="100" >
                                            Leadership 100%
                                        </Progress>
                                        <Progress animated bar color="danger" value="100" >
                                            Integrity 100%
                                        </Progress>
                                        <Progress animated bar color="primary" value="100" >
                                            Fairness 100%
                                        </Progress>
                                        <Progress animated bar color="secondary" value="100" >
                                            Teamwork 100%
                                        </Progress>
                                    </div>
                                </div>
                            </section>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-6">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">Our fresh perspectives, insights and collaborative approach enables our customers to identify and capitalise on new opportunities in order to win in the market place.</p>
                                <footer className="blockquote-footer">Phillips Oduoza,
                                <cite title="Source Title"> Chairman, 2021</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className="row row-content">
                <div className="col-12">
                    <h2 >Our Achievements</h2>
                </div>
                <LeaderList />
            </div>

            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <Media list> {leader} </Media>
            </div>
        </div>
    );
}

export default About;