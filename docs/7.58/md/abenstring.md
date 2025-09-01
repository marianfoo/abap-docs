  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Strings%2C%20ABENSTRING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Strings

Strings are [elementary data objects](javascript:call_link\('abenelementary_data_object_glosry.htm'\) "Glossary Entry") of variable length. There are [text strings](javascript:call_link\('abentext_string_glosry.htm'\) "Glossary Entry") and [byte strings](javascript:call_link\('abenbyte_string_glosry.htm'\) "Glossary Entry"). Like [internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry"), strings are [dynamic data objects](javascript:call_link\('abendynamic_data_object_glosry.htm'\) "Glossary Entry").

The corresponding built-in ABAP types are string and xstring. These are the dynamic equivalent of the data types c and x, which define text fields or byte fields of fixed length.

-   Text strings and text fields contain [character strings](javascript:call_link\('abencharacter_string_glosry.htm'\) "Glossary Entry"). Their common generic type is csequence.
-   Byte strings and byte fields contain [byte strings](javascript:call_link\('abenbyte_chain_glosry.htm'\) "Glossary Entry"). Their common generic type is xsequence.

Unlike a text field or byte field, the length of a string is not defined statically, but is variable and adapts to the current content of the data object at runtime. For this, dynamic memory management is used internally (see [Memory Management for Deep Data Objects](javascript:call_link\('abenmemory_consumption.htm'\))). The initial value of a string is the empty string with length 0. If there is an assignment between strings with the same type, [sharing](javascript:call_link\('abensharing_glosry.htm'\) "Glossary Entry") takes place.

The [maximum size](javascript:call_link\('abenmemory_consumption_2.htm'\)) of a string is determined by the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") ztta/max\_memreq\_MB and is 2 GB at most. If an operation with a [string](javascript:call_link\('abenstring_glosry.htm'\) "Glossary Entry") exceeds its maximum size, an exception of the class CX\_SY\_STRING\_SIZE\_TOO\_LARGE occurs and can be handled.

In contrast to text fields, trailing blanks are considered in text strings. There is a special [text string literal](javascript:call_link\('abentext_string_literal_glosry.htm'\) "Glossary Entry") for text strings. As for byte fields, there is no special [literal](javascript:call_link\('abenabap_literal_glosry.htm'\) "Glossary Entry") for byte strings in general ABAP but there is a [typed literal](javascript:call_link\('abentyped_literal_glosry.htm'\) "Glossary Entry") in ABAP SQL and ABAP CDS.

Strings are [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data types. A structure that contains a string is a [deep structure](javascript:call_link\('abendeep_structure_glosry.htm'\) "Glossary Entry") and cannot be used as a character-like field like a [flat structure](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry").

Strings can be stored in [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") like internal tables. In the ABAP Dictionary, there are the built-in data types [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), [STRING](javascript:call_link\('abenddic_builtin_types.htm'\)), and [RAWSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) for strings that can also be the types of table fields in database tables, whereby certain [restrictions](javascript:call_link\('abenddic_character_byte_types.htm'\)) need to be considered.

Example

Inline declaration of a text string carrier\_list for adding a comma-separated list of character-like data.

SELECT carrid
       FROM scarr
       INTO TABLE @FINAL(carrier\_tab).
CONCATENATE LINES OF carrier\_tab INTO FINAL(carrier\_list)
            SEPARATED BY \`,  \`.
cl\_demo\_output=>display( carrier\_list ).