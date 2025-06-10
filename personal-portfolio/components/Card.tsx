import Chips from "./Chips"

type CardProps = {
    cardContent: {
        title: string,
    }
}

function Card({ cardContent }: CardProps) {
  return (
    <div className="d-flex items-start bg-zinc-900 rounded-t-4xl">
      <div className='bg-red-300 h-60 rounded-4xl'>
       görsel
      </div>
      <div className="p-5">
      <h1 className="text-red-300 text-shadow-red-400 font-extrabold text-2xl">{cardContent.title}</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo porro natus molestiae, sed consequatur repellat magnam dolore debitis quae labore omnis excepturi officia odit aliquam deleniti. Aspernatur hic incidunt voluptate!</p>
      </div>
      <div className="flex flex-wrap items-center jusitfy-between gap-2 border-2 bg-zinc-900 border-red-300 px-4 py-2 rounded-b-4xl">
        <Chips />
        <Chips /><Chips /><Chips /><Chips /><Chips /><Chips />
      </div>
    </div>
  )
}

export default Card