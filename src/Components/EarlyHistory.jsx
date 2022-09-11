import React from 'react'
import History from '../images/history.jpg'
import HistoryHeading from '../Utils/HistoryHeading.js';


function EarlyHistory() {
    return (
        <>
            <div className="container-fluid p-0 history-container-cus">
                <div className="">
                    <div className="ba-img history-img-overlay">
                        <img src={History} className="img-fluid history-img"></img>
                    </div>
                    <div className="history-heading-parent">
                        <h1 className="history-h-title text-white">Early History of Majestic Arts</h1>
                        <p className="history-p-title text-white">A Story About the early history of Majestic Arts A Story About the early history of Majestic Arts A Story About the early history of Majestic Arts A Story About the early history of Majestic Arts</p>
                        <div className="wrapper">
                            <HistoryHeading text="VIEW DETAILS VIEW DETAILS VIEW DETAILS" arc={350} radius={70} />
                        </div>
                        <div className="history-btn-parent">
                            <button type="submit" className="btn-view-detail">⟶</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EarlyHistory