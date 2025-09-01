  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_and_objects.htm) →  [Types and Objects - Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_objects_oview.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_objects.htm) → 

Strings

Strings are [elementary data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenelementary_data_object_glosry.htm "Glossary Entry") of variable length. Strings can be either [text strings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_string_glosry.htm "Glossary Entry") or [byte strings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbyte_string_glosry.htm "Glossary Entry"). Like [internal tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_table_glosry.htm "Glossary Entry"), strings are [dynamic data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynamic_data_object_glosry.htm "Glossary Entry").

The corresponding built-in ABAP types are string and xstring. These are the dynamic equivalent of the data types c and x, which define text fields or byte fields of fixed length.

-   Text strings and text fields contain [character strings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharacter_string_1_glosry.htm "Glossary Entry"). Their common generic type is csequence.

-   Byte strings and byte fields contain [byte strings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbyte_chain_glosry.htm "Glossary Entry"). Their common generic type is xsequence.

Unlike a text field or byte field, the length of a string is not defined statically, but is variable and adapts to the current content of the data object at runtime. Internally, this uses dynamic memory management (see [Memory Management for Deep Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmemory_consumption.htm)). The maximum size of a string is determined by the [profile parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") ztta/max\_memreq\_MB (see [Maximum Size of Dynamic Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmemory_consumption_2.htm)). The initial value of a string is the empty string with length 0. Any assignments between strings with the same type produce [sharing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensharing_glosry.htm "Glossary Entry").

In contrast to text fields, trailing blanks are respected in text strings. There is a special [text string literal](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_string_literal_glosry.htm "Glossary Entry") for text strings. As with byte fields, there is no special [literal](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenliteral_glosry.htm "Glossary Entry") for byte strings in the current release.

Strings are [deep](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeep_glosry.htm "Glossary Entry") data types. A structure that contains a string is a [deep structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeep_structure_glosry.htm "Glossary Entry") and cannot be used as a character-like field in the same way as a [flat structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_structure_glosry.htm "Glossary Entry").

Strings, like internal tables, can be stored in [data clusters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_cluster_glosry.htm "Glossary Entry"). In ABAP Dictionary, strings can have the built-in data types [SSTRING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm), [STRING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm), and [RAWSTRING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm). These can also be the types of table fields in database tables (subject to certain [restrictions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_character_byte_types.htm)).

Example

Inline declaration of a text string carrier\_list for adding a comma-separated list of character-like data.

SELECT carrid
       FROM scarr
       INTO TABLE @DATA(carrier\_tab).
CONCATENATE LINES OF carrier\_tab INTO DATA(carrier\_list)
            SEPARATED BY \`,  \`.
cl\_demo\_output=>display( carrier\_list ).