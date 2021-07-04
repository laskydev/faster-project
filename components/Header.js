export const Header = () => {
  return (
    <div className="grid-x header__container">
      <div className="small-12 medium-3 header__container-logo">
        <h2>Faster</h2>
      </div>
      <div className="hide-for-small-only medium-6 header__container-nav">
        <nav>
          <ul>
            <li>How Fast?</li>
            <li>Sellers</li>
            <li>Store</li>
            <li>Docs</li>
            <li>Help</li>
          </ul>
        </nav>
      </div>
      <div className="hide-for-small-only medium-3 header__container-button">
        <button>Fast login</button>
      </div>
    </div>
  );
};
