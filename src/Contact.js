import React from 'react'

function Contact() {
    return (
        <div className="container my-5">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@2.0.7/css/boxicons.min.css" />

            <div className="container">
                <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
                    <div className="col">
                        <div className="card radius-15 bg-primary">
                            <div className="card-body text-center">
                                <div className="p-4 radius-15">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" width="110" height="110" className="rounded-circle shadow p-1 bg-white" alt="" />
                                    <h5 className="mb-0 mt-5 text-white">Pauline I. Bird</h5>
                                    <p className="mb-3 text-white">Webdeveloper</p>
                                    <div className="list-inline contacts-social mt-3 mb-3"> <a href="javascript:;" className="list-inline-item border-0"><i className="bx bxl-facebook"></i></a>
                                        <a href="javascript:;" className="list-inline-item border-0"><i className="bx bxl-twitter"></i></a>
                                        <a href="javascript:;" className="list-inline-item border-0"><i className="bx bxl-linkedin"></i></a>
                                    </div>
                                    <div className="d-grid"> <a href="#" className="btn btn-white radius-15">Contact Me</a>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
