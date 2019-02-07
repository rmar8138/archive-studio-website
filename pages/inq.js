import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import {
  OurVisionPageLayout,
  OurVisionMain,
  OurVisionText,
  OurVisionImage,
} from '../components/layouts/OurVisionPageLayout';

export class inq extends Component {
  render() {
    const images = [];
    for (let i = 0; i < 4; i++) {
      images.push(i);
    }
    return (
      <div>
        <OurVisionPageLayout>
          <OurVisionMain>
            <OurVisionText>
              <h1>Inq.uisitive Minds</h1>
              <p>
                We spent the beginning of 2018 conceptualising the visual
                identity for Sydney rap duo, Inq.uisitive Minds. With a focus on
                using the lyrics as manifestations for design, our creative
                direction carried through the branding/identity, social media
                content and cover artworks for their debut EP, ‘True &amp;
                Livin’.
              </p>
            </OurVisionText>
            <OurVisionImage>
              <Carousel
                renderCenterLeftControls={({ previousSlide }) => (
                  <button
                    onClick={previousSlide}
                    style={{
                      opacity: '0',
                      outline: 'none',
                    }}
                  />
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button
                    onClick={nextSlide}
                    style={{
                      opacity: '0',
                      outline: 'none',
                    }}
                  />
                )}
              >
                {images.map((key) => (
                  <img
                    src={`static/ourvision/inq/${key + 1}.png`}
                    alt={`INQ ${key + 1}`}
                    key={key}
                  />
                ))}
              </Carousel>
            </OurVisionImage>
          </OurVisionMain>
        </OurVisionPageLayout>
      </div>
    );
  }
}

export default inq;
