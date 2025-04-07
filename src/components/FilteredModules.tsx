import React, { useEffect, useState } from 'react'
import { ApiClient } from 'adminjs'

const api = new ApiClient()

const FilteredModulesSelect = ({ property, onChange, record }) => {
  const [modules, setModules] = useState([])

  useEffect(() => {
    if (!record?.id) return

    const params = new URLSearchParams({
      'filters.courseId': record.id,
      'perPage': '100',
    })

    api.resourceAction({
      resourceId: 'Module',
      actionName: 'list',
      query: params.toString(),
    }).then(res => {
      setModules(res.data.records || [])
    })
  }, [record?.id])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions).map(opt => opt.value)
    onChange(property.name, selected)
  }

  return (
    <div>
      <label>Modules for this course</label>
      <select multiple onChange={handleChange} defaultValue={record?.params?.[property.name] || []}>
        {modules.map(mod => (
          <option key={mod.id} value={mod.id}>
            {mod.params.title || mod.id}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilteredModulesSelect
