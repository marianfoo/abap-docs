---
title: "Character Strings and Byte Chains"
description: |
  -   Character Strings(#abenstring-processing-strings-1-------byte-chains---@ITOC@@ABENSTRING_PROCESSING_STRINGS_2) Character Strings Character-like data objects contain character strings. A character-like data object either has a character-like data type c, n, or string, a date/time type d or t, o
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_strings.htm"
abapFile: "abenstring_processing_strings.htm"
keywords: ["do", "if", "try", "class", "data", "abenstring", "processing", "strings"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [Character String and Byte String Processing, Overview](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_oview.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Character%20Strings%20and%20Byte%20Chains%2C%20ABENSTRING_PROCESSING_STRINGS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

Character Strings and Byte Chains

-   [Character Strings](#abenstring-processing-strings-1-------byte-chains---@ITOC@@ABENSTRING_PROCESSING_STRINGS_2)

Character Strings   

Character-like data objects contain character strings. A character-like data object either has a character-like data type c, n, or string, a date/time type d or t, or it is a [flat structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenflat_structure_glosry.htm "Glossary Entry") with exclusively character-like components.

ABAP supports the character format [UCS-2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenucs2_glosry.htm "Glossary Entry") and a character always occupies two bytes. This ensures that all characters of the system code page [UTF-16](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenutf16_glosry.htm "Glossary Entry") are handled correctly, except those in the [surrogate area](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensurrogate_area_glosry.htm "Glossary Entry"). These occupy four bytes and hence are handled as two characters by ABAP, which can produce unexpected results if character strings are truncated or individual characters are compared in character sets.

Byte Chains   

Byte-like data objects contain byte chains (or byte sequences). A byte-like data object always has the byte-like data type x or xstring.

Hints

-   When working with [dynamic data objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_data_object_glosry.htm "Glossary Entry") of type string and xstring, their [maximum size](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption_2.htm) must not be exceeded. If an operation with a string exceeds its maximum size, an exception of class CX\_SY\_STRING\_SIZE\_TOO\_LARGE occurs and can be handled.
-   When [accessing substrings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoffset_length.htm) of strings, it should always be checked if the specified substring lies within the current length of the string.

Example

A byte string of type xstring contains a byte chain, which is decoded in accordance with codepage UTF-8 into a text in a text string of type string.

DATA hex  TYPE xstring VALUE '48656C6C6F20576F726C64'.
DATA text TYPE string.
text = cl\_abap\_conv\_codepage=>create\_in( )->convert( hex ).
cl\_demo\_output=>display( text ).