import type { GetStaticProps, NextPage } from 'next'
import { Layout } from '../components/layouts/Layout';
import pokeApi from '../api/pokeApi';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { PokemonCard } from '../components/pokemon';

interface Props{
  pokemons: SmallPokemon[]
}

const Home: NextPage<Props> = ({pokemons}) => {
  return (
    <Layout title='Listado de Pokemons'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map((poke)=>(
          <PokemonCard key={poke.id} pokemon={poke} />
        ))}
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps:GetStaticProps=async(ctx)=> {
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  const pokemons: SmallPokemon[]=data.results.map((poke,i)=>({...poke, id: i+1 ,img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`

  }))

  return {
    props: {
      pokemons
    }, // will be passed to the page component as props
  }
}
export default Home
