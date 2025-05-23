import { Hero } from "@/components/Hero";

export async function getServerSideProps() {
  // Fetching data from your Drupal site API
  const res = await fetch('http://longcovidweb.ddev.site/api/content');
  const data = await res.json();

  return {
    props: { content: data },
  };
}

function Page({ content }) {
  return (
    <div>
      {/* Pass the content as a prop to the Hero component */}
      <Hero content={content} />
    </div>
  );
}

export default Page;