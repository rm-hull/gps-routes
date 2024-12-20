import { Result } from "../../types";
import { GlassPane } from "../../GlassPane";
import { createFileRoute } from "@tanstack/react-router";
import { Heading } from "@chakra-ui/react";
import { Md5 } from "ts-md5";

export const Route = createFileRoute("/gps-routes/$ref")({
  loader: async ({ params }) => fetchResult(params.ref),
  component: DetailPage,
});

function DetailPage() {
  const { ref } = Route.useParams();
  const result = Route.useLoaderData();
  return (
    <GlassPane>
      <Heading size="lg">Hello "/gps-routes/{ref}" !</Heading>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </GlassPane>
  );
}

async function fetchResult(ref: string): Promise<Partial<Result> | null> {
  const objectID = Md5.hashStr(ref);
  console.log(`Pretending to fetch data for ${ref} / ObjectID = ${objectID}`);
  return {
    ref,
    objectID,
  };
}
