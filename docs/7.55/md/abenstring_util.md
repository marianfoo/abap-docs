---
title: "Class for Trailing Blanks"
description: |
  The class CL_ABAP_STRING_UTILITIES contains methods for processing text strings(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentext_string_glosry.htm 'Glossary Entry'). -   C2STR_PRESERVING_BLANKS assigns text fields while preserving the trailing blanks. -   DEL_TRAILING_BLA
version: "7.55"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_util.htm"
abapFile: "abenstring_util.htm"
keywords: ["delete", "do", "while", "if", "try", "method", "class", "data", "abenstring", "util"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_string.htm) →  [System Classes for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_abap_string_utilities.htm) → 

Class for Trailing Blanks

The class CL\_ABAP\_STRING\_UTILITIES contains methods for processing [text strings](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentext_string_glosry.htm "Glossary Entry").

-   C2STR\_PRESERVING\_BLANKS assigns text fields while preserving the trailing blanks.

-   DEL\_TRAILING\_BLANKS deletes the trailing blanks from strings.

Hint

Tasks like this can now also be performed using statements and built-in functions.

Example

The program compares the method C2STR\_PRESERVING\_BLANKS with the built-in function [shift\_right](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshift_functions.htm). The implementation of the method now consists of nothing more than this function.

DATA(str) = \`abc   \`.
DATA(rslt) = str.
cl\_abap\_string\_utilities=>del\_trailing\_blanks( CHANGING str = rslt ).
ASSERT rslt =  shift\_right( str ).