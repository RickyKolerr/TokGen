'use client'

import { useState } from 'react'
import { GlowButton } from '@/components/ui/glow-button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type TeamMember = {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

type Project = {
  id: number;
  name: string;
  members: TeamMember[];
  status: 'Đang thực hiện' | 'Hoàn thành';
}

const mockProjects: Project[] = [
  {
    id: 1,
    name: 'Thử Thách Nhảy Mùa Hè',
    members: [
      { id: 1, name: 'Nguyễn Văn A', role: 'Quay phim', avatar: '/avatars/avatar-1.png' },
      { id: 2, name: 'Trần Thị B', role: 'Biên tập', avatar: '/avatars/avatar-2.png' },
      { id: 3, name: 'Lê Văn C', role: 'Diễn viên', avatar: '/avatars/avatar-3.png' },
    ],
    status: 'Đang thực hiện',
  },
  {
    id: 2,
    name: 'Review Ẩm Thực Đường Phố',
    members: [
      { id: 4, name: 'Phạm Thị D', role: 'Đạo diễn', avatar: '/avatars/avatar-4.png' },
      { id: 5, name: 'Hoàng Văn E', role: 'Quay phim', avatar: '/avatars/avatar-5.png' },
    ],
    status: 'Hoàn thành',
  },
]

export default function CollaborativeCreationPage() {
  const [projects, setProjects] = useState<Project[]>(mockProjects)
  const [newProjectName, setNewProjectName] = useState('')

  const addNewProject = () => {
    if (newProjectName) {
      const newProject: Project = {
        id: projects.length + 1,
        name: newProjectName,
        members: [],
        status: 'Đang thực hiện',
      }
      setProjects([...projects, newProject])
      setNewProjectName('')
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FF69B4] to-[#8A2BE2] bg-clip-text text-transparent">
        Sáng Tạo Nội Dung Nhóm
      </h1>
      <div className="flex space-x-4">
        <Input
          placeholder="Tên dự án mới"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
        />
        <GlowButton onClick={addNewProject}>Thêm Dự Án</GlowButton>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>Trạng thái: {project.status}</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Thành viên:</h3>
              <div className="flex flex-wrap gap-2">
                {project.members.map((member) => (
                  <div key={member.id} className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

