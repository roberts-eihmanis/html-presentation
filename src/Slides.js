import { useEffect, useState, useCallback } from 'react'

function Slides() {
  const [currentPosition, setPosition] = useState(1)
  const [presentationSwitched, setPresentation] = useState(false)

  useEffect(() => {
    if (window.presentation) {
      document.addEventListener('keydown', handleSlideNavigation)
    } else {
      document.removeEventListener('keydown', handleSlideNavigation)
    }
  }, [presentationSwitched])

  const handleSlideNavigation = useCallback((event) => {
    if (window.presentation) {
      if (event.key === 'ArrowDown') {
        setPosition(prevPosition => {
          if (prevPosition === 13) return prevPosition
          console.log("SWITCHING POSITION", prevPosition)
          const position = prevPosition + 1
          const id = document.getElementById(`position-${position}`)
          if (id) {
            id.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
          }
          return position
        })
      } else if (event.key === 'ArrowUp') {
        setPosition(prevPosition => {
          if (prevPosition === 1) return prevPosition

          const position = prevPosition - 1
          const id = document.getElementById(`position-${position}`)
          if (id) {
            id.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
          }
          return position
        })
      }
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handlePresentation)
  }, [])

  const handlePresentation = useCallback((event) => {
    if (event.key === 'F5') {
      window.presentation = true
      setPresentation(true)
      setPosition(prevPosition => {
        const id = document.getElementById(`position-${1}`)
        if (id) {
          id.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
        }
        return 1
      })
      document.body.style.overflowY = 'hidden'
      document.body.style.height = '100%'
    } else if (event.key === 'Escape') {
      setPresentation(false)
      window.presentation = false
      document.body.style.overflowY = 'unset'
      document.body.style.height = 'unset'
    }
  }, [])

  const renderSlide = (index, title, subtitle, body) => {
    return (
      <div id={`position-${index}`} className="slide-container">
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
        <p>{body}</p>
      </div>
    )
  }

  return (
    <div>
      {renderSlide(1,
        "«BEKAS», БК 0010",
        "Wikipedia.com:",
        "• БК (бытовой компьютер) — 16 bitu mājas un mācību Elektroniski skaitļojamās mašīnas saime, savietojams ar SM ESM, PDP-11, DVK sistēmu komandu komplektu un arhitektūru.")}
      {renderSlide(2,
        "Acorn BBC Mini",
        "Wikipedia.com:",
        "БК (бытовой компьютер) — 16 bitu mājas un mācību Elektroniski skaitļojamās mašīnas saime, savietojams ar SM ESM, PDP-11, DVK sistēmu komandu komplektu un arhitektūru.")}
      {renderSlide(3,
        "Wang 2200",
        "Wikipedia.com:",
        "БК (бытовой компьютер) — 16 bitu mājas un mācību Elektroniski skaitļojamās mašīnas saime, savietojams ar SM ESM, PDP-11, DVK sistēmu komandu komplektu un arhitektūru.")}
      {renderSlide(4,
        "Искра 226",
        "Wikipedia.com:",
        "«Искра 226» — советский персональный компьютер. Разработан коллективом производственного объединения «Ленинградский электромеханический завод». Выпускался серийно на производственном объединении (ПО) «Счётмаш» Минприбора, г. Курск. Главный конструктор машины — Валентин Евгеньевич Кузнецов (в 1970—1978 годах возглавлял в ГСКТБ Счётмаш (Ленинград) разработки Искра 125, Искра 1256).")}
      {renderSlide(5,
        "Первый дисплейный класс на базе ЭВМ СМ-4",
        "Wikipedia.com:",
        "СМ-4 — 16-разрядная, система команд DEC PDP-11, включая EIS и FIS, общая шина (ОШ СМ), процессор СМ-4П, производительность — до 800 тыс. оп/с, полупроводниковое ОЗУ до 124 Кслов, диспетчер памяти. Выпускалась с 1979 года в СССР, Болгарии, Венгрии.")}
      {renderSlide(6,
        "Digital VAX computer",
        "Wikipedia.com:",
        "VAX Architecture was designed to increase the compatibility by improving the hardware of the earlier designed machines. As VAX architecture is an example of the CISC (Complex Instruction Set Computers) therefore there are large and complicated instruction sets used in the system.")}
      {renderSlide(7,
        "ZX Spectrum",
        "Wikipedia.com:",
        "The ZX Spectrum (UK: /zɛd ɛks/) is an 8bit personal home computer developed by Sinclair Research. It was first released in the United Kingdom on 23 April 1982 and went on to become Britain's best-selling microcomputer.")}
      {renderSlide(8,
        "Apple ][+",
        "Wikipedia.com:",
        "Essentially an updated version of the Apple ][, the ][+ came with 48K RAM, and a new auto- start ROM for easier start-up and screen editing. It also included a new flavor of Basic in the ROM- -a floating point version written by a new company called Microsoft. It was released in June 1979 and retailed for $1,195. The ][+ was sold in Europe as the ][ europlus, which could display video in European PAL format, and had ESC sequences for European letters. It was also repackaged in a black case and sold to educational markets by Bell & Howell. The ][+ was replaced by the Apple ][e in 1983.")}
      {renderSlide(10,
        "YAMAHA YIS503II",
        "Wikipedia.com:",
        "MSX is a standardized home computer architecture, announced by Microsoft and ASCII Corporation on June 16, 1983.[1][2] It was initially conceived by Microsoft as a product for the Eastern sector, and jointly marketed by Kazuhiko Nishi, then vice-president at Microsoft and director at ASCII Corporation.[3] Microsoft and Nishi conceived the project as an attempt to create unified standards among various home computing system manufacturers of the period, in the same fashion as the VHS standard for home video tape machines.")}
      {renderSlide(10,
        "IBM PC/XT",
        "Wikipedia.com:",
        "The IBM Personal Computer XT (model 5160, often shortened to PC/XT) is the second computer in the IBM Personal Computer line, released on March 8, 1983.[1] Except for the addition of a built-in hard drive and extra expansion slots, it is very similar to the original IBM PC model 5150 from 1981.")}
      {renderSlide(11,
        "IBM 360",
        "Wikipedia.com:",
        "The IBM System/360 (S/360) is a family of mainframe computer systems that was announced by IBM on April 7, 1964, and delivered between 1965 and 1978.[1] It was the first family of computers designed to cover the complete range of applications, from small to large, both commercial and scientific. The design made a clear distinction between architecture and implementation, allowing IBM to release a suite of compatible designs at different prices. All but the only partially compatible Model 44 and the most expensive systems use microcode to implement the instruction set, which features 8-bit byte addressing and binary, decimal and hexadecimal floating-point calculations.")}
      {renderSlide(12,
        "EC-1045",
        "Wikipedia.com:",
        "ЕС-1045 разрабатывалась под руководством А. Т. Кучукяна, производилась в Ереване и Казани. Использовались ИС серии ИС-500. Выпущено 1865 машин. Разработанные в ЕрНИИММ автоматизированные системы проектирования «Автопроект» (А. В. Петросян, С. Саркисян С. Амбарян и др.) и унифицированного вторичного источника питания (1977 г., гл. констр. Ж. Мкртчян) позволили приступить к разработке моделей на ИС высокого уровня интеграций БИС, специализированных быстродействующих процессорах и полупроводниковой памяти ЕС 3267 (гл. констр. Л. Чахоян).")}
      {renderSlide(13,
        "EC-1045",
        "Wikipedia.com:",
        "ЕС-1045 разрабатывалась под руководством А. Т. Кучукяна, производилась в Ереване и Казани. Использовались ИС серии ИС-500. Выпущено 1865 машин. Разработанные в ЕрНИИММ автоматизированные системы проектирования «Автопроект» (А. В. Петросян, С. Саркисян С. Амбарян и др.) и унифицированного вторичного источника питания (1977 г., гл. констр. Ж. Мкртчян) позволили приступить к разработке моделей на ИС высокого уровня интеграций БИС, специализированных быстродействующих процессорах и полупроводниковой памяти ЕС 3267 (гл. констр. Л. Чахоян).")}
    </div>
  )
}

export default Slides
