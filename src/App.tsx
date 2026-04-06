import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Drawer,
  Fade,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { campContent } from "./content";

const navItems = [
  { label: "Domov", id: "home" },
  { label: "Aftermovie", id: "video" },
  { label: "Priebeh", id: "schedule" },
  { label: "Fotky", id: "gallery" },
  { label: "Informácie", id: "info" },
  { label: "Registrácia", id: "registration" },
  { label: "O nás", id: "about" },
  { label: "Kontakt", id: "contact" },
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showAllImages, setShowAllImages] = useState(false);
  const visibleImages = showAllImages ? campContent.galleryImages : campContent.galleryImages.slice(0, 8);
  const sectionAnchorSx = { scrollMarginTop: 0 };

  return (
    <>
      <AppBar
        color="inherit"
        elevation={0}
        sx={{ borderBottom: "1px solid #f0c9af", backdropFilter: "blur(10px)", backgroundColor: "rgba(255,248,238,0.88)" }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between", minHeight: 72 }}>
            <Typography
              component="a"
              href="/#home"
              variant="h5"
              fontWeight={800}
              color="primary.main"
              sx={{ textDecoration: "none" }}
            >
              KECY KE
            </Typography>
            <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" } }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  color="inherit"
                  href={`#${item.id}`}
                  sx={{ px: 2, py: 1, fontSize: "1rem", fontWeight: 700, minHeight: 44 }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
            <IconButton
              sx={{ display: { xs: "inline-flex", md: "none" }, p: 1.2 }}
              onClick={() => setMobileOpen(true)}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: 240, pt: 2 }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.id} component="a" href={`#${item.id}`} onClick={() => setMobileOpen(false)}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{
          pt: { xs: 3, md: 0 },
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 8% 12%, rgba(255,145,77,0.24), transparent 33%), radial-gradient(circle at 88% 10%, rgba(14,159,138,0.22), transparent 32%), radial-gradient(circle at 15% 88%, rgba(255,210,120,0.2), transparent 30%), radial-gradient(circle at 82% 84%, rgba(123,195,255,0.16), transparent 30%), linear-gradient(180deg, #fff7ea 0%, #fffef7 46%, #f3fff8 100%)",

        }}
      >
        <Box
          id="home"
          sx={{
            position: "relative",
            py: { xs: 8, md: 12 },
            color: "common.white",
            overflow: "hidden",
            backgroundColor: "#0f2631",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${campContent.heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: { md: "scale(1.03)" },
              transition: "transform 800ms ease",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(120deg, rgba(8,22,31,0.78), rgba(15,42,58,0.68) 55%, rgba(255,122,89,0.28)), radial-gradient(circle at 85% 20%, rgba(20,184,166,0.24), transparent 38%)",
            }}
          />
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center" sx={{ position: "relative" }}>
              <Grid size={{ xs: 12, md: 8 }}>
                <Chip label={campContent.dateRange} color="secondary" sx={{ mb: 2, fontWeight: 700 }} />
                <Typography variant="h1" sx={{ fontSize: { xs: "2.3rem", md: "3.6rem" }, mb: 2 }}>
                  {campContent.brand}
                </Typography>
                <Typography variant="h5" sx={{ mb: 2, color: "rgba(255,255,255,0.9)" }}>
                  {campContent.subtitle}
                </Typography>
                <Typography sx={{ maxWidth: 720, mb: 4, color: "rgba(255,255,255,0.85)" }}>
                  {campContent.heroText}
                </Typography>
                <Box sx={{ mb: 3, display: "flex", gap: 1.2, flexWrap: "wrap", alignItems: "center" }}>
                  <Chip label="Native speakers 🇺🇸" sx={{ bgcolor: "rgba(255,255,255,0.16)", color: "white" }} />
                  <Chip label="Hry a aktivity 🎯" sx={{ bgcolor: "rgba(255,255,255,0.16)", color: "white" }} />
                  <Chip label="Nové priateľstvá 🤝" sx={{ bgcolor: "rgba(255,255,255,0.16)", color: "white" }} />
                </Box>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    href="#registration"
                    endIcon={<ArrowForwardRoundedIcon />}
                  >
                    Registrovať sa
                  </Button>
                  <Button variant="outlined" size="large" href="#info" sx={{ color: "white", borderColor: "white" }}>
                    Zobraziť informácie
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box sx={{ pt: { xs: 5, md: 7 } }}>
          <Container maxWidth="lg">
            <Stack spacing={2.2} sx={{ maxWidth: 900 }}>
              <Typography variant="h3" sx={{ fontSize: { xs: "1.6rem", md: "2rem" } }}>
                Toto nie je len ďalší letný camp ✨
              </Typography>
              <Typography>
                KECY je týždeň, kde si zlepšíš angličtinu prirodzene – cez rozhovory, hry, challenges a zážitky, ktoré
                si zapamätáš ešte dlho po lete.
              </Typography>
              <Typography>
                Čakajú ťa native speakers, skvelý tím, noví kamoši a atmoška, v ktorej nemusíš riešiť, či je tvoja
                angličtina „dosť dobrá“. Stačí prísť taký, aký si.
              </Typography>
              <Typography>
                Ak máš 14 až 20 rokov a chceš leto, ktoré má energiu, zmysel a dobrých ľudí okolo seba, KECY sú pre
                teba 💚
              </Typography>
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 9 } }}>
          <Stack spacing={8}>
            <Box id="video" sx={sectionAnchorSx}>
              <Typography variant="h2" sx={{ mb: 1 }}>
                Aftermovie
              </Typography>
              <Typography sx={{ mb: 3 }}>
                Pozri si, ako vyzerá KECY camp naživo 🎬
              </Typography>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 1, sm: 1.5 },
                  borderRadius: 4,
                  background: "linear-gradient(135deg, rgba(11,138,106,0.12), rgba(255,122,89,0.16))",
                }}
              >
                <Box sx={{ position: "relative", pt: "56.25%", borderRadius: 3, overflow: "hidden" }}>
                  <Box
                    component="iframe"
                    src={campContent.videoUrl}
                    title="Kecy Camp Video"
                    sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                    allow="autoplay; fullscreen"
                    loading="lazy"
                  />
                </Box>
              </Paper>
            </Box>

            <Box id="schedule" sx={sectionAnchorSx}>
              <Typography variant="h2" sx={{ mb: 1 }}>
                Priebeh campu
              </Typography>
              <Typography sx={{ mb: 4 }}>
                Každý deň je plný aktivít, takže nuda nehrozí 🔥
              </Typography>
              <Grid container spacing={5} justifyContent="center">
                <Grid size={{ xs: 12, md: 7 }}>
                  <Card>
                    <CardContent sx={{ p: 3.5 }}>
                      <Stack spacing={2}>
                        {campContent.dayPlan.map((part) => (
                          <Box key={part.title}>
                            <Typography fontWeight={700}>{part.title}</Typography>
                            <Typography>{part.description}</Typography>
                          </Box>
                        ))}
                      </Stack>
                      
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 5 }}>
                  <Card>
                    <CardContent sx={{ p: 3.5 }}>
                      <Typography variant="h6" sx={{ mb: 2 }}>
                        Nezabudni si zobrať
                      </Typography>
                      <Stack spacing={1}>
                        {campContent.packingList.map((item) => (
                          <Stack key={item} direction="row" spacing={1.1}>
                            <CheckCircleRoundedIcon color="primary" fontSize="small" sx={{ mt: 0.4 }} />
                            <Typography>{item}</Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>

                
                
                <Grid size={{ xs: 12, md: 5 }}>
                  <Card>
                    <CardContent sx={{ p: 3.5 }}>
                      <Typography variant="h4" sx={{ justifyContent: "start", display: "flex", mb: 2 }}>
                        ✟
                      </Typography>
                      <Typography sx={{ mt: 1 }}>
                      Camp organizujú mladí kresťania zo Slovenska a Ameriky. Budeš počuť o Bohu a o tom, čomu veríme keď budeme spolu premýšľať o tom, či nám niečo dôležité v živote nechýba. Svoj pohľad na vec môžeš potom slobodne vyjadriť v diskusii na skupinke.
                        </Typography>
                      
                    </CardContent>
                  </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 5 }}>
                  <Card>
                    <CardContent sx={{ p: 3.5 }}>
                      <Typography variant="h4" sx={{ justifyContent: "start", display: "flex", mb: 2 }}>
                        🙅‍♂️
                      </Typography>
                      <Typography sx={{ mt: 1 }}>
                      Počas celého tábora nebude čas na alkohol a omamné látky, preto ich so sebou ani neber. V opačnom prípade sa pre Teba tábor predčasne skončí a to by nám bolo ľúto.
                        </Typography>
                      
                    </CardContent>
                  </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 5 }}>
                  <Card>
                    <CardContent sx={{ p: 3.5 }}>
                      <Typography variant="h4" sx={{ justifyContent: "start", display: "flex", mb: 2 }}>
                        🗣
                      </Typography>
                      <Typography sx={{ mt: 1 }}>
                      Keďže účastníkmi Kecy campu budú samozrejme aj rodení Američania, všetky aktivity budú prebiehať anglicko-slovensky.
                        </Typography>
                      
                    </CardContent>
                  </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 5 }}>
                  <Card>
                    <CardContent sx={{ p: 3.5 }}>
                      <Typography variant="h4" sx={{ justifyContent: "start", display: "flex", mb: 2 }}>
                        🙋‍♂️
                      </Typography>
                      <Typography sx={{ mt: 1 }}>
                      Každý rok sa spolu campu zúčastni 55 až 65 ľudí.
                        </Typography>
                      
                    </CardContent>
                  </Card>
                </Grid>

                <Box sx={{ mt: 1.5 }}>
                <Typography variant="h6">
                  Môžeš si vybrať z dvoch trackov, podľa ktorých bude prebiehať tvoj dopoludňajší program:
                </Typography>
                {/* <LinearProgress
                  variant="determinate"
                  value={68}
                  sx={{
                    height: 8,
                    borderRadius: 999,
                    bgcolor: "rgba(11,138,106,0.14)",
                    "& .MuiLinearProgress-bar": {
                      borderRadius: 999,
                    },
                  }}
                /> */}
              </Box>

                <Grid size={{ xs: 12, md: 5 }}>
                  <Card sx={{ background: "linear-gradient(135deg, rgba(88, 172, 255, 0.12), rgba(88, 172, 255, 0.04))" }}>
                    <CardContent sx={{ p: 3.5 }}>
                      <Typography variant="h4" sx={{ justifyContent: "start", display: "flex", mb: 2 }}>
                        ENGLISH TRACK  🗽
                      </Typography>
                      <Typography sx={{ mt: 1 }}>
                      Povedú ho americkí lektori a zameriava sa hlavne na konverzáciu. V uvoľnenej atmosfére si zlepšíš rozprávanie po anglicky bez ohľadu na to, akú máš úroveň. Naši Američania odkazujú, že sa máme na čo tešiť!
                        </Typography>
                      
                    </CardContent>
                  </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 5 }}>
                  <Card sx={{ background: "linear-gradient(135deg, rgba(110, 196, 147, 0.14), rgba(110, 196, 147, 0.05))" }}>
                    <CardContent sx={{ p: 3.5 }}>
                      <Typography variant="h4" sx={{ justifyContent: "start", display: "flex", mb: 2 }}>
                        SPORTS TRACK 🏈
                      </Typography>
                      <Typography sx={{ mt: 1 }}>
                      Ak rád tráviš čas v pohybe, tento track je pre teba ideálny. Tréningy vedú americkí lektori v angličtine, pričom je zabezpečený aj preklad do slovenčiny. Nezáleží na tom, či si skúsený športovec alebo si chceš len užiť trochu pohybu – ide nám hlavne o radosť z hry.
                        </Typography>
                      
                    </CardContent>
                  </Card>
                </Grid>

              </Grid>
              <Box sx={{ mt: 3.5 }}>
                <Typography sx={{ fontStyle: "italic" }}>
                  Miesta sa postupne zapĺňajú ⏳
                </Typography>
                {/* <LinearProgress
                  variant="determinate"
                  value={68}
                  sx={{
                    height: 8,
                    borderRadius: 999,
                    bgcolor: "rgba(11,138,106,0.14)",
                    "& .MuiLinearProgress-bar": {
                      borderRadius: 999,
                    },
                  }}
                /> */}
              </Box>
            </Box>

            <Box id="gallery" sx={sectionAnchorSx}>
              <Typography variant="h2" sx={{ mb: 1 }}>
                Fotky
              </Typography>
              <Typography sx={{ mb: 3 }}>
                Pozri si atmosféru z minulých ročníkov 📸
              </Typography>
              <Stack direction="row" spacing={1.2} flexWrap="wrap" useFlexGap>
                {campContent.albums.map((album) => (
                  <Chip
                    key={album.year}
                    label={album.year}
                    clickable
                    component="a"
                    href={album.url}
                    target="_blank"
                    rel="noreferrer"
                    sx={{ px: 1.2, py: 2.2, fontWeight: 700 }}
                  />
                ))}
              </Stack>
              <Grid container spacing={2} sx={{ mt: 2.5 }}>
                {visibleImages.map((image) => (
                  <Grid key={image.src} size={{ xs: 12, sm: 6, md: 3 }}>
                    <Box sx={{ borderRadius: 3, overflow: "hidden", boxShadow: "0 8px 18px rgba(16,24,40,0.1)" }}>
                      <Box
                        component="img"
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        sx={{
                          width: "100%",
                          height: 220,
                          display: "block",
                          objectFit: "cover",
                          willChange: "transform",
                          transform: "translateZ(0)",
                          transition: "transform 180ms ease-out",
                          "&:hover": {
                            transform: "scale(1.03)",
                          },
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Fade in timeout={400}>
                <Box sx={{ mt: 2.5, display: "flex", justifyContent: "center" }}>
                  {!showAllImages ? (
                    <Button variant="outlined" onClick={() => setShowAllImages(true)}>
                      Zobraziť viac fotiek
                    </Button>
                  ) : (
                    <Button variant="text" onClick={() => setShowAllImages(false)}>
                      Zobraziť menej
                    </Button>
                  )}
                </Box>
              </Fade>
            </Box>

            <Box id="info" sx={sectionAnchorSx}>
              <Typography variant="h2" sx={{ mb: 1 }}>
                Informácie
              </Typography>
              <Typography sx={{ mb: 4 }}>
                Všetko podstatné na jednom mieste 📌
              </Typography>

              <Stack spacing={3}>
                <Card>
                  <CardContent sx={{ p: 3.5 }}>
                    <Stack spacing={2.5}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <AccessTimeRoundedIcon color="primary" />
                        <Typography fontWeight={700}>{campContent.dateRange}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <LocationOnRoundedIcon color="primary" />
                        <Link href={campContent.locationUrl} target="_blank" rel="noreferrer" underline="hover">
                          {campContent.locationLabel}
                        </Link>
                      </Stack>
                      <Typography>{campContent.registrationWindow}</Typography>
                      <Typography color="text.secondary">{campContent.registrationNote}</Typography>
                    </Stack>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent sx={{ p: 3.5 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      Cena
                    </Typography>
                    <Stack spacing={1.3} sx={{ maxWidth: 520 }}>
                      {campContent.priceTiers.map((tier) => (
                        <Stack
                          key={tier.deadline}
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                          sx={{ width: "100%", gap: 2 }}
                        >
                          <Typography fontWeight={700}>{tier.price}</Typography>
                          <Typography color="text.secondary">{tier.deadline}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                    <Divider sx={{ my: 2.2 }} />
                    <Typography>
                      Platba: <strong>{campContent.payment.iban}</strong>
                    </Typography>
                    <Typography sx={{ mt: 1 }}>
                      Poznámka: {campContent.payment.note}
                    </Typography>
                    <Typography sx={{ mt: 1.4 }}>
                      Ak by ti cena robila problém, pokojne sa nám ozvi na {campContent.payment.scholarshipEmail}. Vieme ti ponúknuť štipendium a určite spolu nájdeme riešenie. Bola by škoda, keby si kvôli financiám nemohol prísť 😊.
                    </Typography>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent sx={{ p: 3.5 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      Storno podmienky
                    </Typography>
                    <Stack spacing={1.4}>
                      {campContent.refundRules.map((rule) => (
                        <Stack key={rule.refund} direction="row" spacing={1.2} alignItems="flex-start">
                          <CheckCircleRoundedIcon color="primary" fontSize="small" sx={{ mt: 0.4 }} />
                          <Typography>
                            <strong>{rule.refund}</strong> — {rule.condition}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            </Box>

            <Box id="registration" sx={sectionAnchorSx}>
              <Card
                sx={{
                  p: { xs: 3, md: 4 },
                  background: "linear-gradient(130deg, rgba(11,138,106,0.08), rgba(255,122,89,0.12))",
                }}
              >
                <Typography variant="h3" sx={{ mb: 1 }}>
                  Registrácia
                </Typography>
                <Typography >
                  Registrácia prebieha výhradne online. Miesto máš potvrdené po zaplatení zálohy 50 €.
                </Typography>
                <Typography sx={{ mb: 3 }}>
                  Tak čo? Ideš do toho s nami? 🚀
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href={campContent.registrationUrl}
                  target="_blank"
                  rel="noreferrer"
                  endIcon={<ArrowForwardRoundedIcon />}
                >
                  Otvoriť registračný formulár
                </Button>
              </Card>
            </Box>

            <Box id="about" sx={sectionAnchorSx}>
              <Typography variant="h2" sx={{ mb: 1 }}>
                O nás
              </Typography>
              <Typography sx={{ mb: 4 }}>
                KECY tábor pripravuje tím mladých ľudí zo Slovenska a Ameriky 🧡
              </Typography>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Card>
                    <CardContent sx={{ p: 3.5 }}>
                      <Typography variant="h6" sx={{ mb: 2 }}>
                        Organizátori
                      </Typography>
                      <Stack spacing={1.2}>
                        {campContent.organizers.map((organization) => (
                          <Typography key={organization}>• {organization}</Typography>
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Card>
                    <CardContent sx={{ p: 3.5 }}>
                      <Box
                        component="img"
                        src={campContent.teamImage}
                        alt="Kecy team"
                        sx={{
                          width: "100%",
                          height: { xs: 220, sm: 280, md: 320 },
                          borderRadius: 3,
                          objectFit: "cover",
                          mb: 2,
                          transition: "transform 180ms ease-out",
                          "&:hover": { transform: "scale(1.02)" },
                        }}
                      />
                      <Stack direction="row" spacing={1.2} alignItems="center" sx={{ mb: 1.5 }}>
                        <VolunteerActivismRoundedIcon color="primary" />
                        <Typography variant="h6">Podpora</Typography>
                      </Stack>
                      <Typography>
                        Najlepší spôsob, ako nás podporiť, je pozvať čo najviac ľudí na KECY. Ak nás chceš podporiť
                        finančne, môžeš zaslať ľubovoľný dar na účet {campContent.payment.iban} s poznámkou
                        Kecy-DAR.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>

            <Box id="contact" sx={{ pb: 2, ...sectionAnchorSx }}>
              <Typography variant="h2" sx={{ mb: 1 }}>
                Kontakt
              </Typography>
              <Typography sx={{ mb: 4 }}>
                Ak máš otázky, ozvi sa nám 💬
              </Typography>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card>
                    <CardContent sx={{ p: 3.5 }}>
                      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                        <LocationOnRoundedIcon color="primary" />
                        <Typography fontWeight={700}>Adresa</Typography>
                      </Stack>
                      <Typography color="text.secondary">{campContent.contact.address}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card>
                    <CardContent sx={{ p: 3.5 }}>
                      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                        <EmailRoundedIcon color="primary" />
                        <Typography fontWeight={700}>Email</Typography>
                      </Stack>
                      <Link href={`mailto:${campContent.contact.email}`} underline="hover">
                        {campContent.contact.email}
                      </Link>
                      <Stack direction="row" spacing={1.2} sx={{ mt: 2 }}>
                        <Button
                          variant="outlined"
                          size="small"
                          href="https://www.facebook.com/dzivoKECY"
                          target="_blank"
                          rel="noreferrer"
                          startIcon={<FacebookRoundedIcon />}
                        >
                          Facebook
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          href="https://www.instagram.com/kecy_ke/"
                          target="_blank"
                          rel="noreferrer"
                          startIcon={<InstagramIcon />}
                        >
                          Instagram
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card>
                    <CardContent sx={{ p: 3.5 }}>
                      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                        <CallRoundedIcon color="primary" />
                        <Typography fontWeight={700}>{campContent.contact.person}</Typography>
                      </Stack>
                      <Typography color="text.secondary">{campContent.contact.phone}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              
            </Box>
          </Stack>
        </Container>

        <Box component="footer" sx={{ mt: 7, py: 3.5, borderTop: "1px solid rgba(0,0,0,0.08)" }}>
          <Container maxWidth="lg">
            <Typography color="text.secondary" align="center">
              Vibecoded by Dano for KECY Košice
            </Typography>
            <Typography color="text.secondary" align="center">
              © 2026 
            </Typography>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default App;
