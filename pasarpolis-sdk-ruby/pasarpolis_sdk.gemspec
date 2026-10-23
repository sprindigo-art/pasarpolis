lib = 'pasarpolis_sdk'
lib_file = File.expand_path("../lib/#{lib}.rb", __FILE__)
File.read(lib_file) =~ /\bVERSION\s*=\s*["'](.+?)["']/
version = $1

Gem::Specification.new do |s|
  s.name        = lib
  s.version     = version
  s.date        = '2018-12-07'
  s.summary     = 'Pasarpolis SDK - Ruby SDK for the Pasarpolis Integration APIs'
  s.description = 'A Ruby SDK for the Pasarpolis Integration APIs'
  s.authors     = ['Paritosh Singh']
  s.email       = 'paritosh.singh@pasarpolis.com'
  s.homepage    = ''
  s.licenses    = ['MIT']
  s.files       = Dir['lib/**/**/*'] # + Dir['bin/*']
  s.files      += Dir['[A-Z]*']    + Dir['test/**/*']
  # s.files.reject! { |fn| fn.include? "CVS" }
  # s.required_ruby_version = '>= 1.8.7' # 1.8.7+ is tested
  s.add_runtime_dependency 'faraday', '~> 0.9', '>= 0.9'
  s.add_runtime_dependency 'rspec', '3.8', '>= 3.8'
end