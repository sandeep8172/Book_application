import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { toReadActions } from "../../store/toReadSlice"

const ToRead = () => {
    const toReadBookDAta = useSelector((state) => state.toReadRed.toRead_reading);
    const toRead_length = toReadBookDAta.length;

    const dispatch = useDispatch();

    const responsive = {


        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const removeToReadHandler = (id) => {
        dispatch(toReadActions.removeBook(id))
    }

    return (
        <div className="main_wrapper">
            <p className="list_name">Books To Read</p>

            <div className="book_list">
                {toRead_length === 0 && (
                    <p className="empty_list">No Book added to readlist</p>
                )}
                {toRead_length > 0 && (
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {toReadBookDAta.map((ele, ind) => {
                            return (
                                <div key={ind} className="books_wrapper">
                                    <div className="books" >
                                        <div className="flip_front">
                                            <img src={ele.img} alt="book cover" />
                                        </div>
                                        <div className="flip_back">
                                            <p>
                                                Name - <span> {ele.name}</span>
                                            </p>
                                            <p>
                                                Author - <span> {ele.author}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <button onClick={() => { removeToReadHandler(ele.id) }}>Remove</button>
                                </div>
                            );
                        })}
                    </Carousel>
                )}
            </div>
        </div>
    );
};

export default ToRead;
