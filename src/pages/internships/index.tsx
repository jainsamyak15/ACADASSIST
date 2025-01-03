import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import Layout from '../../components/layout/Layout'
import InternshipCard from '../../components/cards/InternshipCard'
import React from 'react';

interface Internship {
  id: number
  title: string
  company: string
  location: string
  duration: string
  stipend: string
  description: string
  type: 'industrial' | 'research'
}

export default function InternshipsPage() {
  const [internships, setInternships] = useState<Internship[]>([])

  useEffect(() => {
    async function loadInternships() {
      const { data, error } = await supabase
        .from('internships')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error loading internships:', error)
        return
      }

      setInternships(data || [])
    }

    loadInternships()
  }, [])

  return (
    <Layout>
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Internship Opportunities</h1>
          <p className="text-xl">Discover amazing internships to kickstart your career</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((internship) => (
            <InternshipCard key={internship.id} {...internship} />
          ))}
        </div>
      </section>
    </Layout>
  )
}