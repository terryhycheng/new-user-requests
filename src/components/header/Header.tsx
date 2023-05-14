const Header = () => {
  return (
    <>
      {/* Color Bar */}
      <div className="bg-gradient-to-r from-[#893F84] to-[#E73A85] w-full h-14 px-10 lg:px-0">
        <div className="container mx-auto flex justify-end items-center h-full">
          <a
            data-cy="github-link"
            href="https://github.com/terryhycheng/new-user-requests"
            target="_blank"
            rel="noreferrer"
          >
            <img
              data-cy="github-logo"
              src="/github.svg"
              className="w-10"
              alt="github-logo"
            />
          </a>
        </div>
      </div>
      {/* Logo */}
      <div className="bg-[#F8F7F7] flex w-full justify-center">
        <img
          data-cy="pobl-logo"
          src="/pobl-logo.png"
          className="w-40 my-10"
          alt="logo"
        />
      </div>
    </>
  );
};

export default Header;
