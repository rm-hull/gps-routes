import { Alert, Code, Container, Heading, Text } from "@chakra-ui/react";
import { ErrorComponentProps } from "@tanstack/react-router";
import { GlassPane } from "./GlassPane";
import { useReadableStack } from "@/hooks/useReadableStack";

export function ErrorFallback({ error }: ErrorComponentProps) {
  const { stack, loading } = useReadableStack(error);

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
        {loading && <Text color="gray.500">Resolving source maps…</Text>}
        <Code background="none">
          <pre>{stack}</pre>
        </Code>
      </Container>
    </GlassPane>
  );
}
