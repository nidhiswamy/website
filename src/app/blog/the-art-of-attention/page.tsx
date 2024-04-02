import BlogLayout from '@/app/ui/BlogLayout'; 
import { Header1, BoldText, Body } from '@/app/ui/BlogLayout'; 

export default function BlogPost1() {
  return (
    <BlogLayout title="The Art of Attention" desc="A portfolio of my creations of user-focused, captivating, and engaging graphic design for HackPSU marketing material through Canva">
      <Header1 text="Background"/>
        <Body>
          User-focused design is an essential element to marketing a product, event, or brand. I first started experimenting with designing for my mother's business social media. Once I had some basic experience with creating designs, I was recruited by my high school marketing team to create flyers and posters for their events. In college, I joined the marketing team of <a className="text-secondary hover:underline decoration-4" href="https://hackpsu.org" target="_blank">HackPSU</a>, the biggest student-run collegiate hackathon and technology event at Penn State, since the marketing and hackathon both aligned with my interests. As I stayed in the club longer, I was promoted to the marketing director.
        </Body>
      <Header1 text="My Creations"/>
        <Body>
          As the Director of Marketing, I am responsible for managing the marketing team of 12 members, create graphic design for our social media, flyers, posters, and banners, photographing the event, and handling any miscellaneous marketing tasks. Graphic design, being the most important tool serving as a pathway for prospective students to participate at our event, takes up a considerable amount of time. 
        </Body>
    </BlogLayout>
  );
}
