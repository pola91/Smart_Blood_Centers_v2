# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140326013338) do

  create_table "blood_centers", force: true do |t|
    t.integer  "centerID"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "bloods", force: true do |t|
    t.integer  "bloodID"
    t.string   "type"
    t.string   "group"
    t.datetime "expirationDate"
    t.integer  "blood_center_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "checks", force: true do |t|
    t.integer  "checkNumber"
    t.string   "type"
    t.string   "group"
    t.datetime "expirationDate"
    t.integer  "registered_user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "guests", force: true do |t|
    t.string   "IPAddress"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "locations", force: true do |t|
    t.integer  "latitude"
    t.integer  "longitude"
    t.integer  "guest_id"
    t.integer  "blood_center_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "sessions", force: true do |t|
    t.string   "session_id", null: false
    t.text     "data"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "sessions", ["session_id"], name: "index_sessions_on_session_id", using: :btree
  add_index "sessions", ["updated_at"], name: "index_sessions_on_updated_at", using: :btree

  create_table "users", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "login",                         null: false
    t.string   "crypted_password",              null: false
    t.string   "password_salt",                 null: false
    t.string   "persistence_token",             null: false
    t.integer  "login_count",       default: 0, null: false
    t.datetime "last_request_at"
    t.datetime "last_login_at"
    t.datetime "current_login_at"
    t.string   "last_login_ip"
    t.string   "current_login_ip"
    t.string   "name"
    t.string   "gender"
    t.string   "address"
    t.string   "nationalID"
    t.string   "mobile"
    t.string   "telephone"
    t.datetime "dateOfBirth"
    t.string   "type"
    t.integer  "blood_center_id"
  end

  add_index "users", ["last_request_at"], name: "index_users_on_last_request_at", using: :btree
  add_index "users", ["login"], name: "index_users_on_login", using: :btree
  add_index "users", ["persistence_token"], name: "index_users_on_persistence_token", using: :btree

end
