import logo from "../assets/images/logo_ochisa.png";
import Card from "../components/Card";
import TransparentRect from "../components/TransparentRect";

//* TODO: Add ganbu photos after photoshoot

const About = () => {
  return (
    <div className="bg-gradient-to-br from-grad-red to-grad-orange flex flex-col items-center py-8 relative -z-20">
      <div className="-top-0 absolute w-full h-full bg-transparent-layer backdrop-blur-sm -z-10"></div>

      <TransparentRect className="absolute -top-6 -left-4 w-64 h-16 rotate-45 -z-20 origin-left animate-wave1" />

      <img src={logo} alt="ochisa_logo" className="w-96" />

      <div className="flex justify-between mt-14 items-center">
        <div className="h-thin w-64 bg-white"></div>
        <h2 className="font-semibold text-white mx-4">About Us</h2>
        <div className="h-thin w-64 bg-white"></div>
      </div>

      <p className="w-aboutpage-p-width text-center text-white mt-2">
        OC-HISA is a community of Indonesian students in Hsinchu, Taiwan. Our
        members are Indonesian students from two Taiwan national universities in
        Hsinchu: National Tsing Hua University (NTHU) and National Yang Ming
        Chiao Tung University (NYCU).
      </p>

      <Card className="w-aboutpage-p-width mt-4">
        <p className="text-center">
          We have been an active community that helps Indonesians who come to
          study in the windy city of Taiwan since 1995. Since the birth of our
          community, we have served as a home away from home, where individuals
          and families from the two universities can connect and share support
          with each other.
        </p>
      </Card>

      <p className="w-aboutpage-p-width text-center text-white mt-6">
        We organize a variety of events each year, from a barbecue party to
        celebrate the freshmen in the first semester of the year to a graduation
        party as a farewell party to our seniors by the end of the second
        semester of the same year.
      </p>

      <Card className="w-aboutpage-p-width mt-4">
        <p className="text-center">
          Our mission is always to provide a place where Indonesians can feel as
          if they’re home.
        </p>
      </Card>
    </div>
  );
};

export default About;
