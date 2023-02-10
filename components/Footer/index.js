import React from 'react'
import Link from 'next/link'
import MailOutlineIcon from '@material-ui/icons/MailOutline'

import Newsletter from './Newsletter'
import SocialBar from '../SocialBar'
import * as S from './styled'
import * as ui from '../../ui'

const Footer = ({ hideNewsletter }) => {
  return (
    <React.Fragment>
      { !hideNewsletter && <S.NewsletterContainer>
        <Newsletter />
      </S.NewsletterContainer> }
      <S.Container>
        <S.Content>
          <S.LeftFooter>
            <S.Logo src="/logo-text.png" alt="wweb.dev logo" />
            <S.SocialContainer>
              <SocialBar>
                <li>
                  <a href="mailto:info@wweb.dev">
                    <ui.Screenreader>E-Mail</ui.Screenreader>
                    <MailOutlineIcon width="24px" height="24px" />
                  </a>
                </li>
              </SocialBar>
            </S.SocialContainer>
          </S.LeftFooter>

          <S.RightFooter>
            <S.FooterLinks>
              <li><h2>Other Projects</h2></li>
              <li><Link href="https://sponsor.ninja/"><a>Sponsor Ninja</a></Link></li>
              <li><Link href="https://modest.app/"><a>Modest</a></Link></li>
              <li><Link href="https://img.quest/"><a>IMG Quest</a></Link></li>
              <li><Link href="https://css-speedrun.netlify.app/"><a>CSS Speedrun</a></Link></li>
              <li><Link href="https://convert2svg.com/"><a>Convert2Svg</a></Link></li>
            </S.FooterLinks>

            <S.FooterLinks>
              <li><h2>More</h2></li>
              <li><Link href="/sponsorship"><a>Sponsorship</a></Link></li>
              <li><Link href="/about"><a>About</a></Link></li>
              <li><Link href="/privacy"><a>Privacy Policy</a></Link></li>
              <a href="https://www.co2neutralwebsite.com/certificate/7187/en" target="_blank">
                <img src="//www.co2neutralwebsite.com/icons/logo/inverse_en.svg" alt="CO2 neutral website" />
              </a>
            </S.FooterLinks>
          </S.RightFooter>
        </S.Content>
        <S.Copyright>
          © Copyright 2018 - {new Date().getFullYear()} | wweb.dev
        </S.Copyright>
      </S.Container>
    </React.Fragment>
  )
}

export default Footer
