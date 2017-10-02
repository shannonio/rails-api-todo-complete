# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u = User.create!(
  email: 'admin@todo.io',
  uid: 'admin@todo.io',
  name: 'Bewb Bonofield',
  nickname: 'The Only Bob',
  password: 'password',
  password_confirmation: 'password'
)

p 'Create Users'
p User.all

l = List.create!(
  name: 'A List',
  user: u
)

p 'Create List'
p List.all

Item.create!(
  content: 'Thing 1',
  done: true,
  list: l
)

Item.create!(
  content: 'Thing 2',
  done: false,
  list: l
)

Item.create!(
  content: 'Thing 3',
  done: false,
  list: l
)

p "Create Items"
p Item.all
