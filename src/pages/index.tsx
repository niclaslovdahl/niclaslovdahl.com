import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const Wrapper = styled.div`
  margin: auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Image = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(me.jpeg);
  background-size: cover;
  width: 150px;
  height: 150px;
  flex-shrink: 0;
  border-radius: 50%;
`;

const Text = styled.div`
  padding-left: 2em;

  @media screen and (max-width: 768px) {
    padding: 1em 0 0 0;
  }
`;

export default () => {
  return (
    <Layout>
      <Wrapper>
        <Image />
        <Text>
          <p>Hello, I'm Niclas.</p>
          <p>
            Currently, I'm working as a Developer at{" "}
            <Link
              href="https://www.jayway.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jayway
            </Link>{" "}
            Malmö.
          </p>
          <p>
            Please send me an{" "}
            <Link href="mailto:niclas.lovdahl@gmail.com">email</Link> if you'd
            like to get in touch.
          </p>
        </Text>
      </Wrapper>
    </Layout>
  );
};
