---
title: "Character Strings and Byte Chains"
description: |
  -   Character Strings(#abenstring-processing-strings-1--------byte-chains---@ITOC@@ABENSTRING_PROCESSING_STRINGS_2) Character Strings Character-like data objects contain character strings. A character-like data object either has a character-like data type (c, n, or string) or it is a date/time typ
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_processing_strings.htm"
abapFile: "abenstring_processing_strings.htm"
keywords: ["do", "try", "data", "abenstring", "processing", "strings"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_string.htm) →  [Character and Byte String Processing - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_processing_oview.htm) → 

Character Strings and Byte Chains

-   [Character Strings](#abenstring-processing-strings-1--------byte-chains---@ITOC@@ABENSTRING_PROCESSING_STRINGS_2)

Character Strings

Character-like data objects contain character strings. A character-like data object either has a character-like data type (c, n, or string) or it is a date/time type (d or t), or it is a [flat structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenflat_structure_glosry.htm "Glossary Entry") with exclusively character-like components.

ABAP supports the character format [UCS-2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenucs2_glosry.htm "Glossary Entry") and a character always occupies two bytes. This ensures that all characters from the system code page [UTF-16](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenutf16_glosry.htm "Glossary Entry") are handled correctly (except for those in the [surrogate area](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensurrogate_area_glosry.htm "Glossary Entry")). These characters occupy four bytes and hence are handled as two characters by ABAP. This can produce unexpected results when cutting character strings or comparing individual characters in character sets.

Byte Chains

Byte-like data objects contain byte chains (or byte strings). A byte-like data object always has the byte-like data type x or xstring.

Example

A byte string of type xstring contains a byte chain, which is decoded in accordance with codepage UTF-8 into a text in a text string of type string.

DATA hex  TYPE xstring VALUE '48656C6C6F20576F726C64'.
DATA text TYPE string.
text = cl\_abap\_conv\_codepage=>create\_in( )->convert( hex ).
cl\_demo\_output=>display( text ).