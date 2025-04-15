import { JustUserEquipment } from '../../models/user'
import { useState } from 'react'

interface Props {
  requiredEquipmentDisplay: [keyof JustUserEquipment, false][]
  userEquipment: JustUserEquipment
  setUserEquipment: React.Dispatch<React.SetStateAction<JustUserEquipment>>
  handleSubmit: () => void
  isDisabled: boolean
}

export default function UserEquipmentChecklist({
  requiredEquipmentDisplay,
  userEquipment,
  setUserEquipment,
  handleSubmit,
  isDisabled,
}: Props) {
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  function handleToggleItem(item: keyof JustUserEquipment) {
    const updated = {
      ...userEquipment,
      [item]: !userEquipment[item],
    }
    setUserEquipment(updated)
  }

  const formatCamelCase = (text: string): string => {
    if (!text) return ''

    const formatted = text
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase())

    return formatted
  }

  const handleSubmitWithFeedback = () => {
    handleSubmit()
    setSuccessMessage('Equipment Updated!')

    setTimeout(() => {
      setSuccessMessage(null)
    }, 2000)
  }

  // useEffect(() => {
  //   return () => {
  //     // This clears any pending timeouts when the component unmounts
  //   }
  // }, [])

  return (
    <div className="w-full flex flex-col items-center gap-4 mt-6">
      <div className="grid grid-cols-3 gap-4">
        {requiredEquipmentDisplay.map(([key]) => {
          const userHasItem = userEquipment?.[key] ?? false
          return (
            <label
              key={key}
              className="flex items-center gap-4 p-4 bg-white/10 rounded-md cursor-pointer"
            >
              <input
                type="checkbox"
                checked={userHasItem}
                onChange={() => handleToggleItem(key)}
                disabled={isDisabled}
                className="accent-green-500 scale-175"
              />
              <span className="font-medium">
                {formatCamelCase(key as string)}
              </span>
            </label>
          )
        })}
      </div>

      <button
        data-testid="equipment-button"
        onClick={handleSubmitWithFeedback}
        disabled={isDisabled}
        className={`button cursor-pointer text-white flex flex-col items-center transition ${
          !isDisabled
            ? 'bg-green-500 hover:bg-green-600'
            : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        {successMessage || 'Update Equipment'}
      </button>
    </div>
  )
}
