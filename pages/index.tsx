import { Layout, Hero, Services, App, FAQs, Contact, Reviews } from "@components";

const Home = () => {
  return (
      <Layout title="Get your everyday work done">
        <Hero />
        <Services />
        <App />
        <FAQs />
        <Contact />
        <Reviews />
      </Layout>
  )
}

export default Home