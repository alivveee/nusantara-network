export type IProduct = {
  id: string;
  name: string;
  created_at: string;
};

export type ICustomer = {
  id: string;
  name: string;
  phone: string;
  coordinate: string;
  address: string;
  created_at: string;
};

export type IUser = {
  id: string;
  created_at: string;
  email: string;
  name: string;
  phone: string;
  role: 'admin' | 'karyawan';
};
