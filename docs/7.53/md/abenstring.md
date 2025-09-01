  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Types and Objects - Overview](javascript:call_link\('abentypes_objects_oview.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) → 

Strings

Strings are [elementary data objects](javascript:call_link\('abenelementary_data_object_glosry.htm'\) "Glossary Entry") of variable length. Strings can be either [text strings](javascript:call_link\('abentext_string_glosry.htm'\) "Glossary Entry") or [byte strings](javascript:call_link\('abenbyte_string_glosry.htm'\) "Glossary Entry"). Like [internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry"), strings are [dynamic data objects](javascript:call_link\('abendynamic_data_object_glosry.htm'\) "Glossary Entry").

The corresponding built-in ABAP types are string and xstring. These are the dynamic equivalent of the data types c and x, which define text fields or byte fields of fixed length.

-   Text strings and text fields contain [character strings](javascript:call_link\('abencharacter_string_1_glosry.htm'\) "Glossary Entry"). Their common generic type is csequence.

-   Byte strings and byte fields contain [byte strings](javascript:call_link\('abenbyte_chain_glosry.htm'\) "Glossary Entry"). Their common generic type is xsequence.

Unlike a text field or byte field, the length of a string is not defined statically, but is variable and adapts to the current content of the data object at runtime. Internally, this uses dynamic memory management (see [Memory Management for Deep Data Objects](javascript:call_link\('abenmemory_consumption.htm'\))). The maximum size of a string is determined by the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") ztta/max\_memreq\_MB (see [Maximum Size of Dynamic Data Objects](javascript:call_link\('abenmemory_consumption_2.htm'\))). The initial value of a string is the empty string with length 0. Any assignments between strings with the same type produce [sharing](javascript:call_link\('abensharing_glosry.htm'\) "Glossary Entry").

In contrast to text fields, trailing blanks are respected in text strings. There is a special [text string literal](javascript:call_link\('abentext_string_literal_glosry.htm'\) "Glossary Entry") for text strings. As with byte fields, there is no special [literal](javascript:call_link\('abenliteral_glosry.htm'\) "Glossary Entry") for byte strings in the current release.

Strings are [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data types. A structure that contains a string is a [deep structure](javascript:call_link\('abendeep_structure_glosry.htm'\) "Glossary Entry") and cannot be used as a character-like field in the same way as a [flat structure](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry").

Strings, like internal tables, can be stored in [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry"). In ABAP Dictionary, strings can have the built-in data types [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), [STRING](javascript:call_link\('abenddic_builtin_types.htm'\)), and [RAWSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)). These can also be the types of table fields in database tables (subject to certain [restrictions](javascript:call_link\('abenddic_character_byte_types.htm'\))).

Example

Inline declaration of a text string carrier\_list for adding a comma-separated list of character-like data.

SELECT carrid
       FROM scarr
       INTO TABLE @DATA(carrier\_tab).
CONCATENATE LINES OF carrier\_tab INTO DATA(carrier\_list)
            SEPARATED BY \`,  \`.
cl\_demo\_output=>display( carrier\_list ).