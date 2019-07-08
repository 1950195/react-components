import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap';
import styled from 'styled-components';
import v from 'style/v';

const Wrapper = styled.div`
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
`;

const colors = [
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

const App: React.FC = () => {
  return (
    <div>
        <div className="m-2">
          <Wrapper>
            {colors.map(({ title, $v, desc, color }) => (
              <Card key={$v}>
                <CardBody style={{ backgroundColor: v($v), color }}>
                  <CardTitle>{title}</CardTitle>
                  <CardText>{v($v)}</CardText>
                </CardBody>
                <CardFooter>{desc}</CardFooter>
              </Card>
            ))}
          </Wrapper>
        </div>
    </div>
  );
};

export default App;
