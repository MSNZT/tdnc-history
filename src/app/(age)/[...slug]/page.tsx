import { PageMap } from "@/src/components/PageMap";
import { notFound } from "next/navigation";
import { goldegAge, silverAge, contemporary, Marker } from "./data";

const allowedPaths = ["golden-age", "silver-age", "contemporary"];

export default async function PageCenturies({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  if (!allowedPaths.includes(slug[0])) {
    return notFound();
  }
  let markers: Marker[] = [];

  switch (slug[0]) {
    case "golden-age":
      markers = goldegAge;
      break;
    case "silver-age":
      markers = silverAge;
      break;
    case "contemporary":
      markers = contemporary;
      break;
  }

  return <PageMap markers={markers} />;
}
