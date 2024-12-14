import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Column,
} from "@react-email/components";
import * as React from "react";

export const EmailTemplate = ({ nama, email, body }) => {
  const previewText = `Read ${nama}'s message`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section>
            <Column>
              <Img
                src={`https://www.frobby.tech/logo.jpg`}
                width="50"
                height="50"
                alt="frobby_tech"
                style={{ borderRadius: 20, marginTop: 10, marginRight: 20 }}
              />
            </Column>
            <Column>
              <Text style={{ fontSize: 50 }}>|</Text>
            </Column>
            <Column>
              <Img
                src={`https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png`}
                width="100"
                height="30"
                alt="react_email_logo"
              />
            </Column>
          </Section>

          <Section>
            <Text style={paragraph}>You have new message from : {nama} </Text>
          </Section>
          <Section style={{ paddingBottom: "20px" }}>
            <Row>
              <Text style={heading}>Here's what {nama} wrote</Text>
              <Text style={review}>{body}</Text>
              <Text style={paragraph}>
                {nama}'s email : {email}{" "}
              </Text>
              <Button style={button} href={`mailto:${email}`}>
                reply message
              </Button>
            </Row>
          </Section>

          <Hr style={hr} />

          <Section>
            <Row>
              <Text style={reportLink}>
                Auto messgae forwarding, made by Fatah RobbySalam
              </Text>
              <Link href="https://resend.com/emails" style={reportLink}>
                Powered by Resend API
              </Link>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const userImage = {
  margin: "0 auto",
  marginBottom: "16px",
  borderRadius: "50%",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const button = {
  backgroundColor: "#1b1b1b",
  borderRadius: "8px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  padding: "12px",
};

const link = {
  ...paragraph,
  color: "#ff5a5f",
  display: "block",
};

const reportLink = {
  fontSize: "14px",
  color: "#9ca299",
  textDecoration: "underline",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#9ca299",
  fontSize: "14px",
  marginBottom: "10px",
};
