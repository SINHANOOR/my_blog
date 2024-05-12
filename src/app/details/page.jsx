import React from 'react';
import PlainLayout from "@/components/master/Plain-Layout";
import PopularList from "@/components/blog/PopularList";
import CommentsList from "@/components/blog/CommentsList";
import BlogDetails from '@/components/blog/BlogDetails';


const Page =async () => {
   
    return (
        <PlainLayout>
           
                    <BlogDetails/>
                     <CommentsList/>
                     <PopularList/>
        </PlainLayout>
    );
};

export default Page;