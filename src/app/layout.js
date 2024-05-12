import NextTopLoader from "nextjs-toploader";
import '@/assets/css/style.css'
import '@/assets/css/dropdownmenu.css'
import '@/assets/css/sidebar.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import AppNavBar from "@/components/master/AppNavBar";

export async function generateMetadata(){
    const res=await fetch(process.env.BASE_URL+"");
    const JSON=await res.json();
    return{
        title:JSON[0]['title'],
        description:JSON[0]['description'],
        keywords:JSON[0]['keywords'],
        openGraph: {
            images: JSON[0]['image'],
        },
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
           
             <NextTopLoader color="#E60000" height={2} speed={200}/>
             <AppNavBar>
             {children}
             </AppNavBar>
        </body>
        </html>
    )
}
