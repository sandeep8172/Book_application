import React from "react";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { readActions } from "../../store/readSlice"
import { useDispatch } from "react-redux";

const AlreadyRead = () => {
    const readBook_Data = useSelector((state) => state.readRed.read_reading);
    const readBook_length = readBook_Data.length;
    const dispatch = useDispatch();

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
        },
    };
    const removeReadHandler = (id) => {
        dispatch(readActions.removeBook(id))
    }

    return (
        <div className="main_wrapper already_read_wrapper">
            <p className="list_name">Already Read</p>

            <div className="book_list">
                {readBook_length === 0 && (
                    <p className="empty_list">You haven't finished any Book yet</p>
                )}
                {readBook_length > 0 && (
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
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {readBook_Data.map((ele, ind) => {
                            return (
                                <div key={ind} className="books_wrapper">
                                    <div className="books" >
                                        {" "}
                                        <div className="flip_front">
                                            <img src={ele.img} alt="book cover" />
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
                                    <button onClick={() => { removeReadHandler(ele.id) }}>Remove</button>
                                </div>
                            );
                        })}
                    </Carousel>
                )}
            </div>
        </div>
    );
};

export default AlreadyRead;
