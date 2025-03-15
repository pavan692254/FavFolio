"use client";

/* eslint-disable react/no-unescaped-entities */
// pages/index.js
import React, { useState, useEffect } from "react";
import Head from "next/head";
// import train from "./train.jpeg"
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  IconButton,
  //   List,
  //   ListItem,
  //   ListItemIcon,
  //   ListItemText,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  Chip,
  Drawer,
  CssBaseline,
} from "@mui/material";
import {
  Menu as MenuIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  Mail as MailIcon,
  Code as CodeIcon,
  Laptop as LaptopIcon,
  //   Brush as BrushIcon,
  Phone as PhoneIcon,
  Close as CloseIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";

// Simulated portfolio data
const projects = [
  {
    id: 1,
    title: "Intelligent Train Route Planner",
    description: "Full-stack web application with NextJS and Node.js",
    image: "./train.jpeg",
    tags: ["NextJS", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Credit Approval System",
    description:
      "Developed a comprehensive backend system using Node.js and the Hapi framework",
    image: "/placeholder/300/200",
    tags: ["Hapi.js", "NodeJs", "MYSQL"],
  },
  {
    id: 3,
    title: "Bitcoin Price Prediction Tool",
    description:
      "Bitcoin Price Prediction Tool: A tool to help users in predicting cryptocurrency market trends",
    image: "/placeholder/300/200",
    tags: ["Python"],
  },
];

const skills = [
  {
    name: "Frontend Development",
    icon: <CodeIcon />,
    items: [
      "Next.js",
      "Angular",
      "JavaScript/TypeScript",
      "HTML/CSS",
      "Material UI",
    ],
  },
  {
    name: "Backend Development",
    icon: <LaptopIcon />,
    items: [
      "MongoDB",
      "MYSQL",
      "Redis",
      "Node.js",
      "Fastify",
      "Express",
      "Hapi",
      "AWS",
    ],
  },
  //   { name: 'Design Tools', icon: <BrushIcon />, items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator'] },
];

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const drawer = (
    <Box sx={{ width: 250, p: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx={{ mt: 4 }}>
        {menuItems.map((item) => (
          <Button
            key={item.label}
            href={item.href}
            fullWidth
            onClick={handleDrawerToggle}
            sx={{
              justifyContent: "flex-start",
              py: 1.5,
              mb: 1,
              fontSize: "1.1rem",
              fontWeight: 500,
              color: "text.primary",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
                transform: "translateX(5px)",
                transition: "transform 0.2s",
              },
            }}
          >
            {item.label}
          </Button>
        ))}
      </Box>
    </Box>
  );

  return (
    <div>
      <Head>
        <title>My Portfolio | Developer & Designer</title>
        <meta
          name="description"
          content="Professional portfolio showcasing my projects and skills"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <CssBaseline />

      {/* Navigation */}
      <AppBar
        position="fixed"
        color={isScrolled ? "default" : "transparent"}
        elevation={isScrolled ? 1 : 0}
        sx={{
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.8)"
            : "transparent",
          transition: "all 0.3s ease-in-out",
          color: isScrolled ? "text.primary" : "white",
        }}
      >
        <Toolbar sx={{ maxWidth: "lg", width: "100%", mx: "auto" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Portfolio.
          </Typography>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  href={item.href}
                  sx={{
                    ml: 2,
                    fontWeight: 500,
                    "&:hover": {
                      transform: "translateY(-2px)",
                      transition: "transform 0.2s",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          pt: 8,
        }}
      >
        {/* Background animation circles */}
        <Box
          sx={{
            position: "absolute",
            width: "30vw",
            height: "30vw",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
            top: "-5%",
            right: "-5%",
            animation: "float 15s ease-in-out infinite",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: "20vw",
            height: "20vw",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
            bottom: "-5%",
            left: "10%",
            animation: "float 20s ease-in-out infinite",
          }}
        />

        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="overline"
                  sx={{ letterSpacing: "0.1em", opacity: 0.8 }}
                >
                  FULL STACK DEVELOPER
                </Typography>
                <Typography
                  variant="h2"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                  }}
                >
                  Creating digital experiences that matter.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    mb: 4,
                    maxWidth: 600,
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                  }}
                >
                  I architect and develop scalable, high-performance backend
                  systems using Node.js, MongoDB, Fastify, Express, and Redis.
                  Passionate about building efficient, secure, and optimized
                  APIs that power seamless user experiences.{" "}
                </Typography>
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <Button
                    variant="contained"
                    size="large"
                    href="#projects"
                    sx={{
                      borderRadius: "50px",
                      px: 4,
                      background: "white",
                      color: "primary.main",
                      fontWeight: 600,
                      "&:hover": {
                        background: "rgba(255, 255, 255, 0.9)",
                        transform: "translateY(-3px)",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                        transition: "all 0.2s",
                      },
                    }}
                  >
                    View Projects
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    href="#contact"
                    sx={{
                      borderRadius: "50px",
                      px: 4,
                      borderColor: "white",
                      color: "white",
                      fontWeight: 600,
                      "&:hover": {
                        borderColor: "white",
                        background: "rgba(255, 255, 255, 0.1)",
                        transform: "translateY(-3px)",
                        transition: "all 0.2s",
                      },
                    }}
                  >
                    Get In Touch
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  alt="Your Name"
                  src="/placeholder/400/400"
                  sx={{
                    width: "80%",
                    height: "auto",
                    aspectRatio: "1/1",
                    border: "5px solid rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  alt="Your Name"
                  src="/placeholder/400/400"
                  sx={{
                    width: "80%",
                    height: "auto",
                    aspectRatio: "1/1",
                    border: "5px solid white",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                    display: { xs: "none", md: "block" },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                }}
              >
                ABOUT ME
              </Typography>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  fontSize: { xs: "2rem", md: "2.5rem" },
                }}
              >
                I create solutions that users love.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}
              >
                I'm a fullstack developer with over 2.5 years of experience
                building web applications. My passion lies in
                creating elegant solutions to complex problems using modern
                technologies.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}
              >
                With a background in both design and development, I bring a
                unique perspective to projects, focusing on both aesthetics and
                functionality. I've worked with clients ranging from startups to
                large enterprises, helping them bring their digital visions to
                life.
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  mt: 2,
                  borderRadius: "50px",
                  px: 3,
                  fontWeight: 600,
                  "&:hover": {
                    transform: "translateX(5px)",
                    transition: "transform 0.2s",
                  },
                }}
              >
                Download Resume
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box id="projects" sx={{ py: { xs: 8, md: 12 }, bgcolor: "grey.50" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                fontWeight: 600,
                letterSpacing: "0.1em",
              }}
            >
              MY WORK
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                letterSpacing: "-0.02em",
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              Featured Projects
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: 650,
                mx: "auto",
                fontSize: "1.1rem",
                lineHeight: 1.7,
              }}
            >
              Take a look at some of my recent work. Each project presented
              unique challenges and opportunities for creative problem-solving.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid item xs={12} md={4} key={project.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    boxShadow: "0 10px 40px -12px rgba(0,0,0,0.15)",
                    overflow: "hidden",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 20px 40px -12px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      pt: "56.25%",
                      position: "relative",
                      bgcolor: "grey.200",
                    }}
                  >
                    <Box
                      component="img"
                      src={project.image}
                      alt={project.title}
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      sx={{ fontWeight: 600 }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ mb: 2, color: "text.secondary" }}
                    >
                      {project.description}
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}
                    >
                      {project.tags.map((tag, index) => (
                        <Chip
                          key={index}
                          label={tag}
                          size="small"
                          sx={{
                            borderRadius: "50px",
                            fontWeight: 500,
                            bgcolor: "rgba(103, 126, 234, 0.1)",
                            color: "primary.main",
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <Box sx={{ p: 2, pt: 0, textAlign: "right" }}>
                    <Button
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        fontWeight: 600,
                        "&:hover": {
                          transform: "translateX(5px)",
                          transition: "transform 0.2s",
                        },
                      }}
                    >
                      View Project
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box id="skills" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                fontWeight: 600,
                letterSpacing: "0.1em",
              }}
            >
              MY EXPERTISE
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                letterSpacing: "-0.02em",
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              Skills & Technologies
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: 650,
                mx: "auto",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                mb: 6,
              }}
            >
              I work with a variety of technologies and tools to create seamless
              digital experiences.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {skills.map((skill, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: "0 10px 40px -12px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 15px 30px -12px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 3,
                        color: "primary.main",
                        bgcolor: "rgba(103, 126, 234, 0.1)",
                        width: "fit-content",
                        p: 1.5,
                        borderRadius: 2,
                      }}
                    >
                      {skill.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ mb: 2, fontWeight: 600 }}
                    >
                      {skill.name}
                    </Typography>
                    <Divider sx={{ mb: 3 }} />
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {skill.items.map((item, i) => (
                        <Chip
                          key={i}
                          label={item}
                          sx={{
                            borderRadius: "50px",
                            m: 0.5,
                            fontWeight: 500,
                            bgcolor: "grey.100",
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        id="contact"
        sx={{
          py: { xs: 8, md: 12 },
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
            <Typography
              variant="overline"
              sx={{ fontWeight: 600, letterSpacing: "0.1em", opacity: 0.8 }}
            >
              REACH OUT
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                letterSpacing: "-0.02em",
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              Let&apos;s Work Together
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: 650,
                mx: "auto",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                mb: 6,
              }}
            >
              Have a project in mind? I'd love to discuss how we can collaborate
              to create something amazing.
            </Typography>
          </Box>

          <Box
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.1)",
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              backdropFilter: "blur(10px)",
              maxWidth: 800,
              mx: "auto",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: "40%",
                height: "40%",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.1)",
                top: "-10%",
                right: "-10%",
              }}
            />

            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ textAlign: "center", mb: { xs: 4, md: 0 } }}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    Connect With Me
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ opacity: 0.8 }}>
                    Feel free to reach out through social media or email.
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "center", mb: 3 }}
                  >
                    <IconButton
                      aria-label="LinkedIn"
                      sx={{
                        mx: 1,
                        color: "white",
                        bgcolor: "rgba(255, 255, 255, 0.1)",
                        transition: "all 0.2s",
                        "&:hover": {
                          bgcolor: "white",
                          color: "primary.main",
                          transform: "translateY(-5px)",
                        },
                      }}
                    >
                      <LinkedInIcon fontSize="medium" />
                    </IconButton>
                    <IconButton
                      aria-label="GitHub"
                      sx={{
                        mx: 1,
                        color: "white",
                        bgcolor: "rgba(255, 255, 255, 0.1)",
                        transition: "all 0.2s",
                        "&:hover": {
                          bgcolor: "white",
                          color: "primary.main",
                          transform: "translateY(-5px)",
                        },
                      }}
                    >
                      <GitHubIcon fontSize="medium" />
                    </IconButton>
                    <IconButton
                      aria-label="Twitter"
                      sx={{
                        mx: 1,
                        color: "white",
                        bgcolor: "rgba(255, 255, 255, 0.1)",
                        transition: "all 0.2s",
                        "&:hover": {
                          bgcolor: "white",
                          color: "primary.main",
                          transform: "translateY(-5px)",
                        },
                      }}
                    >
                      <TwitterIcon fontSize="medium" />
                    </IconButton>
                    <IconButton
                      aria-label="Email"
                      sx={{
                        mx: 1,
                        color: "white",
                        bgcolor: "rgba(255, 255, 255, 0.1)",
                        transition: "all 0.2s",
                        "&:hover": {
                          bgcolor: "white",
                          color: "primary.main",
                          transform: "translateY(-5px)",
                        },
                      }}
                    >
                      <MailIcon fontSize="medium" />
                    </IconButton>
                  </Box>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<PhoneIcon />}
                    sx={{
                      mt: 2,
                      borderRadius: "50px",
                      px: 3,
                      py: 1.5,
                      background: "white",
                      color: "primary.main",
                      fontWeight: 600,
                      "&:hover": {
                        background: "rgba(255, 255, 255, 0.9)",
                        transform: "translateY(-3px)",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    Schedule a Call
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    Email Me Directly
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ opacity: 0.8 }}>
                    I'll get back to you within 24 hours.
                  </Typography>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<MailIcon />}
                    fullWidth
                    sx={{
                      mt: 2,
                      borderRadius: "50px",
                      px: 3,
                      py: 1.5,
                      borderColor: "white",
                      color: "white",
                      fontWeight: 600,
                      "&:hover": {
                        borderColor: "white",
                        background: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    hello@yourname.com
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{ py: 4, bgcolor: "#5b6db5", color: "white", textAlign: "center" }}
      >
        <Container maxWidth="lg">
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
            Portfolio.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </Typography>
          <Divider
            sx={{
              borderColor: "rgba(255,255,255,0.1)",
              width: "100%",
              maxWidth: 400,
              mx: "auto",
              mb: 2,
            }}
          />
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            Made with ❤️ using Next.js and Material UI
          </Typography>
        </Container>
      </Box>

      {/* Global styles */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: "Inter", sans-serif;
        }
      `}</style>
    </div>
  );
}
