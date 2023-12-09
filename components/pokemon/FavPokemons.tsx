import { Grid, Card } from '@nextui-org/react'
import React, { FC } from 'react'
import { useRouter } from 'next/router';
import { FavPokeCard } from './FavPokeCard';

interface Props{
    pokemons: number[]
}

export const FavPokemons: FC<Props>= ({pokemons}) => {
    
  return (
    
    <Grid.Container gap={2} direction='row' justify='flex-start'>
    {pokemons.map(id=> (
      <FavPokeCard key={id} numberId={id}/>
    ))}

  </Grid.Container>
  )
}
