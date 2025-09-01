  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) → 

DDIC - Table Types

A [DDIC table type](javascript:call_link\('abenddic_table_type_glosry.htm'\) "Glossary Entry") defines the data type of an [internal table](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry") in ABAP. The DDIC table type defines the following in an internal table:

-   [Line type](javascript:call_link\('abenrow_type_glosry.htm'\) "Glossary Entry")

-   The [table category](javascript:call_link\('abentable_category_glosry.htm'\) "Glossary Entry")

-   The [table key](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry")

An internal program object declared with reference to a table type is an internal table of this type.

-   [Technical attributes of table types](javascript:call_link\('abenddic_table_types_tech.htm'\))

-   [Semantic attributes of table types](javascript:call_link\('abenddic_table_types_sema.htm'\))

Hints

-   Unlike in [data elements](javascript:call_link\('abenddic_data_elements.htm'\)) and [DDIC structures](javascript:call_link\('abenddic_structures.htm'\)), the DDIC table types exist only to create globally visible definitions of internal tables. DDIC table types replace the definition of internal tables in [type pools](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") and can themselves be replaced using the declaration of internal table types in global classes and interfaces (if the context where the type is required is suitable). The attributes of an internal table that can be defined in ABAP Dictionary match in full those that can be specified using the statement [TYPES ... TABLE OF](javascript:call_link\('abaptypes_itab.htm'\)) in ABAP programs. More information can be found in the in-depth documentation about [internal tables](javascript:call_link\('abenitab.htm'\)) in the ABAP programming language.

-   The name of a table type must follow the [naming rules for DDIC data types](javascript:call_link\('abenddic_types_names.htm'\)).

Example

The table type SPFLI\_KEY\_TAB describes a hashed table with the structured line type SPFLI with a unique primary key and two non-unique secondary table keys.

Continue
[DDIC - Technical Attributes of Table Types](javascript:call_link\('abenddic_table_types_tech.htm'\))
[DDIC - Semantic Attributes of Table Types](javascript:call_link\('abenddic_table_types_sema.htm'\))
[DDIC - Ranges Table Type](javascript:call_link\('abenddic_table_types_ranges.htm'\))