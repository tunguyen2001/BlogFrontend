import React from "react";
import axios from "axios";
import Header from "../Components/Layout/Header";
import ListPost from "../Components/Post/ListPost";
import SearchPost from "../Components/Post/SearchPost";
import Footer from "../Components/Layout/Footer";

export default function SearchPage() {
    const tabId = 'searchPage';
    const [posts, setPosts] = React.useState([]);
    const [dataResponse, setDataResponse] = React.useState({
        success: true,
        message: '',
        data: ''
    });
    const [formData, setFormData] = React.useState({
        search: '',
    });

    const [errors, setErrors] = React.useState({
        search: '',
    })

    const formValidate = () => {
        let errors = {};
        if (!formData.search) {
            errors.search = "Please enter keyword to search..."
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

//     let token = JSON.parse(localStorage.getItem("AccessToken"));
//   React.useEffect(() => {
//     axios.get("https://localhost:7171/api/Post",
//       {
//         headers: {
//           // 'Content-Type': 'application/json',
//           'Content-Type': 'multipart/form-data',
//           'Authorization': `Bearer ${token}`
//         }
//       })
//       .then((response) => {
//         setPosts(response.data);
//         console.log("posts ", response.data);
//       }).catch((error) => {
//         console.log(error.response.data)
//       });
//   }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    const handleInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <>
            <Header tabId={tabId} />
            <div className="container mt-2 mb-5 instaFeedBodyWrap">
                <div className="row g-5">

                    <div className="col-sm-8">
                        <section class="card-body m-3">
                            <SearchPost />
                        </section>

                        <section className="list-post">
                            {/* <ListPost /> */}
                        </section>
                    </div>

                    <div class="col-sm-4">
                        <Footer />
                    </div>

                </div>
            </div>
        </>
    )
}