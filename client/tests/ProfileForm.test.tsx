import { describe, it, expect, vi } from 'vitest'
import { screen } from '@testing-library/react'

import ProfileForm from '../components/ProfileForm'
import { renderComponent } from './setup'
import { UserData, UserProfileData } from '../../models/user'

describe('ProfileForm', () => {
  it('handle submit should be called when form is submitted', async () => {
    const handleSubmit = vi.fn((form: UserProfileData) => {
      expect(form).toMatchObject({
            username: 'test-username',
            name: 'test-name',
            email: 'test-email',
            phone: 'test-phone',
            result: '',
            myEquipment: {
              backpack: false,
              waterproofPackLiner: false,
              sleepingBag: false,
              firstAidKit: false,
              survivalKit: false,
              safetyEquipment: false,
              torchFlashlight: false,
              rubbishBag: false,
              bookingConfirmationAndId: false,
              earplugsForBunkrooms: false,
              drinkBottle: false,
              eatingAndCookingUtensils: false,
              gasCookerAndFuel: false,
              matchesOrLighter: false,
              generalToiletries: false,
              backupToiletOption: false,
              tent: false,
              sleepingMat: false,
              groundSheet: false,
              walkingClothes: false,
              hikingBoots: false,
              socks: false,
              shorts: false,
              shirt: false,
              underLayers: false,
              midLayers: false,
              raincoat: false,
              overtrousers: false,
              warmHatAndGloves: false,
              sunhatAndSunglasses: false,
              extraSocksUnderwearAndShirt: false,
              gaiters: false,
              lightweightShoesForHuts: false,
              carryFood: false,
              lightweightFood: false,
              emergencyFood: false,
              foodStorage: false,
              emergencyShelter: false,
              distressBeacon: false,
              cookingFacilities: false,
              sanitaryBins: false,
              gasCooker: false,
              fireStarters: false,
              lifeJacket: false,
              kayakOrCanoe: false,
              paddles: false,
              plasticDrumsOrEquivalent: false,
              dryBags: false,
              swimwear: false,
              sandalsOrAquaShoes: false,
              portableStoveAndFuel: false,
              candles: false,
              docConfirmationLetter: false,
            
        
    }})
    })
    const testForm: UserData = {
        username: 'test-username',
        name: 'test-name',
        email: 'test-email',
        phone: 'test-phone',
        result: '',
        myEquipment: {
          backpack: false,
          waterproofPackLiner: false,
          sleepingBag: false,
          firstAidKit: false,
          survivalKit: false,
          safetyEquipment: false,
          torchFlashlight: false,
          rubbishBag: false,
          bookingConfirmationAndId: false,
          earplugsForBunkrooms: false,
          drinkBottle: false,
          eatingAndCookingUtensils: false,
          gasCookerAndFuel: false,
          matchesOrLighter: false,
          generalToiletries: false,
          backupToiletOption: false,
          tent: false,
          sleepingMat: false,
          groundSheet: false,
          walkingClothes: false,
          hikingBoots: false,
          socks: false,
          shorts: false,
          shirt: false,
          underLayers: false,
          midLayers: false,
          raincoat: false,
          overtrousers: false,
          warmHatAndGloves: false,
          sunhatAndSunglasses: false,
          extraSocksUnderwearAndShirt: false,
          gaiters: false,
          lightweightShoesForHuts: false,
          carryFood: false,
          lightweightFood: false,
          emergencyFood: false,
          foodStorage: false,
          emergencyShelter: false,
          distressBeacon: false,
          cookingFacilities: false,
          sanitaryBins: false,
          gasCooker: false,
          fireStarters: false,
          lifeJacket: false,
          kayakOrCanoe: false,
          paddles: false,
          plasticDrumsOrEquivalent: false,
          dryBags: false,
          swimwear: false,
          sandalsOrAquaShoes: false,
          portableStoveAndFuel: false,
          candles: false,
          docConfirmationLetter: false,
        },
      }
    

    const { user } = renderComponent(
      <ProfileForm form={testForm} handleSubmit={handleSubmit}/>
    )

    const nameInput = screen.getByLabelText('Name *')
    await user.clear(nameInput)
    await user.type(nameInput, 'test-name')

    const usernameInput = screen.getByLabelText('User Name *')
    await user.clear(usernameInput)
    await user.type(usernameInput, 'test-username')

    const emailInput = screen.getByLabelText('Email *')
    await user.clear(emailInput)
    await user.type(emailInput, 'test-email')

    const phoneInput = screen.getByLabelText('Phone Number *')
    await user.clear(phoneInput)
    await user.type(phoneInput, 'test-phone')

    const submitButton = screen.getByRole('button', { name: 'Submit' })
    await user.click(submitButton)

    expect(handleSubmit).toHaveBeenCalled()
  })
})
