"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import MewFooter from '@/components/sections/layouts/footer/MewFooter';

const theme: SiteTheme = {
  styleVariant: 'funAndTrendy',
  colorTemplate: 1,
  textAnimation: 'slide'
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/design-a-simple-high-contrast-logo-for-v-1759644901806-a2c5e738.jpg"
          logoWidth={200}
          logoHeight={50}
          buttonText="Get Vibe"
          onButtonClick={() => { console.log('CTA Clicked'); }}
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <VoidHero
          title="Welcome to VibeCrypto"
          description="VibeCrypto invites you into a vibrant, playful crypto world."
          tagLabel="Join the community"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>

      <div id="about" data-section="about">
        <SocialsAbout
          title="About Us"
          descriptions={["We are a community-focused crypto project aiming to bring fun and innovation.", "Join us on our adventure!"]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="simple"/>
      </div>

      <div id="tokenomics" data-section="tokenomics">
        <TextGridTokenomics
          title="Tokenomics"
          description="Understanding our token distribution and use"
          tokenData={[
            { value: "1M", description: "Total Supply" },
            { value: "500K", description: "Circulating Supply" },
            { value: "20%", description: "Team allocation" },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <MewFooter
          title="VibeCrypto"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/a-flat-cartoon-portrait-of-an-anthropomo-1759644900473-39efc8ea.jpg"
          imageAlt="VibeCrypto Mascot"
          socialLinks={[{ platform: "Twitter", onClick: () => {} }, { platform: "Discord", onClick: () => {} }]}
        />
      </div>
    </SiteThemeProvider>
  );
}
