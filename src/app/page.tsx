import Viewer from "@/components/Viewer";

const fetchResume = async () => {
  const res = await fetch(`${process.env.DIRECTUS_API_URL}/items/about`, {
    headers: {
      Authorization: `Bearer ${process.env.DIRECRUS_API_TOKEN}`,
    },
    method: "GET",
    cache: "no-cache",
  });
  return await res.json();
};

export default async function Home() {
  const { data } = await fetchResume();

  return <Viewer data={data} />;
}
