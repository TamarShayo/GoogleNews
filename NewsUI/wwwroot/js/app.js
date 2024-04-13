$(document).ready(function () {

    // Fetching the loadingSpinner div from the DOM
    const loadingSpinner = $("#loadingSpinner");

    // Display details of one News
    const displayPost = (id) => {
        $.ajax({
            type: "GET",
            url: `/News/GetNewsItem/${id}`,  // get a single news item
            data: { id: id },
            dataType: "json",
            success: function (data) {
                // Assuming the server returns the details of the news item in 'data'
                $('#newsItemTitle').text(data.title);
                $('#newsItemDate').text((data.date));
                $('#newsItemBody').html(data.body);
                // Adds a Link element to the DOM
                var newsLink = '<a id="readMoreLink" href="' + data.link + '" target="_blank">Read More -></a>';
                $('#newsItemLink').empty();
                $('#newsItemLink').append(newsLink);
            },
            error: function () {
                alert("Error fetching news item details.");
            }
        });
    }

    // Display news in the newsContainer
    const displayNews = (news) => {

        var newsContainer = $("#newsContainer");
        // Clear existing content, in order to avoid duplicate content
        newsContainer.empty();

        // Action parallel
        if (news && news.length > 0) {
            var newsList = '<div id="sidebar" >';
            $.each(news, function (index, item) {
                var newsItemHtml = '<div class="news-item" data-id="' + item.id + '">';
                newsItemHtml += '<a href="#" class="news-link">' + item.title + '</a>';
                newsItemHtml += '</div>';

                // Append the news item to the newsList
                newsList += newsItemHtml;
            });
            newsList += '</div>';
            // Append the newsList item to the newsContainer
            newsContainer.append(newsList);
            newsContainer.on('click', '.news-link', function () {
                displayPost($(this).closest('.news-item').data('id'));
            });
        } else {
            newsContainer.html('<p>No news available.</p>');
        }

    }

    // Fetches the news list from AJAX API call
    const getNews = () => {

        // Show loading spinner while fetching data
        loadingSpinner.show();

        // AJAX call to GetNews action
        $.ajax({
            type: "POST",
            url: "/News/GetNews",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                //update the newsContainer with the data
                displayNews(data);
            },
            error: function () {
                alert("Error fetching news.");
            },
            complete: function () {
                // Hide loading spinner
                loadingSpinner.hide();
            }
        });
    }

    // Fetch news on page load
    getNews();

});
