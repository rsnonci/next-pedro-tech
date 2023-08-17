import Image from "next/image"

const getDogsData = async () => {
  const res = await fetch('https://dog.ceo/api/breeds/image/random', {
    cache: "no-store"
  });
  return res.json();
}

const ListOfPosts = async () => {
    const dogs = await getDogsData()
    return (
      <div>
        <Image src={dogs.message} alt="dog" width="300" height="300" />
      </div>
    )
  }
  
  export default ListOfPosts