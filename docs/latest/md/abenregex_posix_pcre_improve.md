  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [Regular Expressions (regex)](javascript:call_link\('abenregular_expressions.htm'\)) →  [regex - Migrating from POSIX to PCRE](javascript:call_link\('abenregex_migrating_posix.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20regex%20-%20New%20Features%20in%20PCRE%20Compared%20to%20POSIX%2C%20ABENREGEX_POSIX_PCRE_IMPROVE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
%20for%20improvement:)

regex - New Features in PCRE Compared to POSIX

While topic [Incompatibilities between POSIX and PCRE](javascript:call_link\('abenregex_posix_pcre_incompat.htm'\)) deals with incompatibilities and missing features when migrating from POSIX to PCRE, it is also worth taking a look at the vast array of new features PCRE has to offer.

An introduction to some of these features is provided in the following, the list is however far from complete.

-   [Making Use of New Features for Patterns](#abenregex-posix-pcre-improve-1-----------lazy-quantifiers---@ITOC@@ABENREGEX_POSIX_PCRE_IMPROVE_2)
    -   [Look-behind Assertions](#abenregex-posix-pcre-improve-3-----------multiline-mode---@ITOC@@ABENREGEX_POSIX_PCRE_IMPROVE_4)
    -   [Named Capture Groups](#abenregex-posix-pcre-improve-5-----------subroutine-calls-and-recursion---@ITOC@@ABENREGEX_POSIX_PCRE_IMPROVE_6)
    -   [Callouts](#abenregex-posix-pcre-improve-7-------making-use-of-new-features-for-replacements---@ITOC@@ABENREGEX_POSIX_PCRE_IMPROVE_8)
    -   [Conditional Substitution](#abenregex-posix-pcre-improve-9-----------case-conversion---@ITOC@@ABENREGEX_POSIX_PCRE_IMPROVE_10)

Making Use of New Features for Patterns   

Lazy Quantifiers   

The most obvious downside of POSIX regular expressions in ABAP is the lack of lazy (also known as non-greedy or reluctant) quantifiers.

In PCRE a quantifier can be made lazy by adding a trailing [?:](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)):

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

FINAL(greedy\_result) =
  match( val = \`<body><div></div></body>\` pcre = \`<(.+)>\` ).
  " --> '<body><div></div></body>'
FINAL(lazy\_result) =
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

FINAL(result1) = find( val = \`meter\`      pcre = \`(?<!centi)meter\` ).
                " --> found; matches whole string
FINAL(result2) = find( val = \`millimeter\` pcre = \`(?<!centi)meter\` ).
                " --> found; match starts at offset 5
FINAL(result3) = find( val = \`centimeter\` pcre = \`(?<!centi)meter\` ).
               " --> not found

Multiline Mode   

In some scenarios it is necessary to respect line feeds during matching, e.g. matching something only if it is located at the beginning of a line. PCRE makes this very convenient by providing a large amount of control over the handling of multiple lines in the matching process.

When creating a regular expression using method CREATE\_PCRE of system class [CL\_ABAP\_REGEX](javascript:call_link\('abenregex_system_classes.htm'\)) multi line handling can be controlled by the following parameters:

Parameter

Description

DOT\_ALL

single line mode; if enabled, special character . also matches line feed characters

ENABLE\_MULTILINE

multi line mode; if enabled, special characters ^ and $ not only match the start and the end of the character string, but also the start and the end of a line respectively; a line is ended by a line feed character

NEWLINE\_MODE

controls what gets recognized as a line feed character

Despite their names, single line and multi line mode are not mutually exclusive and can be combined.

It is also possible to set these options directly in the pattern, which is especially useful for regular expressions used in statements [FIND](javascript:call_link\('abapfind.htm'\)) and [REPLACE](javascript:call_link\('abapreplace.htm'\)) behind [PCRE](javascript:call_link\('abapfind_pattern.htm'\)) or in built-in functions behind [pcre](javascript:call_link\('abenstring_functions_regex.htm'\)):

-   Single line mode can be enabled using the option setting syntax [(?s)](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) anywhere in the pattern.
-   Multi line mode can be enabled using the option setting syntax [(?m)](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) anywhere in the pattern.
-   What gets recognized as a line feed character can be controlled by the following syntax that can only appear at the start of the pattern:
    -   [(\*CR)](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) carriage return only
    -   [(\*LF)](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) linefeed only
    -   [(\*CRLF)](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) carriage return followed by linefeed
    -   [(\*ANYCRLF)](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) all three of the above
    -   [(\*ANY)](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) any Unicode line feed sequence
    -   [(\*NUL)](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) the NUL character (binary zero)

Example

While the first regular expression matches only the beginning of the character string, the second one also matches the beginning of new lines that are defined by the syntax [\\n](javascript:call_link\('abenstring_templates_separators.htm'\)) for line feeds in a string template.

FINAL(result1) = replace( val  = |xxx\\nyyy\\nzzz|
                         pcre = \`^\`
                         with = \`\_\`
                         occ = 0 ).
                " --> \_xxx\\nyyy\\nzzz
FINAL(result2) = replace( val  = |xxx\\nyyy\\nzzz|
                         pcre = \`(\*LF)(?m)^\`
                         with = \`\_\`
                         occ = 0 ).
                " --> \_xxx\\n\_yyy\\n\_zzz

Named Capture Groups   

PCRE supports the naming of capture groups, meaning you can assign a name to a capture group, e.g. using the [(?<name>...)](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) syntax. You can refer to a named capture group by its name, e.g. in a backreference using the [\\k<name>](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) syntax.

Example

The regular expression matches the character string. The capture group is used by its name to match further occurrences of the pattern defined for the group.

ASSERT matches( val  = \`foobarfoo\`
                pcre = \`(?<my\_group>foo)bar\\k<my\_group>\` ).

Subroutine Calls and Recursion   

Apart from referring to the content of a group via backreferences, PCRE supports calling groups as subroutines using the [(?n)](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) syntax. It is also possible to call a named group as a subroutine, e.g. using the [(?&name)](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) syntax.

Example

The example shows the calling of groups as subroutines in three blocks:

-   In the first block, the backreference [\\1](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) simply matches whatever the first capture group actually matched most recently, instead of matching all the things the capture group could match.
-   The second block shows, how this behavior can be achieved by calling the group as a subroutine using the [(?n)](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) syntax.
-   The third block shows, how by recursing over the whole pattern using the [(?R)](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) syntax in one branch of the alternation, it is ensured that there is a balanced but arbitrary number of opening (\\() and closing (\\)) parentheses to either side of the digits. Note that the pattern makes use of the possessive quantifier ++ that acts the same as + but prevents backtracking into what was matched by the quantifier.

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

Callouts are another powerful feature. It invokes ABAP code from within the pattern during the matching process, passing data from the pattern to the callout routine.

Callouts are achieved with the [(?C...)](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)). A callout routine cannot only access the numeric data n provided by the callout (?Cn) or the string data str provided by the callout (?C"str"), but also a lot of other properties and information about the current matcher state.

Executable Example

[PCRE Regular Expression with Callouts](javascript:call_link\('abenpcre_callout_abexa.htm'\))

Making Use of New Features for Replacements   

Conditional Substitution   

PCRE's conditional substitution syntax allows you to check if a certain capture group did participate in the match, specifying different replacement strings for when it did and did not participate.

Example

Conditional substitutions with [{id...}](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)).

FINAL(result1) = replace( val  =  \`male\`
                         pcre = \`(fe)?male\`
                         with = \`${1:+her:his} majesty\` ).
                         " --> 'his majesty'
FINAL(result2) = replace( val  = \`female\`
                         pcre = \`(fe)?male\`
                         with = \`${1:+her:his} majesty\` ).
                         " --> 'her majesty'

Case Conversion   

Using the [\\u](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)), [\\U](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)), [\\l](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) and [\\L](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) modifiers in the PCRE replacement string, the case of the inserted text can be converted to uppercase or lowercase. While \\u and \\l only affect the first character following them, \\U and \\L affect all following characters, until a different case conversion modifier or the termination operator \\E is reached.

The case conversion syntax can also be combined with conditional substitution.

Example

Replacements with case conversions. The latter two use conditional substitutions.

FINAL(result) = replace(
  val  = \`thEsE aRe noT THe dROiDs YoU arE loOKInG FOr\`
  pcre = \`(\\w)(\\w\*)\` with = \`\\u$1\\L$2\` occ = 0 ).
         " --> 'These Are Not The Droids You Are Looking For'
FINAL(result1) = replace(
  val  = \`body\`
  pcre = \`(some)?(body)\` with = \`${1:+\\U:\\L}HeLLo\` ).
  " --> 'hello'
FINAL(result2) = replace(
  val  = \`somebody\`
  pcre = \`(some)?(body)\` with = \`${1:+\\U:\\L}HeLLo\` ).
  " --> 'HELLO'