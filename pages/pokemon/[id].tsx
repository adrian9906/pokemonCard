import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React, { useState } from 'react'
import { pokeApi } from '../../api'
import { Layout } from '../../components/layouts/Layout';
import { Pokemon } from '../../interfaces/pokemon-full';
import localFav from '../../utils/localFav';
import confetti from 'canvas-confetti'

interface Props{
    pokemon: Pokemon
}
const PokemonPage: NextPage<Props> = ({pokemon}) => {
    const [isInFav, setIsInFav] = useState(localFav.existFav(pokemon.id))

    
    const favClick=()=>{
        localFav.favClick(pokemon.id)
        setIsInFav(!isInFav)
        
        if(isInFav) return;
        
        confetti({
            zIndex:999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin:{
                x:1,
                y:0,
            }
        })

    }
  return (
    <Layout title={pokemon.name}>
        <Grid.Container css={{marginTop: '5px'}} gap={2}>
            <Grid xs={12} sm={4}>
                <Card isHoverable css={{padding: '30px'}}>
                    <Card.Body>
                        <Card.Image src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'} alt={pokemon.name} width='100%' height={200}/>
                    </Card.Body>

                </Card>
            </Grid>
            <Grid xs={12} sm={8}>
                <Card.Header css={{display:'flex',justifyContent: 'space-between'}}>
                    <Text h1>
                        {pokemon.name}
                    </Text>
                    <Button color='gradient' ghost={!isInFav} onClick={favClick}>
                        {isInFav ? "En favoritos": "Guardar en favoritos"}
                    </Button>
                </Card.Header>
            </Grid>
            <Grid>
                <Card.Body>
                    <Text size={30}>Sprites:</Text>
                    <Container direction='row' display='flex' gap={0}>
                        <Image src={pokemon.sprites.front_default} alt={pokemon.name} width='100%' height={100}/>
                        <Image src={pokemon.sprites.back_default} alt={pokemon.name} width='100%' height={100}/>
                        <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width='100%' height={100}/>
                        <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width='100%' height={100}/>
                    </Container>
                </Card.Body>

            </Grid>

        </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths= async (ctx)=>{ 
    const pokemonAll=[...Array(151)].map((value, index)=>`${index+1}`)


    return{
        paths:pokemonAll.map(id=>({
            params:{id}
        })),
        fallback: 'blocking'
    }
}

export const getStaticProps:GetStaticProps=async({params})=> {
    const {id}=params as{id: string}

    const {data} = await pokeApi.get<Pokemon>(`/pokemon/${id}`)
    const pokemon={
        id: data.id,
        name:data.name,
        sprites: data.sprites
    }
    return {
      props: {
        pokemon
      }, // will be passed to the page component as props
      revalidate: 86400,
    }
  }

export default PokemonPage