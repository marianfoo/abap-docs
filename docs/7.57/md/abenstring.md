---
title: "Strings"
description: |
  Strings are elementary data objects(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenelementary_data_object_glosry.htm 'Glossary Entry') of variable length. There are text strings(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_string_glosry.htm 'Glossary Entry'
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring.htm"
abapFile: "abenstring.htm"
keywords: ["select", "do", "if", "try", "class", "data", "types", "internal-table", "abenstring"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentypes_and_objects.htm) →  [Types and Objects, Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentypes_objects_oview.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_objects.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Strings, ABENSTRING, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for impr
ovement:)

Strings

Strings are [elementary data objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenelementary_data_object_glosry.htm "Glossary Entry") of variable length. There are [text strings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_string_glosry.htm "Glossary Entry") and [byte strings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbyte_string_glosry.htm "Glossary Entry"). Like [internal tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_table_glosry.htm "Glossary Entry"), strings are [dynamic data objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynamic_data_object_glosry.htm "Glossary Entry").

The corresponding built-in ABAP types are string and xstring. These are the dynamic equivalent of the data types c and x, which define text fields or byte fields of fixed length.

-   Text strings and text fields contain [character strings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharacter_string_glosry.htm "Glossary Entry"). Their common generic type is csequence.
-   Byte strings and byte fields contain [byte strings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbyte_chain_glosry.htm "Glossary Entry"). Their common generic type is xsequence.

Unlike a text field or byte field, the length of a string is not defined statically, but is variable and adapts to the current content of the data object at runtime. For this, dynamic memory management is used internally (see [Memory Management for Deep Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmemory_consumption.htm)). The initial value of a string is the empty string with length 0. If there is an assignment between strings with the same type, [sharing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensharing_glosry.htm "Glossary Entry") takes place.

The [maximum size](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmemory_consumption_2.htm) of a string is determined by the [profile parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") ztta/max\_memreq\_MB and is 2 GB at most. If an operation with a [string](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_glosry.htm "Glossary Entry") exceeds its maximum size, an exception of the class CX\_SY\_STRING\_SIZE\_TOO\_LARGE occurs and can be handled.

In contrast to text fields, trailing blanks are considered in text strings. There is a special [text string literal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_string_literal_glosry.htm "Glossary Entry") for text strings. As for byte fields, there is no special [literal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_literal_glosry.htm "Glossary Entry") for byte strings in the current release.

Strings are [deep](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeep_glosry.htm "Glossary Entry") data types. A structure that contains a string is a [deep structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeep_structure_glosry.htm "Glossary Entry") and cannot be used as a character-like field like a [flat structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenflat_structure_glosry.htm "Glossary Entry").

Strings can be stored in [data clusters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster_glosry.htm "Glossary Entry") like internal tables. In the ABAP Dictionary, there are the built-in data types [SSTRING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [STRING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), and [RAWSTRING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) for strings that can also be the types of table fields in database tables, whereby certain [restrictions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_character_byte_types.htm) need to be considered.

Example

Inline declaration of a text string carrier\_list for adding a comma-separated list of character-like data.

SELECT carrid
       FROM scarr
       INTO TABLE @FINAL(carrier\_tab).
CONCATENATE LINES OF carrier\_tab INTO FINAL(carrier\_list)
            SEPARATED BY \`,  \`.
cl\_demo\_output=>display( carrier\_list ).