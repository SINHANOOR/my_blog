import BlogList from '@/components/blog/BlogList';
import PopularList from '@/components/blog/PopularList';
import Slider from '@/components/blog/slider';
import PlainLayout from '@/components/master/Plain-Layout';
import React from 'react';

const page = () => {
  return (
    <div>
     <PlainLayout>
          <Slider/>
          
          <BlogList/>

          <PopularList/>

     </PlainLayout>
    </div>
  );
};

export default page;