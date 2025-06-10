import Card from '@/components/Card'

type CardContent = {
  title: string
}

function Projects() {
  const cardContents: CardContent[] = [
    // {
    //   title: "test",
    //   image: "image",
    //   description: "description",
    //   tech: "tectnologies",
    //   link: "link"
    // },
    {
      title: "test2"
    },
    {
      title: "test3"
    },
  ]

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-3 p-4 gap-4'>
    {
      cardContents.map((cardContent, index) => (<Card key={index} cardContent={cardContent}/>))
    }
    </div>
  )
}

export default Projects