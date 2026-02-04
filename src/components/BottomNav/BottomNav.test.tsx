import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { BottomNav, type NavKey } from './BottomNav'

describe('BottomNav', () => {
  it('calls onNavigate and sets aria-current on active item', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn<(key: NavKey) => void>()

    function Wrap() {
      const [active, setActive] = useState<NavKey>('table')
      return (
        <BottomNav
          activeKey={active}
          onNavigate={(key) => {
            onNavigate(key)
            setActive(key)
          }}
        />
      )
    }

    render(<Wrap />)

    const profileBtn = screen.getByRole('button', { name: 'Профиль' })
    await user.click(profileBtn)

    expect(onNavigate).toHaveBeenCalledWith('profile')
    expect(profileBtn).toHaveAttribute('aria-current', 'page')
  })
})
