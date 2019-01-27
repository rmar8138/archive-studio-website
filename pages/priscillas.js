import React, { Component } from 'react';
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
                  <span>Styling</span> Tracey Nguyen
                </li>
                <li>
                  <span>Talent</span> Hannah
                </li>
              </ul>
            </div>
          </GridOnlyTextSection>
          <GridOnlyGridSection>
            <Grid1Template>
              {images.map((key) => (
                <img
                  src={`static/ourvision/priscillas/${key}.jpg`}
                  alt={`Priscilla's ${key}`}
                />
              ))}
            </Grid1Template>
          </GridOnlyGridSection>
        </OurVisionGridOnlyLayout>
      </OurVisionPageLayout>
    );
  }
}

export default priscillas;
