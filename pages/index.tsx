import styled from 'styled-components';
import Banner from '../components/Banner';
import SignUpForm from '../components/SignUpForm';
import Title from '../components/Title';

const Home = () => {
  return (
    <Wrapper data-testid='app'>
      <Copy>
        <Title as={'h1'}>Learn to code by watching others</Title>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </Copy>
      <Form>
        <Banner>
          <p>
            <Bold>Try it free 7 days</Bold> {` then $20/mo. thereafter`}
          </p>
        </Banner>
        <SignUpForm />
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 74px;
  padding-bottom: 74px;
  gap: 24px;
  background-color: var(--color-primary-red);
  background-image: url('/assets/bg-intro-mobile.png');
  background-image: -webkit-image-set(
    url('/assets/bg-intro-mobile.png') 1x,
    url('/assets/bg-intro-desktop.png') 2x
  );
  background-image: image-set(
    url('/assets/bg-intro-mobile.png') 1x,
    url('/assets/bg-intro-desktop.png') 2x
  );
  h1 {
    font-weight: var(--font-weight-semi-bold);
  }
  @media (min-width: 1280px) {
    padding-left: 7.5%;
    padding-right: 7.5%;
    flex-direction: row;
    justify-content: center;
    algin-items: center;
    gap: 72px;
  }
`;
const Bold = styled.span`
  font-weight: var(--font-weight-bold);
`;

const Section = styled.section`
  width: 100%;
  width: clamp(320px, 95%, 1280px);
  padding-left: 24px;
  padding-right: 24px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 1280px) {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Copy = styled(Section)`
  color: var(--color-neutral-white);
  text-align: center;
  @media (min-width: 1280px) {
    padding: 0;
    flex-direction: column;
    text-align: left;
    h1,
    p {
      max-width: 480px;
      align-self: flex-end;
    }
  }
  h1,
  p {
    max-width: 500px;
    align-self: center;
  }
`;

const Form = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export default Home;
