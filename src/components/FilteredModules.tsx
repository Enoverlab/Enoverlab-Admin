import React, { useEffect, useState } from 'react'
import Select, { MultiValue } from 'react-select'
import { ApiClient, BasePropertyProps } from 'adminjs'

const api = new ApiClient()

interface ModuleOption {
  value: string
  label: string
}

const FilteredModules: React.FC<BasePropertyProps> = ({ property, onChange, record }) => {
  const [options, setOptions] = useState<ModuleOption[]>([])
  const [selected, setSelected] = useState<ModuleOption[]>([])

  useEffect(() => {
    const fetchModules = async () => {
      const params = new URLSearchParams({ perPage: '100' })

      const res = await api.resourceAction({
        resourceId: 'module',
        actionName: 'list',
        query: params.toString(),
      })

      const records = res.data.records || []
      const formattedOptions = records.map((mod: any): ModuleOption => ({
        value: mod.id,
        label: mod.params.title || mod.id,
      }))

      setOptions(formattedOptions)

      // ✅ Only set selected if it's still empty (first load)
      if (selected.length === 0) {
        const existingModuleIds = (record?.params?.[property.name] || []) as string[]
        const preSelected = formattedOptions.filter(opt => existingModuleIds.includes(opt.value))
        setSelected(preSelected)
      }
    }

    fetchModules()
  }, [])

  const handleChange = (selectedOptions: MultiValue<ModuleOption>) => {
    const selectedValues = selectedOptions.map(opt => opt.value)
    setSelected(selectedOptions as ModuleOption[])
    onChange(property.name, selectedValues)
  }

  return (
    <div>
      <label style={{ display: 'block', marginBottom: 5 }}>{property.label || 'Modules'}</label>
      <Select
        isMulti
        options={options}
        value={selected}
        onChange={handleChange}
        placeholder="Search & select modules..."
      />
    </div>
  )
}

export default FilteredModules
