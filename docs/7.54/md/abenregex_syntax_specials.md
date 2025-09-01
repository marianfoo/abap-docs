  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [Regular Expressions](javascript:call_link\('abenregular_expressions.htm'\)) →  [Syntax of Regular Expressions](javascript:call_link\('abenregex_syntax.htm'\)) → 

Special Characters in Regular Expressions

The following tables summarize the special characters in [regular expressions](javascript:call_link\('abenregular_expression_glosry.htm'\) "Glossary Entry").

-   [Escape Character](#@@ITOC@@ABENREGEX_SYNTAX_SPECIALS_1)

-   [Special Characters for Single Character Strings](#@@ITOC@@ABENREGEX_SYNTAX_SPECIALS_2)

-   [Special Characters for Character String Patterns](#@@ITOC@@ABENREGEX_SYNTAX_SPECIALS_3)

-   [Special Characters for Search Strings](#@@ITOC@@ABENREGEX_SYNTAX_SPECIALS_4)

-   [Special Characters for Replacement Texts](#@@ITOC@@ABENREGEX_SYNTAX_SPECIALS_5)

Escape Character

Special Character

Meaning

\\

Escape character for special characters

Note

The character string function [escape](javascript:call_link\('abenescape_functions.htm'\)) can be used to prefix all special characters for regular expressions with their escape character.

Special Characters for Single Character Strings

Special Character

Meaning

.

Placeholder for any single character

\\C

Placeholder for any single character

\\d

Placeholder for any digit

\\D

Placeholder for any non-digit character

\\l

Placeholder for any lowercase letter

\\L

Placeholder for any non-lowercase letter

\\s

Placeholder for a blank character

\\S

Placeholder for a non-blank character

\\u

Placeholder for any uppercase letter

\\U

Placeholder for any non-uppercase letter

\\w

Placeholder for any alphanumeric character including \_

\\W

Placeholder for any non-alphanumeric character except for \_

\[ \]

Definition of a value set for single characters

\[^ \]

Negation of a value set for single characters

\[ - \]

Definition of a range in a value set for single characters

\[\[:alnum:\]\]

Name for all alphanumeric characters in a value set

\[\[:alpha:\]\]

Name for all letters in a value set

\[\[:blank:\]\]

Name for blank characters and horizontal tabulators in a value set

\[\[:cntrl:\]\]

Name for all control characters in a value set

\[\[:digit:\]\]

Name for all digits in a value set

\[\[:graph:\]\]

Name for all characters (apart from blank characters) that can be displayed and horizontal tabulators in a value set

\[\[:lower:\]\]

Name for all lowercase letters in a value set

\[\[:print:\]\]

Name for all characters in a value set that can be displayed

\[\[:punct:\]\]

Name for all punctuation marks in a value set

\[\[:space:\]\]

Name for all blank characters, tabulators, and carriage feeds in a value set

\[\[:unicode:\]\]

Name for all Unicode characters in a value set with a code greater than 255

\[\[:upper:\]\]

Name for all uppercase letters in a value set

\[\[:word:\]\]

Name for all alphanumeric characters in a value set, and also \_

\[\[:xdigit:\]\]

Name for all hexadecimal digits in a value set

\\a \\f \\n \\r \\t \\v

Various platform-specific control characters

\[..\]

Reserved for future enhancements

\[==\]

Reserved for future enhancements

[→ More](javascript:call_link\('abenregex_syntax_signs.htm'\))

Special Characters for Character String Patterns

Special Character

Meaning

{n}

Chaining of n single characters

{n,m}

Chaining of at least n and a maximum of m single characters

{n,m}?

Reserved for future enhancements

?

One single character or no single characters

\*

Chaining of any number of single characters including 'no characters'

\*?

Reserved for future enhancements

+

Chaining of any number of single characters excluding 'no characters'

+?

Reserved for future enhancements

|

Join of two alternative expressions

( )

Definition of subgroups with registration

(?: )

Definition of subgroups without registration

\\1, \\2, \\3 ...

Placeholder for the registration of subgroups

\\Q ... \\E

Definition of a string of literal characters

(? ... )

Reserved for future enhancements

[→ More](javascript:call_link\('abenregex_syntax_operators.htm'\))

Special Characters for Search Strings

Special Character

Meaning

^

Anchor character for the start of a line

\\A

Anchor character for the start of a character string

$

Anchor character for the end of a line

\\z

Anchor character for the end of a character string

\\Z

The same as for \\z. Line breaks at the end of the character string, however, are ignored

\\<

Start of a word

\\>

End of a word

\\b

Start or end of a word

\\B

Space between characters within a word

(?= )

Preview condition

(?! )

Negated preview condition

(?> )

Cut operator

[→ More](javascript:call_link\('abenregex_search.htm'\))

Special Characters for Replacement Texts

Special Character

Meaning

$0, $&

Placeholder for the full occurrence

$1, $2, $3...

Placeholder for the registration of subgroups

$\`

Placeholder for the text before the occurrence

$'

Placeholder for the text after the occurrence

[→ More](javascript:call_link\('abenregex_replace.htm'\))