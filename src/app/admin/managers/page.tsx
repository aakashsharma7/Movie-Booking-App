import { Title2 } from '@/components/atoms/typography'
import { CreateManager } from '@/components/organisms/CreateManager'
import { UserCard } from '@/components/organisms/UserCard'
import { trpcServer } from '@/trpc/clients/server'
import { User } from '@clerk/nextjs/server'
import { string } from 'zod'

export default async function ManageAdmins() {
  const admins = await trpcServer.managers.managers.query()

  return (
    <div>
      <div className="flex justify-between gap-2">
        <div>Manage Managers</div>
      </div>
      <CreateManager />
      <div className="mt-6">
        <Title2>Managers</Title2>
        <div className="grid grid-cols-3 gap-3">
          {admins?.map(({ User }:{User {id: string, image: string, name: string } }) => (
          <UserCard key={id} user={{ id, image, name }} />
          ))}
        </div>
      </div>
    </div>
  )
}
