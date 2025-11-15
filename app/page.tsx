const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="px-2 py-1 text-sm font-semibold">eCommerce</h2>
      <section className="grid grid-cols-4 gap-7">
        <div className="bg-primary-blue h-64 col-span-2"></div>
        <div className="bg-primary-purple h-64 col-span-2"></div>
        <div className="bg-primary-blue h-64 col-span-3"></div>
        <div className="bg-primary-purple h-64 col-span-1"></div>
        <div className="bg-primary-blue h-64 col-span-3"></div>
        <div className="bg-primary-purple h-64 col-span-1"></div>
      </section>
    </div>
  );
};

export default Home;
