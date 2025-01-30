const Contact8 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center">
          <h1 className="mb-3 text-5xl font-bold">Nous Contacter</h1>
        </div>
        <div className="mx-auto mt-24 grid max-w-screen-xl gap-4 md:grid-cols-2">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28977.20301339372!2d3.3293907512416165!3d50.06293396943577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c298af4168052d%3A0x77a41d4be091860c!2sBroderies%20Leveaux!5e0!3m2!1sfr!2sfr!4v1738067622454!5m2!1sfr!2sfr" width="600" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <div className="flex flex-col gap-2 rounded-lg bg-accent p-2">
            <div className="flex h-full flex-col justify-between gap-6 rounded-lg bg-background p-6">
              <p className="text-2xl">Email</p>
              <div className="flex flex-col">
                <a>help@example.com</a>
                <a>support@example.com</a>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between gap-6 rounded-md bg-background p-6">
              <p className="text-2xl">Offices</p>
              <div className="grid gap-8 md:grid-cols-2 md:gap-4">
                <div>
                  <p className="mb-2 text-xl text-muted-foreground md:mb-4">
                    New York
                  </p>
                  <p>123 6th St. Melbourne, FL 32904, USA</p>
                </div>
                <div>
                  <p className="mb-2 text-xl text-muted-foreground md:mb-4">
                    London
                  </p>
                  <p>123 3rd St. London, TL 32904, UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact8;
