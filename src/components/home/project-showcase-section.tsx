import Container from "../common/container";
import ShowcaseCard from "../showcase-card";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";

const ProjectShowcaseSection = () => {
  return (
    <Container className="py-20">
      <div className="flex items-baseline gap-4 justify-center mb-10">
        <h2 className="text-4xl font-semibold">Project showcase</h2>
        <p className="text-xl text-muted/60">See the projects i've worked on</p>
      </div>
      <Box sx={{ width: "100%", minHeight: 829 }}>
        {/*
          Define an array of project data and map over it to render ShowcaseCard components.
        */}
        <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
          {[
            {
              imageUrl: "/images/projects/better.png",
              projectTitle: "Better",
              projectLink: "",
            },{
              imageUrl: "/images/projects/next-blog.png",
              projectTitle: "Next Blog",
              projectLink: "",
            },
            {
              imageUrl: "/images/projects/shadow-polls.png",
              projectTitle: "Shadow Polls",
              projectLink: "",
            },
            {
              imageUrl: "/images/projects/pavilion.png",
              projectTitle: "Pavilion Events",
              projectLink: "",
            },
            {
              imageUrl: "/images/projects/yongeza-capital.png",
              projectTitle: "Yongeza Capital",
              projectLink: "",
            },
            
            {
              imageUrl: "/images/projects/kiso-index.png",
              projectTitle: "Kiso Index",
              projectLink: "https://www.kisoindex.com/",
            },
            {
              imageUrl: "/images/projects/civic-advisory-hub.png",
              projectTitle: "Civic Advisory Hub",
              projectLink: "",
            },
            {
              imageUrl: "/images/projects/cpaf.png",
              projectTitle: "Civic Advisory Hub",
              projectLink: "",
            },
          ].map((project) => (
            <ShowcaseCard
              key={project.projectTitle}
              imageUrl={project.imageUrl}
              projectTitle={project.projectTitle}
              projectLink={project.projectLink}
            />
          ))}
        </Masonry>
      </Box>
    </Container>
  );
};

export default ProjectShowcaseSection;
