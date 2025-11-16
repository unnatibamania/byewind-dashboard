import { StatCard } from '@/components/dashboard/stat-card';

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="px-2 py-1 text-sm font-semibold">eCommerce</h2>
      <section className="grid md:grid-cols-4 gap-3 md:gap-7">
        <div className="md:col-span-2 grid grid-cols-2 gap-3 md:gap-7">
          <StatCard
            title="Customers"
            value={3781}
            delta={11.01}
            background="primary-blue"
            format="number"
          />
          <StatCard
            title="Orders"
            value={1219}
            delta={-0.03}
            background="primary-light"
            format="number"
          />
          <StatCard
            title="Revenue"
            value={695}
            delta={11.01}
            background="primary-light"
            format="currency"
          />
          <StatCard
            title="Growth"
            value={30.1}
            delta={6.08}
            background="primary-purple"
            format="percentage"
          />
        </div>
        <div className="bg-primary-light rounded-2xl h-full md:col-span-2"></div>
        <div className="bg-primary-light rounded-2xl h-64 md:col-span-3"></div>
        <div className="bg-primary-light rounded-2xl h-64 md:col-span-1"></div>
        <div className="bg-primary-light rounded-2xl h-64 md:col-span-3"></div>
        <div className="bg-primary-light rounded-2xl h-64 md:col-span-1"></div>
      </section>
    </div>
  );
};

export default Home;
