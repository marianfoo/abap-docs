  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Description Functions](javascript:call_link\('abendescriptive_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_func%20-%20charlen%2C%20dbmaxlen%2C%20numofchar%2C%20strlen%2C%20ABENLENGTH_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

string\_func - charlen, dbmaxlen, numofchar, strlen

These [built-in](javascript:call_link\('abenbuilt_in_functions.htm'\)) length functions have an unnamed character-like argument.

Syntax

... func( arg ) ...

Effect

The following table shows the length functions with an unnamed argument. The arguments arg of all length functions except dbmaxlen are [character-like expression positions](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry"). The argument of dbmaxlen is a character-like [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry"). The return value has the type i for all length functions.

Function func

Return Value

charlen

Length of the first character of arg in the [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") used: 1 for a single Unicode character; 2 for [surrogate pairs](javascript:call_link\('abensurrogates_glosry.htm'\) "Glossary Entry").

dbmaxlen

Maximum length of a string defined in the ABAP Dictionary (RAWSTRING, SSTRING, STRING, or GEOM\_EWKB). If the string is unrestricted, the constant abap\_max\_db\_string\_ln or abap\_max\_db\_rawstring\_ln from the [type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") ABAP is returned. The latter is also returned for the built-in ABAP types string and xstring.

numofchar

Number of characters in arg, where trailing blanks are neither counted in data objects with fixed lengths nor in data objects with the type string.

strlen

Number of characters in arg, where trailing blanks in data objects with fixed lengths are not counted, whereas in data objects with the type string they are.

Hint

The functions listed here are some of the functions that can also be used in the obsolete [extended functional operand positions](javascript:call_link\('abenextended_functional_positions.htm'\)) if their argument is a single data object.

Example

The results of the following length determinations are 10 and 5.

DATA:
  str TYPE string      VALUE \`12345     \`,
  txt TYPE c LENGTH 10 VALUE '12345     '.
cl\_demo\_output=>display( |{ strlen( str )
                       }, { strlen( txt ) }| ).

Example

The result of function strlen is 2 because ABAP handles the [surrogate pair](javascript:call_link\('abensurrogate_pair_glosry.htm'\) "Glossary Entry") in the character string as two [UCS-2](javascript:call_link\('abenucs2_glosry.htm'\) "Glossary Entry") characters. When [counting](javascript:call_link\('abencount_functions.htm'\)) with a regular expression in [PCRE syntax](javascript:call_link\('abenregex_pcre_syntax.htm'\)) that is introduced with (\*UTF), the result is 1, because the surrogate pair is interpreted as one [UTF-16](javascript:call_link\('abenutf16_glosry.htm'\) "Glossary Entry") character.

FINAL(surrogate\_pair) = cl\_abap\_codepage=>convert\_from(
  codepage = 'UTF-8'
  source    = CONV xstring( 'F09F91BD' ) ).
                            "U+1F47D, EXTRATERRESTRIAL ALIEN
cl\_demo\_output=>write\_text( surrogate\_pair ).
FINAL(ucs2\_len)  = strlen( surrogate\_pair ).
cl\_demo\_output=>write( ucs2\_len ).
FINAL(utf16\_len) = count( val = surrogate\_pair pcre = \`(\*UTF).\` ).
cl\_demo\_output=>write( utf16\_len ).
cl\_demo\_output=>display( ).