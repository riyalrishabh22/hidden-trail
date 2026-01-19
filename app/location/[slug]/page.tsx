import { notFound } from "next/navigation";
import { Metadata } from "next";
import locationsData from "@/data/locations.json";
import LocationDetail from "@/components/LocationDetail";
import { generateSlug } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = locationsData.locations.find(
    (loc) => generateSlug(loc.name) === slug
  );

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: `${location.name} - Hidden Trails Rishikesh`,
    description: location.description,
    openGraph: {
      title: `${location.name} - Hidden Trails Rishikesh`,
      description: location.description,
      images: location.images?.[0] ? [location.images[0]] : [],
    },
  };
}

export async function generateStaticParams() {
  return locationsData.locations.map((location) => ({
    slug: generateSlug(location.name),
  }));
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = locationsData.locations.find(
    (loc) => generateSlug(loc.name) === slug
  );

  if (!location) {
    notFound();
  }

  return <LocationDetail location={location} />;
}
