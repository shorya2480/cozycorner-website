import Section from '../components/Section'

export default function About() {
  return (
    <>
      <Section>
        <h1 className="font-display text-3xl sm:text-4xl">About Cozy Corner</h1>
        <div className="prose prose-zinc max-w-none mt-4 text-sm sm:text-base">
          <p>
            Cozy Corner began with a simple dream — to create a warm and welcoming space where people can slow down, share stories, and enjoy the simple joys of life. What started as a small café has grown into a community spot where comfort meets flavor.
          </p>
          <p>
            Our atmosphere is relaxed and inviting, filled with the aroma of freshly brewed coffee and the soft buzz of conversations. Whether you're here to work, laugh with friends, or just enjoy a quiet moment with a book, Cozy Corner is your little escape from the everyday rush.
          </p>
          <p>
            Our philosophy is simple: good food, honest ingredients, and genuine hospitality. We believe every cup and every bite should make you feel at home.
          </p>
        </div>
      </Section>
    </>
  )
}


