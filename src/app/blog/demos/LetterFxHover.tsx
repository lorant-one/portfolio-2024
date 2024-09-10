"use client";

import { Flex, LetterFx, SmartImage } from "@/once-ui/components";
import { useState } from "react";

import styles from "@/app/gallery/Gallery.module.scss";

function LetterFxHover() {
    const [triggerLocation, setTriggerLocation] = useState<() => void>(() => () => {});
    const [triggerTechnical, setTriggerTechnical] = useState<() => void>(() => () => {});

    return (
        <Flex className={styles.trigger}
            fillWidth
            position="relative"
            onMouseOver={() => {
                triggerLocation();
                triggerTechnical();
            }}>
            <SmartImage
                radius="m"
                sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw"
                aspectRatio="5 / 6"
                src="/images/gallery/img-22.jpg"
                alt="Image for letter effect demo"
                className={styles.gridItem}/>
            <Flex className={styles.details}
                position="absolute" fillWidth fillHeight zIndex={1}
                direction="column" justifyContent="flex-end" alignItems="center" gap="8"
                textVariant="label-default-s" paddingBottom="32" paddingX="24">
                <LetterFx
                    trigger="custom"
                    onTrigger={(handler) => setTriggerLocation(() => handler)}
                    speed="medium">
                    Seoul, South Korea
                </LetterFx>
                <LetterFx
                    trigger="custom"
                    onTrigger={(handler) => setTriggerTechnical(() => handler)}
                    speed="medium">
                    135mm | 1/30 | f11 | ISO250
                </LetterFx>
            </Flex>
        </Flex>
    )
}

export { LetterFxHover };