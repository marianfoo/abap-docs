  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [System Classes for Character String and Byte String Processing](javascript:call_link\('abencl_abap_string_utilities.htm'\)) → 

Class for Trailing Blanks

The class CL\_ABAP\_STRING\_UTILITIES contains methods for processing [text strings](javascript:call_link\('abentext_string_glosry.htm'\) "Glossary Entry").

-   C2STR\_PRESERVING\_BLANKS assigns text fields while preserving the trailing blanks.

-   DEL\_TRAILING\_BLANKS deletes the trailing blanks from strings.

Note

Tasks like this can now also be performed using statements and predefined functions.

Example

The program compares the method C2STR\_PRESERVING\_BLANKS with the built-in function [shift\_right](javascript:call_link\('abenshift_functions.htm'\)). The implementation of the method now consists of nothing more than this function.

DATA(str) = \`abc   \`.
DATA(rslt) = str.
cl\_abap\_string\_utilities=>del\_trailing\_blanks( CHANGING str = rslt ).
ASSERT rslt =  shift\_right( str ).