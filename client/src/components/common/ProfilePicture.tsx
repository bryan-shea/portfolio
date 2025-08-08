import { Image } from "@chakra-ui/react"
import { Headshot } from "../../assets";

export const ProfilePicture = () => (
  <Image
    src={Headshot}
    boxSize="100px"
    borderRadius="full"
    fit="cover"
    alt="Naruto Uzumaki"
  />
)