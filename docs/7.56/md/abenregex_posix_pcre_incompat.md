---
title: "Migrating Patterns"
description: |
  For the most part the features supported by PCRE form a superset of the features supported by POSIX. There are however some key differences and missing features, which are outlined in the following sections. Fundamental Differences Both PCRE and POSIX use a regex-directed, backtracking algorithm, me
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_pcre_incompat.htm"
abapFile: "abenregex_posix_pcre_incompat.htm"
keywords: ["do", "while", "if", "case", "try", "method", "class", "data", "abenregex", "posix", "pcre", "incompat"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_processing_expr_func.htm) →  [Regular Expressions (regex)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregular_expressions.htm) →  [regex - Migrating from POSIX to PCRE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_migrating_posix.htm) → 

regex - Incompatibilities between POSIX and PCRE

This topics lists all features of POSIX regular expressions that cannot be reused directly in PCRE but require some migration effort by rewriting the regular expressions.

-   [Migrating Patterns](#abenregex-posix-pcre-incompat-1-----------fundamental-differences---@ITOC@@ABENREGEX_POSIX_PCRE_INCOMPAT_2)
    -   [Significance of Whitespaces in Patterns](#abenregex-posix-pcre-incompat-3-----------comments---@ITOC@@ABENREGEX_POSIX_PCRE_INCOMPAT_4)
    -   [Unicode Handling](#abenregex-posix-pcre-incompat-5-----------matching-uppercase-and-lowercase-letters---@ITOC@@ABENREGEX_POSIX_PCRE_INCOMPAT_6)
    -   [Matching All Unicode Characters](#abenregex-posix-pcre-incompat-7-----------word-anchors---@ITOC@@ABENREGEX_POSIX_PCRE_INCOMPAT_8)
-   [Migrating Replacement Strings](#abenregex-posix-pcre-incompat-9-----------substituting-the-whole-match---@ITOC@@ABENREGEX_POSIX_PCRE_INCOMPAT_10)
    -   [Substituting Parts around the Match](#@@ITOC@@ABENREGEX_POSIX_PCRE_INCOMPAT_11)

Migrating Patterns

For the most part the features supported by PCRE form a superset of the features supported by POSIX. There are however some key differences and missing features, which are outlined in the following sections.

Fundamental Differences

Both PCRE and POSIX use a regex-directed, backtracking algorithm, meaning both implementations will in most cases yield the same result. There is however a crucial difference: PCRE will always return the leftmost match, while POSIX aims to return the leftmost longest match, meaning that if multiple possible matches start at the same offset, the longest of those is returned.

If you are making use of the leftmost longest matching rule in POSIX, you may need to reorder or rewrite parts of your regular expression to achieve the same results in PCRE.

Example

PCRE stops after finding the first (leftmost) match, while POSIX also tries the other match starting at the same position and, as it is longer, considers it the better match.

DATA(pcre\_result) =
  match( val   = \`unfoldable\`
         pcre  = \`un(fold|foldable)\` ).
         " --> returns 'unfold'
DATA(posix\_result) =
  match( val   = \`unfoldable\`
         regex = \`un(fold|foldable)\` ) ##regex\_posix.
         " --> returns 'unfoldable'

To also return the longest match in the PCRE case, the example above can be rewritten as follows, reordering the alternations:

DATA(pcre\_result) =
  match( val   = \`unfoldable\`
         pcre  = \`un(foldable|fold)\` ).
         " --> returns 'unfoldable'

However the different matching strategies do not only affect alternations introduced by |, but all cases where multiple matches start at the same location, for example using the ? quantifier:

DATA(pcre\_result) =
  match( val = \`unfoldable\`
         pcre  = \`un(fold)?(foldable)?\` ).
         " --> returns 'unfold'
DATA(posix\_result) =
  match( val   = \`unfoldable\`
         regex = \`un(fold)?(foldable)?\` ) ##regex\_posix.
         " --> returns 'unfoldable'

In this case, a look-ahead assertion can be used to also return the longest match in the PCRE case:

DATA(pcre\_result) =
  match( val  = \`unfoldable\`
         pcre = \`un(fold(?!able))?(foldable)?\` ).
         " --> returns 'unfoldable'

Significance of Whitespaces in Patterns

By default PCRE syntax is compiled in an extended mode on AS ABAP: Most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes. In order to include whitespace into a pattern, they must be escaped. In order to explicitly match whitespaces in PCRE's extended mode, there are the following options:

-   Escape the whitespace in the pattern. The pattern Hello\\ World matches Hello World.
-   Match all whitespaces using the special character [\\s](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm). Hello\\sWorld matches Hello World. The same applies to Hello \\s World, which might be more readable.

While the extended mode allows you to write more readable regular expressions, it can be a bit confusing at first, especially when migrating POSIX regular expressions. The extended mode of PCRE can be switched of as follows:

-   By passing ABAP\_FALSE to the parameter EXTENDED when creating a PCRE regular expression with method CREATE\_PCRE of class [CL\_ABAP\_REGEX](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_system_classes.htm).
-   By using the special character [(?-x)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm) in the pattern itself. This also works for the addition [PCRE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind_pattern.htm) in statements and the parameter [pcre](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_regex.htm) in string functions.

Example

The extended mode for PCRE is enabled when using parameter pcre in the following function. This means that whitespace characters are treated as not significant when the pattern is evaluated. The PCRE regular expression does not match the string Hello World.

ASSERT NOT
  matches( val = \`Hello World\` pcre  = \`Hello World\` ).
ASSERT
  matches( val = \`Hello World\` regex = \`Hello World\` ) ##regex\_posix.

The string HelloWorld however is matched by PCRE but not by POSIX:

ASSERT
  matches( val = \`HelloWorld\` pcre  = \`Hello World\` ).
ASSERT NOT
  matches( val = \`HelloWorld\` regex = \`Hello World\` ) ##regex\_posix.

The following example finally shows, how the extended mode can be switched of in built-in string functions:

ASSERT
  matches( val = \`Hello World\` pcre  = \`(?-x)Hello World\` ).

Comments

In the extended mode of PCRE, comments can be placed behind an unescaped #. In order to include the character # into a pattern in PCRE's extended mode, it must be escaped:

The pattern Hello\\#World matches Hello#World.

The extended mode of PCRE can be switched of as explained in the preceding topic.

Example

The extended mode for PCRE is enabled when using parameter pcre in the following function. This means that the character # introduces a comment. The first PCRE regular expression does not match the string Hello#World. A POSIX regular expression and the second and third PCRE regular expression where # is escaped or the extended mode is switched off match the string.

ASSERT NOT
  matches( val = \`Hello#World\` pcre  = \`Hello#World\` ).
ASSERT
  matches( val = \`Hello#World\` regex = \`Hello#World\` ) ##regex\_posix.
ASSERT
  matches( val = \`Hello#World\` pcre  = \`Hello\\#World\` ).
ASSERT
  matches( val = \`Hello#World\` pcre  = \`(?-x)Hello#World\` ).

Unicode Handling

For the representation of character strings, the ABAP programming language supports the two byte [Unicode character representation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunicode_char_represent_glosry.htm "Glossary Entry") [UCS-2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenucs2_glosry.htm "Glossary Entry"). The [system code page](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_codepage_glosry.htm "Glossary Entry") of an AS ABAP is [UTF-16](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenutf16_glosry.htm "Glossary Entry"), that supports all characters of the Unicode standard. UCS-2 is a subset of UTF-16 that supports the so called Basic Multilingual Plane (BMP) of the Unicode standard. In UTF-16, the other Unicode planes are encoded as [surrogates](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensurrogates_glosry.htm "Glossary Entry") ( [surrogate pairs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensurrogate_pair_glosry.htm "Glossary Entry")) in the [surrogate area](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensurrogate_area_glosry.htm "Glossary Entry").

POSIX regular expressions always assume UCS-2 and treat characters that are represented by surrogate pairs as two separate characters what might lead to unexpected results. Unlike POSIX, PCRE can treat character strings as both UCS-2 or UTF-16. This can be configured in different ways depending on the type of regular expression operation performed:

Operation

Description

Default Behavior

Methods of system classes [CL\_ABAP\_REGEX](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_system_classes.htm) and [CL\_ABAP\_MATCHER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_system_classes.htm)

Unicode handling is controlled by parameter UNICODE\_HANDLING of factory method CREATE\_PCRE. The following values can be passed:
STRICT - treat character string as UTF-16, raise an exception upon encountering invalid UTF-16 (broken surrogate pairs)
IGNORE - treat character string as UTF-16, ignore invalid UTF-16; parts of the input that are not valid UTF-16 cannot be matched in any way
RELAXED - treat character string as UCS-2; special character \\C is enabled in patterns, the matching of surrogate pairs by their Unicode code point is however no longer possible

STRICT

Addition [PCRE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind_pattern.htm) of statements [FIND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind.htm) and [REPLACE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace.htm),
Argument [pcre](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_regex.htm) of built-in functions for strings

No addition exists to control Unicode handling, instead the syntax (\*UTF) can be specified at the start of the pattern to switch on the strict mode (see above)

Without (\*UTF) the relaxed mode (see above) is used, the special character \\C can however not be used

The following table gives a quick overview of which Unicode mode to use when migrating a pattern from POSIX to PCRE:

Operation

Treat Input as UCS-2 or UTF-16?

Accept Invalid UTF-16?

Action

Methods of system classes [CL\_ABAP\_REGEX](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_system_classes.htm) and [CL\_ABAP\_MATCHER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_system_classes.htm)

UTF-16

Yes

Set UNICODE\_HANDLING to IGNORE

Methods of system classes [CL\_ABAP\_REGEX](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_system_classes.htm) and [CL\_ABAP\_MATCHER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_system_classes.htm)

UTF-16

No

Set UNICODE\_HANDLING to STRICT (default)

Methods of system classes [CL\_ABAP\_REGEX](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_system_classes.htm) and [CL\_ABAP\_MATCHER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_system_classes.htm)

UCS-2 (ABAP default)

\-

Set UNICODE\_HANDLING to RELAXED

Statements and built-in functions

UTF-16

Yes

This cannot be achieved with the addition PCRE of statements and the argument pcre of built-in functions; use objects of CL\_ABAP\_REGEX

Statements and built-in functions

UTF-16

No

Add syntax (\*UTF) to the pattern

Statements and built-in functions

UCS-2 (ABAP default)

\-

No action required, relaxed mode is default

Example

The special character . matches two UCS-2 characters in the first two replacements, even though they form a surrogate pair for a a single UTF-16 character. The third replacement uses (\*UTF) at the beginning of a PCRE regular expression and only the UTF-16 character is matched and replaced.

DATA(out) = cl\_demo\_output=>new( ).
DATA(surrogate\_pair) = cl\_abap\_codepage=>convert\_from(
  codepage = 'UTF-8'
  source    = CONV xstring( 'F09F91BD' ) ).
                            "U+1F47D, EXTRATERRESTRIAL ALIEN
out->write\_text( surrogate\_pair
  )->write\_text( replace( val = surrogate\_pair
                          regex = \`.\`
                          with = \`Alien\` occ = 0 ) ##regex\_posix
  )->write\_text( replace( val = surrogate\_pair
                          pcre = \`.\`
                          with = \`Alien\` occ = 0 )
  )->write\_text( replace( val = surrogate\_pair
                          pcre = \`(\*UTF).\`
                          with = \`Alien\` occ = 0 )
  )->display( ).

Matching Uppercase and Lowercase Letters

PCRE does not directly support the POSIX syntax [\\u](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax_specials.htm) and [\\l](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax_specials.htm) to match an uppercase and lowercase letter respectively. This includes the corresponding negations [\\U](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax_specials.htm) and [\\L](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax_specials.htm).

As an alternative PCRE's [\\p{xx}](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm) and [\\P{xx}](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax_specials.htm) syntax can be used to match characters having certain Unicode character properties:

Description

POSIX Syntax

PCRE Syntax

uppercase letter

\\u

\\p{Lu}

not an uppercase letter

\\U

\\P{Lu}

lowercase letter

\\l

\\p{Ll}

not a lowercase letter

\\L

\\P{Ll}

Example

The following replacements yield the same result.

ASSERT replace( val = \`uuuUuuu\` regex = \`\\u\` with = \`X\` ) ##regex\_posix
     = replace( val = \`uuuUuuu\` pcre = \` \\p{Lu} \` with = \`X\` ).
       " --> uuuXuuu

Matching All Unicode Characters

While PCRE supports most of the named sets available in the POSIX syntax, there is one exception: [\[\[:unicode:\]\]](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax_specials.htm), which matches any character whose code is greater than 255.

Depending on the context there are different ways to achieve the same behavior in PCRE:

POSIX Syntax

PCRE Syntax

Description

\[\[:unicode:\]\]

\[^\\x{00}-\\x{ff}\]

a standalone \[\[:unicode:\]\] can be replaced by the negation of the range of characters from 0x00 to 0xff

\[^\[:unicode:\]\]

\[\\x{00}-\\x{ff}\]

similarly, a standalone \[^\[:unicode:\]\] can be replaced by the range of characters from 0x00 to 0xff

\[\[:unicode:\]...\]

\[\\x{100-\\xffff}...\]

if \[\[:unicode:\]\] is used in conjunction with other elements in a character class, the range of characters has to be specified explicitly (not by negation); when the regular expression is to be executed in a non-UTF-16 context ( UNICODE\_HANDLING is set to RELAXED), this is the character range from 0x100 to 0xffff

\[\[:unicode:\]...\]

\[\\x{100}-\\x{10ffff}...\]

in a UTF-16 context (UNICODE\_HANDLING is set to STRICT or IGNORE) this range becomes 0x100 to 0x10ffff

\[^\[:unicode:\]...\]

\[^\\x{100}-\\x{ffff}...\]

similarly, when the \[\[:unicode:\]\] is used in conjunction with other elements in a negated character class, the range from 0x100 to 0xffff for a non-UTF-16 context has to be specified explicitly

\[^\[:unicode:\]...\]

\[^\\x{100}-\\x{10ffff}...\]

in a UTF-16 context this range becomes 0x100 to 0x10ffff

Alternatively, if you only care about the character range from 0 to 127, or the negation thereof, you can use the POSIX named set \[\[:ascii:\]\] available in PCRE. Using PCRE's negative POSIX named set syntax (\[\[:^ascii:\]\]), you can match non-ASCII characters. The negative POSIX named set syntax can also be used in negated character classes, allowing for a lot of flexibility.

Example

The following searches yield the same result.

DATA(c\_circumflex) = cl\_abap\_codepage=>convert\_from(
  source = CONV xstring( 'C488' ) ).
DATA(text) = \`xxx\` && c\_circumflex && \`xxx\`.
ASSERT find( val = text regex = \`\[\[:unicode:\]\]\` ) ##regex\_posix
     = find( val = text pcre  = \`\[^\\x{00}-\\x{ff}\]\` ).
       " --> 3

Word Anchors

PCRE does not directly support the POSIX syntax [\\<](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax_specials.htm) and [\\>](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax_specials.htm) to match the start and end of a word respectively. As an alternative the word anchor [\\b](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm) (which matches the start and the end of a word) can be used in conjunction with a look-ahead or look-behind assertion. Alternatively, a special character set can be used.

Description

POSIX Syntax

PCRE Syntax

start of word

\\<

\\b(?=\\w) or \[\[:<:\]\]

end of word

\\>

\\b(?<=\\w) or \[\[:>:\]\]

Example

The following replacements yield the same result.

DATA(text) = \`xxx yyy zzz\`.
ASSERT replace( val  = text regex = \`\\>\` ##regex\_posix
                with = \`-\`  occ = 0 )
    =  replace( val   = text pcre =  \`\\b(?<=\\w)\`
                with  = \`-\`  occ = 0 ).
ASSERT replace( val  = text regex = \`\\>\` ##regex\_posix
                with = \`-\`  occ = 0 )
    =  replace( val  = text pcre =  \`\[\[:>:\]\]\`
                with = \`-\`  occ = 0 ).
       " --> xxx- yyy- zzz-

Migrating Replacement Strings

Apart from referring to the content of a capture group by its number ($1, $2, $3, ...), the replacement string syntax and capabilities of PCRE are quite different to those of POSIX.

Substituting the Whole Match

POSIX offers both [$0](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax_specials.htm) and [$&](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax_specials.htm) as placeholders for the whole match in the replacement string. PCRE only supports the former syntax [$0](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm), with the latter syntax $& raising an exception. If you are using $& in your POSIX patterns, simply replace it with [$0](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm) when migrating to PCRE.

Example

The following replacements yield the same result.

ASSERT
  replace( val = \`abc\` regex = \`a(b)c\` with = \`$0$&\` ) ##regex\_posix
\= replace( val = \`abc\` pcre  = \`a(b)c\` with = \`$0$0\` ).
  " --> 'abcabc'

Substituting Parts around the Match

POSIX supports [$\`](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax_specials.htm) and [$'](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax_specials.htm) as placeholders for the text in front of and after the match respectively. PCRE does not offer any directly equivalent functionality. If your pattern makes use of these POSIX features, you can however try to emulate them, e.g. by introducing additional capture groups

There are however limitations to this approach. If your pattern or replacement string is more complex, you may have to either perform the replacement manually (using string operations and the offset and length obtained from the match), or keep your POSIX pattern with the ##regex\_posix pragma.

Example

The following replacements yield the same result.

ASSERT
  replace( val   = \`again and\`
           regex = \`and\`
           with  = '$0 $\`' )    ##regex\_posix
\= replace( val   = \`again and\`
           pcre  = \`^(.+?)and\`
           with  = \`$0 $1\` ).
  " --> 'again and again'