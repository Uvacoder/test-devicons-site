import React from "react"
import download from "downloadjs"
import copy from "copy-to-clipboard"
import { toast } from "react-toastify"
import tw, { styled } from "twin.macro"
import { WindowScroller, AutoSizer, List } from "react-virtualized"

import { IconCard } from "@components"
import { eventCopy, eventDownload } from "@utils"

const ROW_HEIGHT = 260
const MAX_COLUMN_WIDTH = 160

export const IconGrid = ({ icons }) => {
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
                  <GridInit
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
                          <CardInit key={icon.name}>
                            <IconCard
                              name={icon.name}
                              onClickCopy={async () => {
                                copy(icon.toSvg())
                                eventCopy(icon.name)
                                toast.success(`🎉 ${icon.name} copied as SVG!`)
                              }}
                              onClickDownload={async () => {
                                download(
                                  icon.toSvg(),
                                  `${icon.name}.svg`,
                                  "image/svg+xml"
                                )
                                eventDownload(`${icon.name}.svg`)
                                toast.success(`🎉 ${icon.name}.svg downloaded!`)
                              }}
                            />
                          </CardInit>
                        )
                      }
                    )}
                  </GridInit>
                )}
              />
            )}
          </AutoSizer>
        )}
      </WindowScroller>
    </StyledIconGrid>
  )
}

const StyledIconGrid = styled.div`
  ${tw`-m-2.5 my-2.5`}
  min-height: ${ROW_HEIGHT};
`

const GridInit = styled.div`
  ${tw`grid`}
`

const CardInit = styled.div`
  ${tw`p-2.5`}
`
