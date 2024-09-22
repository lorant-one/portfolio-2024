"use client";

import { Flex, RevealFx, SmartImage } from "@/once-ui/components";
import { useEffect, useState } from "react";

interface CarouselProps {
    images: string[];
    indicator?: 'line' | 'media';
    aspectRatio?: string;
    sizes?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
    images = [],
    indicator = 'line',
    aspectRatio = '16 / 9',
    sizes,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTransitioning(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleImageClick = () => {
        setIsTransitioning(false);
        setTimeout(() => {
            const nextIndex = (activeIndex + 1) % images.length;
            setActiveIndex(nextIndex);
            setTimeout(() => {
                setIsTransitioning(true);
            }, 630);
        }, 630);
    };
    
    const handleControlClick = (index: number) => {
        if (index !== activeIndex) {
            setIsTransitioning(false);
            setTimeout(() => {
                setActiveIndex(index);
                setTimeout(() => {
                    setIsTransitioning(true);
                }, 630);
            }, 630);
        }
    };    

    return (
        <Flex
            fillWidth gap="m"
            direction="column">
            <Flex onClick={handleImageClick}>
                <RevealFx
                    style={{width: '100%'}}
                    trigger={isTransitioning}
                    translateY="16"
                    speed="fast">
                    <SmartImage
                        sizes={sizes}
                        priority
                        tabIndex={0}
                        radius="l"
                        alt="image"
                        aspectRatio={aspectRatio}
                        src={images[activeIndex]}
                        style={{
                            border: '1px solid var(--neutral-alpha-weak)',
                            ...(images.length > 1 && {
                                cursor: 'pointer',
                            }),
                        }}/>
                </RevealFx>
            </Flex>
            {images.length > 1 && (
                <>
                    { indicator === 'line' ? (
                        <Flex
                            gap="4" paddingX="s"
                            fillWidth
                            justifyContent="center">
                            {images.map((_, index) => (
                                <Flex
                                    key={index}
                                    onClick={() => handleControlClick(index)}
                                    style={{
                                        background: activeIndex === index 
                                            ? 'var(--neutral-on-background-strong)' 
                                            : 'var(--neutral-alpha-medium)',
                                        cursor: 'pointer',
                                        transition: 'background 0.3s ease',
                                    }}
                                    fillWidth
                                    height="2">
                                </Flex>
                            ))}
                        </Flex>
                    ) : (
                        <Flex
                            fillWidth gap="8" overflowX="auto">
                            {images.map((_, index) => (
                                <Flex
                                    style={{
                                        border: activeIndex === index 
                                            ? '2px solid var(--brand-solid-strong)' 
                                            : 'none',
                                        cursor: 'pointer',
                                        borderRadius: 'var(--radius-m-nest-4)',
                                        transition: 'border 0.3s ease',
                                    }}
                                    padding="4"
                                    width="80" height="80">
                                <SmartImage
                                    alt="image"
                                    key={index}
                                    aspectRatio="1 / 1"
                                    src={images[index]}
                                    onClick={() => handleControlClick(index)}
                                    style={{
                                        cursor: 'pointer',
                                        borderRadius: 'var(--radius-m)',
                                        transition: 'background 0.3s ease',
                                    }}/>
                                </Flex>
                            ))}
                        </Flex>
                    )}
                </>
            )}
        </Flex>
    );
};