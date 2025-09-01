  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions](javascript:call_link\('abenstring_functions.htm'\)) →  [Description Functions for Character-Like Arguments](javascript:call_link\('abendescriptive_functions.htm'\)) → 

charlen, dbmaxlen, numofchar, strlen - Length Functions

These length functions have an unnamed character-like argument.

Syntax

... func( arg ) ...

Effect

The following table shows the length functions with one unnamed argument. The arguments arg of all length functions except dbmaxlen are [character-like expression positions](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry"). The argument of dbmaxlen is a character-like [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry"). The return code has the type i for all length functions.

Function func

Return Value

charlen

Length of first character of arg in the [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") used: 1 for a single Unicode character; 2 for [surrogate pairs](javascript:call_link\('abensurrogates_glosry.htm'\) "Glossary Entry").

dbmaxlen

Maximum length of a string defined in ABAP Dictionary (RAWSTRING, SSTRING, STRING). If the string is unrestricted, the constant abap\_max\_db\_string\_ln or abap\_max\_db\_rawstring\_ln from the [type group](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") ABAP is returned. The latter is also returned for the built-in ABAP types string and xstring.

numofchar

Number of characters in arg, where trailing blanks are not counted in data objects with fixed lengths or in data objects with the type string.

strlen

Number of characters in arg, where trailing blanks in data objects with fixed lengths are not counted. They are counted though in data objects with the type string.

Note

The functions described here are some of the functions that can be used in the obsolete [extended functional operand positions](javascript:call_link\('abenextended_functional_positions.htm'\)), even if their argument is a single data object.

Example

The results of the following length determinations are 10 and 5.

DATA:
  str TYPE string      VALUE \`12345     \`,
  txt TYPE c LENGTH 10 VALUE '12345     '.
cl\_demo\_output=>display( |{ strlen( str )
                       }, { strlen( txt ) }| ).