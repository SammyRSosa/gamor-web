import { CATEGORIES } from "./constants"

export function TrendingCategories () {
    return (
        <>
        <div className="trending">
          <h4>Trending Categories</h4>
        </div>
        
        <section className="categories">
            {CATEGORIES.map((category, index) => (
                    <div key={index} className="item">
                        <strong>{index !== 7 ? "/0": "/All"}{index !== 7 ? index : ""}</strong>
                        <p>{category}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                ))}
        </section>
        </>
    )
}