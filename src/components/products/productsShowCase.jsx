import { Link } from "react-router-dom";

const ProductsShowCase = () => {
  return (
    <>
        <div className="container mt-5 pt-5">
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 text-center">

                    {[
                    { src: "dining sets.svg", title: "DINING SETS" },
                    { src: "chairs.svg", title: "CHAIRS" },
                    { src: "tables.svg", title: "TABLES" },
                    { src: "bar stools.svg", title: "BAR STOOLS" },
                    { src: "cocktail tablees.svg", title: "COCKTAIL TABLES" },
                    { src: "outdoor sets.svg", title: "OUTDOOR SETS" },
                    { src: "bean bags.svg", title: "BEAN BAGS" },
                    { src: "lamps.svg", title: "LAMPS" },
                    ].map((item, index) => (
                    <div className="col py-3" key={index}>
                        <Link className="products" to="/ProductDetails">
                            <img src={`/images/${item.src}`} alt={item.title} />
                            <h5 className="mt-2">{item.title}</h5>
                        </Link>
                    </div>
                    ))}

                </div>
        </div>
    </>
  );
};


export default ProductsShowCase;
