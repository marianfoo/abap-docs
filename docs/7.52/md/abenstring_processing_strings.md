  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Character and Byte String Processing - Overview](javascript:call_link\('abenstring_processing_oview.htm'\)) → 

Character Strings and Byte Strings

-   [Character Strings](#@@ITOC@@ABENSTRING_PROCESSING_STRINGS_1)

-   [Byte Chains](#@@ITOC@@ABENSTRING_PROCESSING_STRINGS_2)

Character Strings

Character-like data objects contain character strings. A character-like data object either has a character-like data type (c, n, or string) or it is a date/time type (d or t), or it is a [flat structure](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry") with exclusively character-like components.

ABAP supports the character format [UCS-2](javascript:call_link\('abenucs2_glosry.htm'\) "Glossary Entry") and a character always occupies two bytes. This ensures that all characters from the system code page [UTF-16](javascript:call_link\('abenutf16_glosry.htm'\) "Glossary Entry") are handled correctly (except for those in the [surrogate area](javascript:call_link\('abensurrogate_area_glosry.htm'\) "Glossary Entry"). These characters occupy four bytes and hence are handled as two characters by ABAP. This can produce unexpected results when cutting character strings or comparing individual characters in character sets.

Byte Chains

Byte-like data objects contain byte chains (or byte strings). A byte-like data object always has the byte-like data type x or xstring.

Example

A byte string of type xstring contains a byte chain, which is decoded in accordance with codepage UTF-8 into a text in a text string of type string.

DATA hex  TYPE xstring VALUE '48656C6C6F20576F726C64'.
DATA text TYPE string.
text = cl\_abap\_codepage=>convert\_from( hex ).
cl\_demo\_output=>display( text ).