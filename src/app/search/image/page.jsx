import ImageSearchResults from '@/components/ImageSearchResults';
import Link from 'next/link'; 
export default async function ImageSearchPage({ searchParams }) {

  const ak = process.env.API_KEY; // Accessing the API key from environment variables
  const ck = process.env.CONTEXT_KEY; // Accessing the context key from environment variables
  const startIndex = searchParams.start || '1';
  await new Promise((resolve)=>setTimeout(resolve,1000));
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${ak}&cx=${ck}&q=${searchParams.searchTerm}'}
    &searchType=image&start=${startIndex}`
  );

  if (!response.ok) {
    throw new Error('Something Went Wrong');
  }

  const data = await response.json();

  const results = data.items;

  if (!results) {
    return (
      <div className='flex flex-col justify-center items-center pt-10'>
        <h1 className='text-3xl mb-4'>
          No results found for {searchParams.searchTerm}
        </h1>
        <p className='text-lg'>
          Try searching the web or images for something else{' '}
          <Link href='/' className='text-blue-500'>
            Home
          </Link>
        </p>
      </div>
    );

  }
  return (
    // <div>
    //   {results.map((result, index) => (
    //     <h1 key={index}>{result.title}</h1>
    //   ))}
    // </div>
    // <div>{results && results.map((result)=><h1>{result.title}</h1>)}</div>
    <div>{results && <ImageSearchResults results={data}/>}</div>
  );

}


