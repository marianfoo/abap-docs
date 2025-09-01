  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) → 

Table Types

A table type in ABAP Dictionary defines the data type of an [internal table](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry") in ABAP. The table type specifies

-   the [row type](javascript:call_link\('abenrow_type_glosry.htm'\) "Glossary Entry")

-   the [table category](javascript:call_link\('abentable_category_glosry.htm'\) "Glossary Entry")

-   the [table key](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry")

of an internal table. An internal program object declared with reference to a table type is an internal table of this type.

-   [Technical attributes of table types](javascript:call_link\('abenddic_table_types_tech.htm'\))

-   [Semantic attributes of table types](javascript:call_link\('abenddic_table_types_sema.htm'\))

Note

Unlike in [data elements](javascript:call_link\('abenddic_data_elements.htm'\)) and [structures](javascript:call_link\('abenddic_structures.htm'\)), the meaning of the table types in ABAP Dictionary consists only of creating globally visible definitions of internal tables. Table types replace the definition of internal tables in [type groups](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") and can themselves be replaced using the declaration of internal table types in global classes and interfaces, if the context where the type is required is suitable. The attributes of an internal table that can be defined in ABAP Dictionary match in full those that can be specified using the statement [TYPES ... TABLE OF](javascript:call_link\('abaptypes_itab.htm'\)) in ABAP programs. More information can be found in the in-depth documentation about internal tables in [ABAP - Reference](javascript:call_link\('abenitab.htm'\)).

Example

The table type SPFLI\_KEY\_TAB describes a hashed table with the structured row type SPFLI with a unique primary key and two non-unique secondary table keys.

Continue
[Technical Attributes of Table Types](javascript:call_link\('abenddic_table_types_tech.htm'\))
[Semantic Attributes of Table Types](javascript:call_link\('abenddic_table_types_sema.htm'\))
[Ranges Table Type](javascript:call_link\('abenddic_table_types_ranges.htm'\))