var config = {
    style: 'mapbox://styles/mktaro/cm7yji9m400ve01sd8c933tts',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoibWt0YXJvIiwiYSI6ImNtNnJieTd0bzF2MWsybXM0NHZmamM5c3MifQ.aYPJtrndw71Fp7Q6Pn9U2g',
    showMarkers: true,
    markerColor: '#F24738',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        showMarkers: false,
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: ' Flooding in Singapore',
    subtitle: '',
    byline: '',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'homepage',
            alignment: 'left',
            hidden: false,
            title: 'Flooding in Singapore',
            image: '',
            description: 'Singapore\'s coastal areas are increasingly vulnerable to flooding due to rising sea levels, storm surges, high tides, and land subsidence. Explore our interactive storymap to see Singapore’s flood risks at a glance. Nearly 30% of the island lies below 5 meters above sea level, highlighting its vulnerability. In a dramatic scenario—if all Greenland’s ice melted and sea levels rose by 7 meters, about 35% of Singapore could be submerged. At the bottom of the page, you can find a slider to adjust water levels from 1 to 7 meters to see different flooding level in Singapore.',
            location: {
                center: [103.81337, 1.36317],
                zoom: 10.5,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 //{
                   // layer: 'ltamrtstationexitgeojson-a59zqe',
                    //opacity: 0,
                    //duration: 5000
                 //}
                ],
            onChapterExit: [
            {
                //layer: 'ltamrtstationexitgeojson-a59zqe',
                //opacity: 0
            }
            ]
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Flooding Impact on Metro Entrances',
            image: '', 
            description: 'As rising water levels threaten key infrastructure, the map highlights vulnerable metro access points, offering a clear view of where flooding risks are highest. With an easy-to-use control, you can adjust water levels to simulate flooding scenarios and see how different areas are affected. Understand the potential consequences for commuters and urban mobility in the face of extreme weather events.',
            location: {
                center: [103.81337, 1.36317],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'ltamrtstationexitgeojson-a59zqe',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'ltamrtstationexitgeojson-a59zqe',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: ' Explore Flooding Risks in CBD',
            image: '',
            description: 'Dive into the Central Business District (CBD) of Singapore, an area historically prone to frequent flooding, especially during monsoon seasons. Situated on low-lying land, the CBD faces heightened vulnerability to rising water levels. Explore how different flooding scenarios might impact this bustling economic hub, with a simple control that lets you adjust water levels to simulate various flood risks. See firsthand the challenges posed to infrastructure, mobility, and daily life in one of the city\'s most critical areas.',
            location: {
                center: [103.85357, 1.30650],
                zoom: 15.0,
                pitch: 40,
                bearing: 10,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Kampong Glam',
            image: '',
            description: 'Unlike the iconic Sultan Mosque, this photo captures a different side of Haji Lane—its vibrant nightlife and eclectic bar scene tucked away in its narrow alleyways. Known for its indie boutiques, street art, and trendy cafés during the day, Haji Lane transforms into a lively social hub at night, filled with cozy bars and music. This hidden gem within Kampong Glam showcases how heritage and modern culture blend seamlessly, making it not just a historical district but also a creative and social hotspot in Singapore.',
            location: {
                center: [103.85895, 1.30095],
                zoom: 17,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Conclusion',
            //image: './assets/buenos-aires.jpg',
            description: 'Chinatown, Little India, and Kampong Glam each showcase a unique piece of Singapore’s multicultural identity. Chinatown blends heritage shophouses with modern HDB flats, Little India thrives with its bustling markets and rich traditions, while Kampong Glam merges Malay-Muslim heritage with contemporary creativity. Together, these districts highlight how Singapore preserves its past while embracing modern diversity, making it a true cultural mosaic.',
            location: {
                center: [103.84164, 1.28049],
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Conclusion',
            //image: './assets/buenos-aires.jpg',
            description: 'Chinatown, Little India, and Kampong Glam each showcase a unique piece of Singapore’s multicultural identity. Chinatown blends heritage shophouses with modern HDB flats, Little India thrives with its bustling markets and rich traditions, while Kampong Glam merges Malay-Muslim heritage with contemporary creativity. Together, these districts highlight how Singapore preserves its past while embracing modern diversity, making it a true cultural mosaic.',
            location: {
                center: [103.84164, 1.28049],
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },


    ]
};
