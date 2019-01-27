import React, { Component } from 'react';
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
                  <span>Talent</span> Amy Jane Dowdle &amp; Josh Dowdle
                </li>
              </ul>
            </div>
          </GridOnlyTextSection>
          <GridOnlyGridSection>
            <Grid3Template>
              {images.map((key) => (
                <img
                  src={`static/ourvision/firstthenfirstnow/${key}.jpg`}
                  alt={`First Then First Now ${key}`}
                />
              ))}
            </Grid3Template>
          </GridOnlyGridSection>
        </OurVisionGridOnlyLayout>
      </OurVisionPageLayout>
    );
  }
}

export default hype;
