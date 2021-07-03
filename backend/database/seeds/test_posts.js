
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          feedbackType: 'Praise',
          isAnon: true,
          wantsContact: false,
          rank: null,
          firstName: null,
          lastName: null,
          emailAddress: null,
          phoneNumber: null,
          postContent: 'I love saying lorem ipsum like it\'s the only word I know',
          postStatus: null,
        },
        {
          feedbackType: 'Complaint',
          isAnon: true,
          wantsContact: false,
          rank: null,
          firstName: null,
          lastName: null,
          emailAddress: null,
          phoneNumber: null,
          postContent: 'I HATE saying lorem ipsum like it\'s the only word I know',
          postStatus: null,
        },
        {
          feedbackType: 'Request',
          isAnon: false,
          wantsContact: false,
          rank: 'SSgt',
          firstName: 'Thomas',
          lastName: 'Scott',
          emailAddress: 'tscott@spaceforce.mil',
          phoneNumber: '514-388-4768',
          postContent: 'I am once again asking to say something other than lorem ipsum',
          postStatus: null,
        },
      ]);
    });
};
