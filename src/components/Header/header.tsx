import styles from "@//components/Header/header.module.css";
import sun from '../../images/sun.svg'
import sunWhite from '../../images/sun_white.svg'
import Image from 'next/image'
import { useContext, useMemo } from "react-hook-tracer";
import { ThemeContext } from "@/providers/ThemeProvider";
import { useCallback } from "react";
import { Themes } from "@/types/theme";

export const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const changeTheme = useCallback(() => {
    setTheme(theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT)
  }, [setTheme, theme])

  return (<div className={styles.header + (theme === Themes.DARK ? ' ' + styles.darkHeader : '')}>
    <h1 className={styles.headerText}>
      LIFECYCLE-SANDBOX
    </h1>
    <button className={styles.button} onClick={changeTheme}>
      <Image
        className={styles.image}
        src={theme === Themes.LIGHT ? sun : sunWhite}
        alt={'mode'}
      />
    </button>
  </div>
  )
}
