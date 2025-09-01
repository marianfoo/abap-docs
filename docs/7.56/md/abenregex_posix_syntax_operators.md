  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Character String and Byte String Processing](javascript:call_link\('abencharacter_string_obsolete.htm'\)) →  [Obsolete Regular Expression Syntax](javascript:call_link\('abenregular_expressions_obsolete.htm'\)) →  [regex - POSIX Syntax (obsolete)](javascript:call_link\('abenregex_posix_syntax.htm'\)) → 

POSIX regex - Character String Patterns (obsolete)

Character strings are represented by chainings or operators.

-   [Chainings](#abenregex-posix-syntax-operators-1-------operators-for-character-strings---@ITOC@@ABENREGEX_POSIX_SYNTAX_OPERATORS_2)
    -   [Chaining Operators](#abenregex-posix-syntax-operators-3-----------alternatives---@ITOC@@ABENREGEX_POSIX_SYNTAX_OPERATORS_4)
    -   [Subgroups](#abenregex-posix-syntax-operators-5-----------subgroups-with-registration---@ITOC@@ABENREGEX_POSIX_SYNTAX_OPERATORS_6)
    -   [Literal Characters](#abenregex-posix-syntax-operators-7-----------reserved-enhancements---@ITOC@@ABENREGEX_POSIX_SYNTAX_OPERATORS_8)

Chainings

Chainings are valid regular expressions that are written after each other. If r and s are regular expressions, the chaining rs matches all character strings that can be formed from the chaining of character strings that match r and s.

Examples

The following table shows some results from a [matching](javascript:call_link\('abenregex_mtch.htm'\)).

Pattern

Text

match

H\[aeu\]llo

Hallo

X

H\[aeu\]llo

Hello

X

H\[aeu\]llo

Hullo

X

H\[aeu\]llo

Hollo

\-

H\[aeu\]llo is the chaining of five [regular expressions for single characters](javascript:call_link\('abenregex_posix_syntax_signs.htm'\)).

Operators for Character Strings

These operators consist of the special characters {, }, \*, +, ?, |, (, ), and \\. The special characters can be made into literal characters using the prefix \\ or by enclosing with \\Q ... \\E.

Chaining Operators

The operators {n}, {n,m}, \*, +, and ? (where n and m are natural numbers, including zero) can be written directly after a regular expression r, and thus create chainings rrr... of the regular expression:

-   The regular expression r{n} is equivalent to an n-fold chaining of r. The regular expression r{0} matches an empty character string, and therefore also the offset before the first character of a character string, the spaces between the characters in character strings, and the offset after the last character in a character string.
-   The regular expression r{n,m} is equivalent to at least n and a maximum of m chainings of r. The value of n must be less than or equal to the value of m. The expression r{n} is equivalent to at least an n-fold chaining of r.
-   The regular expression r? is equivalent to r{0,1}, which means the expression r or the empty character string.
-   The regular expression r\* is equivalent to r{0,}, in other words a chaining of r of any length, including the empty character string. When using subgroups (see below), and in a [text search](javascript:call_link\('abenregex_posix_search.htm'\)), r\* matches the longest possible substring (greedy behavior).
-   The regular expression r+ is equivalent to r{1,}, in other words a chaining of any length of r excluding the empty character string. When using subgroups, and in a text search, r+ matches the longest possible substring (greedy behavior).
-   The regular expressions r{n,m}?, r\*? and r+? are reserved for future language enhancements (economical behavior) and currently raise the exception CX\_SY\_INVALID\_REGEX.

Hint

For a regular expression with chaining operators, the primary rule is that the entire expression must match if possible. This rule restricts the length of character strings that match the chaining with the operators \* and + and therefore their greedy behavior.

Examples

The following table shows some results from a [matching](javascript:call_link\('abenregex_mtch.htm'\)).

pattern

Text

match

Hel{2}o

Hello

X

H.{4}

Hello

X

.{0,4}

Hello

\-

.{4,}

Hello

X

.+H.+e.+l.+l.+o.+

Hello

\-

x\*Hx\*ex\*lx\*lx\*ox\*

Hello

X

l+

ll

X

Example

The first subexpression a+ is compared with the first five characters "aaaaa" from text, whereas the last character "a" from text is reserved for the second subexpression a.

DATA TEXT type STRING.
DATA result\_tab TYPE match\_result\_tab.
text = 'aaaaaa'.
FIND ALL OCCURRENCES OF REGEX '(a+)(a)' ##regex\_posix
     IN text RESULTS result\_tab.

Alternatives

The operator | can be written between two regular expressions r and s, and thereby create one single regular expression r|s, that matches both r as well as s.

Hint

Chainings and other operators form a stronger bond than |, in other words r|st and r|s+ are equivalent to r|(?:st) or r|(?:s+) but not to (?:r|s)t or (?:r|s)+.

Examples

The following table shows some results from a [matching](javascript:call_link\('abenregex_mtch.htm'\)).

Pattern

Text

match

H(e|a|u)llo

Hello

X

H(e|a|u)llo

Hollo

\-

He|a|ullo

Hallo

\-

He|a|ullo

ullo

X

Subgroups

The operators ( ... ) and (?: ... ) group chainings of regular expressions into one unit and thus affect the scope of other operators such as \* or |. Here, the regular expressions (r) and (?:r) match the regular expression r. The difference between ( ... ) and (?: ... ) is that the operator ( ... ) stores the substrings found in registers and (?: ... ) does not.

Hint

The greedy behavior of chaining operators mentioned above also applies to subgroups from left to right. However, this does not violate the rule that generally requires the entire regular expression to match.

Examples

The following table shows some results from a [matching](javascript:call_link\('abenregex_mtch.htm'\)).

Pattern

Text

match

Tral+a

Tralala

\-

Tr(al)+a

Tralala

X

Tr(?:al)+a

Tralala

X

In the first expression, the chaining with the operator + affects the literal character l, and in the second and third expression it affects the subgroup al.

Subgroups with Registration

In addition to its effect on creating subgroups, the operator ( ... ) also stores the substrings when matching the regular expression to a character string in the correct order in subgroup registers. The subgroups ( ... ) of the expression match these substrings. In this process, an operator \\1, \\2, \\3, ... is assigned to each subgroup, which can be specified within the expression after its subgroup and acts as a placeholder for the character string stored in the corresponding register. In [text replacements](javascript:call_link\('abenregex_posix_replace.htm'\)), the special characters $1, $2, $3, ... can be used to access the last assignment of the register.

The number of subgroups and registers is only limited by the capacity of the platform.

Hints

-   The addition SUBMATCHES of the statements [FIND](javascript:call_link\('abapfind.htm'\)) and [REPLACE](javascript:call_link\('abapreplace.htm'\)) and the identically named column of the results table filled using the addition RESULTS can be used to access the content of all subgroup registers for an occurrence. The class CL\_ABAP\_MATCHER contains the method GET\_SUBMATCH for this purpose.
-   If only grouping is required and no substrings are to be stored in registers, the operator (?: ... ) can be used instead of ( ... ). With respect to the formation of subgroups, both operators have the same effect. However (?: ... ) does not save anything in registers.

Examples

The following table shows some results from a [matching](javascript:call_link\('abenregex_mtch.htm'\)).

Pattern

Text

match

(\["'\]).+\\1

" Hello "

X

(\["'\]).+\\1

"Hello'

\-

(\["'\]).+\\1

'Hello'

X

The chaining (\["'\]).+\\1 matches all text strings where the first character is " or ' and the last character is the same as the first. In the two successful checks, the register is given the values " or '.

Example

The example demonstrates the greedy behavior of the operator + in subgroups and its relation to the primary rule that the entire regular expression must match if possible. The first subgroup takes up as many characters as possible "a". It is assigned the first four characters "aaaa". A character "a" remains for each of the other two subgroups.

DATA text TYPE string.
DATA result\_tab TYPE match\_result\_tab.
text = 'aaaaaa'.
FIND ALL OCCURRENCES OF REGEX '(a+)(a+)(a+)' ##regex\_posix
     IN text RESULTS result\_tab.

Literal Characters

The operators \\Q ... \\E form a character string of literal characters from all enclosed characters. Special characters are ignored in this character string.

The following table shows some results from a [matching](javascript:call_link\('abenregex_mtch.htm'\)).

pattern

Text

match

.+\\w\\d

Special: \\w\\d

\-

.+\\\\w\\\\d

Special: \\w\\d

X

.+\\Q\\w\\d\\E

Special: \\w\\d

X

Reserved Enhancements

The character string (? ... ) is generally reserved for later language enhancements. Apart from the operators already supported (?:... ), [(?=... )](javascript:call_link\('abenregex_posix_search.htm'\)), [(?!... )](javascript:call_link\('abenregex_posix_search.htm'\)), and [(?> ... )](javascript:call_link\('abenregex_posix_search.htm'\)), this string raises the exception CX\_SY\_INVALID\_REGEX.