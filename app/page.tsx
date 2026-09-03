import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { SourceTextModule } from 'vm'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: sales } = await supabase.from('sales').select()

  // return (
  //   <ul>
  //     {sales?.map((sale) => (
  //       <li key={sale.id}>{sale.name}</li>
  //     ))}
  //   </ul>
  // )
  return (
    <div>
      <h1>Sales</h1>
      <ul>
        {sales?.map((sale) => (
          <li key={sale.id}>{sale.name}</li>
        ))}
      </ul>
    </div>
  )
}