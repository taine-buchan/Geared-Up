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

  return (
    <div className="w-full flex flex-col items-center gap-4 mt-6">
      <div className="grid grid-cols-2 gap-4">
        {requiredEquipmentDisplay.map(([key]) => {
          const userHasItem = userEquipment?.[key] ?? false
          return (
            <label
              key={key}
              className="flex items-center gap-2 p-2 bg-white/10 rounded-md cursor-pointer"
            >
              <input
                type="checkbox"
                checked={userHasItem}
                onChange={() => handleToggleItem(key)}
                disabled={isDisabled}
                className="accent-green-500 scale-175"
              />
              <span className="font-medium">{key}</span>
            </label>
          )
        })}
      </div>

      <button
        onClick={handleSubmit}
        disabled={isDisabled}
        className={`button cursor-pointer text-white transition ${
          !isDisabled
            ? 'bg-green-500 hover:bg-green-600'
            : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        Submit
      </button>
    </div>
  )
}
