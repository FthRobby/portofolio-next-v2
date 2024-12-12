import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import React from "react";

export const EmailTemplate = ({ body, email, nama }) => (
  <Html>
    <Head />
    <Preview>
      From your landing page.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://www.frobby.tech/logo.jpg`}
          width="100"
          height="100"
          alt="logo"
          style={logo}
        />
        <Text style={paragraph}>
          Hi Fatah, you've new message from your page
        </Text>
        <Text style={paragraph}>{body}</Text>
        <Text style={paragraph}>
          This message from : {nama} | {email}
        </Text>
        <Section style={btnContainer}>
          <Button
            href={`mailto:${email}`}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: 12,
              fontWeight: 600,
              borderRadius: 8,
              textAlign: "center",
              backgroundColor: "#1b1b1b",
              color: "#f5f5f5",
            }}
          >
            Reply Message
          </Button>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          Auto message forwarding, made by Fatah RobbySalam
        </Text>
        <Text style={footer}>
          Reply message using 
        </Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#1b1b1b",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
