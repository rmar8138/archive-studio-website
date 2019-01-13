import React, { Component } from 'react';
import styled from 'styled-components';

const AboutPage = styled.div`
  color: ${(props) => props.theme.beige};
  height: 100vh;
  background-color: ${(props) => props.theme.navy};
  padding: 7.2rem;
  display: flex;

  h1 {
    color: ${(props) => props.theme.red};
    font-size: 4.2rem;
    margin: 0 auto;
  }

  a {
    color: ${(props) => props.theme.beige};
  }

  p {
    line-height: 1.4;

    span {
      font-family: 'Suisse Works Book', serif;
      color: ${(props) => props.theme.red};
      font-size: 1.8rem;
    }
  }
`;

const Contact = styled.div`
  flex: 0 0 44.7%;
  order: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-family: 'Suisse Works Book', serif;
  }
`;

const Description = styled.div`
  flex: 1;
  margin-top: 10.9rem;
`;

export class About extends Component {
  render() {
    return (
      <AboutPage>
        <Contact>
          <h1>about.</h1>
          <ContactContainer>
            <p>Let's talk ideas</p>
            <div>
              <li>Angela</li>
              <li>
                <a href="mailto:a@ar-chive.studio">a@ar-chive.studio</a>
              </li>
              <li>+61 415 186 230</li>
            </div>
            <div>
              <li>Rowland</li>
              <li>
                <a href="mailto:r@ar-chive.studio">r@ar-chive.studio</a>
              </li>
              <li>+61 432 731 979</li>
            </div>
          </ContactContainer>
        </Contact>
        <Description>
          <p>
            <span>ar-chive</span> is an independent creative studio based in
            Sydney, led by Angela Tam and Rowland Reyes Martinez.
            <br />
            Founded on honest observation, curiosity and meaningful design, the
            studio works towards realizing conceptual ideas with an artistic
            approach.
            <br />
            With their own individual art practice, Angela and Rowland explore
            vulnerable expression through a variety of mediums allowing them to
            translate their creative process into client projects.
          </p>
        </Description>
      </AboutPage>
    );
  }
}

export default About;
