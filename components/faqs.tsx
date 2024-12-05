export default function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 md:pb-20">
            <h2 className="h2 font-hkgrotesk">FAQs</h2>
          </div>
          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">What is Kaspa DAO?</h4>
                <p className="text-slate-500">
                Kaspa DAO is the first decentralized autonomous organization on the Kaspa network. It funds projects that align with its mission of decentralization, transparency, and innovation. Governed by KDAO token holders, it empowers the community to shape the future of the network.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">How does Kaspa DAO allocate funding?</h4>
                <p className="text-slate-500">
                Funding is allocated through a decentralized voting process. Token holders evaluate and vote on proposals, directing resources to initiatives that benefit the network and align with its values.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">How are leaders elected in Kaspa DAO?</h4>
                <p className="text-slate-500">
                Token holders participate in elections to nominate and vote for officials. Elected leaders oversee decision-making, funding distribution, and ensure the DAO operates efficiently and transparently.
                </p>
              </div>
            </div>
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">Who can submit proposals to Kaspa DAO?</h4>
                <p className="text-slate-500">
                Any holder of the KDAO token can submit a proposal. Whether you're a developer, contributor, or enthusiast, the DAO welcomes ideas that drive growth and innovation.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">What types of projects does Kaspa DAO fund?</h4>
                <p className="text-slate-500">
                The DAO supports projects that enhance the Kaspa ecosystem, such as developer tools, educational initiatives, infrastructure, and programs that foster decentralization and collaboration.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">How does Kaspa DAO ensure transparency and accountability?</h4>
                <p className="text-slate-500">
                All decisions, funding, and elections are conducted on-chain. This ensures every action is publicly visible, creating accountability and building trust within the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}