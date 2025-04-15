// components/UserEquipmentChecklist.tsx
import { JustUserEquipment } from '../../models/user'

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
        onClick={handleSubmit}
        disabled={isDisabled}
        className={`button cursor-pointer text-white transition ${
          !isDisabled
            ? 'bg-green-500 hover:bg-green-600'
            : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        Update Equipment
      </button>
    </div>
  )
}
