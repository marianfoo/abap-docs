  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Table Types](javascript:call_link\('abenddic_table_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Technical Properties of Table Types, ABENDDIC_TABLE_TYPES_TECH, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Technical Properties of Table Types

A table type describes an [internal table](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry") with the following technical properties:

-   Line type
    
    The line type can be defined as follows:
    
    -   Any line type can be defined by referencing any [data type](javascript:call_link\('abenddic_data_types.htm'\)), including [DDIC database tables](javascript:call_link\('abenddic_database_tables.htm'\)) and [DDIC views](javascript:call_link\('abenddic_views.htm'\)) in the ABAP Dictionary.
    -   Elementary or reference-like line types can also be specified by using their technical properties directly. This is done in the same way as with [data elements](javascript:call_link\('abenddic_data_elements.htm'\)) or [structure components](javascript:call_link\('abenddic_structures_tech.htm'\)).
-   Table category
    
    The table category can be specified as follows:
    
    -   [Standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry")
    -   [Sorted table](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry")
    -   [Hashed table](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry")
    -   [Index table](javascript:call_link\('abenindex_table_glosry.htm'\) "Glossary Entry") as a generic table category for standard tables and sorted tables
    -   Any table as a generic table category for all table categories
    
    These methods are the same as defining the table category using the statement [TYPES](javascript:call_link\('abaptypes_tabcat.htm'\)).
    
-   Table key
    
    The following can be defined as table keys:
    
    -   A primary key as a [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry"). The primary key is either the [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry"), the entire table line if it is not a table type, or does not contain a table type as a component, or is determined using individual components of a structured line type in the relevant order. A primary key of sorted tables and hashed tables can be given a unique [alias name](javascript:call_link\('abenalias_glosry.htm'\) "Glossary Entry") from the namespace of the secondary keys. It is currently not possible to specify an [empty primary table key](javascript:call_link\('abenitab_empty_key.htm'\)) explicitly in the ABAP Dictionary. The uniqueness of the primary key is unique or non-unique, depending on the table category, and cannot be specified for generic tables. If no primary key is specified or its uniqueness is not defined, the table type is generic for this property.
    -   Up to 15 secondary keys as [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"). Each secondary key has a unique name, which cannot be PRIMARY\_KEY or LOOP\_KEY, and is either a sorted key or a hash key. Sorted keys can be either unique or non-unique and a hash key is always unique. A secondary key is defined either by the entire table line, if it is not a table type or does not contain a table type as component, or by using individual components of a structured line type in the relevant order. Using the additions [WITH](javascript:call_link\('abaptypes_keydef.htm'\)) or [WITHOUT FURTHER SECONDARY KEYS](javascript:call_link\('abaptypes_keydef.htm'\)) of the statement TYPES, it is possible to define explicitly whether the table type is generic with respect to the secondary keys. It is currently not possible to specify an [alias name](javascript:call_link\('abenalias_glosry.htm'\) "Glossary Entry") for a secondary key in the ABAP Dictionary.
-   Initial row count
    
    This specification is a hint for the internal memory management of internal tables and corresponds to the addition [INITIAL SIZE](javascript:call_link\('abaptypes_itab.htm'\)) in the declaration of an internal table in an ABAP program.
    

Hints

-   Generic table types, that is, table types for which one or more properties are generic can only be used in ABAP for [generic typings](javascript:call_link\('abengeneric_typing_glosry.htm'\) "Glossary Entry") of formal parameters or field symbols.
-   A line type cannot be defined using a reference to a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"), nor using a reference to a [CDS-managed DDIC view (obsolete)](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") of a corresponding [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). The reason is that CDS-managed DDIC views (obsolete) are [obsolete](javascript:call_link\('abencds_access_obsolete.htm'\)).