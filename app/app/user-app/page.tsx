import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { RedirectType, redirect } from 'next/navigation';

export default async function UserApp(){
    let loggedIn = false;
  
  try {
    const supabase = createServerComponentClient({cookies});
    const { data: { session } } = await supabase.auth.getSession();

    if(session){
      loggedIn = true
    }

  } catch (error) {
    console.log('user-app',error);
  } finally {
    if(!loggedIn) {
      redirect('/', RedirectType.replace)
    }
  }
    return(
        <h1>Usuario logado</h1>
    )
}