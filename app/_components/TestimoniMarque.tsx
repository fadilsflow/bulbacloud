
// const testimonials: TestimonialProps[] = [
//   {
//     content:
//       "Bulba Cloud sangat membantu bisnis saya. Layanan mereka luar biasa dan support selalu responsif.",
//     author: "Ahmad Rizki",
//     role: "CEO",
//     company: "TechStart",
//     rating: 5,
//     avatarSrc: "/placeholder.svg?height=40&width=40",
//   },
//   {
//     content:
//       "Saya sudah menggunakan Bulba Cloud selama 2 tahun dan tidak pernah mengalami masalah. Sangat direkomendasikan!",
//     author: "Siti Nurhaliza",
//     role: "Developer",
//     company: "CodeLabs",
//     rating: 5,
//     avatarSrc: "/placeholder.svg?height=40&width=40",
//   },
//   {
//     content:
//       "Platform yang sangat user-friendly dan harga yang terjangkau. Sempurna untuk startup seperti kami.",
//     author: "Budi Santoso",
//     role: "Founder",
//     company: "GrowthTech",
//     rating: 4,
//     avatarSrc: "/placeholder.svg?height=40&width=40",
//   },
//   {
//     content:
//       "Kecepatan dan keamanan layanan Bulba Cloud benar-benar membantu kami meningkatkan performa website.",
//     author: "Diana Putri",
//     role: "CTO",
//     company: "WebSolutions",
//     rating: 5,
//     avatarSrc: "/placeholder.svg?height=40&width=40",
//   },
//   {
//     content:
//       "Customer service yang luar biasa. Selalu siap membantu kapanpun dibutuhkan.",
//     author: "Rudi Hermawan",
//     role: "Product Manager",
//     company: "Inovasi Digital",
//     rating: 4,
//     avatarSrc: "/placeholder.svg?height=40&width=40",
//   },
//   {
//     content:
//       "Migrasi ke Bulba Cloud adalah keputusan terbaik yang pernah kami buat untuk infrastruktur IT kami.",
//     author: "Anita Wijaya",
//     role: "IT Director",
//     company: "FutureTech",
//     rating: 5,
//     avatarSrc: "/placeholder.svg?height=40&width=40",
//   },
//   {
//     content:
//       "Sistem monitoring yang lengkap membuat kami tidak perlu khawatir dengan downtime. Bulba Cloud sangat andal!",
//     author: "Bambang Supriadi",
//     role: "DevOps Engineer",
//     company: "CloudNative",
//     rating: 5,
//     avatarSrc: "/placeholder.svg?height=40&width=40",
//   },
//   {
//     content:
//       "Fitur backup otomatis Bulba Cloud memberikan ketenangan pikiran untuk tim kami. Layanan yang sangat bagus.",
//     author: "Maya Indah",
//     role: "System Admin",
//     company: "DataSafe",
//     rating: 5,
//     avatarSrc: "/placeholder.svg?height=40&width=40",
//   },
//   {
//     content:
//       "Kami memindahkan 15 aplikasi ke Bulba Cloud dalam 2 bulan terakhir. Prosesnya sangat lancar berkat bantuan tim support.",
//     author: "Hendra Wijaya",
//     role: "IT Manager",
//     company: "MultiApp",
//     rating: 4,
//     avatarSrc: "/placeholder.svg?height=40&width=40",
//   },
//   {
//     content:
//       "Bulba Cloud memberikan kemudahan deployment yang tidak pernah saya temukan di platform lain. Sangat direkomendasikan!",
//     author: "Ratna Sari",
//     role: "Frontend Developer",
//     company: "UI Masters",
//     rating: 5,
//     avatarSrc: "/placeholder.svg?height=40&width=40",
//   },
//   {
//     content:
//       "API mereka sangat mudah digunakan dan terdokumentasi dengan baik. Tim kami sangat senang bekerja dengan Bulba Cloud.",
//     author: "Deni Setiawan",
//     role: "Backend Developer",
//     company: "APIFirst",
//     rating: 5,
//     avatarSrc: "/placeholder.svg?height=40&width=40",
//   },
//   {
//     content:
//       "Sejak menggunakan Bulba Cloud, waktu deploy kami berkurang dari 45 menit menjadi hanya 5 menit. Luar biasa!",
//     author: "Laras Widya",
//     role: "Release Manager",
//     company: "FastRelease",
//     rating: 5,
//     avatarSrc: "/placeholder.svg?height=40&width=40",
//   },
// ];

// const TestimonialCard = ({
//   content,
//   author,
//   role,
//   company,
//   rating = 5,
//   avatarSrc,
// }: TestimonialProps) => (
//   <Card className="min-w-[300px] max-w-[350px] mx-4 my-2 bg-card border border-border hover:shadow-md transition-shadow duration-300">
//     <CardContent className="p-6">
//       <div className="flex mb-2">
//         {Array.from({ length: 5 }).map((_, i) => (
//           <Star
//             key={i}
//             className={`w-4 h-4 ${
//               i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//       <p className="text-sm text-muted-foreground mb-4">{content}</p>
//       <div className="flex items-center">
//         <Avatar className="h-10 w-10 mr-3 border-2 border-primary/10">
//           <AvatarImage src={avatarSrc} alt={author} />
//           <AvatarFallback className="bg-primary/10 text-primary">
//             {author.charAt(0)}
//           </AvatarFallback>
//         </Avatar>
//         <div>
//           <p className="text-sm font-medium">{author}</p>
//           <p className="text-xs text-muted-foreground">
//             {role}
//             {company ? `, ${company}` : ""}
//           </p>
//         </div>
//       </div>
//     </CardContent>
//   </Card>
// );

// export function TestimonialMarquee() {
//   return (
//     <div className="relative w-full overflow-hidden py-16 bg-background/50">
//       <div className="container mx-auto mb-10 text-center">
//         <h2 className="text-3xl font-bold tracking-tight mb-3">
//           Apa Kata Pelanggan Kami
//         </h2>
//         <p className="text-muted-foreground max-w-2xl mx-auto">
//           Bergabunglah dengan ratusan pelanggan yang puas dengan layanan Bulba
//           Cloud untuk kebutuhan hosting dan cloud mereka.
//         </p>
//       </div>

//       {/* Twitter icon in top right */}
//       <div className="absolute top-4 right-4 p-4 z-10">
//         <Link
//           href="https://twitter.com/bulbacloud"
//           target="_blank"
//           className="text-primary hover:text-primary/80 transition-colors"
//         >
//           <Twitter className="w-6 h-6" />
//         </Link>
//       </div>

//       {/* First marquee layer - left to right */}
//       <div className="relative w-full overflow-hidden mb-8">
//         <div
//           className="flex gap-4 animate-marquee"
//           style={{
//             width: "fit-content",
//             animation: "scroll 60s linear infinite",
//           }}
//         >
//           {testimonials.slice(0, 8).map((testimonial, index) => (
//             <TestimonialCard key={`top-${index}`} {...testimonial} />
//           ))}
//           {testimonials.slice(0, 8).map((testimonial, index) => (
//             <TestimonialCard key={`top-repeat-${index}`} {...testimonial} />
//           ))}
//         </div>
//       </div>

//       {/* Second marquee layer - right to left */}
//       <div className="relative w-full overflow-hidden mb-8">
//         <div
//           className="flex gap-4"
//           style={{
//             width: "fit-content",
//             animation: "scroll-reverse 70s linear infinite",
//           }}
//         >
//           {[...testimonials]
//             .slice(4, 12)
//             .reverse()
//             .map((testimonial, index) => (
//               <TestimonialCard key={`bottom-${index}`} {...testimonial} />
//             ))}
//           {[...testimonials]
//             .slice(4, 12)
//             .reverse()
//             .map((testimonial, index) => (
//               <TestimonialCard
//                 key={`bottom-repeat-${index}`}
//                 {...testimonial}
//               />
//             ))}
//         </div>
//       </div>

//       {/* Third marquee layer - left to right (slower) */}
//       <div className="relative w-full overflow-hidden">
//         <div
//           className="flex gap-4"
//           style={{
//             width: "fit-content",
//             animation: "scroll 85s linear infinite",
//           }}
//         >
//           {testimonials.slice(6, 12).map((testimonial, index) => (
//             <TestimonialCard key={`third-${index}`} {...testimonial} />
//           ))}
//           {testimonials.slice(6, 12).map((testimonial, index) => (
//             <TestimonialCard key={`third-repeat-${index}`} {...testimonial} />
//           ))}
//         </div>
//       </div>

//       <div className="container mx-auto mt-12 text-center">
//         <Link
//           href="/testimonials"
//           className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
//         >
//           Lihat Semua Testimonial
//         </Link>
//       </div>

//       {/* CSS untuk animasi */}
//       <style jsx>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         @keyframes scroll-reverse {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(50%);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/bulba.svg",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/bulba.svg",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/bulba.svg",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/bulba.svg",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/bulba.svg",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/bulba.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function TestimoniMarque() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
