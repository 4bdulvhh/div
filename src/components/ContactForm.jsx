import { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const courses = [
    'Fullstack Proqramlaşdırma',
    'Digital Marketing',
    'Data Science',
    'Product Owner',
    'IT Project Management',
    'IT Biznes Analitika'
  ]

  return (
    <div className="bg-[#6bd76adb] py-16"> {/* Arxa fon rəngini dəyişdik */}
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Müraciət et</h1>
        <p className="text-white mb-8">
          Akademiya və tədris proqramları haqqında daha ətraflı məlumat üçün qeydiyyatdan keçin, biz sizinlə əlaqə saxlayaq.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Ad soyadınız"
            value={formData.name}
            onChange={handleChange}
            className="flex-1 px-4 py-3 rounded-md"
          />
          <input
            type="tel"
            name="phone"
            placeholder="(055) 000 00 00"
            value={formData.phone}
            onChange={handleChange}
            className="flex-1 px-4 py-3 rounded-md"
          />
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="flex-1 px-4 py-3 rounded-md bg-white"
          >
            <option value="">Tədrisi seçin</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="px-8 py-3 bg-[#1A1A1A] text-white rounded-md hover:bg-black transition-colors"
          >
            Sorğu göndər
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
