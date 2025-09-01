  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions.htm) →  [string\_func - Description Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendescriptive_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_func%20-%20count%2C%20count_...%2C%20ABENCOUNT_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_func - count, count\_...

Syntax

1\. ... count( [val = text](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_val.htm) *{* [sub = substring](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_sub.htm)*}**|**{* [pcre = regex](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_regex.htm)*}* *\[*[case = case](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_case.htm)*\]*
             *\[* [off = off](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_off_len.htm)*\]* *\[*[len = len](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_off_len.htm)*\]* ) ...

2\. ... count\_any\_of( [val = text](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_val.htm)  [sub = substring](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_sub.htm)
                    *\[*[off = off](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_off_len.htm)*\]* *\[* [len = len](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_off_len.htm)*\]* ) ...

3\. ... count\_any\_not\_of( [val = text](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_val.htm)  [sub = substring](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_sub.htm)
                        *\[* [off = off](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_off_len.htm)*\]* *\[* [len = len](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_off_len.htm)*\]* ) ...

Effect

The [built-in](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_functions.htm) search functions count and count\_... search [text](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_val.htm) in the same way as the corresponding search functions [find](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensearch_functions.htm) and [find\_...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensearch_functions.htm), either in the entire string [text](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_val.htm) or in a subarea defined using [off](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_off_len.htm) and [len](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_off_len.htm) for characters specified in [substring](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_sub.htm) or for a match with a [regular expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_syntax.htm) specified in [regex](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_regex.htm). Instead of an offset, they return the number of all occurrences.

If the argument pcre is used, regex must contain a [PCRE regular expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_pcre_syntax.htm). A regular expression in PCRE syntax is compiled in an extended mode: Most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind #. In order to include whitespace and # in a pattern, they must be escaped or the extended mode must be switched of with [(?-x)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_pcre_syntax_specials.htm) in the regular expression.

The return value has the type i.

Hint

Besides pcre, also the obsolete argument [regex](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_regex_obs.htm) can be used. Then an obsolete [POSIX regular expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_posix_syntax.htm) must be passed.

Example

The result of the following function calls is 1, 3, and 6.

FINAL(result1) = count(            val = \`xxx123yyy\` pcre = \`\\d+\` ).
FINAL(result2) = count\_any\_of(     val = \`xxx123yyy\` sub  = \`123\` ).
FINAL(result3) = count\_any\_not\_of( val = \`xxx123yyy\` sub  = \`x\`   ).

Example

The result of the first counting is 2 because the [PCRE regular expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_pcre_syntax.htm) handles the [surrogate pair](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensurrogate_pair_glosry.htm "Glossary Entry") in the character string as two characters by default. When counting with a regular expression that is introduced with (\*UTF), the result is 1, because the surrogate pair is interpreted as one [UTF-16](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenutf16_glosry.htm "Glossary Entry") character.

FINAL(surrogate\_pair) = cl\_abap\_codepage=>convert\_from(
  codepage = 'UTF-8'
  source    = CONV xstring( 'F09F91BD' ) ).
                            "U+1F47D, EXTRATERRESTRIAL ALIEN
cl\_demo\_output=>write\_text( surrogate\_pair ).
cl\_demo\_output=>write( |{
  count( val = surrogate\_pair pcre = \`.\` ) } {
  count( val = surrogate\_pair pcre = \`(\*UTF).\` ) }| ).
cl\_demo\_output=>display( ).

Executable Example

[String Functions, count, find and match](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_function_find_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Illegal offset or length specified in off and len.
    Runtime error: STRING\_OFFSET\_TOO\_LARGE

CX\_SY\_REGEX\_TOO\_COMPLEX

-   Cause: More information: [Exceptions in Regular Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_exceptions.htm).
    Runtime error: REGEX\_TOO\_COMPLEX

CX\_SY\_STRG\_PAR\_VAL

-   Cause: Substring in sub or regular expression in regex is empty or occurrence in occ is 0.
    Runtime error: STRG\_ILLEGAL\_PAR