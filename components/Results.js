import Thumbnail from "./Thumbnail"

export default function Results({ results }) {

    return (
        <div className="px-5 my-5 sm:px-10 sm:my-10 sm:grid md:grid-cols-2 lg:grid-cols-3
         xl:grid-cols-4 2xl:grid-cols-5 3xl:flex flex-wrap">
            {
                results?.map((result, key) => (
                    <div key={key}>
                        <Thumbnail result={result} />
                    </div>
                ))
            }
        </div>
    )
}