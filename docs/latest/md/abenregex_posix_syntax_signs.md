  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Character String and Byte String Processing](javascript:call_link\('abencharacter_string_obsolete.htm'\)) →  [Obsolete Regular Expression Syntax](javascript:call_link\('abenregular_expressions_obsolete.htm'\)) →  [regex - POSIX Syntax (obsolete)](javascript:call_link\('abenregex_posix_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20POSIX%20regex%20-%20Single%20Character%20Patterns%20%28obsolete%29%2C%20ABENREGEX_POSIX_SYNTAX_SIGNS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion%20for%20improvement:)

POSIX regex - Single Character Patterns (obsolete)

Single characters are represented by literal characters or operators. By prefixing a backslash \\, a special character of an operator is interpreted as a literal character. This applies in particular for the backslash \\ itself, so that the regular expression \\\\ is the same as the single character \\. If the backslash is followed by a literal character, the backslash is ignored as if it does not exist.

-   [Literal Characters](#abenregex-posix-syntax-signs-1-------operators-for-single-characters---@ITOC@@ABENREGEX_POSIX_SYNTAX_SIGNS_2)
    -   [Placeholders for Single Characters](#abenregex-posix-syntax-signs-3-----------user-defined-sets-for-single-characters---@ITOC@@ABENREGEX_POSIX_SYNTAX_SIGNS_4)
    -   [Negation of a User-Defined Set for Single Characters](#abenregex-posix-syntax-signs-5-----------ranges-in-a-user-defined-set-for-single-characters---@ITOC@@ABENREGEX_POSIX_SYNTAX_SIGNS_6)
    -   [Character Classes](#abenregex-posix-syntax-signs-7-----------abbreviations-for-character-sets---@ITOC@@ABENREGEX_POSIX_SYNTAX_SIGNS_8)
    -   [Equivalence Classes](#@@ITOC@@ABENREGEX_POSIX_SYNTAX_SIGNS_9)

Literal Characters   

A literal character is a character that is not a special character, a [special character](javascript:call_link\('abenregex_posix_syntax_specials.htm'\)) preceded by a backslash \\, or enclosed between \\Q ... \\E. As a search pattern, a literal character matches the same single character exactly.

Hint

Case-sensitivity can be controlled using the respective statements or methods.

Examples

The following table shows some results of a [matching](javascript:call_link\('abenregex_mtch.htm'\)) that is case-sensitive.

Pattern

text

match

A

A

X

A

a

\-

\\.

.

X

A

AB

\-

AB

AB

X

The regular expression AB is a [concatenation](javascript:call_link\('abenregex_posix_syntax_operators.htm'\)) of two expressions for single characters.

Operators for Single Characters   

These operators are made up of the special characters ., \[, \], ^, and \-. The last two are only effective as special characters in specific positions within \[ \]. The special characters can be converted into literal characters using the prefix \\.

Placeholders for Single Characters   

The special character . is a placeholder for any single character. The operator \\C has the same effect as the special character .. A regular expression . or \\C matches exactly one single character.

Examples

The following table shows some results of a [matching](javascript:call_link\('abenregex_mtch.htm'\)) that is not case-sensitive.

Pattern

Text

match

.

A

X

\\C

a

X

.

AB

\-

..

AB

X

The regular expression .. is a [concatenation](javascript:call_link\('abenregex_posix_syntax_operators.htm'\)) of two expressions for single characters.

User-Defined Sets for Single Characters   

The special characters \[ \] can be placed around any number of literal characters or names for character classes (see below) and thus define a set of literal characters. A regular expression \[...\] matches exactly one single character that is listed as a literal character within the brackets or that is contained in a specified character class. At least one literal character or one name for a character class (see below) must be contained within the brackets. One of the characters \[ or \], which is positioned directly after the opening bracket, is interpreted as a literal character. Some of the [special characters](javascript:call_link\('abenregex_posix_syntax_specials.htm'\)) that start with a backslash, such as \\A or \\Q, lose their special function within sets and are interpreted as the simple literal character A or Q.

Examples

The following table shows some results from a [matching](javascript:call_link\('abenregex_mtch.htm'\)).

Pattern

Text

match

\[ABC\]

B

X

\[ABC\]

ABC

\-

\[AB\]\[CD\]

AD

X

\[\\d\]

9

X

The regular expression \[AB\]\[CD\] is a [concatenation](javascript:call_link\('abenregex_posix_syntax_operators.htm'\)) of two expressions for single characters.

Negation of a User-Defined Set for Single Characters   

If the character ^ is listed as the first character in a user-defined set for single characters and is listed directly after \[, it acts as a special character and negates the remaining set of literal characters or character classes. A regular expression \[^...\] matches exactly one single character not listed as a literal character within the brackets, or which is not contained in a specified character class. A character ^ that is not listed directly after \[ acts as a literal character.

Examples

The following table shows some results from a [matching](javascript:call_link\('abenregex_mtch.htm'\)).

Pattern

Text

match

\[^ABC\]

B

\-

\[^ABC\]

Y

X

\[^A\]\[^B\]

BA

X

\[A^B\]

^

X

The regular expression \[^A\]\[^B\] is a [concatenation](javascript:call_link\('abenregex_posix_syntax_operators.htm'\)) of two expressions for single characters.

Ranges in a User-Defined Set for Single Characters   

If the character \- is between two literal characters, it acts as a special character and defines a range between the literal characters. The range is the set of characters that is enclosed by literal characters in the code page of the current operating system. A regular expression \[...\-...\] matches exactly one single character that is within the defined range. A character \-, which is not between two literal characters, acts as a literal character. A literal character cannot be part of two ranges, for example, 'a-z-Z' is not a regular expression.

Examples

The following table shows some results from a [matching](javascript:call_link\('abenregex_mtch.htm'\)).

Pattern

Text

match

\[A-Za-z0-9\]

B

X

\[A-Za-z0-9\]

5

X

\[A-Za-z0-9\]

#

\-

\[A-Za-z0-9\]

\-

\-

\[A-Za-z0-9-\]

\-

X

In the last expression, the closing \- does not act as a special character.

Character Classes   

Within sets for single characters defined using \[ \], predefined character classes can be specified for certain sets for single characters whose behavior can, however, depend on the language and platform.

-   \[:alnum:\]
    
    Set of all alphanumeric characters (union of \[:alpha:\] and \[:digit:\])
    
-   \[:alpha:\]
    
    Set of all uppercase and lowercase letters including language-specific special characters (umlauts, accents, diphthongs) but without digits.
    
-   \[:blank:\]
    
    Blank characters and horizontal tabs
    
-   \[:cntrl:\]
    
    Set of all control characters
    
-   \[:digit:\]
    
    Set of all digits 0 to 9
    
-   \[:graph:\]
    
    Set of all displayable characters except for blanks and horizontal tabs
    
-   \[:lower:\]
    
    Set of all lowercase characters including language-dependent special characters (umlauts, accents, diphthongs)
    
-   \[:print:\]
    
    Set of all displayable characters (union of \[:graph:\] and \[:blank:\])
    
-   \[:punct:\]
    
    Set of all punctuation characters
    
-   \[:space:\]
    
    Set of all blank characters, tabs, carriage returns and line feeds
    
-   \[:unicode:\]
    
    Set of all characters whose character representation is greater than 255
    
-   \[:upper:\]
    
    Set of all uppercase characters including language-dependent special characters (umlauts, accents, diphthongs)
    
-   \[:word:\]
    
    Set of all alphanumeric characters including the underscore \_
    
-   \[:xdigit:\]
    
    Set of all hexadecimal digits (0\-9, A\-F, and a\-f)
    

Hints

-   Character classes only work within \[ \] as specified. A regular expression \[:digit:\] does not define the set of all digits, but instead defines a character set consisting of :, d, g, i, and t. To specify the set of all digits, the regular expression \[\[:digit:\]\] should be used.
-   Due to their dependencies on language and platform, these character classes must be used with caution.

Examples

The following table shows some results of a [matching](javascript:call_link\('abenregex_mtch.htm'\)) that is case-sensitive.

Pattern

Text

match

\[\[:alnum:\]\]

a

X

\[\[:alnum:\]\]

;

\-

\[\[:alpha:\]\]

1

\-

\[\[:punct:\]\]

.

X

\[\[:lower:\]\]

â

X

\[\[:upper:\]\]

Ä

X

\[\[:digit:\]\[:alpha:\]\]+

a1b2c3

X

Abbreviations for Character Sets   

For frequently used character sets, specific operators are available as abbreviations:

Character Set

Abbr.

Meaning

\[\[:digit:\]\]

\\d

Placeholder for a digit

\[^\[:digit:\]\]

\\D

Placeholder for a non-digit

\[\[:lower:\]\]

\\l

Placeholder for a lowercase letter

\[^\[:lower:\]\]

\\L

Placeholder for a character that is not a lowercase letter

\[\[:space:\]\]

\\s

Placeholder for a blank character

\[^\[:space:\]\]

\\S

Placeholder for a non-blank character

\[\[:upper:\]\]

\\u

Placeholder for an uppercase letter

\[^\[:upper:\]\]

\\U

Placeholder for a character that is not an uppercase letter

\[\[:word:\]\]

\\w

Placeholder for an alphanumeric character plus underscore \_

\[^\[:word:\]\]

\\W

Placeholder for an non-alphanumeric character without underscore \_

Hint

If case is ignored by the ABAP statements FIND and REPLACE and when creating an object of the class CL\_ABAP\_REGEX, \\l and \\u are equivalent to \[\[:alpha:\]\] or \\L and \\U is equivalent to \[^\[:alpha:\]\]. The special characters \\w, \\u, \\l, \\d, and \\s can also be listed within sets \[...\]. The special characters \\W, \\U, \\L, \\D, and \\S cannot be used within sets and raise the exception CX\_SY\_INVALID\_REGEX.

Examples

The following table shows some results of a [matching](javascript:call_link\('abenregex_mtch.htm'\)) that is case-sensitive.

Pattern

Text

match

\\d

4

X

\\D

;

X

\\l

u

X

\\l

U

\-

\\L

S

X

\\s

 

X

\\S

#

X

\\u

U

X

\\U

.

X

\\w

A

X

\\w

8

X

\\W

:

X

\\W

\_

\-

Equivalence Classes   

The operators \[..\] and \[==\] are reserved for future language enhancements and currently raise the exception CX\_SY\_INVALID\_REGEX if used in sets.