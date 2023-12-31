
import { useRouter } from "next/router";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { GlobalStateProvider } from "@/context/Context";
import { Figtree } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";

const figtree = Figtree({
  style: ['normal'],
  weight: ['400', '700', '900', '600'],
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const hideHeaderRoutes = ["/search" ,'/']; // Add the routes where you want to hide the header
  const shouldHideHeader = hideHeaderRoutes.includes(router.pathname);
console.log(shouldHideHeader,"hideHeaderRoutes")
  
  return (
    
    <GlobalStateProvider>
      <div className={figtree.className}>
        {!shouldHideHeader && <Header />}
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />

   
      </div>
    </GlobalStateProvider>
  );
}

export default MyApp;
