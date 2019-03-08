import React, { Component } from 'react';
import { InView } from 'react-intersection-observer';
import {
  OurVisionPageLayout,
  OurVisionGridOnlyLayout,
  GridOnlyTextSection,
  GridOnlyGridSection,
} from '../components/layouts/OurVisionPageLayout';
import Grid3Template from '../components/grids/Grid3';

export class hype extends Component {
  state = {
    talent: [
      'Amy Jane Dowdle & Josh Dowdle',
      'Jason Vuong',
      'Jackie Pettit',
      'Cameron Oates',
      'Sophie Wilde',
    ],
    counter: 0,
  };

  render() {
    const images = [];
    for (let i = 0; i < 17; i++) {
      images.push(i + 1);
    }
    return (
      <OurVisionPageLayout>
        <OurVisionGridOnlyLayout>
          <GridOnlyTextSection>
            <div className="header">
              <h1>First Then First Now</h1>
              <p>
                This campaign commemorates 20 years of Hype DC.
                <br />
                <br />
                From their humble beginnings in 1998 their mission has been
                guided with the intention of delivering premium, limited and
                exclusive product.
                <br />
                <br />
                Previously as Rough Drahft, we conceptualised and produced
                imagery for the campaign with the aim to elevate their
                representation within Australia’s retail.
              </p>
            </div>
            <div className="footer">
              <ul>
                <li>
                  <span>Styling</span> Danielle Soglimbene
                </li>
                <li>
                  <span>Hmua</span> Jaclyn Htneko
                </li>
                <li>
                  <span>Talent</span> {this.state.talent[this.state.counter]}
                </li>
              </ul>
            </div>
          </GridOnlyTextSection>
          <GridOnlyGridSection>
            <Grid3Template>
              {/* {images.map((key) => (
                <img
                  src={`static/ourvision/firstthenfirstnow/${key}.jpg`}
                  alt={`First Then First Now ${key}`}
                />
              ))} */}
              {/* counter = 0 */}
              <InView
                tag="div"
                onChange={(inView) => {
                  if (inView) {
                    this.setState({ counter: 0 });
                  }
                }}
              >
                <img
                  src="static/ourvision/firstthenfirstnow/1.jpg"
                  alt="First Then First Now 1"
                />
              </InView>
              <img
                src="static/ourvision/firstthenfirstnow/2.jpg"
                alt="First Then First Now 2"
              />
              <img
                src="static/ourvision/firstthenfirstnow/3.jpg"
                alt="First Then First Now 3"
              />
              <img
                src="static/ourvision/firstthenfirstnow/4.jpg"
                alt="First Then First Now 4"
              />
              {/* counter = 1 */}
              <InView
                tag="div"
                onChange={(inView) => {
                  if (inView) {
                    this.setState({ counter: 1 });
                  }
                }}
              >
                <img
                  src="static/ourvision/firstthenfirstnow/5.jpg"
                  alt="First Then First Now 5"
                />
              </InView>
              <img
                src="static/ourvision/firstthenfirstnow/6.jpg"
                alt="First Then First Now 6"
              />
              <img
                src="static/ourvision/firstthenfirstnow/7.jpg"
                alt="First Then First Now 7"
              />
              <img
                src="static/ourvision/firstthenfirstnow/8.jpg"
                alt="First Then First Now 8"
              />
              <img
                src="static/ourvision/firstthenfirstnow/9.jpg"
                alt="First Then First Now 9"
              />
              {/* counter = 2 */}
              <InView
                tag="div"
                onChange={(inView) => {
                  if (inView) {
                    this.setState({ counter: 2 });
                  }
                }}
              >
                <img
                  src="static/ourvision/firstthenfirstnow/10.jpg"
                  alt="First Then First Now 10"
                />
              </InView>
              <img
                src="static/ourvision/firstthenfirstnow/11.jpg"
                alt="First Then First Now 11"
              />
              <img
                src="static/ourvision/firstthenfirstnow/12.jpg"
                alt="First Then First Now 12"
              />
              <img
                src="static/ourvision/firstthenfirstnow/13.jpg"
                alt="First Then First Now 13"
              />
              {/* counter = 3 */}
              <InView
                tag="div"
                onChange={(inView) => {
                  if (inView) {
                    this.setState({ counter: 3 });
                  }
                }}
              >
                <img
                  src="static/ourvision/firstthenfirstnow/14.jpg"
                  alt="First Then First Now 14"
                />
              </InView>
              {/* counter = 4 */}
              <InView
                tag="div"
                onChange={(inView) => {
                  if (inView) {
                    this.setState({ counter: 4 });
                  }
                }}
              >
                <img
                  src="static/ourvision/firstthenfirstnow/15.jpg"
                  alt="First Then First Now 15"
                />
              </InView>
              <img
                src="static/ourvision/firstthenfirstnow/16.jpg"
                alt="First Then First Now 16"
              />
              <img
                src="static/ourvision/firstthenfirstnow/17.jpg"
                alt="First Then First Now 17"
              />
            </Grid3Template>
          </GridOnlyGridSection>
        </OurVisionGridOnlyLayout>
      </OurVisionPageLayout>
    );
  }
}

export default hype;
