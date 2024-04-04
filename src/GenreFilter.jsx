export default function GenreFilter({ list, handleClick }) {
  return (
    <div className="bg-body-secondary p-3 rounded">
      <h3>Filter by Genre</h3>
      <div
        className="btn-group "
        role="group"
        aria-label="Basic radio toggle button group"
      >
        {list.map((d, idx) => {
          return (
            <>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id={"btnradio" + idx}
                autoComplete="off"
                // checked = {d === 'All'}
              />
              <label
                className="btn btn-outline-dark"
                htmlFor={"btnradio" + idx}
                onClick={(e) => handleClick(e)}
              >
                {d}
              </label>
            </>
          );
        })}
      </div>
    </div>
  );
}
