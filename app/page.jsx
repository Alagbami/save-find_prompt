import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Share & Search On
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Save&Find Prompts</span>
    </h1>
    <p className='desc text-center'>
      Save&Find Prompts was initially created for everyone in Customer Value Management (CVM)
      at ACME campus to save, share, create, and discover more information useful for every agent.
    </p>

    <Feed />
  </section>
);

export default Home;