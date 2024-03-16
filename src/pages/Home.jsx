import PropTypes from 'prop-types';
import Button from '../components/Button';
import Card from '../components/Card';
import ArrowLeft from '../components/svg/ArrowLeft';
import ArrowRight from '../components/svg/ArrowRight';
import PlayButton from '../components/svg/PlayButton';
import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'
import { useEffect, useState } from 'react';


export default function Home({ anchorRefs }) {

  const [page, setPage] = useState('01');
console.log(anchorRefs);
  

  function pageUp() {
    switch (page) {
      case '01':
        setPage('02');
        break;
      case '02':
        setPage('03');
        break;
      case '03':
        setPage('01');
        break;
    }
  }
  function pageDown() {
    switch (page) {
      case '01':
        setPage('03');
        break;
      case '02':
        setPage('01');
        break;
      case '03':
        setPage('02');
        break;
    }
  }

  useEffect(() => {
    //team carousel
    new Glide('#team .glide', {
      type: 'carousel',
      startAt: 0,
      perView: 4,
      gap: 50,
      autoplay: 1000
    }).mount({ Controls, Breakpoints });

    // rarity carousel
    new Glide('#rarity .glide', {
      type: 'carousel',
      startAt: 0,
      perView: 3,
      gap: 100,
      peek: 100,
      focusAt: 'center',
      autoplay: 1000
    }).mount({ Controls, Breakpoints });



  }, [])

  return (
    <>
      <section className="bg-black banner" id="top">
        <div className="container">
          <div className="title">
            <div className="filter"></div>
            <img src="../public/picture-01.png" alt="image des pesonnages du jeu" />
            <h2>Lorem ipsum dolor sit amet, <strong>Ghirs</strong></h2>
            <p>Community-centered experiences. <br /> Immersive worlds.</p>
            <p className="extra-light">6,000 NFT homes waiting for new owners.It’s our world, let’s make it personal.</p>
          </div>
          <Button
            text="Join the adventure"
            className="CTA button"
          />

          <div className="flex align-center">
            <Button
              text={<ArrowLeft />}
              className="CTA button arrow"
              onClick={pageDown}
            />

            <p>{page}/03</p>
            <Button
              text={<ArrowRight />}
              className="CTA button arrow"
              onClick={pageUp}
            />
          </div>
        </div>
      </section>

      <section id="about" ref={anchorRefs.about} className="bg-secondary">
        <div className="container">
          <div className="flex">
            <div className="image">

              <Card
                title="Lorem ipsum dolor"
                description="Lorem ipsum dolor"
                image="./public/picture.png"
                link="https://example.com"
              />
            </div>

            <div className="text">

              <h3 className="section-title">About</h3>
              <Card
                title="Lorem ipsum dolor"
                description="Lorem ipsum dolor"
                image="./public/picture.png"
                link="https://example.com"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus in urna nec suspendisse quis mus commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus in urna nec suspendisse quis mus commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus in urna nec suspendisse quis mus commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus in urna nec suspendisse quis mus commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus in urna nec suspendisse quis mus commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <Button
                text="Join Discord"
                className="button"
              />
            </div>
          </div>
          <div className="video">
            <img src="public/video.png" alt="miniature de la vidéo de présentation" />
            <PlayButton />
          </div>
        </div>

      </section>

      <section id="team" ref={anchorRefs.team}className="bg-black">
        <div className="container">
          <h3 className="section-title">Team</h3>
          <div className="glide">


            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                <li className="glide__slide">
                  <Card
                    title="Lorem ipsum dolor"
                    description="Lorem ipsum dolor"
                    image="./public/picture.png"
                    link="https://example.com"
                  />
                </li>
                <li className="glide__slide">
                  <Card
                    title="Lorem ipsum dolor"
                    description="Lorem ipsum dolor"
                    image="./public/picture.png"
                    link="https://example.com"
                  />
                </li>
                <li className="glide__slide">
                  <Card
                    title="Lorem ipsum dolor"
                    description="Lorem ipsum dolor"
                    image="./public/picture.png"
                    link="https://example.com"
                  />
                </li>
                <li className="glide__slide">
                  <Card
                    title="Lorem ipsum dolor"
                    description="Lorem ipsum dolor"
                    image="./public/picture.png"
                    link="https://example.com"
                  />
                </li>
              </ul>
            </div>

            <div className="glide__bullets" data-glide-el="controls[nav]">
              <button className="glide__bullet" data-glide-dir="=0"></button>
              <button className="glide__bullet" data-glide-dir="=1"></button>
              <button className="glide__bullet" data-glide-dir="=2"></button>
              <button className="glide__bullet" data-glide-dir="=3"></button>
            </div>
          </div>


        </div>
      </section>

      <section id="rarity" ref={anchorRefs.rarity} className="bg-secondary">
        <div className="container">
          <h3 className="section-title">Rarity</h3>
          <div className="glide">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                <li className="glide__slide">
                  <Card
                    title="Lorem ipsum dolor"
                    description="Lorem ipsum dolor"
                    image="./public/picture.png"
                    link="https://example.com"
                  />
                </li>
                <li className="glide__slide">
                  <Card
                    title="Lorem ipsum dolor"
                    description="Lorem ipsum dolor"
                    image="./public/picture.png"
                    link="https://example.com"
                  />
                </li>
                <li className="glide__slide">
                  <Card
                    title="Lorem ipsum dolor"
                    description="Lorem ipsum dolor"
                    image="./public/picture.png"
                    link="https://example.com"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" ref={anchorRefs.contact} className="bg-black">
        <div className="container">
          <div className="flex">
            <img src="../public/picture-01.png" alt="image des pesonnages du jeu" />
            <div className="text">
              <h3 className="section-title">Contact us</h3>

              <p>
                You’ll find us at all hours on Discord. You can also reach us through the usual channels.
              </p>
              <Button
                text='Get in touch'
                className="button CTA"

              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Home.propTypes = {
  anchorRefs: PropTypes.object.isRequired
}