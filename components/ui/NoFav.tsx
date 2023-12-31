import { Container, Text, Image } from '@nextui-org/react'
import React from 'react'

export const NoFav = () => {
  return (
    <Container css={{
        display:"flex",
        flexDirection: 'column',
        height: 'calc(100vh-100px)',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    }}>
        <Text h1>
            No hay Favoritos
        </Text>
        <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg" width={250} height={250} css={{opacity:0.1}} alt='pokemon icon'>

        </Image>

    </Container>
  )
}
