import MainContainer from '../../main-container';
import AddCustomerDialog from './components/add-dialog';
import CustomersTable from './components/customers-table';

export default function TaskPage() {
  return (
    <MainContainer>
      <div className="w-full h-[86px] py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-700">Daftar Customer</h1>
        <AddCustomerDialog />
      </div>
      <CustomersTable />
    </MainContainer>
  );
}
