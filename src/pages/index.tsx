import { Container, Grid } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'
import Loading from '../components/loading'
import SearchBar from '../components/search'
import type { Gif } from '../interfaces/Gif'
import { useGetTrendingGifsMutation, useSearchGifsMutation } from '../redux/apis'

export default function MainPage(): JSX.Element {
  const [gifs, setGifs] = React.useState<Gif[]>([])
  const [query, setQuery] = React.useState<string | null>(null)
  const [getGifs, { isLoading: isLoadingTrendingGifs }] = useGetTrendingGifsMutation()
  const [searchGifs, { isLoading: isLoadingSearchGifs }] = useSearchGifsMutation()

  React.useEffect(() => {
    // eslint-disable-next-line
    getGifs(undefined)
      .unwrap()
      .then(({ data }) => {
        setGifs(data)
      })
  }, [])

  React.useEffect(() => {
    // eslint-disable-next-line
    searchGifs(query)
      .unwrap()
      .then(({ data }) => {
        setGifs(data)
      })
  }, [query])

  return (
    <Container
      maxWidth='xl'
      sx={{
        p: 1,
      }}
    >
      <Box>
        <SearchBar
          fullWidth
          placeholder='Search here...'
          onChange={(text) => {
            setQuery(text as string | null)
          }}
        />
      </Box>
      {isLoadingTrendingGifs || isLoadingSearchGifs ? (
        <Loading />
      ) : (
        <Grid container spacing={2} padding={2}>
          {gifs.map((gif, idx) => {
            const image = gif.images.fixed_height.url

            return (
              <Grid key={idx} item xs={12} sm={6} md={4}>
                <Box>
                  <img
                    style={{
                      height: 300,
                      width: '100%',
                    }}
                    src={image}
                  />
                </Box>
              </Grid>
            )
          })}
        </Grid>
      )}
    </Container>
  )
}
