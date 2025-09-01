# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Data Types / DDIC - Table Types

Included pages: 4


### abenddic_table_types.htm

---
title: "DDIC - Table Types"
description: |
  A DDIC table type(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_type_glosry.htm 'Glossary Entry') defines the data type of an internal table(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_table_glosry.htm 'Glossary Entry') in ABAP. T
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_types.htm"
abapFile: "abenddic_table_types.htm"
keywords: ["do", "if", "try", "class", "data", "types", "internal-table", "abenddic", "table"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Table%20Types%2C%20ABENDDIC_TABLE_TYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Table Types

A [DDIC table type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_type_glosry.htm "Glossary Entry") defines the data type of an [internal table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_table_glosry.htm "Glossary Entry") in ABAP. The DDIC table type defines the following in an internal table:

-   [Line type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrow_type_glosry.htm "Glossary Entry")
-   The [table category](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_category_glosry.htm "Glossary Entry")
-   The [table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_key_glosry.htm "Glossary Entry")

A program-internal object declared with reference to a table type is an internal table of this type.

-   [Technical properties of table types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_types_tech.htm)
-   [Semantic properties of table types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_types_sema.htm)

Hints

-   Unlike [data elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements.htm) and [DDIC structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm), the sole purpose of DDIC table types is to create globally visible definitions of internal tables. DDIC table types replace the definition of internal tables in [type pools](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentype_pool_glosry.htm "Glossary Entry"). DDIC table types can themselves be replaced by the declaration of internal table types in global classes and interfaces, if the context is suitable. The properties of an internal table that can be defined in the ABAP Dictionary completely match those that can be specified using the statement [TYPES ... TABLE OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_itab.htm) in ABAP programs. For more information, see the in-depth documentation about [internal tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) in the ABAP programming language.
-   The name of a table type must follow the [naming rules for DDIC data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_types_names.htm).

Example

The table type SPFLI\_KEY\_TAB describes a hashed table with the structured line type SPFLI with a unique primary key and two non-unique secondary table keys.

Continue
[DDIC - Technical Properties of Table Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_types_tech.htm)
[DDIC - Semantic Properties of Table Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_types_sema.htm)
[DDIC - Ranges Table Type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_types_ranges.htm)


### abenddic_table_types_tech.htm

---
title: "DDIC - Technical Properties of Table Types"
description: |
  A table type describes an internal table(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_table_glosry.htm 'Glossary Entry') with the following technical properties: -   Line type The line type can be defined as follows: -   The line type can be defined by referencing a
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_types_tech.htm"
abapFile: "abenddic_table_types_tech.htm"
keywords: ["loop", "do", "if", "try", "method", "data", "types", "internal-table", "field-symbol", "abenddic", "table", "tech"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) →  [DDIC - Table Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_types.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Technical%20Properties%20of%20Table%20Types%2C%20ABENDDIC_TABLE_TYPES_TECH%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

DDIC - Technical Properties of Table Types

A table type describes an [internal table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_table_glosry.htm "Glossary Entry") with the following technical properties:

-   Line type
    
    The line type can be defined as follows:
    
    -   The line type can be defined by referencing any [data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm), including [DDIC database tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) and [DDIC views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_views.htm).
    -   Elementary or reference-like line types can also be specified by using their technical properties directly. This is done in the same way as with [data elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements.htm) or [structure components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_tech.htm).
-   Table category
    
    The table category can be specified as follows:
    
    -   [Standard table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_table_glosry.htm "Glossary Entry")
    -   [Sorted table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_table_glosry.htm "Glossary Entry")
    -   [Hashed table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhashed_table_glosry.htm "Glossary Entry")
    -   [Index table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenindex_table_glosry.htm "Glossary Entry") as a generic table category for standard tables and sorted tables
    -   Any table as a generic table category for all table categories
    
    These methods are the same as defining the table category using the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_tabcat.htm).
    
-   Table key
    
    The following can be defined as a table key:
    
    -   A primary key as a [primary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_key_glosry.htm "Glossary Entry"). The primary key is either
        
        \- the [standard key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_key_glosry.htm "Glossary Entry"), or
        
        \- the entire table line, given it is not a table type and does not contain a table type as a component, or
        
        \- is determined using individual components of a structured line type in the relevant order.
        
        A primary key of sorted tables and hashed tables can be given a unique [alias name](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenalias_glosry.htm "Glossary Entry") from the namespace of the secondary keys. It is currently not possible to specify an [empty primary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_empty_key.htm) explicitly in the ABAP Dictionary. The uniqueness of the primary key is unique or non-unique, depending on the table category, and cannot be specified at all for generic tables. If no primary key is specified or its uniqueness is not defined, the table type is generic for this property.
        
    -   Up to 15 secondary keys as [secondary table keys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"). Each secondary key has a unique name, which cannot be PRIMARY\_KEY or LOOP\_KEY, and is either a sorted key or a hash key. Sorted keys can be either unique or non-unique and a hash key is always unique. A secondary key is defined either by the entire table line, if it is not a table type or does not contain a table type as component, or by using individual components of a structured line type in the relevant order. Using the additions [WITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_keydef.htm) or [WITHOUT FURTHER SECONDARY KEYS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_keydef.htm) of the statement TYPES, it is possible to define explicitly whether the table type is generic with respect to the secondary keys. It is currently not possible to specify an [alias name](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenalias_glosry.htm "Glossary Entry") for a secondary key in the ABAP Dictionary.
-   Initial row count
    
    This specification is a hint for the internal memory management of internal tables and corresponds to the addition [INITIAL SIZE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_itab.htm) in the declaration of an internal table in an ABAP program.
    

Hints

-   Generic table types, that is, table types for which one or more properties are generic, can only be used in ABAP for [generic typings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneric_typing_glosry.htm "Glossary Entry") of formal parameters or field symbols.
-   A line type cannot be defined using a reference to a [CDS entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry"), nor using a reference to a [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of a corresponding [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). The latter has been possible before, but since ABAP release 7.56, access to CDS-managed DDIC views (obsolete) is [obsolete](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_obsolete.htm).


### abenddic_table_types_sema.htm

---
title: "DDIC - Semantic Properties of Table Types"
description: |
  Table types in the ABAP Dictionary can be given the following semantic properties: -   Short text of the table type Each table type is assigned a short descriptive text that must be specified when it is created. -   Documentation A table type can be assigned documentation that can be read as require
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_types_sema.htm"
abapFile: "abenddic_table_types_sema.htm"
keywords: ["do", "if", "data", "types", "abenddic", "table", "sema"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) →  [DDIC - Table Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_types.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Semantic%20Properties%20of%20Table%20Types%2C%20ABENDDIC_TABLE_TYPES_SEMA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

DDIC - Semantic Properties of Table Types

Table types in the ABAP Dictionary can be given the following semantic properties:

-   Short text of the table type
    
    Each table type is assigned a short descriptive text that must be specified when it is created.
    
-   Documentation
    
    A table type can be assigned documentation that can be read as required.
    
-   Short description of a secondary key
    
    Each secondary key is assigned a short descriptive text that must be specified when the secondary key is created.


### abenddic_table_types_ranges.htm

---
title: "DDIC - Ranges Table Type"
description: |
  A ranges table type is a table type for a ranges table(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenranges_table_glosry.htm 'Glossary Entry'). A ranges table is a standard table with a standard key. Its line type is structured specifically to be used in general logical expre
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_types_ranges.htm"
abapFile: "abenddic_table_types_ranges.htm"
keywords: ["select", "do", "if", "try", "data", "types", "abenddic", "table", "ranges"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) →  [DDIC - Table Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_types.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Ranges%20Table%20Type%2C%20ABENDDIC_TABLE_TYPES_RANGES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Ranges Table Type

A ranges table type is a table type for a [ranges table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenranges_table_glosry.htm "Glossary Entry"). A ranges table is a standard table with a standard key. Its line type is structured specifically to be used in general logical expressions with the relational expression [IN range tab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_select_option.htm) or used after WHERE in ABAP SQL with the relational expression [IN range tab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_seltab.htm). In the ABAP Dictionary, ranges table types are created in the same way as with the statement [TYPES ... RANGE OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_ranges.htm).

The data types of the components SIGN and OPTION are the data elements DDSIGN and DDOPTION. The data type for the components LOW and HIGH must be elementary and can be specified directly as a [built-in data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) or using a [data element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements.htm).

The structure of a ranges table must be a standalone ABAP Dictionary object. It can be generated from the type specifications for the components LOW and HIGH when the ranges table type is defined.

Hints

-   In ABAP programs, ranges tables can also be defined with reference to data types other than elementary data types.
-   In ABAP programs, the structure of a ranges table does not need to be a standalone structure.
