import { useParams } from "react-router-dom"
import { Header, Segment, Image, List, Label, Accordion, Card } from "semantic-ui-react"
import { useQuery } from "@tanstack/react-query"
import { fetchTvShowDetails } from "./query"
import { Loader } from "semantic-ui-react"
import { Grid } from "semantic-ui-react"
import { useContext } from 'react';
import { ThemeContext } from '../../components/Themedark';


export const TvShow = () => {
    const { darkMode } = useContext(ThemeContext);
    const {id} = useParams<string>()
    if (!id) {
        return <div>Invalid Tv show ID</div>
    }
    const {data, isLoading} = 
    useQuery({queryKey: ["tvShow"], 
    queryFn: () => fetchTvShowDetails(id)});

    if (isLoading) {
        return <Loader>Loading...</Loader>
    }
    const seasonsPanels = data.seasons.map((season: any) => ({
        key: season.id,
        title: `Season ${season.season_number}`,
        content: {
            content: (
                <Card style={{height: "70px"}} meta={season.air_date}
                 description={`${season.episode_count} episodes`}/>
                
            )
        }
    }))

    return (
        <div style={{marginTop: 50}}>
            <Segment className={`tvshow-info ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                <Header>{data.name}</Header>
                <Grid columns={2} divided textAlign="left" style={{marginTop: 20}}>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <div style={{display: "flex", alignItems: "center",
                        justifyContent: "center", height:"100%"}}>
                                <Image size="medium" centered src={`https://image.tmdb.org/t/p/original${data.poster_path}`} />
                            </div>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <List>
                                <List.Item>
                                    <List.Header>Created By: </List.Header>
                                    {data.created_by.map((creator: any) => creator.name).join(", ")}
                                </List.Item>
                                <List.Item>
                                    <List.Header>Episodes Run Time: </List.Header>
                                    {data.episode_run_time.join(", ")}
                                </List.Item>
                                <List.Item>
                                    <List.Header>Genres: </List.Header>
                                    {data.genres.map((genre: any) => <Label key={genre.id}>{genre.name}</Label>)}
                                </List.Item>
                                <List.Item>
                                    <List.Header>First air date:</List.Header>
                                    {data.first_air_date}
                                </List.Item>
                                <List.Item>
                                    <List.Header>Networks:</List.Header>
                                    {data.networks.map((network: any) => network.name).join(", ")}
                                </List.Item>
                                <List.Item>
                                    <List.Header>Production Companies: </List.Header>
                                    {data.production_companies.map((company: any) => company.name).join(", ")}
                                </List.Item>
                                <List.Item>
                                    <List.Header>Number of Episodes:</List.Header>
                                    {data.number_of_episodes}
                                </List.Item>
                                <List.Item>
                                    <List.Header>Number of Seasons:</List.Header>
                                    {data.number_of_seasons}
                                </List.Item>
                                <List.Item>
                                    <List.Header>Seasons:</List.Header>
                                    <List.Description style={{height: "200px", overflowY: "scroll"}}>
                                        <Accordion defaultActiveIndex={0} panels={seasonsPanels} styled/>
                                    </List.Description>
                                </List.Item>
                                <List.Item>
                                    <List.Header>Vote Average: </List.Header>
                                    {data.vote_average}
                                </List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>   
                </Grid>
            </Segment>
        </div>
    )
}