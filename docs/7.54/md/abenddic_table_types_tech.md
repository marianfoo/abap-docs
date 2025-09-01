  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Table Types](javascript:call_link\('abenddic_table_types.htm'\)) → 

Technical Attributes of Table Types

A table type describes an [internal table](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry") with the following technical attributes:

-   Row type

The row type can be defined as follows:

-   Any row type can be defined by referencing any [data type](javascript:call_link\('abenddic_data_types.htm'\)), including [database tables](javascript:call_link\('abenddic_database_tables.htm'\)) and [classic views](javascript:call_link\('abenddic_classical_views.htm'\)) in ABAP Dictionary.

-   Elementary or reference-like row types can also be specified by using their technical attributes directly. This is done in the same way as with [data elements](javascript:call_link\('abenddic_data_elements.htm'\)) or [structure components](javascript:call_link\('abenddic_structures_tech.htm'\)).

-   Table category

The table category can be specified as follows:

-   [Standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry")

-   [Sorted table](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry")

-   [Hashed table](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry")

-   [Index table](javascript:call_link\('abenindex_table_glosry.htm'\) "Glossary Entry") as a generic table category for standard tables and sorted tables

-   Any table as a generic table category for all table categories

These methods are the same as defining the table category using the statement [TYPES](javascript:call_link\('abaptypes_tabkind.htm'\)).

-   Table key

The following can be defined as table keys:

-   A primary key as a [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry"). The primary key is either the [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry"), the entire table row (if this is not a table type or does not contain a table type as component), or is defined using individual components of a structured row type in the relevant order. A primary key of sorted tables and hashed tables can be given a unique [alias name](javascript:call_link\('abenalias_glosry.htm'\) "Glossary Entry") from the namespace of the secondary keys. It is not currently possible to specify an [empty primary table key](javascript:call_link\('abenitab_empty_key.htm'\)) explicitly in ABAP Dictionary. Depending on the table category, the primary key is either unique or non-unique (and cannot be specified at all in the case of generic table categories). If no primary key is specified or its uniqueness is not defined, the table type is generic with respect to this attribute.

-   Up to 15 secondary keys as [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"). Each secondary key has a unique name, which cannot be PRIMARY\_KEY or LOOP\_KEY, and is either a sorted key or a hash key. Sorted keys can be either unique or non-unique and a hash key is always unique. A secondary key is defined either by the entire table row (if this is not a table type or does not contain a table type as component), or is defined using individual components of a structured row type in the relevant order. Using the additions [WITH](javascript:call_link\('abaptypes_keydef.htm'\)) or [WITHOUT FURTHER SECONDARY KEYS](javascript:call_link\('abaptypes_keydef.htm'\)) of the statement TYPES, it is possible to define explicitly whether the table type is generic with respect to the secondary keys.

-   Initial row count

This is information for internal memory management of internal tables and corresponds to the addition [INITIAL SIZE](javascript:call_link\('abaptypes_itab.htm'\)) in the declaration of an internal table in an ABAP program.

Notes

-   Generic table types (namely table types for which one or more attributes are generic) can only be used in ABAP for [generic typings](javascript:call_link\('abengeneric_typing_glosry.htm'\) "Glossary Entry") of formal parameters or field symbols.

-   A row type cannot be defined using a reference to a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"), but it can be defined using a reference to a [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") of a [CDS view](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").