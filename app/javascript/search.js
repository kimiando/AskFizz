$('.search-results').html('<%= j(render partial: "search_results", locals: { users: @users }) %>');
