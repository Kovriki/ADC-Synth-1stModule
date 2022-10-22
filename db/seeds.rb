@prototypes_data = [
  {
    name: '1) First module / First prototype'
  },
  {
    name: '2) First oscillator'
  },
  {
    name: '3) Abstract'
  },
  {
    name: '4) Oscillator with React components'
  },
  {
    name: '5) Work with Tone.js'
  },
  {
    name: '6) Try to find kalimba'
  },
  {
    name: '7) Notes Display'
  },
  {
    name: '8) My turn'
  },
  {
    name: '9) Tone with UI'
  },
  {
    name: '10) synth1 + synth2'
  }
]

def seed
  reset_db
  create_prototypes
end

def reset_db
  Rake::Task['db:drop'].invoke
  Rake::Task['db:create'].invoke
  Rake::Task['db:migrate'].invoke
end

def create_prototypes
  @prototypes_data.each do |prototype_data|
    prototype = Prototype.create!(prototype_data)
    puts "#{prototype.name} prototype just created"
  end
end

seed
