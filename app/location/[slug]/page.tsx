import { notFound } from "next/navigation";
import { Metadata } from "next";
import locationsData from "@/data/locations.json";
import LocationDetail from "@/components/LocationDetail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = locationsData.locations.find(
    (loc) => loc.id.toString() === slug
  );

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  const imageUrl = location.images?.[0] ? `https://hiddentrails.netlify.app${location.images[0]}` : 'https://hiddentrails.netlify.app/images/triveni-ghat/image1.png';
  const url = `https://hiddentrails.netlify.app/location/${location.id}`;

  return {
    title: `${location.name} - ${location.category}`,
    description: location.description,
    keywords: [location.name, location.category, "Rishikesh", "hidden places", "travel guide", "offbeat destinations", "Uttarakhand tourism"],
    openGraph: {
      type: 'article',
      url: url,
      title: `${location.name} - Hidden Trails Rishikesh`,
      description: location.description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: location.name,
        },
      ],
      siteName: 'Hidden Trails Rishikesh',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${location.name} - Hidden Trails Rishikesh`,
      description: location.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
  };
}

export async function generateStaticParams() {
  return locationsData.locations.map((location) => ({
    slug: location.id.toString(),
  }));
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = locationsData.locations.find(
    (loc) => loc.id.toString() === slug
  );

  if (!location) {
    notFound();
  }

  const imageUrl = location.images?.[0] ? `https://hiddentrails.netlify.app${location.images[0]}` : '';
  const url = `https://hiddentrails.netlify.app/location/${location.id}`;

  // Structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: location.name,
    description: location.description,
    url: url,
    image: imageUrl,
    touristType: location.category,
    isAccessibleForFree: true,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Rishikesh',
      addressRegion: 'Uttarakhand',
      addressCountry: 'IN',
    },
  };

  return (
    <>\n      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />\n      <LocationDetail location={location} />\n    </>\n  );
}
