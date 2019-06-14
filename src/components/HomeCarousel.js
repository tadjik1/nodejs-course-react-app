import React, { Component } from 'react';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators
} from 'reactstrap';

const items = [
    {
        id: '0',
        src: 'assets/images/default-slide-img.jpg',
        altText: 'Slide 1',
        captionTitle: 'BEST LAPTOP DEALS',
        captionBtnText: 'View all DEALS',
        captionBtnLink: '#',
        captionBtnIconSrc: 'assets/icons/icon-angle-white.svg'
    },
    {
        id: '1',
        src: 'assets/images/default-slide-img.jpg',
        altText: 'Slide 2',
        captionTitle: 'BEST LAPTOP DEALS',
        captionBtnText: 'View all DEALS',
        captionBtnLink: '#',
        captionBtnIconSrc: 'assets/icons/icon-angle-white.svg'
    },
    {
        id: '2',
        src: 'assets/images/default-slide-img.jpg',
        altText: 'Slide 3',
        captionTitle: 'BEST LAPTOP DEALS',
        captionBtnText: 'View all DEALS',
        captionBtnLink: '#',
        captionBtnIconSrc: 'assets/icons/icon-angle-white.svg'
    }
];

class HomeCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.id}
                >
                    <img src={item.src} alt={item.altText} className="third-slide" />
                    <div className="container">
                        <div className="carousel-caption">
                            <h3 className="h1">{ item.captionTitle }</h3>
                            <div>
                                <a className="btn" href={ item.captionBtnLink } role="button">
                                    { item.captionBtnText }
                                    <img src={ item.captionBtnIconSrc } className="ml-3" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                className="main-carousel"
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}

export default HomeCarousel;
