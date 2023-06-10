import React from 'react'
import { Sidebar, Topbar } from './common'


const Home = () => {
  return (
    <div className='w-full min-h-screen flex'>
      <Sidebar />
      <div className='w-5/6 h-100vh flex flex-col'>
        <Topbar />
        <div className='w-full h-full p-4 flex justify-center'>
          <div className='w-3/4'>
            <p className='text-3xl underline'>What is Workspace</p>
            <p className='mt-4'>Workspace is a place to build your team knowledge base, you could think of it like your team’s shared library – a place for important documentation, notes, and ideas to live and be discovered. Some things you might want to keep in Workspace include:</p>
            <div className='mt-4 ml-4'>
              <ul className='list-disc'>
                <li>Documentation</li>
                <li>Support knowledge base</li>
                <li>Product plans and RFCs</li>
                <li>Sales playbooks</li>
                <li>Onboarding checklists</li>
                <li>Company policies</li>
                <li>Meeting notes</li>
              </ul>
            </div>
            <p className='text-xl my-4 underline'>Structure</p>
            <p>
              Outline allows you to organize documents in "collections", for example these could represent topics like Sales, Product, or HR. You can assign users or groups access to collections. Within collections documents can be interlinked and deeply nested to easily build relationships within your knowledge base.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home