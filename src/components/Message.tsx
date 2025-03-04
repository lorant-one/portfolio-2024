import { Avatar, Column, Flex, Row, Text } from "@/once-ui/components";
import { ReactNode } from "react";

interface props extends Omit<React.ComponentProps<typeof Flex>, "content"> {
  avatar: string;
  children: ReactNode;
  type: "receiver" | "sender";
}

export const Message = (
  {
    avatar,
    children,
    type = "sender",
    ...rest
  }: props
) => {
  return (
    <Row fillWidth horizontal="end" direction={type === "sender" ? "row" : "row-reverse"} vertical="end" gap="8">
      <Column className="fit-width" paddingX="20" paddingTop="8" paddingBottom="4" maxWidth={type === "sender" ? 24 : undefined} background={type === "sender" ? "brand-alpha-weak" : undefined} border={type === "sender" ? "brand-alpha-weak" : "neutral-alpha-medium"} radius="l" bottomRightRadius={type === "sender" ? "s" : undefined} bottomLeftRadius={type === "receiver" ? "s" : undefined} {...rest}>
        <Text variant="body-default-m" wrap="balance">{children}</Text>
      </Column>
      <Avatar marginBottom="4" src={type === "sender" ? "/images/avatar.jpg" : "/images/blog/misc/quasar.jpg"} size="s"/>
    </Row>
  )
}