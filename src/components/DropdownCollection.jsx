import React from 'react'
import { Dropdown, Button } from '../components/ui'
import { HiStar } from "react-icons/hi"

const DropdownCollection = () => {
  return (
    <section className='border border-gray-800 p-4 rounded-2xl space-y-4'>
      <h3>Dropdown Components</h3>
      <div className='flex flex-wrap gap-3'>
        {/* Secondary Dropdown */}
        <Dropdown
          variant="secondary"
          size="md"
          label="Options"
        >
          <Button label={'Option 1'} variant='ghost' styles='hover:bg-gray-900' />
          <Button label={'Option 2'} variant='ghost' styles='hover:bg-gray-900' />
          <Button label={'Option 3'} variant='ghost' styles='hover:bg-gray-900' />
        </Dropdown>
        {/* Outline Dropdown */}
        <Dropdown
          variant="outline"
          size="md"
          label="Options"
        >
          <Button label={'Option 1'} variant='ghost' styles='hover:bg-gray-900' />
          <Button label={'Option 2'} variant='ghost' styles='hover:bg-gray-900' />
          <Button label={'Option 3'} variant='ghost' styles='hover:bg-gray-900' />
        </Dropdown>
        {/* Secondary Dropdown - sm */}
        <Dropdown
          variant="secondary"
          size="sm"
          label="Options"
        >
          <Button label={'Option 1'} variant='ghost' styles='hover:bg-gray-900' />
          <Button label={'Option 2'} variant='ghost' styles='hover:bg-gray-900' />
          <Button label={'Option 3'} variant='ghost' styles='hover:bg-gray-900' />
        </Dropdown>
        {/* Outline Dropdown - sm */}
        <Dropdown
          variant="outline"
          size="sm"
          label="Options"
        >
          <Button label={'Option 1'} variant='ghost' styles='hover:bg-gray-900' />
          <Button label={'Option 2'} variant='ghost' styles='hover:bg-gray-900' />
          <Button label={'Option 3'} variant='ghost' styles='hover:bg-gray-900' />
        </Dropdown>
        {/* Secondary Dropdown - with Icon */}
        <Dropdown
          variant="secondary"
          size="md"
          label="Options"
          icon={<HiStar className="size-4" />}
        >
          <Button label={'Option 1'} variant='ghost' styles='hover:bg-gray-900' />
          <Button label={'Option 2'} variant='ghost' styles='hover:bg-gray-900' />
          <Button label={'Option 3'} variant='ghost' styles='hover:bg-gray-900' />
        </Dropdown>
      </div>
    </section>
  )
}

export default DropdownCollection
