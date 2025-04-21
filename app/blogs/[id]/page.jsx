import BlogClientPage from "../../../Components/ClientPage";


export default function Page({ params }) {
  return(
    <BlogClientPage id={params.id}/>
  );
}
