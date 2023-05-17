function AdminHome(props){

    const logoutAdmin = (event) => {
        //logout the admin
        event.preventDefault()
        // props.logout_admin()

        props.logout_admin()
    }


    return <>
                <div className="container">
                        <div className="row mt-5">
                               <div className="col-md-8 mx-auto">
                                    <div className="card bg-dark text-white">
                                            <div className="card-header">
                                                <h5>Admin Dashboard | <small>Welcome {props.current_admin}</small></h5>
                                                <hr></hr>
                                                <h6><a href="" className="text-light">Update Profile</a></h6>
                                            </div>

                                            <div className="card-body">
                                            <ul class="nav">
                                                <li class="nav-item">
                                                    <a class="nav-link text-white active" href="#">Create Article</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#">Create Category</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#">Add Admin</a>
                                                </li>
                                                <li class="nav-item m-auto">
                                                    <a href="#" class="nav-link text-danger font-weight-bold" onClick={logoutAdmin}>Log out</a>
                                                </li>
                                            </ul>



                                            </div>

                                    </div>

                               </div>
                        </div>
                </div>



            </>


}

export default AdminHome