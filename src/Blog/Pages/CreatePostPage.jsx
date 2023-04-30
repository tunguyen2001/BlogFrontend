import React from "react";
import axios from "axios";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import CreatePost from "../Components/Post/CreatePost";

function HomePage() {
    const tabId = 'createPost';
    const [users, setUsers] = React.useState([]);
    const [posts, setPosts] = React.useState([]);

    //   React.useEffect(() => {
    //     axios.get("https://localhost:7171/api/User/getalluser").then((response) => {
    //       setUsers(response.data);
    //       console.log("users ", response.data);
    //     });
    //   }, []);

    return (
        <>
            <Header tabId={tabId} />
            <div className="container mt-2 mb-5 instaFeedBodyWrap">
                <div className="row g-5">

                    <div className="col-sm-8">
                        <CreatePost />
                    </div>

                    <div class="col-sm-4">
                        <Footer />
                    </div>

                </div>
            </div>
        </>
    );
}

export default HomePage;
