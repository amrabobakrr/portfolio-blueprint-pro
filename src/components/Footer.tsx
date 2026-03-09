const Footer = () => (
  <footer className="py-8 px-6 bg-hero text-hero-muted text-center">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-heading font-bold text-hero-foreground">
        Amr<span className="text-primary">.</span>
      </span>
      <p className="text-sm">© {new Date().getFullYear()} Amr Abobakr. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
