export interface Artist {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  experience: string;
  awards: string[];
  styles: string[];
  galleryImages: string[];
}



export const artists: Artist[] = [
  {
    id: "aravind",
    name: "Aravind",
    specialty: "Realism & Black and Grey",
    bio: "Aravind is a founding artist at Aquarius Tattoo Studio with a sharp eye for detail and a passion for bringing stories to life on skin. His work spans realism, portraiture, and bold blackwork.",
    image: "/placeholder-user.jpg",
    experience: "5+ Years",
    awards: [],
    styles: ["Realism", "Portrait", "Black & Grey", "Blackwork"],
    galleryImages: []
  },
  {
    id: "aswin",
    name: "Aswin",
    specialty: "Fine Line & Geometric",
    bio: "Aswin blends precision with artistry, specialising in fine line work, geometric patterns, and custom designs. Every piece he creates is tailored to the individual, turning concepts into lasting art.",
    image: "/studio/artist/aswin_dp.jpg",
    experience: "4+ Years",
    awards: [],
    styles: ["Fine Line", "Geometric", "Mandala", "Minimalist"],
    galleryImages: ["/studio/artist/aswin.jpg"]
  }
];

export async function getArtistById(id: string): Promise<Artist | undefined> {
  return artists.find(artist => artist.id === id);
}
