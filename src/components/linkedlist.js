function LinkList({ title, links }) {
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-title">{title}</h6> 
        <ul className="list-group list-group-flush">
          {links.map((item, index) => (
            <li className="list-group-item" key={index}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LinkList