function SearchBar(props) {
    return (
        <div>
            <div className="SearchBar">
            <input type="text" placeholder="Search..." onChange={e => props.setSearchTerm(e.target.value)} />
            </div>
            <input type="checkbox" id="in-stock" />
            <label htmlFor="in-stock">Only show products in stock</label>
        </div>
    );
}

export default SearchBar;
