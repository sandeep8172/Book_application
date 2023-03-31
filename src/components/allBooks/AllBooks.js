import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { currentActions } from "../../store/currentSlice";
import { toReadActions } from "../../store/toReadSlice";
import { readActions } from "../../store/readSlice";

const AllBooks = () => {
    const DUMMY_DATA = useSelector((state) => state.bookRed.DUMMY_BOOKS);

    const book_length = DUMMY_DATA.length;

    const [data, setData] = useState("");

    const dispatch = useDispatch();

    const changeDataHandler = (event) => {
        setData(event.target.value);
    };

    const optionsHandler = (id, name, author, img) => {
        if (data === "currReading") {
            dispatch(currentActions.addToCurrent({ id, name, author, img }));
        }
        if (data === "toRead") {
            dispatch(toReadActions.addToToRead({ id, name, author, img }));
        }
        if (data === "allreadyRead") {
            dispatch(readActions.addToRead({ id, name, author, img }));
        }
        setData("");
    };

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    };

    return (
        <div className="main_wrapper all_books_wrapper">
            <p className="list_name ">All Books List</p>
            <div className="book_list">
                {book_length === 0 && <p className="no_book_found">No Book Found, Try wih another name</p>}
                {book_length > 0 &&
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={responsive.desktop || responsive.tablet !== "mobile" ? true : false}
                        autoPlaySpeed={2000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {DUMMY_DATA.map((ele, ind) => {
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
                                    </div>{" "}
                                    <select
                                        onChange={changeDataHandler}
                                        onClick={() => {
                                            optionsHandler(ele.id, ele.name, ele.author, ele.img);
                                        }}
                                        value={data}
                                    >
                                        <option>Select Action</option>
                                        <option value="currReading">currently-Reading</option>
                                        <option value="toRead">To-Read</option>
                                        <option value="allreadyRead">Already-Read</option>
                                    </select>
                                </div>
                            );
                        })}
                    </Carousel>
                } </div>


        </div>
    );
};

export default AllBooks;
