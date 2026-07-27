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
    specialty: "Piercing Artist & Minimal Tattoos",
    bio: "Aravind is a founding artist at Aquarius Tattoo Studio specializing in professional body piercing and delicate, fine-line minimal tattoo designs. With a sharp eye for detail, he ensures precision and safety in every piece.",
    image: "/Images/aravind_artist_dp.jpeg",
    experience: "5+ Years",
    awards: [],
    styles: ["Piercings", "Minimalist", "Fine Line", "Micro Art"],
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
