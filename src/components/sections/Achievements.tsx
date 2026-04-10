'use client';

import React, { useState } from 'react';
import { achievements, achievementsByCategory } from '@/data';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Trophy, Award, BookOpen, Code, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const categoryConfig = {
  award: { icon: Trophy, color: 'text-orange-600 bg-orange-100', label: 'Awards & Recognition' },
  certification: { icon: Award, color: 'text-blue-600 bg-blue-100', label: 'Certifications' },
  hackathon: { icon: Code, color: 'text-purple-600 bg-purple-100', label: 'Hackathons' },
  event: { icon: Calendar, color: 'text-cyan-600 bg-cyan-100', label: 'Events & Conferences' },
  badge: { icon: BookOpen, color: 'text-green-600 bg-green-100', label: 'Badges' },
  publication: { icon: BookOpen, color: 'text-emerald-600 bg-emerald-100', label: 'Publications' },
};

export function Achievements() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const displayedAchievements = selectedCategory
    ? achievements.filter(a => a.category === selectedCategory)
    : achievements;

  return (
    <section id="achievements" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="default" size="lg" className="mb-4">
            Achievements
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Awards & <span className="text-blue-600">Recognition</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            20+ achievements across awards, certifications, hackathons, and national sports
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              All Achievements
            </button>
            {Object.entries(categoryConfig).map(([key, config]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === key
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                {config.label}
              </button>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedAchievements.map((achievement) => {
            const config = categoryConfig[achievement.category as keyof typeof categoryConfig];
            const Icon = config?.icon || Award;

            return (
              <Card
                key={achievement.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  {/* Icon & Category */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${config?.color || 'bg-slate-100'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="outline" size="sm">
                      {achievement.date}
                    </Badge>
                  </div>

                  {/* Title */}
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors leading-tight mb-2">
                    {achievement.title}
                  </CardTitle>

                  {/* Organization */}
                  <p className="text-sm font-medium text-slate-600">
                    {achievement.organization}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Description */}
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Metrics */}
                  {achievement.metrics && (
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" size="sm">
                        {achievement.metrics}
                      </Badge>
                    </div>
                  )}

                  {/* Link */}
                  {achievement.link && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-4"
                      onClick={() => window.open(achievement.link, '_blank')}
                      rightIcon={<ExternalLink className="w-4 h-4" />}
                    >
                      View Details
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {Object.entries(achievementsByCategory).map(([key, items]) => {
            const config = categoryConfig[key as keyof typeof categoryConfig];
            return (
              <Card key={key} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {items.length}
                  </div>
                  <div className="text-xs text-slate-600 font-medium">
                    {config?.label || key}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Highlight Card */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-orange-50 to-blue-50 border-2 border-orange-100">
            <CardContent className="p-8 text-center">
              <Trophy className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Most Recent Achievement
              </h3>
              <p className="text-lg text-slate-700 mb-2">
                <strong>Top 10 Finalist</strong> - AI-Manthan Hackathon
              </p>
              <p className="text-slate-600 mb-4">
                Built ForeSight: Enterprise ML-powered risk prediction system for IT projects
              </p>
              <Badge variant="secondary" size="lg">
                January 2025 • Top 10 out of 70+ teams
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
