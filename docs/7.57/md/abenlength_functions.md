  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions.htm) →  [string\_func - Description Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendescriptive_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: string_func - charlen, dbmaxlen, numofchar, strlen, ABENLENGTH_FUNCTIONS, 757%0D%0A%0
D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

string\_func - charlen, dbmaxlen, numofchar, strlen

These [built-in](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_functions.htm) length functions have an unnamed character-like argument.

Syntax

... func( arg ) ...

Effect

The following table shows the length functions with an unnamed argument. The arguments arg of all length functions except dbmaxlen are [character-like expression positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"). The argument of dbmaxlen is a character-like [functional operand position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_position_glosry.htm "Glossary Entry"). The return value has the type i for all length functions.

Function func

Return Value

charlen

Length of the first character of arg in the [code page](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencodepage_glosry.htm "Glossary Entry") used: 1 for a single Unicode character; 2 for [surrogate pairs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensurrogates_glosry.htm "Glossary Entry").

dbmaxlen

Maximum length of a string defined in the ABAP Dictionary (RAWSTRING, SSTRING, STRING, or GEOM\_EWKB). If the string is unrestricted, the constant abap\_max\_db\_string\_ln or abap\_max\_db\_rawstring\_ln from the [type pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentype_pool_glosry.htm "Glossary Entry") ABAP is returned. The latter is also returned for the built-in ABAP types string and xstring.

numofchar

Number of characters in arg, where trailing blanks are neither counted in data objects with fixed lengths nor in data objects with the type string.

strlen

Number of characters in arg, where trailing blanks in data objects with fixed lengths are not counted, whereas in data objects with the type string they are.

Hint

The functions listed here are some of the functions that can also be used in the obsolete [extended functional operand positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextended_functional_positions.htm) if their argument is a single data object.

Example

The results of the following length determinations are 10 and 5.

DATA:
  str TYPE string      VALUE \`12345     \`,
  txt TYPE c LENGTH 10 VALUE '12345     '.
cl\_demo\_output=>display( |{ strlen( str )
                       }, { strlen( txt ) }| ).

Example

The result of function strlen is 2 because ABAP handles the [surrogate pair](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensurrogate_pair_glosry.htm "Glossary Entry") in the character string as two [UCS-2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenucs2_glosry.htm "Glossary Entry") characters. When [counting](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencount_functions.htm) with a regular expression in [PCRE syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_pcre_syntax.htm) that is introduced with (\*UTF), the result is 1, because the surrogate pair is interpreted as one [UTF-16](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenutf16_glosry.htm "Glossary Entry") character.

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