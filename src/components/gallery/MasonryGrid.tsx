"use client";

import Masonry from 'react-masonry-css';
import { Flex, LetterFx, SmartImage } from "@/once-ui/components";
import styles from "./Gallery.module.scss";
import { gallery } from '@/app/resources/content';
import { useState } from 'react';

export default function MasonryGrid() {
    const breakpointColumnsObj = {
        default: 4,
        1440: 3,
        1024: 2,
        560: 1
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className={styles.masonryGrid}
            columnClassName={styles.masonryGridColumn}>
            {gallery.images.map((image, index) => {
                const [triggerLocation, setTriggerLocation] = useState<() => void>(() => () => {});
                const [triggerTechnical, setTriggerTechnical] = useState<() => void>(() => () => {});

                return (
                    <Flex className={styles.trigger}
                        position="relative"
                        key={index}
                        onMouseOver={() => {
                            triggerLocation();
                            triggerTechnical();
                        }}>
                        <SmartImage
                            radius="m"
                            sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw"
                            aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "2 / 3"}
                            src={image.src}
                            alt={image.alt}
                            className={styles.gridItem}/>
                        <Flex className={styles.details}
                            position="absolute" fillWidth fillHeight zIndex={1}
                            direction="column" vertical="end" horizontal="center" gap="8"
                            textVariant="label-default-s" paddingBottom="32" paddingX="24">
                            <LetterFx
                                trigger="custom"
                                onTrigger={(handler) => setTriggerLocation(() => handler)}
                                speed="medium">
                                {image.location}
                            </LetterFx>
                            <LetterFx
                                trigger="custom"
                                onTrigger={(handler) => setTriggerTechnical(() => handler)}
                                speed="medium">
                                {image.technical}
                            </LetterFx>
                        </Flex>
                    </Flex>
                )
            })}
        </Masonry>
    );
}