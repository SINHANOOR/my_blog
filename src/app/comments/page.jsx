import React from 'react';
import PlainLayout from "@/components/master/Plain-Layout";
import UserCommentsList from "@/components/comments/usercommentslist";



const Page =async () => {

    return (
        <PlainLayout>
            <UserCommentsList/>
        </PlainLayout>
    );
};

export default Page;