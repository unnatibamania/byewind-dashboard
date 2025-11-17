import { StatCard } from '@/components/dashboard/stat-card';
import { ProjectionChart } from '@/components/dashboard/projection-chart';
import { RevenueChart } from '@/components/dashboard/revenue-chart';
import { RevenueByLocation } from '@/components/dashboard/revenue-by-location';
import { TopSellingProductsTable } from '@/components/dashboard/top-selling-products-table';
import { TotalSalesChart } from '@/components/dashboard/total-sales-chart';

const Home = () => {
  return (
    <div className="flex flex-col gap-4 h-full">
      <h2 className="px-2 py-1 text-sm font-semibold">eCommerce</h2>
      <section className="grid xl:grid-cols-4 gap-3 xl:gap-7">
        <div className="xl:col-span-2 grid grid-cols-2 gap-3 xl:gap-7">
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
        <div className="bg-primary-light p-6 rounded-2xl h-full xl:col-span-2">
          <ProjectionChart />
        </div>
        <div className="bg-primary-light p-6 rounded-2xl h-full xl:col-span-3">
          <RevenueChart />
        </div>
        <div className="bg-primary-light p-6 rounded-2xl h-full xl:col-span-1">
          <RevenueByLocation />
        </div>
        <div className="bg-primary-light rounded-2xl p-6 xl:col-span-3">
          <TopSellingProductsTable />
        </div>
        <div className="bg-primary-light rounded-2xl p-6 h-full xl:col-span-1">
          <TotalSalesChart />
        </div>
      </section>
    </div>
  );
};

export default Home;
