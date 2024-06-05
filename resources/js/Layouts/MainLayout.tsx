import { PropsWithChildren, memo } from "react";
import Footer from "src/Components/Footer";

import Header from "src/Components/Header";
function MainLayout({ children }: PropsWithChildren) {
    // const [isLoading, setIsLoading] = useState(true)
    // setTimeout(() => {
    //   {
    //     setIsLoading(false)
    //   }
    // }, 1000)
    // if (isLoading) {
    //   return (
    //     <div className='loading loading-center-body bg-gray-200'>
    //       <div className='loader-circle-8'>
    //         <svg className='circular' viewBox='25 25 50 50'>
    //           <circle className='path' cx='50' cy='50' r='20' fill='none' strokeWidth='5' strokeMiterlimit='10' />
    //         </svg>
    //       </div>
    //     </div>
    //   )
    // }
    return (
        <div className="h-full bg-[#f2f4f7]">
            <Header />
            <div className="">{children}</div>
            <Footer />
        </div>
    );
}

export default memo(MainLayout);
