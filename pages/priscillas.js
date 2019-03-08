import React, { Component } from 'react';
import { InView } from 'react-intersection-observer';
import {
  OurVisionPageLayout,
  OurVisionGridOnlyLayout,
  GridOnlyTextSection,
  GridOnlyGridSection,
} from '../components/layouts/OurVisionPageLayout';
import Grid1Template from '../components/grids/Grid1';

export class priscillas extends Component {
  state = {
    styling: ['Tracey Nguyen', 'Rowland Reyes Martinez'],
    talent: ['Hannah', 'Rose & Ella', 'Ashun'],
    stylingCounter: 0,
    talentCounter: 0,
  };

  render() {
    const images = [];
    for (let i = 0; i < 6; i++) {
      images.push(i + 1);
    }
    return (
      <OurVisionPageLayout>
        <OurVisionGridOnlyLayout>
          <GridOnlyTextSection>
            <div className="header">
              <h1>Priscilla's</h1>
              <p>
                We worked alongside talent in development, represented by
                Priscillas Model Management
              </p>
            </div>
            <div className="footer">
              <ul>
                <li>
                  <span>Styling</span>{' '}
                  {this.state.styling[this.state.stylingCounter]}
                </li>
                <li>
                  <span>Talent</span>{' '}
                  {this.state.talent[this.state.talentCounter]}
                </li>
              </ul>
            </div>
          </GridOnlyTextSection>
          <GridOnlyGridSection>
            <Grid1Template>
              {/* {images.map((key) => (
                <img
                  src={`static/ourvision/priscillas/${key}.jpg`}
                  alt={`Priscilla's ${key}`}
                />
              ))} */}
              {/* Styling Counter: 0
              Talent Counter: 0 */}
              <img
                src="static/ourvision/priscillas/1.jpg"
                alt="Priscilla's 1"
              />
              <InView
                tag="div"
                onChange={(inView) => {
                  if (inView) {
                    this.setState({ stylingCounter: 0 });
                    this.setState({ talentCounter: 0 });
                  }
                }}
              >
                <img
                  src="static/ourvision/priscillas/2.jpg"
                  alt="Priscilla's 2"
                />
              </InView>

              {/* Styling Counter: 0
              Talent Counter: 1 */}
              <InView
                tag="div"
                onChange={(inView) => {
                  if (inView) {
                    this.setState({ stylingCounter: 0 });
                    this.setState({ talentCounter: 1 });
                  }
                }}
              >
                <img
                  src="static/ourvision/priscillas/3.jpg"
                  alt="Priscilla's 3"
                />
              </InView>
              <InView
                tag="div"
                onChange={(inView) => {
                  if (inView) {
                    this.setState({ stylingCounter: 0 });
                    this.setState({ talentCounter: 1 });
                  }
                }}
              >
                <img
                  src="static/ourvision/priscillas/4.jpg"
                  alt="Priscilla's 4"
                />
              </InView>

              {/* Styling Counter: 1
              Talent Counter: 2 */}
              <InView
                tag="div"
                onChange={(inView) => {
                  if (inView) {
                    this.setState({ stylingCounter: 1 });
                    this.setState({ talentCounter: 2 });
                  }
                }}
              >
                <img
                  src="static/ourvision/priscillas/5.jpg"
                  alt="Priscilla's 5"
                />
              </InView>
              <img
                src="static/ourvision/priscillas/6.jpg"
                alt="Priscilla's 6"
              />
            </Grid1Template>
          </GridOnlyGridSection>
        </OurVisionGridOnlyLayout>
      </OurVisionPageLayout>
    );
  }
}

export default priscillas;
