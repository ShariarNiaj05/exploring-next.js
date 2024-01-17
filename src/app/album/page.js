import Image from 'next/image';
import React from 'react';
import image1 from '@/assets/5.jpg'

const AlbumPage = () => {
    return (
        <div>
            <Image src={'https://raw.githubusercontent.com/ShariarNiaj05/BreakpointArt-Recipe-Client/main/src/assets/1.jpg'} alt='image' width={250} height={250}></Image>


            <Image src={image1} alt='' height={450} width={350}></Image>
            sfdddd
        </div>
    );
};

export default AlbumPage;