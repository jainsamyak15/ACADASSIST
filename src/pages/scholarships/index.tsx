import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import Layout from '../../components/layout/Layout'
import ScholarshipCard from '../../components/cards/ScholarshipCard'
import React from 'react';

interface Scholarship {
  id: number
  title: string
  amount: string
  description: string
  icon: string
}

export default function ScholarshipsPage() {
  const [scholarships, setScholarships] = useState<Scholarship[]>([])

  useEffect(() => {
    async function loadScholarships() {
      const { data, error } = await supabase
        .from('scholarships')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error loading scholarships:', error)
        return
      }

      setScholarships(data || [])
    }

    loadScholarships()
  }, [])

  return (
    <Layout>
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Scholarships</h1>
          <p className="text-xl">Find financial support for your education</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.id} {...scholarship} />
          ))}
        </div>
      </section>
    </Layout>
  )
}