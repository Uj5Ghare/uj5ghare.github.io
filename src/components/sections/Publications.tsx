'use client';

import React from 'react';
import { achievementsByCategory } from '@/data';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BookOpen, ExternalLink, Award, Calendar } from 'lucide-react';

export function Publications() {
  const publications = achievementsByCategory.publications;

  return (
    <section id="publications" className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="default" size="lg" className="mb-4">
            Research Publications
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Published <span className="text-blue-600">Research</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Peer-reviewed research papers published in renowned conferences, indexed in SCOPUS and Web of Science
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {publications.map((pub, index) => (
            <Card
              key={pub.id}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-blue-300"
            >
              <CardHeader className="space-y-4">
                {/* Publication Badge */}
                <div className="flex items-center justify-between">
                  <Badge variant="success" className="text-sm">
                    {pub.metrics}
                  </Badge>
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {pub.date}
                  </div>
                </div>

                {/* Title */}
                <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors leading-tight">
                  {pub.title}
                </CardTitle>

                {/* Organization */}
                <div className="flex items-center gap-2 text-slate-600">
                  <Award className="w-5 h-5 text-blue-500" />
                  <span className="font-medium">{pub.organization}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Description */}
                <p className="text-slate-700 leading-relaxed">
                  {pub.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    Key Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {getPublicationHighlights(pub.id).map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-700">
                        <span className="text-blue-500 mr-2 mt-0.5">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Indexing Tags */}
                <div className="flex flex-wrap gap-2">
                  {getIndexingTags(pub.id).map((tag) => (
                    <Badge key={tag} variant="outline" size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                {pub.link && (
                  <div className="pt-4 flex gap-3">
                    <Button
                      variant="primary"
                      size="md"
                      className="flex-1"
                      onClick={() => window.open(pub.link, '_blank')}
                      rightIcon={<ExternalLink className="w-4 h-4" />}
                    >
                      View Paper
                    </Button>
                    <Button
                      variant="outline"
                      size="md"
                      onClick={() => window.open(`https://scholar.google.com/scholar?q=${encodeURIComponent(pub.title)}`, '_blank')}
                      leftIcon={<BookOpen className="w-4 h-4" />}
                    >
                      Citations
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Impact Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-sm text-slate-600 font-medium">Publications</div>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">2</div>
              <div className="text-sm text-slate-600 font-medium">Conferences</div>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">1</div>
              <div className="text-sm text-slate-600 font-medium">First Author</div>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-cyan-600 mb-2">2024</div>
              <div className="text-sm text-slate-600 font-medium">Latest</div>
            </CardContent>
          </Card>
        </div>

        {/* Research Interests */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-100">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
                Research Interests
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Educational Technology',
                  'Deep Learning',
                  'Natural Language Processing',
                  'Computer Vision',
                  'Object Detection',
                  'Question Paper Analysis',
                  'Bloom\'s Taxonomy',
                  'Small Object Detection',
                  'YOLOv8',
                  'BERT',
                  'LSTM',
                  'Machine Learning in Education',
                ].map((interest) => (
                  <Badge key={interest} variant="default" size="md">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Helper functions
function getPublicationHighlights(id: string): string[] {
  const highlights: Record<string, string[]> = {
    'springer-ictis-2024': [
      'First author contribution demonstrating leadership in research',
      'Published in Springer LNNS series (Lecture Notes in Networks and Systems)',
      'Indexed in SCOPUS, EI Compendex, INSPEC, zbMATH, and SCImago',
      'Presented at ICTIS 2024 conference in Ahmedabad',
      'Achieved 98.04% accuracy on 2,809 question paper instances',
      'Utilized advanced NLP techniques including BERT and Bi-LSTM',
    ],
    'aip-icraic-2024': [
      'Published in AIP Conference Proceedings (Volume 3255, Issue 1, 2025)',
      'Indexed in SCOPUS and Web of Science for global visibility',
      'Addressed challenging small object detection in aerial imagery',
      'Benchmarked multiple YOLOv8 variants (yolov8n, yolov8m, yolov8x)',
      'Contributed to avian ecology and drone surveillance applications',
      'Presented at International Conference on Robotics, Automation, and Intelligent Computing',
    ],
  };
  return highlights[id] || [];
}

function getIndexingTags(id: string): string[] {
  const tags: Record<string, string[]> = {
    'springer-ictis-2024': ['SCOPUS', 'EI Compendex', 'INSPEC', 'zbMATH', 'SCImago', 'Springer'],
    'aip-icraic-2024': ['SCOPUS', 'Web of Science', 'AIP', 'Conference Proceedings'],
  };
  return tags[id] || [];
}
