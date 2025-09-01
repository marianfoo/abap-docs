# ABAP Keyword Documentation / ABAP - Dictionary / Classic Objects in ABAP Dictionary / Data Types / Table Types

Included pages: 4


### abenddic_table_types.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_types.htm) → 

Table Types

A table type in ABAP Dictionary defines the data type of an [internal table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_table_glosry.htm "Glossary Entry") in ABAP. The table type defines the following in an internal table:

-   [Row type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrow_type_glosry.htm "Glossary Entry")

-   The [table category](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_category_glosry.htm "Glossary Entry")

-   The [table key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_key_glosry.htm "Glossary Entry")

An internal program object declared with reference to a table type is an internal table of this type.

-   [Technical attributes of table types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_table_types_tech.htm)

-   [Semantic attributes of table types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_table_types_sema.htm)

Note

Unlike in [data elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_elements.htm) and [structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_structures.htm), the table types in ABAP Dictionary exist only to create globally visible definitions of internal tables. Table types replace the definition of internal tables in [type groups](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_group_1_glosry.htm "Glossary Entry") and can themselves be replaced using the declaration of internal table types in global classes and interfaces (if the context where the type is required is suitable). The attributes of an internal table that can be defined in ABAP Dictionary match in full those that can be specified using the statement [TYPES ... TABLE OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_itab.htm) in ABAP programs. More information can be found in the in-depth documentation about internal tables in [ABAP - Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm).

Example

The table type SPFLI\_KEY\_TAB describes a hashed table with the structured row type SPFLI with a unique primary key and two non-unique secondary table keys.

Continue
[Technical Attributes of Table Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_table_types_tech.htm)
[Semantic Attributes of Table Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_table_types_sema.htm)
[Ranges Table Type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_table_types_ranges.htm)


### abenddic_table_types_tech.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_types.htm) →  [Table Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_table_types.htm) → 

Technical Attributes of Table Types

A table type describes an [internal table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_table_glosry.htm "Glossary Entry") with the following technical attributes:

-   Row type

The row type can be defined as follows:

-   Any row type can be defined by referencing any [data type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_types.htm), including [database tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables.htm) and [classic views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_views.htm) in ABAP Dictionary.

-   Elementary or reference-like row types can also be specified by using their technical attributes directly. This is done in the same way as with [data elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_elements.htm) or [structure components](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_structures_tech.htm).

-   Table category

The table category can be specified as follows:

-   [Standard table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_table_glosry.htm "Glossary Entry")

-   [Sorted table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensorted_table_glosry.htm "Glossary Entry")

-   [Hashed table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhashed_table_glosry.htm "Glossary Entry")

-   [Index table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenindex_table_glosry.htm "Glossary Entry") as a generic table category for standard tables and sorted tables

-   Any table as a generic table category for all table categories

These methods are the same as defining the table category using the statement [TYPES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_tabkind.htm).

-   Table key

The following can be defined as table keys:

-   A primary key as a [primary table key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprimary_table_key_glosry.htm "Glossary Entry"). The primary key is either the [standard key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_key_glosry.htm "Glossary Entry"), the entire table row (if this is not a table type or does not contain a table type as component), or is defined using individual components of a structured row type in the relevant order. A primary key of sorted tables and hashed tables can be given a unique [alias name](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenalias_glosry.htm "Glossary Entry") from the namespace of the secondary keys. It is not currently possible to specify an [empty primary table key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_empty_key.htm) explicitly in ABAP Dictionary. Depending on the table category, the primary key is either unique or non-unique (and cannot be specified at all in the case of generic table categories). If no primary key is specified or its uniqueness is not defined, the table type is generic with respect to this attribute.

-   Up to 15 secondary keys as [secondary table keys](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"). Each secondary key has a unique name, which cannot be PRIMARY\_KEY or LOOP\_KEY, and is either a sorted key or a hash key. Sorted keys can be either unique or non-unique and a hash key is always unique. A secondary key is defined either by the entire table row (if this is not a table type or does not contain a table type as component), or is defined using individual components of a structured row type in the relevant order. Using the additions [WITH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_keydef.htm) or [WITHOUT FURTHER SECONDARY KEYS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_keydef.htm) of the statement TYPES, it is possible to define explicitly whether the table type is generic with respect to the secondary keys.

-   Initial row count

This is information for internal memory management of internal tables and corresponds to the addition [INITIAL SIZE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_itab.htm) in the declaration of an internal table in an ABAP program.

Notes

-   Generic table types (namely table types for which one or more attributes are generic) can only be used in ABAP for [generic typings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengeneric_typing_glosry.htm "Glossary Entry") of formal parameters or field symbols.

-   A row type cannot be defined using a reference to a [CDS entity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry"), but it can be defined using a reference to a [CDS database view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_database_view_glosry.htm "Glossary Entry") of a [CDS view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry").


### abenddic_table_types_sema.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_types.htm) →  [Table Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_table_types.htm) → 

Semantic Attributes of Table Types

Table types in ABAP Dictionary can be given the following semantic attributes:

-   Short text of the table type

Each table type has a short description specified when it is created.

-   Documentation

A table type can be given (optional) documentation.

-   Short description of a secondary key

Each secondary key has a short description specified when it is created.


### abenddic_table_types_ranges.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_types.htm) →  [Table Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_table_types.htm) → 

Ranges Table Type

A ranges table type is a table type for a [ranges table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenranges_table_glosry.htm "Glossary Entry"). A ranges table is a standard table with a standard key and a specially structured row type and can be used in general logical expressions with the relational expression [IN seltab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_select_option.htm) or used after WHERE in ABAP SQL with the relational expression [IN seltab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_seltab.htm). In ABAP Dictionary, ranges table types are created using the statement [TYPES ... RANGE OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_ranges.htm).

The data types of the components SIGN and OPTION are the data elements DDSIGN and DDOPTION. The data type for the components LOW and HIGH must be elementary and can be specified directly as a [built-in data type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) or using a [data element](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_elements.htm).

The structure of the ranges table must be a standalone structure in ABAP Dictionary. When a ranges table type is defined, it can be created from the types specified for the components LOW and HIGH.

Notes

-   In ABAP programs, ranges tables can also be defined with reference to data types other than elementary data types.

-   In ABAP programs, the structure of a ranges table does not need to be a standalone structure.
