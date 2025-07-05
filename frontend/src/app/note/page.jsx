import React from 'react'

const page = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/note/:id" element={<NoteDetailPage />} />
        </Routes>
    </div>
  )
}

export default page