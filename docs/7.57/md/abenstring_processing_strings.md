  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Character String and Byte String Processing, Overview](javascript:call_link\('abenstring_processing_oview.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Character Strings and Byte Chains, ABENSTRING_PROCESSING_STRINGS, 757%0D%0A%0D%0AErro
r:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Character Strings and Byte Chains

-   [Character Strings](#abenstring-processing-strings-1-------byte-chains---@ITOC@@ABENSTRING_PROCESSING_STRINGS_2)

Character Strings   

Character-like data objects contain character strings. A character-like data object either has a character-like data type c, n, or string, a date/time type d or t, or it is a [flat structure](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry") with exclusively character-like components.

ABAP supports the character format [UCS-2](javascript:call_link\('abenucs2_glosry.htm'\) "Glossary Entry") and a character always occupies two bytes. This ensures that all characters of the system code page [UTF-16](javascript:call_link\('abenutf16_glosry.htm'\) "Glossary Entry") are handled correctly, except those in the [surrogate area](javascript:call_link\('abensurrogate_area_glosry.htm'\) "Glossary Entry"). These occupy four bytes and hence are handled as two characters by ABAP, which can produce unexpected results if character strings are truncated or individual characters are compared in character sets.

Byte Chains   

Byte-like data objects contain byte chains (or byte sequences). A byte-like data object always has the byte-like data type x or xstring.

Hints

-   When working with [dynamic data objects](javascript:call_link\('abendynamic_data_object_glosry.htm'\) "Glossary Entry") of type string and xstring, their [maximum size](javascript:call_link\('abenmemory_consumption_2.htm'\)) must not be exceeded. If an operation with a string exceeds its maximum size, an exception of class CX\_SY\_STRING\_SIZE\_TOO\_LARGE occurs and can be handled.
-   When [accessing substrings](javascript:call_link\('abenoffset_length.htm'\)) of strings, it should always be checked if the specified substring lies within the current length of the string.

Example

A byte string of type xstring contains a byte chain, which is decoded in accordance with codepage UTF-8 into a text in a text string of type string.

DATA hex  TYPE xstring VALUE '48656C6C6F20576F726C64'.
DATA text TYPE string.
text = cl\_abap\_conv\_codepage=>create\_in( )->convert( hex ).
cl\_demo\_output=>display( text ).