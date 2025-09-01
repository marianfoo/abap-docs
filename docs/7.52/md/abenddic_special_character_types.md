  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Predefined Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Predefined Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [Special Dictionary Types](javascript:call_link\('abenddic_builtin_types_special.htm'\)) → 

Special Character-Like Types

The following character-like data types in ABAP Dictionary have a special semantic meaning:

-   [NUMC](javascript:call_link\('abenddic_builtin_types.htm'\)) for [numeric texts](javascript:call_link\('abennumeric_text_glosry.htm'\) "Glossary Entry")

From a technical perspective, the built-in data type NUMC describes objects of the type CHAR with a maximum length of 255 characters. It is intended for numerical texts. This is not checked however when writing to or reading from database fields of this type. Automatic checks are only made for dynpro fields typed with reference to NUMC. In ABAP, NUMC is assigned to the special type [n](javascript:call_link\('abenbuiltin_types_character.htm'\)) and the associated rules apply.

-   [CLNT](javascript:call_link\('abenddic_builtin_types.htm'\)) for [client columns](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry")

From a technical perspective, the data type CLNT describes objects of the type CHAR with length 3. If the data type CLNT is used for the first key field of a database table, this makes the database table [client-specific](javascript:call_link\('abenddic_database_tables_client.htm'\)).

-   [LANG](javascript:call_link\('abenddic_builtin_types.htm'\)) for [text language](javascript:call_link\('abentext_language_glosry.htm'\) "Glossary Entry")

From a technical perspective, the predefined data type LANG describes objects of the type CHAR with length 1. It is intended specifically for language keys. A component of structures or database tables that has the data type LANG can be identified as text language. The text language is used to convert character-like components of the structure when importing data from [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") and in the binary [RFC protocol](javascript:call_link\('abenrfc_protocol.htm'\)) for passing TABLES parameters between [MDMP systems](javascript:call_link\('abenmdmp-system_glosry.htm'\) "Glossary Entry") and [Unicode systems](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry"). The [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") of a [text table](javascript:call_link\('abentext_table_glosry.htm'\) "Glossary Entry") is still made up of the [foreign key](javascript:call_link\('abenforeign_key_glosry.htm'\) "Glossary Entry") and a field of type LANG.

Note

When the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) are used to represent a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") with the type LANG (and when a field that references this type is formatted), this field has an output length of 2 and is converted automatically from the single-character internal language ID to the matching two-character ISO ID using the [conversion routine](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry") ISOLA (and back).