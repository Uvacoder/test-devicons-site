import React from "react"
import download from "downloadjs"
import copy from "copy-to-clipboard"
import { toast } from "react-toastify"
import tw, { styled } from "twin.macro"
import { WindowScroller, AutoSizer, List} from "react-virtualized"

import { IconCard } from "@sections"
import { useIsMobile } from "@hooks"
import { logCopy, logDownload } from "@utils"

const StyledIconGrid = styled.section`
  ${tw`-m-2.5 mb-5`}
  min-height: ${ROW_HEIGHT};

  ul {
    ${tw`grid outline-none`}

    li {
      ${tw`p-2.5`}
    }
  }
`

const ROW_HEIGHT = 125
const MAX_COLUMN_WIDTH = 125

export default function IconGrid({ icons }) {
  const{ isMobile } = useIsMobile()
  const [numColumns, setNumColumns] = React.useState(1)

  return (
    <StyledIconGrid>
      <WindowScroller>
        {({ height, isScrolling, onChildScroll, scrollTop }) => (
          <AutoSizer
            disableHeight
            onResize={({ width }) =>
              setNumColumns(Math.floor(width / MAX_COLUMN_WIDTH))
            }
          >
            {({ width }) => (
              <List
                tabIndex={-1}
                autoHeight
                width={width}
                height={height}
                isScrolling={isScrolling}
                onScroll={onChildScroll}
                scrollTop={scrollTop}
                rowCount={Math.ceil(icons.length / numColumns)}
                rowHeight={ROW_HEIGHT}
                rowRenderer={({ key, index: rowIndex, style }) => (
                  <ul
                    key={key}
                    style={style}
                    css={{ gridTemplateColumns: `repeat(${numColumns}, 1fr)` }}
                  >
                    {Array.from(
                      { length: numColumns },
                      (value, columnIndex) => {
                        const icon = icons[rowIndex * numColumns + columnIndex]

                        if (!icon) {
                          return null
                        }

                        return (
                          <li key={icon.name}>
                            <IconCard
                              name={icon.name}
                              onClick={
                                !isMobile
                                  ? event => {
                                    if (event.shiftKey) {
                                      copy(icon.toSvg())
                                      logCopy(icon.name)
                                      toast.success(`🎉 ${icon.name} copied as SVG!`)
                                    } else {
                                      download(
                                        icon.toSvg(),
                                        `${icon.name}.svg`,
                                        "image/svg+xml",
                                      )
                                      logDownload(icon.name)
                                      toast.success(`🎉 ${icon.name} downloaded!`)
                                    }
                                  }
                                  : () => {
                                    copy(icon.toSvg())
                                    logCopy(icon.name)
                                    toast.success(`🎉 ${icon.name} copied as SVG!`)
                                  }
                              }
                            />
                          </li>
                        )
                      }
                    )}
                  </ul>
                )}
              />
            )}
          </AutoSizer>
        )}
      </WindowScroller>
    </StyledIconGrid>
  )
}