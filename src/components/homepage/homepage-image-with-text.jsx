const HomepageImageWithText = () => {
    return(
        <div className="container my-5">
            <div className="row m-0">
                <div className="col-12 col-md-8">
                    <img className="homepage-side-image" src="images/image-with-text.svg" alt="" />
                </div>
                <div className="col-12 col-md-4 text-end d-flex flex-column justify-content-center align-items-end">
                    <h1> Mastercrafted Rattan, Built for Decades.</h1>
                    <p> Our focus is to design and weave the world’s best rattan furniture using three decades of industry experience and customer insight. </p>
                    <a className="btn sales-button homepage-side-image-button" href="">LEARN MORE</a>
                </div>
            </div>
        </div>
    )
}

export default HomepageImageWithText;