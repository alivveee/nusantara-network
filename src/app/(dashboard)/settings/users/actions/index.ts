'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath, unstable_noStore } from 'next/cache';

export default async function createUser(data: {
  email: string;
  name: string;
  phone: string;
  role: string;
  password: string;
  confirm: string;
}) {
  const supabase = await createClient();
  const result = await supabase.from('customers').insert(data);

  revalidatePath('data-source/customer');
  return JSON.stringify(result);
}

export async function updateCustomer(
  id: string,
  data: {
    name: string;
    phone: string;
    coordinate: string;
    address: string;
  }
) {
  const supabase = await createClient();
  const result = await supabase.from('customers').update(data).eq('id', id);

  revalidatePath('data-source/Customer');
  return JSON.stringify(result);
}

export async function deleteCustomer(id: string) {
  const supabase = await createClient();
  const result = await supabase.from('customers').delete().eq('id', id);

  revalidatePath('data-source/customer');
  return JSON.stringify(result);
}

export async function readCustomers() {
  unstable_noStore();

  const supabase = await createClient();
  const result = await supabase
    .from('customers')
    .select('*')
    .order('created_at', { ascending: true });

  return result;
}
