import fs from 'fs';
import matter from 'gray-matter';

export default function getPostMetadata(basePath) {
  const folder = basePath + '/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter(file => {
    return file.endsWith('.md');
  })
  const blogs = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${basePath}/${fileName}`, 'utf8');
    const { data: frontmatter } = matter(fileContents);
    return {
      slug: fileName.replace('.md', ''),
      title: frontmatter.title,
      frontmatter,
    };
  });

  return blogs;
}