import React from "react"
import NextLink from "next/link"
import { useRouter } from "next/router"
import { Link, Box, Stack } from "@chakra-ui/react"

const nav = [
  {
    title: "Actualités",
    slug: "actualites",
  },
  {
    title: "À propos",
    slug: "a-propos",
  },
  {
    title: "Ressources",
    slug: "ressources",
  },
  {
    title: "Contact",
    slug: "contact",
  },
]

const Header = ({ ...props }) => {
  const router = useRouter()

  return (
    <Box
      as="header"
      display={{ md: "flex" }}
      pt={[8, 12]}
      pb={[8, 16]}
      justifyContent="space-between"
      alignItems="baseline"
      {...props}
    >
      <NextLink href="/" passHref>
        <Link color="brand">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 408 120"
          >
            <title>EAV Vaud</title>
            <path
              fill="currentColor"
              fillRule="nonzero"
              d="M95.6737291.6504049v25.4293327H33.7937306v19.1813329h54.7026653v24.750666H33.7937306v21.6573328H97.525729v27.9693327H.78706477V.6504049H95.6737291zM212.530259 66.2928032L195.38626 32.2674708h-.461333l-17.608 33.7226658 17.84 20.4186661 17.373332-20.1159995zm1.608-65.64266497L275.948925 119.638135h-37.734666l-14.294666-29.879999-28.762666 29.879999-29.785333-29.5266657-14.429333 29.5266657h-36.575999L176.867594.65013823h37.270665zM317.127324 119.638669L268.603325.65067156h37.269332l31.858666 78.70799804h.461333L370.515322.65067156h37.499999L358.101989 119.638669h-40.974665z"
            />
          </svg>
        </Link>
      </NextLink>

      <Stack
        as="nav"
        direction={["column", "row"]}
        spacing={{ sm: 8 }}
        flexWrap="wrap"
        mt={[4, null, 0]}
        ml={{ md: 8 }}
      >
        {nav.map((navLink) => (
          <Box key={navLink.slug}>
            <NextLink href={`/${navLink.slug}`} passHref>
              <Link
                fontSize={["xl", "3xl"]}
                fontWeight="bold"
                textDecoration={
                  router.pathname.includes(navLink.slug) && "underline"
                }
              >
                {navLink.title}
              </Link>
            </NextLink>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

export default Header
