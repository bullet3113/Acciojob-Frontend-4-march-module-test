
export default function MovieList({ list }) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody>
            {list.map((d, idx) => {
               return (<tr key={idx}>
                    <td>{d.title}</td>
                    <td>{d.genre}</td>
                    <td>{d.year}</td>
                </tr>)
            })}
        </tbody>
      </table>
    </>
  );
}
