import { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const EditResource = (props) => {
  const { state } = useLocation()
  const [form, setForm] = useState(state)
  const [validForm, setValidForm] = useState(false)

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateResource(form)
  }

  const formElement = useRef()

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [form])

  return (
    <main>
      <form autoComplete="off" onSubmit={handleSubmit} ref={formElement}>
        <label htmlFor="name-input">Resource Name</label>
        <input
          required
          type="text"
          name="resourceName"
          id="name-input"
          value={form.resourceName}
          placeholder="Resource Name"
          onChange={handleChange}
        />
        <label htmlFor="URL-input">URL</label>
        <input
          required
          type="text"
          name="URL"
          id="URL-input"
          value={form.URL}
          placeholder="URL"
          onChange={handleChange}
        />
        <label htmlFor="description-input">Description</label>
        <textarea
          required
          type="text"
          name="description"
          id="description-input"
          value={form.description}
          placeholder="Description"
          onChange={handleChange}
        />
        <label htmlFor="category-input">Category</label>
        <select
          required
          name="category"
          id="category-input"
          value={form.category}
          onChange={handleChange}
        >
          <option value="Book">Book</option>
          <option value="Video">Video</option>
          <option value="Website">Website</option>
          <option value="Interview Tip">Interview Tip</option>
          <option value="Blog">Blog</option>
          <option value="Article">Article</option>
          <option value="Other">Other</option>
        </select>
        <label htmlFor="skills-input">Skills</label>
        <input
          required
          type="text"
          name="skills"
          id="skills-input"
          value={form.skills}
          placeholder="Skills"
          onChange={handleChange}
        />
        <button 
        type="submit"
        disabled={!validForm}
        >
          Update Resource
          </button>
      </form>
    </main>
  )
}

  export default EditResource