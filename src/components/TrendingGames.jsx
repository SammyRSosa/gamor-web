import { IMAGES } from "./constants"

export function TrendingGames () {
    return ( 
        <>
        <div className="trending">
          <h4>Trending Games</h4>
          <button className="button-trending">+ More games</button>
        </div>
        <section className="games">
        {
        IMAGES.map(([game, imageUrl]) => (
        <img src={imageUrl} alt={game} key={game} />
        ))
        }
      </section>
        </>
    )
}
