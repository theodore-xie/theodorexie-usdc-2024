Documentation of Thought Process

Part 1: Overall Process and Decision Making

Audience: Cross-functional team (engineers, user researchers, product managers)

    Understanding the Problem: The first step was to clearly define the problem: creating a function to search through a list of book objects for a specific search term. This included understanding the structure of book objects and the specifics of the search (case sensitivity, exact word match, etc.).

    Approach: The solution required iterating over each book and its content. I decided to use a straightforward approach where each line of text in a book is split into words, and each word is compared against the search term. This method was chosen for its simplicity and readability, which is crucial for a team with varying technical backgrounds.

    Readability and Maintenance: The code was written with clear variable names and structured in a way that non-coding team members could understand the flow. Comments were added to explain the logic where necessary.

Part 2: Testing and Iteration

Audience: Fellow engineers

i. Strategy for Writing Tests:

    The tests were designed to check both the accuracy of the results and the count of matches found.
    They involve creating specific book objects and defining expected outcomes for a given search term.
    If more time were available, I would implement tests for edge cases like empty strings, special characters in the search term, and large datasets to ensure scalability.

ii. Proudest Aspect:

    The simplicity and readability of the solution. It’s easy to understand and maintain, which is essential in a team environment.
    The approach efficiently balances technical correctness with clarity, making it accessible to the entire team.

iii. Edge Cases and Future Considerations:

    Addressed: Case sensitivity and exact word matches. Ignoring matches in hyphenated words.
    Future Work: Handling punctuation marks adjacent to words(currently doesn't take that into consideration) and testing performance with large text volumes.
    Given more time, I would explore more sophisticated text processing techniques while maintaining the balance between complexity and readability.