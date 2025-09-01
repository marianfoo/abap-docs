---
title: "Syntax"
description: |
  ... func( arg ) ... Effect The following table shows the length functions with an unnamed argument. The arguments arg of all length functions except dbmaxlen are character-like expression positions(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencharlike_expr_position_glosry.htm 'Gl
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlength_functions.htm"
abapFile: "abenlength_functions.htm"
keywords: ["do", "if", "try", "data", "types", "abenlength", "functions"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions.htm) →  [string\_func - Description Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendescriptive_functions.htm) → 

string\_func - charlen, dbmaxlen, numofchar, strlen

These length functions have an unnamed character-like argument.

Syntax

... func( arg ) ...

Effect

The following table shows the length functions with an unnamed argument. The arguments arg of all length functions except dbmaxlen are [character-like expression positions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"). The argument of dbmaxlen is a character-like [functional operand position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunctional_position_glosry.htm "Glossary Entry"). The return value has the type i for all length functions.

Function func

Return Value

charlen

Length of the first character of arg in the [code page](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencodepage_glosry.htm "Glossary Entry") used: 1 for a single Unicode character; 2 for [surrogate pairs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensurrogates_glosry.htm "Glossary Entry").

dbmaxlen

Maximum length of a string defined in the ABAP Dictionary (RAWSTRING, SSTRING, STRING, or GEOM\_EWKB). If the string is unrestricted, the constant abap\_max\_db\_string\_ln or abap\_max\_db\_rawstring\_ln from the [type pool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentype_pool_glosry.htm "Glossary Entry") ABAP is returned. The latter is also returned for the built-in ABAP types string and xstring.

numofchar

Number of characters in arg, where trailing blanks are not counted in data objects with fixed lengths or in data objects with the type string.

strlen

Number of characters in arg, where trailing blanks in data objects with fixed lengths are not counted, whereas in data objects with the type string they are.

Hint

The functions listed here are some of the functions that can also be used in the obsolete [extended functional operand positions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenextended_functional_positions.htm) if their argument is a single data object.

Example

The results of the following length determinations are 10 and 5.

DATA:
  str TYPE string      VALUE \`12345     \`,
  txt TYPE c LENGTH 10 VALUE '12345     '.
cl\_demo\_output=>display( |{ strlen( str )
                       }, { strlen( txt ) }| ).