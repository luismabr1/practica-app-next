import HomeLayout from '../../../components/HomeLayout';
import AppLayout from '../../../components/AppLayout'
const ComposeTweet = () => {
    return (
        <>
        <HomeLayout>
            <AppLayout>
                <textarea name="" id="" cols="30" rows="10">

                </textarea>
            </AppLayout>
        </HomeLayout>

            <style jsx>{`
                textarea{
                    
                }
            `} </style>
        </>
    );
}

export default ComposeTweet;