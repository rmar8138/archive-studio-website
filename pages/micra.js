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

export class micra extends Component {
  render() {
    return (
      <div>
        <OurVisionPageLayout>
          <OurVisionMain>
            <OurVisionText>
              <h1>Micra</h1>
              <p>
                Micra brings together multi-insrumentalist, Robbie Cain and
                singer-guitarist, Ivana Kay.
                <br />
                <br />
                The Sydney based duo create a wistful, atmospheric sound, with
                floating nostalgic melodies and vulnerable lyrical composition.
                <br />
                <br />
                We had the pleasure of art directing and designing their covers
                for two debut singles, ‘Child Grows Old’ and ‘Plastic’.
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
                <img src="static/ourvision/micra/1.png" alt="Micra 1" />
                <img src="static/ourvision/micra/2.jpg" alt="Micra 2" />
                <img src="static/ourvision/micra/3.jpg" alt="Micra 3" />
                <img src="static/ourvision/micra/4.jpg" alt="Micra 4" />
                <img src="static/ourvision/micra/5.png" alt="Micra 5" />
              </Carousel>
            </OurVisionImage>
          </OurVisionMain>
          <CaseStudyLayout name="Micra">
            <Grid3Template>
              <img
                src="static/ourvision/micra/casestudy/1.jpg"
                alt="Case Study 1"
              />
              <h2>Big text words/ poem of some sort</h2>
              <p>
                Micra’s single ‘Plastic’ resonates within one’s vulnerable
                exploration of self and identity. We were presented with a brief
                to create a cover artwork that held a similar theme to the
                eerie, ephemeral sound.
              </p>
              <img
                src="static/ourvision/micra/casestudy/2.jpg"
                alt="Case Study 2"
              />
              <img
                src="static/ourvision/micra/casestudy/3.jpg"
                alt="Case Study 3"
              />
              <img
                src="static/ourvision/micra/casestudy/4.jpg"
                alt="Case Study 4"
              />
              <img
                src="static/ourvision/micra/casestudy/5.jpg"
                alt="Case Study 5"
              />
              <p>
                We were encouraged to explore the re-imagination of something
                familiar, as well as the idea of masks and concealing an object
                or subject. Magnolias, roses, cherry blossoms and anthuriums
                were used to explore this concept. Flowers and the delicacy of
                their petals held a similar ethereal quality as the track,
                becoming the core visual representation.
              </p>
              <p>
                Through the exploration of analogue distortion methods, we were
                able to achieve prominent textures. By moving the objects while
                scanning it created a sense of anticipation and chance, an
                iterative method that exercised our ability to know when to stop
                and review.
              </p>
              <img
                src="static/ourvision/micra/casestudy/6.jpg"
                alt="Case Study 6"
              />
              <div />
              <img
                src="static/ourvision/micra/casestudy/7.jpg"
                alt="Case Study 7"
              />
              <img
                src="static/ourvision/micra/casestudy/8.jpg"
                alt="Case Study 8"
              />
              <p>
                While still being quite flat we vacuum sealed the flower
                creating interesting depth, allowing the light from the scanner
                to bounce off and form visual ripples.
                <br />
                <br />
                Our process deepened as we experimented further with cropping
                the images to the square format. This allowed for a more
                abstract actualisation of the brief and space for interpretation
                by the listeners.
              </p>
              <img
                src="static/ourvision/micra/casestudy/9.jpg"
                alt="Case Study 9"
              />
              <img
                src="static/ourvision/micra/casestudy/10.jpg"
                alt="Case Study 10"
              />
              <p>
                It was ideal to find a typeface that matched the delicacy and
                fragility of the song. Moving away from anything trendy and
                current, the addition of Fortescue Italic brought together all
                visual elements to a humble balance.
              </p>
            </Grid3Template>
          </CaseStudyLayout>
        </OurVisionPageLayout>
      </div>
    );
  }
}

export default micra;
