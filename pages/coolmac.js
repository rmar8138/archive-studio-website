import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import CaseStudyLayout from '../components/layouts/CaseStudyLayout';
import Grid3Template from '../components/grids/Grid3';
import {
  OurVisionPageLayout,
  OurVisionMain,
  OurVisionText,
  OurVisionImage,
} from '../components/layouts/OurVisionPageLayout';

export class coolmac extends Component {
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
              <h1>Cool Mac</h1>
              <p>
                Cool Mac is a cafe in Kirribilli, Sydney, offering coffee and
                Japanese inspired dishes for locals and tourists alike.
                <br />
                <br />
                We were commissioned to create a permanent mural for their six
                metre feature wall that would brighten up the space.
                <br />
                <br />
                Through our observation and perspective of Kirribilli, we chose
                to highlight significant structures specific to our eye and
                attention to detail.
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
                    src={`static/ourvision/coolmac/${key + 1}.jpg`}
                    alt={`Coolmac ${key + 1}`}
                    key={key}
                  />
                ))}
              </Carousel>
            </OurVisionImage>
          </OurVisionMain>
          <CaseStudyLayout name="Cool Mac">
            <Grid3Template>
              <img
                src="static/ourvision/coolmac/casestudy/1.jpg"
                alt="Case Study 1"
              />
              <h2>
                moments of intrigue, striking mundane feat.
                <br />
                <br />
                meditative movement amongst kirribilli’s streets
              </h2>
              <img
                src="static/ourvision/coolmac/casestudy/3.jpg"
                alt="Case Study 3"
              />
              <img
                src="static/ourvision/coolmac/casestudy/4.jpg"
                alt="Case Study 4"
              />
              <p>
                Located in the heart of Sydney’s North suburb Kirribilli, Cool
                Mac boasts the ideal setting for a morning coffee accompanied by
                a Japanese inspired dishes.
                <br />
                <br />
                We were commissioned to create a permanent mural for the cafe’s
                main feature wall with the intended function being to brighten
                the floor space.
                <br />
                <br />
                We felt the importance of celebrating Kirribilli within our work
                providing context for the local patrons.
              </p>
              <img
                src="static/ourvision/coolmac/casestudy/6.jpg"
                alt="Case Study 6"
              />
              <img
                src="static/ourvision/coolmac/casestudy/7.jpg"
                alt="Case Study 7"
              />
              <p style={{ alignSelf: 'flex-end' }}>
                Through our calculated perspective, we chose to highlight
                significant structures specific to our eye and attention to
                detail.
                <br />
                <br />
                We documented the area with a gaze focused on the lines created
                through architectural details. We worked towards highlighting
                these moments of intrigue, where the afternoon sun illuminated
                seemingly mundane, striking features.
              </p>
              <p>
                The foundation of the colour palette was inspired by visual
                elements we gravitated towards such as the red door down the
                street, lush shrubbery, glistening pools, exposed brick, and the
                habitual shadows.
              </p>
              <img
                src="static/ourvision/coolmac/casestudy/10.jpg"
                alt="Case Study 10"
              />
              <img
                src="static/ourvision/coolmac/casestudy/11.jpg"
                alt="Case Study 11"
              />
              <img
                src="static/ourvision/coolmac/casestudy/12.jpg"
                alt="Case Study 12"
              />
              <img
                src="static/ourvision/coolmac/casestudy/13.jpg"
                alt="Case Study 13"
              />
              <p>
                What began as a seemingly monotonous task, soon became a
                meditative through the repetition of precise measuring, drawing,
                taping and painting.
                <br />
                <br />
                The end result was well worth the lengthy process.
                <br />
                <br />
                Watching the lines meet and colours reveal as we peeled the
                washi tape brought a great deal of satisfaction to us.
                <br />
                <br />
                Uncovering the entirety of this piece in full colour to the
                public attracted nothing but kind words, praise and support for
                more artistic activations to take place.
                <br />
                <br />
                Cool Mac 2/34 Burton St, Kirribilli NSW 2061
              </p>
              <img
                src="static/ourvision/coolmac/casestudy/15.jpg"
                alt="Case Study 15"
              />
              <img
                src="static/ourvision/coolmac/casestudy/16.jpg"
                alt="Case Study 16"
              />
              <img
                src="static/ourvision/coolmac/casestudy/17.jpg"
                alt="Case Study 17"
              />
            </Grid3Template>
          </CaseStudyLayout>
        </OurVisionPageLayout>
      </div>
    );
  }
}

export default coolmac;
