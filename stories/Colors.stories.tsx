import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';

import v from 'scss/v';

const Wrapper = styled.div`
  padding-left: 1rem;

  > h1 {
    padding: .5rem 1rem 1rem 0;
  }

  > article {
    display: flex;

    .card {
      width: 5rem;
      border: 0 none;
      border-radius: 0;

      &-body, &-footer {
        margin: 0;
      }

      &-body {
        flex: none;
        padding: .125rem .375rem;
        height: 5rem;
      }

      &-title {
        padding-top: .25rem;
      }

      &-title {
        font-size: .75rem;
      }

      &-text {
        font-size: .625rem;
      }

      &-footer {
        flex: 1 1 auto;
        padding: .125rem 0;
        font-size: .5625rem;
      }
    }
  }
`;

const grayscaleColors = [
  { title: 'Nero', $v: '$grayscale-nero', desc: 'Global Header, Primary Text', color: 'white' },
  { title: 'Fortress', $v: '$grayscale-fortress', desc: 'Nav Tab bg, Modal Header', color: 'white' },
  { title: 'Kadesh', $v: '$grayscale-kadesh', desc: 'Active Tab', color: 'white' },
  { title: 'Gunmetal', $v: '$grayscale-gunmetal', desc: 'SubText', color: 'white' },
  { title: 'Apex', $v: '$grayscale-apex', desc: '', color: 'white' },
  { title: 'Defiant', $v: '$grayscale-defiant', desc: 'Non-crittical Action, Link', color: 'white' },
  { title: 'Silverlight', $v: '$grayscale-silverlight', desc: 'Form border, disabled, hint text', color: 'white' },
  { title: 'Bali Hai', $v: '$grayscale-baliHai', desc: 'Accent', color: 'black' },
  { title: 'Haze', $v: '$grayscale-haze', desc: 'Table header, lines, disbled bg', color: 'black' },
  { title: 'Gainesboro', $v: '$grayscale-gainesboro', desc: 'Accent', color: 'black' },
  { title: 'Chrome', $v: '$grayscale-chrome', desc: 'Sidebars', color: 'black' },
  { title: 'Erebus', $v: '$grayscale-erebus', desc: 'Knockout Text', color: 'black' },
  { title: 'White', $v: '$grayscale-white', desc: '', color: 'black' },
];

const primaryColors = [
  { title: 'Alizarin', $v: '$primary-alizarin', desc: 'Critical Alert, Errors', color: 'white' },
  { title: 'Sanctuary', $v: '$primary-sanctuary', desc: 'Accent', color: 'white' },
  { title: 'Tango', $v: '$primary-tango', desc: 'Selected action, Tab', color: 'white' },
  { title: 'Lucis', $v: '$primary-lucis', desc: 'Non-Critical Alerts, Errors', color: 'white' },
  { title: 'Hyperionh', $v: '$primary-hyperionh', desc: '', color: 'white' },
  { title: 'Empire', $v: '$primary-empire', desc: 'Accent', color: 'white' },
  { title: 'DeepSky', $v: '$primary-deepSky', desc: '', color: 'white' },
  { title: 'Viking', $v: '$primary-viking', desc: 'Accent', color: 'white' },
  { title: 'Emerald', $v: '$primary-emerald', desc: 'Accent', color: 'white' },
];

const controlColors = [
  { title: 'Pacific', $v: '$control-pacific', desc: 'Primary Action, Link', color: 'white' },
  { title: 'Kaiju', $v: '$control-kaiju', desc: 'Toggle, Accent', color: 'white' },
];

storiesOf('Color', module)
  .add('Grayscale', () => (
    <Wrapper>
      <h1>COLORS - GRAYSCALE</h1>
      <article>
        {grayscaleColors.map(({ title, $v, desc, color }) => (
          <Card key={$v}>
            <CardBody style={{ backgroundColor: v($v), color }}>
              <CardTitle>{title}</CardTitle>
              <CardText>{v($v)}</CardText>
            </CardBody>
            <CardFooter>{desc}</CardFooter>
          </Card>
        ))}
      </article>
    </Wrapper>
  ), {
    info: {
      inline: false,
    },
  })
  .add('Primary', () => (
    <Wrapper>
      <h1>COLORS - PRIMARY</h1>
      <article>
        {primaryColors.map(({ title, $v, desc, color }) => (
          <Card key={$v}>
            <CardBody style={{ backgroundColor: v($v), color }}>
              <CardTitle>{title}</CardTitle>
              <CardText>{v($v)}</CardText>
            </CardBody>
            <CardFooter>{desc}</CardFooter>
          </Card>
        ))}
      </article>
    </Wrapper>
  ), {
    info: {
      inline: false,
    },
  })
  .add('Control', () => (
    <Wrapper>
      <h1>COLORS - CONTROL</h1>
      <article>
        {controlColors.map(({ title, $v, desc, color }) => (
          <Card key={$v}>
            <CardBody style={{ backgroundColor: v($v), color }}>
              <CardTitle>{title}</CardTitle>
              <CardText>{v($v)}</CardText>
            </CardBody>
            <CardFooter>{desc}</CardFooter>
          </Card>
        ))}
      </article>
    </Wrapper>
  ), {
    info: {
      inline: false,
    },
  });
