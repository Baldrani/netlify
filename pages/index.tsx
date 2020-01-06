import Layout from "../components/Layout";

const Home = ({ userAgent }) => <Layout><h1>Hello world! - user agent: {userAgent}</h1></Layout>;

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
};

export default Home;
