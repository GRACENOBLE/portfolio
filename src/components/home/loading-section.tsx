import Container from "../common/container";

const LoadingSection = () => {
  return (
    <section className="min-h-screen bg-black">
      <Container>
        <div className="h-40 w-40 bg-white/10 animate-pulse "></div>
      </Container>
    </section>
  );
};

export default LoadingSection;
