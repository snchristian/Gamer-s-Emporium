class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :prompt, :answers, :kind
end
