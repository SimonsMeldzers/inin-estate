import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Modal from '@mui/material/Modal';

import { useState } from "react";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Router from "next/router";


import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from "next/link";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 'box-shadow: rgba(0, 0, 0, 0.8) 0px -1px 8px',
  p: 4,
};



function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const { locale, locales, push } = useRouter();
  
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const handleClick = (l) => async () => {
    if (l == 'en'){
      push("/", undefined, { locale: l });    
    }
    else {
        push("/", undefined, { locale: l });
        await delay(1500);
        Router.reload();
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <AppBar position="absolute" className="navbar">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {t("modal-title")}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {t("modal-text")}
          </Typography>
        </Box>
      </Modal>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href='/'>
          <img
            className="navbar-pc-logo"
            src="https://i.ibb.co/bFs3Vms/inin-removebg-preview-1.png"
          />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <img
              className="navbar-mobile-logo"
              src="https://i.ibb.co/bFs3Vms/inin-removebg-preview-1.png"
            />
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/">
                  <Typography textAlign="center">
                    {t("navbar-link-home")}
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/Projects">
                  <Typography textAlign="center">
                    {t("navbar-link-projects")}
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/Partners">
                  <Typography textAlign="center">
                    {t("navbar-link-partners")}
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/Exports">
                  <Typography textAlign="center">
                    {t("navbar-link-exports")}
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/AboutUs">
                  <Typography textAlign="center">
                    {t("navbar-link-aboutus")}
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                <Box
                  id="lng-selector-mobile"
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                  }}
                >
                  <FormControl>
                    <Select
                      color="primary"
                      className="navbar-language-switch"
                      sx={{ color: "black !important" }}
                      defaultValue={locale}
                    >
                      {locales.map((l) => (
                        <MenuItem key={l} value={l} onClick={handleClick(l)}>
                          {l}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Link href="/">
            <Button
              id="navbar-link"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {t("navbar-link-home")}
            </Button>
            </Link>
            <Link href="/Projects">
            <Button
              id="navbar-link"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {t("navbar-link-projects")}
            </Button>
            </Link>
            <Link href="/Partners">
            <Button
              id="navbar-link"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {t("navbar-link-partners")}
            </Button>
            </Link>
            <Link href="/Exports">
            <Button
              id="navbar-link"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {t("navbar-link-exports")}
            </Button>
            </Link>
            <Link href="/AboutUs">
            <Button
              id="navbar-link"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {t("navbar-link-aboutus")}
            </Button>
            </Link>
          </Box>
          <Box
            id="lng-selector"
            sx={{ minWidth: 120, display: "flex", justifyContent: "right" }}
          >
            <FormControl>
              <Select
                color="secondary"
                className="navbar-language-switch"
                defaultValue={locale}
              >
                {locales.map((l) => (
                  <MenuItem key={l} value={l} onClick={handleClick(l)}>
                    {l}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              id="navbar-link"
              variant="text"
              color="primary"
              sx={{ color: "white" }}
              onClick={handleOpen}
            >
              {" "}
              {t("navbar-link-clientzone")}{" "}
              <AccountCircleIcon sx={{ ml: 0.4 }} />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  };
}
