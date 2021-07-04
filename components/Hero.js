export const Hero = () => {
  return (
    <main className="grid-x Hero__Container">
      <div className="hide-for-small-only medium-4">PHONE</div>
      <div className="small-12 medium-8 Hero__Content">
        <h1>
          One click
          <br />
          No passwords.
          <br />
          The world's fastest checkout
        </h1>
        <p>
          Forget passwords. Skip long entry forms. Shop online and securely
          check out with a single click. It's safe, easy, and yep, fast.
        </p>
        <button>Sing up for Fast</button>
        <a href="#">Get Fast for your business</a>
      </div>
    </main>
  );
};
