---
title: "Making Use of New Features for Patterns"
description: |
  Lazy Quantifiers The most obvious downside of POSIX regular expressions in ABAP is the lack of lazy (also known as non-greedy or reluctant) quantifiers. In PCRE a quantifier can be made lazy by adding a trailing ?:(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_sp
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_pcre_improve.htm"
abapFile: "abenregex_posix_pcre_improve.htm"
keywords: ["insert", "do", "while", "if", "case", "method", "class", "data", "abenregex", "posix", "pcre", "improve"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_processing_expr_func.htm) →  [Regular Expressions (regex)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregular_expressions.htm) →  [regex - Migrating from POSIX to PCRE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_migrating_posix.htm) → 

regex - New features in PCRE compared to POSIX

While topic [Incompatibilities between POSIX and PCRE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_pcre_incompat.htm) deals with incompatibilities and missing features when migrating from POSIX to PCRE, it is also worth taking a look at the vast array of new features PCRE has to offer.

An introduction to some of these features is provided in the following, the list is however far from complete.

-   [Making Use of New Features for Patterns](#abenregex-posix-pcre-improve-1-----------lazy-quantifiers---@ITOC@@ABENREGEX_POSIX_PCRE_IMPROVE_2)
    -   [Look-behind Assertions](#abenregex-posix-pcre-improve-3-----------multiline-mode---@ITOC@@ABENREGEX_POSIX_PCRE_IMPROVE_4)
    -   [Named Capture Groups](#abenregex-posix-pcre-improve-5-----------subroutine-calls-and-recursion---@ITOC@@ABENREGEX_POSIX_PCRE_IMPROVE_6)
    -   [Callouts](#abenregex-posix-pcre-improve-7-------making-use-of-new-features-for-replacements---@ITOC@@ABENREGEX_POSIX_PCRE_IMPROVE_8)
    -   [Conditional Substitution](#abenregex-posix-pcre-improve-9-----------case-conversion---@ITOC@@ABENREGEX_POSIX_PCRE_IMPROVE_10)

Making Use of New Features for Patterns

Lazy Quantifiers

The most obvious downside of POSIX regular expressions in ABAP is the lack of lazy (also known as non-greedy or reluctant) quantifiers.

In PCRE a quantifier can be made lazy by adding a trailing [?:](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm):

Description

PCRE Syntax

0 or 1, preferred 0

??

0 or more, as few as possible

\*?

1 or more, as few as possible

+?

at least n, no more than m, as few as possible

{n,m}?

at least n, as few as possible

{n,}?

Example

Difference between greedy and non-greedy behavior,

DATA(greedy\_result) =
  match( val = \`<body><div></div></body>\` pcre = \`<(.+)>\` ).
  " --> '<body><div></div></body>'
DATA(lazy\_result) =
  match( val = \`<body><div></div></body>\` pcre = \`<(.+?)>\` ).
  " --> '<body>'

Look-behind Assertions

Description

PCRE Syntax

positive look-behind assertion; succeeds if the current match position is preceded by the given pattern

(?<=...)

negative look-behind assertion; succeeds if the current match position is not preceded by the given pattern

(?<!...)

Example

Leading and trailing look-behind assertions, like look-ahead assertions, are not part of the actual match.

DATA(result1) = find( val = \`meter\`      pcre = \`(?<!centi)meter\` ).
                " --> found; matches whole string
DATA(result2) = find( val = \`millimeter\` pcre = \`(?<!centi)meter\` ).
                " --> found; match starts at offset 5
DATA(result3) = find( val = \`centimeter\` pcre = \`(?<!centi)meter\` ).
               " --> not found

Multiline Mode

In some scenarios it is necessary to respect line feeds during matching, e.g. matching something only if it is located at the beginning of a line. PCRE makes this very convenient by providing a large amount of control over the handling of multiple lines in the matching process.

When creating a regular expression using method CREATE\_PCRE of system class [CL\_ABAP\_REGEX](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_system_classes.htm) multi line handling can be controlled by the following parameters:

Parameter

Description

DOT\_ALL

single line mode; if enabled, special character . also matches line feed characters

ENABLE\_MULTILINE

multi line mode; if enabled, special characters ^ and $ not only match the start and the end of the character string, but also the start and the end of a line respectively; a line is ended by a line feed character

NEWLINE\_MODE

controls what gets recognized as a line feed character

Despite their names, single line and multi line mode are not mutually exclusive and can be combined.

It is also possible to set these options directly in the pattern, which is especially useful for regular expressions used in statements [FIND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind.htm) and [REPLACE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace.htm) behind [PCRE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind_pattern.htm) or in built-in functions behind [pcre](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_regex.htm):

-   Single line mode can be enabled using the option setting syntax [(?s)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm) anywhere in the pattern.
-   Multi line mode can be enabled using the option setting syntax [(?m)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm) anywhere in the pattern.
-   What gets recognized as a line feed character can be controlled by the following syntax that can only appear at the start of the pattern:
    -   [(\*CR)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm) carriage return only
    -   [(\*LF)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm) linefeed only
    -   [(\*CRLF)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm) carriage return followed by linefeed
    -   [(\*ANYCRLF)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm) all three of the above
    -   [(\*ANY)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm) any Unicode line feed sequence
    -   [(\*NUL)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm) the NUL character (binary zero)

Example

While the first regular expression matches only the beginning of the character string, the second one also matches the beginning of new lines that are defined by the syntax [\\n](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_templates_separators.htm) for line feeds in a string template.

DATA(result1) = replace( val  = |xxx\\nyyy\\nzzz|
                         pcre = \`^\`
                         with = \`\_\`
                         occ = 0 ).
                " --> \_xxx\\nyyy\\nzzz
DATA(result2) = replace( val  = |xxx\\nyyy\\nzzz|
                         pcre = \`(\*LF)(?m)^\`
                         with = \`\_\`
                         occ = 0 ).
                " --> \_xxx\\n\_yyy\\n\_zzz

Named Capture Groups

PCRE supports the naming of capture groups, meaning you can assign a name to a capture group, e.g. using the [(?<name>...)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm) syntax. You can refer to a named capture group by its name, e.g. in a backreference using the [\\k<name>](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm) syntax.

Example

The regular expression matches the character string. The capture group is used by its name to match further occurrences of the pattern defined for the group.

ASSERT matches( val  = \`foobarfoo\`
                pcre = \`(?<my\_group>foo)bar\\k<my\_group>\` ).

Subroutine Calls and Recursion

Apart from referring to the content of a group via backreferences, PCRE supports calling groups as subroutines using the [(?n)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm) syntax. It is also possible to call a named group as a subroutine, e.g. using the [(?&name)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm) syntax.

Example

The example shows the calling of groups as subroutines in three blocks:

-   In the first block, the backreference [\\1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm) simply matches whatever the first capture group actually matched most recently, instead of matching all the things the capture group could match.
-   The second block shows, how this behavior can be achieved by calling the group as a subroutine using the [(?n)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm) syntax.
-   The third block shows, how by recursing over the whole pattern using the [(?R)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm) syntax in one branch of the alternation, it is ensured that there is a balanced but arbitrary number of opening (\\() and closing (\\)) parentheses to either side of the digits. Note that the pattern makes use of the possessive quantifier ++ that acts the same as + but prevents backtracking into what was matched by the quantifier.

ASSERT matches(
  val  = \`sense and sensibility\`
  pcre = \`(sens|respons)e\\ and\\ \\1ibility\` ).
ASSERT matches(
  val  = \`response and responsibility\`
  pcre = \`(sens|respons)e\\ and\\ \\1ibility\` ).
ASSERT NOT matches(
  val = \`sense and responsibility\`
  pcre = \`(sens|respons)e\\ and\\ \\1ibility\` ).
ASSERT NOT matches(
  val = \`response and sensibility\`
  pcre = \`(sens|respons)e\\ and\\ \\1ibility\` ).
ASSERT matches(
  val  = \`sense and sensibility\`
  pcre = \`(sens|respons)e\\ and\\ (?1)ibility\` ).
ASSERT matches(
  val  = \`response and responsibility\`
  pcre = \`(sens|respons)e\\ and\\ (?1)ibility\` ).
ASSERT matches(
  val  = \`sense and responsibility\`
  pcre = \`(sens|respons)e\\ and\\ (?1)ibility\` ).
ASSERT matches(
  val = \`response and sensibility\`
  pcre = \`(sens|respons)e\\ and\\ (?1)ibility\` ).
ASSERT matches(
  val  = \`(((123456)))\`
  pcre = \`\\( ( \\d++ | (?R) ) \\)\` ).
ASSERT matches(
  val  = \`((((((123456))))))\`
  pcre = \`\\( ( \\d++ | (?R) ) \\)\` ).
ASSERT NOT matches(
  val  = \`((((((123456)))\`
  pcre = \`\\( ( \\d++ | (?R) ) \\)\` ).

Callouts

Callouts are another powerful feature. It allows to invoke ABAP code from within the pattern during the matching process, passing data from the pattern to the callout routine.

Callouts are achieved with the [(?C...)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm). A callout routine can not only access the numeric data n provided by the callout (?Cn) or the string data str provided by the callout (?C"str"), but also a lot of other properties and information about the current matcher state.

Executable Example

[PCRE Regular Expression with Callouts](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpcre_callout_abexa.htm)

Making Use of New Features for Replacements

Conditional Substitution

PCRE's conditional substitution syntax allows you to check if a certain capture group did participate in the match, specifying different replacement strings for when it did and did not participate.

Example

Conditional substitutions with [{id...}](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm).

DATA(result1) = replace( val  =  \`male\`
                         pcre = \`(fe)?male\`
                         with = \`${1:+her:his} majesty\` ).
                         " --> 'his majesty'
DATA(result2) = replace( val  = \`female\`
                         pcre = \`(fe)?male\`
                         with = \`${1:+her:his} majesty\` ).
                         " --> 'her majesty'
BREAK-POINT.

Case Conversion

Using the [\\u](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm), [\\U](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm), [\\l](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm) and [\\L](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm) modifiers in the PCRE replacement string, the case of the inserted text can be converted to uppercase or lowercase. While \\u and \\l only affect the first character following them, \\U and \\L affect all following characters, until a different case conversion modifier or the termination operator \\E is reached.

The case conversion syntax can also be combined with conditional substitution.

Example

Replacements with case conversions. The latter two use conditional substitutions.

DATA(result) = replace(
  val  = \`thEsE aRe noT THe dROiDs YoU arE loOKInG FOr\`
  pcre = \`(\\w)(\\w\*)\` with = \`\\u$1\\L$2\` occ = 0 ).
         " --> 'These Are Not The Droids You Are Looking For'
DATA(result1) = replace(
  val  = \`body\`
  pcre = \`(some)?(body)\` with = \`${1:+\\U:\\L}HeLLo\` ).
  " --> 'hello'
DATA(result2) = replace(
  val  = \`somebody\`
  pcre = \`(some)?(body)\` with = \`${1:+\\U:\\L}HeLLo\` ).
  " --> 'HELLO'