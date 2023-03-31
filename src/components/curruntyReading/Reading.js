import React from "react";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { currentActions } from "../../store/currentSlice"
import { useDispatch } from "react-redux";

const Reading = () => {
    const currentBookData = useSelector((state) => state.currRed.current_reading);
    const curr_length = currentBookData.length;
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
    const removeCurrReadHandler = (id) => {
        dispatch(currentActions.removeBook(id))
    }

    return (
        <div className="main_wrapper">
            <p className="list_name">Currently reading</p>

            <div className="book_list">
                {curr_length === 0 && (
                    <p className="empty_list">Currently, You are not reading any book</p>
                )}
                {curr_length > 0 && (
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
                        {currentBookData.map((ele, ind) => {
                            return (
                                <div key={ind} className="books_wrapper">
                                    <div className="books">
                                        {" "}
                                        <div className="flip_front">
                                            <img src={ele.img} alt="book cover" />{" "}
                                        </div>{" "}
                                        <div className="flip_back">
                                            <p>
                                                Name - <span> {ele.name}</span>
                                            </p>
                                            <p>
                                                Author - <span> {ele.author}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <button onClick={() => { removeCurrReadHandler(ele.id) }}>Remove</button>
                                </div>
                            );
                        })}
                    </Carousel>
                )}
            </div>
        </div>
    );
};

export default Reading;
