import { Alert, Code, Container, Heading } from "@chakra-ui/react";
import { ErrorComponentProps } from "@tanstack/react-router";
import { GlassPane } from "./GlassPane";

export function ErrorFallback({ error }: ErrorComponentProps) {
  return (
    <GlassPane>
      <Alert.Root status="error">
        <Alert.Indicator />
        <Alert.Title>Something went wrong:</Alert.Title>
        <Alert.Description>
          <strong>{error.message}</strong>
        </Alert.Description>
      </Alert.Root>

      <Container m={5}>
        <Heading size="sm">Stack trace</Heading>
        <Code background="none">
          <pre>{error.stack}</pre>
        </Code>
      </Container>
    </GlassPane>
  );
}
