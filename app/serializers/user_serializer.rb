class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :profile_img, :bio, :password_digest
end
