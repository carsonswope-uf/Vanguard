import React from 'react';
import vanguard from '../assets/vanguard.png'
import './Gallery.css';

class Gallery extends React.Component {
    render () {
        return (
            <div className="gallerycontainer">
                <div className="title">Gallery</div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/boatlayout1.png')}>
                            <img src={require('../assets/boatlayout1.png')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">Top floor</div>
                    </div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/boatlayout2.png')}>
                            <img src={require('../assets/boatlayout2.png')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">Middle floor</div>
                    </div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/boatlayout3.png')}>
                            <img src={require('../assets/boatlayout3.png')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">Bottom floor</div>
                    </div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/dock1.jpg')}>
                            <img src={require('../assets/dock1.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">The Vanguard in its natural habitat</div>
                    </div>
                </div>
                
                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/dock2.jpg')}>
                            <img src={require('../assets/dock2.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">Welcome aboard!</div>
                    </div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/cigar1.jpg')}>
                            <img src={require('../assets/cigar1.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">Beautiful cigar table for playing poker</div>
                    </div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/cigar4.jpg')}>
                            <img src={require('../assets/cigar4.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">Right next to AmSo</div>
                    </div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/cigar2.jpg')}>
                            <img src={require('../assets/cigar2.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">Mmmmmm food</div>
                    </div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/cigar3.jpg')}>
                            <img src={require('../assets/cigar3.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">Other angle of food mmm</div>
                    </div>
                </div>

                

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/fly1.jpg')}>
                            <img src={require('../assets/fly1.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">Drinks!</div>
                    </div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/fly2.jpg')}>
                            <img src={require('../assets/fly2.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">More drinks but only guys</div>
                    </div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/fly3.jpg')}>
                            <img src={require('../assets/fly3.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">Eat some food!</div>
                    </div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/fly4.jpg')}>
                            <img src={require('../assets/fly4.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">Get some sun!</div>
                    </div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/fly5.jpg')}>
                            <img src={require('../assets/fly5.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">Lemme drive da boat</div>
                    </div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/bow1.jpg')}>
                            <img src={require('../assets/bow1.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">Take a bow</div>
                    </div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/bow2.jpg')}>
                            <img src={require('../assets/bow2.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">Girls only now</div>
                    </div><div className="bug">.</div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/bow3.jpg')}>
                            <img src={require('../assets/bow3.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">What a view</div>
                    </div><div className="bug">.</div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/living1.jpg')}>
                            <img src={require('../assets/living1.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">Comfortable inside area!</div>
                    </div><div className="bug">.</div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/kitchen1.jpg')}>
                            <img src={require('../assets/kitchen1.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">The sink is to the right</div>
                    </div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/vip1.jpg')}>
                            <img src={require('../assets/vip1.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">VIP Bedroom</div>
                    </div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/vipbath1.jpg')}>
                            <img src={require('../assets/vipbath1.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">VIP Bathroom</div>
                    </div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/bunk1.jpg')}>
                            <img src={require('../assets/bunk1.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">Bunk beds</div>
                    </div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/bunkbath1.jpg')}>
                            <img src={require('../assets/bunkbath1.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">Bunk bathroom</div>
                    </div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/twin1.jpg')}>
                            <img src={require('../assets/twin1.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">Twin beds</div>
                    </div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/master1.jpg')}>
                            <img src={require('../assets/master1.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">Master bed</div>
                    </div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/master2.jpg')}>
                            <img src={require('../assets/master2.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">More master bed</div>
                    </div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/master3.jpg')}>
                            <img src={require('../assets/master3.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">Master bed desk</div>
                    </div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/master4.jpg')}>
                            <img src={require('../assets/master4.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">That wood panel is hiding a tv</div>
                    </div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/masterbath1.jpg')}>
                            <img src={require('../assets/masterbath1.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">Master bathroom</div>
                    </div>
                </div>

                <div className="responsive2">
                    <div className="gallery">
                        <a target="logo" href={require('../assets/masterbath2.jpg')}>
                            <img src={require('../assets/masterbath2.jpg')} alt="logo" className="galleryimage"/>
                        </a>
                        <div className="description">Master bath tub</div>
                    </div>
                </div>

                

                
            </div>
    )};
}
export default Gallery