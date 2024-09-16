import TransparentRect from "../TransparentRect";

const AboutBG = () => {
  return (
    <>
      {/* Rect top-left */}
      <TransparentRect className="absolute -top-6 -left-4 w-64 h-8  -z-20 origin-left animate-wave1" />
      <TransparentRect className="absolute -top-6 -left-4 w-52 h-10  -z-20 origin-left animate-wave1 animation-delay-2" />
      <TransparentRect className="absolute -top-6 -left-4 w-64 h-16  -z-20 origin-left animate-wave1 animation-delay-4" />

      {/* Rect mid right */}
      <TransparentRect className="absolute top-1/2 -right-4 w-64 h-8  -z-20 origin-right animate-wave2" />
      <TransparentRect className="absolute top-1/2 -right-4 w-52 h-10  -z-20 origin-right animate-wave2 animation-delay-2" />
      <TransparentRect className="absolute top-1/2 -right-4 w-64 h-16  -z-20 origin-right animate-wave2 animation-delay-4" />

      {/* Rect bottom left */}
      <TransparentRect className="absolute bottom-0 -left-4 w-64 h-8 -z-20 origin-left animate-wave3" />
      <TransparentRect className="absolute bottom-0 -left-4 w-52 h-10 -z-20 origin-left animate-wave3 animation-delay-2" />
      <TransparentRect className="absolute bottom-0 -left-4 w-64 h-16 -z-20 origin-left animate-wave3 animation-delay-4" />
    </>
  );
};

export default AboutBG;
