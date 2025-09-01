---
title: "DDIC - Technical Attributes of Table Types"
description: |
  A table type describes an internal table(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_table_glosry.htm 'Glossary Entry') with the following technical attributes: -   Line type The line type can be defined as follows: -   Any line type can be defined by referencing any d
version: "7.56"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_table_types_tech.htm"
abapFile: "abenddic_table_types_tech.htm"
keywords: ["loop", "do", "if", "try", "method", "data", "types", "internal-table", "field-symbol", "abenddic", "table", "tech"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_data_types.htm) →  [DDIC - Table Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_table_types.htm) → 

DDIC - Technical Attributes of Table Types

A table type describes an [internal table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_table_glosry.htm "Glossary Entry") with the following technical attributes:

-   Line type
    
    The line type can be defined as follows:
    
    -   Any line type can be defined by referencing any [data type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_data_types.htm), including [DDIC database tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables.htm) and [DDIC views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_views.htm) in the ABAP Dictionary.
    -   Elementary or reference-like line types can also be specified by using their technical attributes directly. This is done in the same way as with [data elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_data_elements.htm) or [structure components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_structures_tech.htm).
-   Table category
    
    The table category can be specified as follows:
    
    -   [Standard table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_table_glosry.htm "Glossary Entry")
    -   [Sorted table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensorted_table_glosry.htm "Glossary Entry")
    -   [Hashed table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhashed_table_glosry.htm "Glossary Entry")
    -   [Index table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenindex_table_glosry.htm "Glossary Entry") as a generic table category for standard tables and sorted tables
    -   Any table as a generic table category for all table categories
    
    These methods are the same as defining the table category using the statement [TYPES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_tabcat.htm).
    
-   Table key
    
    The following can be defined as table keys:
    
    -   A primary key as a [primary table key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprimary_table_key_glosry.htm "Glossary Entry"). The primary key is either the [standard key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_key_glosry.htm "Glossary Entry"), the entire table line if it is not a table type, or does not contain a table type as a component, or is determined using individual components of a structured line type in the relevant order. A primary key of sorted tables and hashed tables can be given a unique [alias name](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenalias_glosry.htm "Glossary Entry") from the namespace of the secondary keys. It is currently not possible to specify an [empty primary table key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_empty_key.htm) explicitly in the ABAP Dictionary. The uniqueness of the primary key is unique or non-unique, depending on the table category, and cannot be specified for generic tables. If no primary key is specified or its uniqueness is not defined, the table type is generic for this property.
    -   Up to 15 secondary keys as [secondary table keys](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"). Each secondary key has a unique name, which cannot be PRIMARY\_KEY or LOOP\_KEY, and is either a sorted key or a hash key. Sorted keys can be either unique or non-unique and a hash key is always unique. A secondary key is defined either by the entire table line, if it is not a table type or does not contain a table type as component, or by using individual components of a structured line type in the relevant order. Using the additions [WITH](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_keydef.htm) or [WITHOUT FURTHER SECONDARY KEYS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_keydef.htm) of the statement TYPES, it is possible to define explicitly whether the table type is generic with respect to the secondary keys. It is currently not possible to specify an [alias name](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenalias_glosry.htm "Glossary Entry") for a secondary key in the ABAP Dictionary.
-   Initial row count
    
    This specification is a hint for the internal memory management of internal tables and corresponds to the addition [INITIAL SIZE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_itab.htm) in the declaration of an internal table in an ABAP program.
    

Hints

-   Generic table types, that is, table types for which one or more attributes are generic) can only be used in ABAP for [generic typings](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengeneric_typing_glosry.htm "Glossary Entry") of formal parameters or field symbols.
-   A line type cannot be defined using a reference to a [CDS entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry"), but it can be defined using a reference to a [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of a corresponding [CDS DDIC-based views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry").