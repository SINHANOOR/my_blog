import React from 'react';
import PlainLayout from "@/components/master/Plain-Layout";
import PopularList from "@/components/blog/PopularList";
import BlogList from '@/components/blog/BlogList';


const Page = async () => {
    
    return (
        <PlainLayout>
           
                        <BlogList/>
                  
                        <PopularList/>
           
            
        </PlainLayout>
    );
};

export default Page;