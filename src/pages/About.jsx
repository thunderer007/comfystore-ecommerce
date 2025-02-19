const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content tracking-widest text-4xl font-bold">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 mx-auto max-w-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique
        animi quis ipsum iure inventore mollitia culpa, cum accusamus iste.
      </p>
    </>
  );
};

export default About;
