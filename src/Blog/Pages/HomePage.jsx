import React from "react";
import axios from "axios";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import ListPost from "../Components/Post/ListPost";
import Stories from '../Components/Post/Stories';

function HomePage() {
  const tabId = 'home';
  const [users, setUsers] = React.useState([]);
  const [posts, setPosts] = React.useState([]);


  let token = JSON.parse(localStorage.getItem("AccessToken"));
  React.useEffect(() => {
    axios.get("https://localhost:7171/api/Post",
      {
        headers: {
          // 'Content-Type': 'application/json',
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      })
      .then((response) => {
        setPosts(response.data);
        console.log("posts ", response.data);
      }).catch((error) => {
        console.log(error.response.data)
      });
  }, []);


  return (
    <>
      <Header tabId={tabId} />
      <div className="container mt-2 mb-5 instaFeedBodyWrap">
        <div className="d-flex justify-content-evenly">

          <div className="col-sm-5">
            <section class="card-body m-3">
              <Stories />
            </section>

            <section className="list-post">
              {posts.reverse().map((postItem1, index) => (
                <ListPost postItem={postItem1} />
              ))}
            </section>
          </div>

          <div class="col-sm-3">
            <Footer />
          </div>

        </div>
      </div>

    </>
  );
}

export default HomePage;
