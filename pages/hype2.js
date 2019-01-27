import React, { Component } from 'react';
import {
  OurVisionPageLayout,
  OurVisionGridOnlyLayout,
  GridOnlyTextSection,
  GridOnlyGridSection,
} from '../components/layouts/OurVisionPageLayout';
import Grid3Template from '../components/grids/Grid3';

export class hype2 extends Component {
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
              <h1>Hype DC</h1>
              <p>
                Previously as Rough Drahft, we created Hype DC’s unique visual
                language and brand aesthetic, solidifying its place as one of
                Australia’s forefront sneaker retailers.
                <br />
                <br />
                Throughout our time with Hype DC, we pushed the boundaries of
                sneaker photography, focusing on bridging the gap of artistic
                composition and product. Our eye for colour and composition
                brought an alternative outlook to Hype DC’s social presence and
                online store content.
                <br />
                <br />
                Our vision has resulted in the conception and production of
                notable digital and window campaigns such as Hypekit, Hypegirl
                and First Then First Now.
                <br />
                <br />
                We pride ourselves on our consistency and the creation of
                cohesive content which has translated seamlessly to the overall
                presence of Hype DC today.
              </p>
            </div>
          </GridOnlyTextSection>
          <GridOnlyGridSection>
            <Grid3Template>
              {images.map((key) => (
                <img
                  src={`static/ourvision/hypedc/${key}.jpg`}
                  alt={`Hype DC ${key}`}
                />
              ))}
            </Grid3Template>
          </GridOnlyGridSection>
        </OurVisionGridOnlyLayout>
      </OurVisionPageLayout>
    );
  }
}

export default hype2;
