import React, { Component } from 'react';
import {
  OurVisionPageLayout,
  OurVisionGridOnlyLayout,
  GridOnlyTextSection,
  GridOnlyGridSection,
} from '../components/layouts/OurVisionPageLayout';
import Grid2Template from '../components/grids/Grid2';

export class nawato extends Component {
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
              <h1>Nawato</h1>
              <p>
                Nawato specializes in handmade goods for men and women, designed
                and produced from their humble studio in Sydney.
                <br />
                <br />
                We worked together with Tanawat Seethiang and Jackie Pettit in
                photographing their Spring ’18 Collection.
              </p>
            </div>
            <div className="footer">
              <ul>
                <li>
                  <span>Styling/Talent</span> Jackie Pettit &amp; Tanawat
                  Seethiang
                </li>
              </ul>
            </div>
          </GridOnlyTextSection>
          <GridOnlyGridSection>
            <Grid2Template>
              {images.map((key) => (
                <img
                  src={`static/ourvision/nawato/${key}.jpg`}
                  alt={`Nawato ${key}`}
                />
              ))}
            </Grid2Template>
          </GridOnlyGridSection>
        </OurVisionGridOnlyLayout>
      </OurVisionPageLayout>
    );
  }
}

export default nawato;
