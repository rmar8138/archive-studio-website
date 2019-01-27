import React, { Component } from 'react';
import {
  OurVisionPageLayout,
  OurVisionGridOnlyLayout,
  GridOnlyTextSection,
  GridOnlyGridSection,
} from '../components/layouts/OurVisionPageLayout';
import Grid2Template from '../components/grids/Grid2';

export class pigalle extends Component {
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
              <h1>Pigalle</h1>
              <p>
                In collaboration with Pigalle Tokyo, we photographed a visual
                series showcasing their Fall ’17 Collection.
                <br />
                <br />
                With the aim of contextualizing this Parisian label, the colour
                palette led us to navigate our way through the hues of Tokyo.
              </p>
            </div>
            <div className="footer">
              <ul>
                <li>
                  <span>Styling/Talent</span> Gregory Robert
                </li>
              </ul>
            </div>
          </GridOnlyTextSection>
          <GridOnlyGridSection>
            <Grid2Template>
              {images.map((key) => (
                <img
                  src={`static/ourvision/pigalle/${key}.jpg`}
                  alt={`Pigalle ${key}`}
                />
              ))}
            </Grid2Template>
          </GridOnlyGridSection>
        </OurVisionGridOnlyLayout>
      </OurVisionPageLayout>
    );
  }
}

export default pigalle;
