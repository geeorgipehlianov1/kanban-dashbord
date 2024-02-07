import { useStateContext } from '../contexts/ContextProvider'
import { Tooltip, TooltipComponent } from '@syncfusion/ej2-react-popups'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'

import { themeColors } from '../data/dummy'

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext()

  console.log(currentColor == 'Light')
  console.log(currentMode)
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-green-200 bg-white dark:[#484B52] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
            onClick={() => setThemeSettings(false)}
            className="rext-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-xl">Theme Options</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="Theme"
              value="Light"
              className="cursor-pointer"
              onChange={e => setMode(e)}
              checked={currentMode === 'Light'}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              name="Theme"
              value="Dark"
              className="cursor-pointer"
              onChange={e => setMode(e)}
              checked={currentMode === 'Dark'}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-xl">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => {
              return (
                <TooltipComponent
                  key={index}
                  content={item.name}
                  position="TopCenter"
                >
                  <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                    <button
                      className="w-10 h-10 rounded-full cursor-pointer"
                      type="button"
                      onClick={() => setColor(item.color)}
                      style={{ backgroundColor: item.color }}
                    >
                      {' '}
                      <BsCheck
                        className={`ml-2 text-2xl text-white ${
                          item.color === currentColor ? 'block' : 'hidden'
                        }`}
                      />{' '}
                    </button>
                  </div>
                </TooltipComponent>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings
