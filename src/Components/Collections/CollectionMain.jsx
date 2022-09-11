import React from 'react';
import ArtImg from '../../images/art1.jpg'
import ArtImg2 from '../../images/art2.jpg'


function CollectionMain() {
    return (
        <>
            <div className="container-fluid">
                <div className="row px-lg-5">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <ul className="list-unstyled">
                            <h1 className="coll-categ">Categories</h1>
                            <li className=""><a href="#" className="">Modern Art</a></li>
                            <li className=""><a href="#" className="">Landscape</a></li>
                            <li className=""><a href="#" className="">Still Life</a></li>
                            <li className=""><a href="#" className="">Portraits</a></li>
                            <li className=""><a href="#" className="">Abstract Art</a></li>
                            <li className=""><a href="#" className="">Genre</a></li>

                        </ul>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div class="column-cus">
                            <img src={ArtImg} className="collection-grid" />
                            <img src={ArtImg} className="collection-grid" />
                            <img src={ArtImg} className="collection-grid" />
                            <img src={ArtImg} className="collection-grid" />
                            <img src={ArtImg2} className="collection-grid" />
                            <img src={ArtImg2} className="collection-grid" />
                            <img src={ArtImg2} className="collection-grid" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CollectionMain