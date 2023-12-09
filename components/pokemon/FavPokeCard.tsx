import { Grid, Card } from "@nextui-org/react"
import { useRouter } from "next/router"
import { FC } from "react"

interface Props{
    numberId: number
}

export const FavPokeCard: FC<Props>= ({numberId}) => {
    const router=useRouter()

    const OnClickFav =()=>{
        router.push(`/pokemon/${numberId}`)
    }


  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={numberId} onClick={OnClickFav}>
        <Card isHoverable isPressable css={{padding: 10}}>
          <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${numberId}.svg`} width={'100'} height={140}></Card.Image>
        </Card>
      </Grid>
  )
}
