import { Card, Grid} from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts/Layout'
import { FavPokemons } from '../../components/pokemon'
import { NoFav } from '../../components/ui'
import { localfav } from '../../utils'

const FavoritePage = () => {

  const [favPokemon, setFavPokemon] = useState<number[]>([])

  useEffect(() => {
    setFavPokemon(localfav.pokemons)
  }, [])
  
  return (
    <Layout title='Pkemons Favoritos'>
      {
        favPokemon.length===0 ? (<NoFav/>) :(
        <FavPokemons pokemons={favPokemon}/>
        )  
      }
    </Layout>
  )
}

export default FavoritePage