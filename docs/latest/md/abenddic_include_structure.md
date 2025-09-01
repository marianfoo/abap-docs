---
title: "DDIC - Include Structures"
description: |
  Components of a structure can be defined by including the components of other DDIC structures, including DDIC database tables or DDIC views. These included structures are referred to as include structures or includes for short. From a technical perspective, the structure in which an include structur
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_include_structure.htm"
abapFile: "abenddic_include_structure.htm"
keywords: ["select", "insert", "do", "if", "case", "try", "class", "data", "types", "abenddic", "include", "structure"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) →  [DDIC - Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Include%20Structures%2C%20ABENDDIC_INCLUDE_STRUCTURE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Include Structures

Components of a structure can be defined by including the components of other DDIC structures, including DDIC database tables or DDIC views. These included structures are referred to as include structures or includes for short. From a technical perspective, the structure in which an include structure is included refers to the included structure and is modified accordingly whenever changes are made to the included structure. An include structure can itself contain include structures, with the maximum nesting depth being nine includes.

When an include structure is included, all of its components are added to the encompassing structure. No substructure is created, which means that the components are inserted as if they were specified individually at this position and they are handled like directly defined components. Regular components and include structures can be combined as required.

When a structure is included as an include structure, it can be assigned a group name and a three-character suffix.

-   In ABAP programs, the group name is an additional addressing option for data objects declared with reference to the structure. All components of the included structure form a [component group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomponent_group_glosry.htm "Glossary Entry") and can be addressed together using this name or individual components can be addressed using the structure component selector (\-) after the name.
-   A suffix is added to each individual component's name to avoid naming conflicts. The original name of an include structure that is included in an encompassing structure must not exceed 27 characters.

Group names and suffixes are assigned in the same way as with the additions AS name *\[*RENAMING WITH SUFFIX suffix*\]* of the statement [INCLUDE TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinclude_type.htm) in ABAP programs. Unlike in the statement INCLUDE TYPE, an include structure in the ABAP Dictionary can have a suffix without a specified name.

The fields of an include structure still belong to the include structure. They can only be edited by modifying the included structure and any changes made to the included structure affect all including structures. The fields of an included structure can, however, also be transformed to direct fields of the including structure. These fields are then no longer linked with the originally included structure.

The components of an include structure can be assigned [check tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_sema.htm) and [search helps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_sema.htm) in the context of the including structure. These assignments extend the components of the included structure or replace existing assignments.

Hints

-   Including structures is highly error-prone due to possible naming conflicts between components, particularly in the case of subsequent extensions to the included structure. If possible, substructures should be used instead. If this is not possible, for example, in [DDIC database tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm), suffixes should be used to avoid naming conflicts.
-   Including structures should not be confused with the inheritance of components as provided by the ABAP Dictionary tool. Inheritance means that the definition of a component is simply copied to a different structure and there is no link to the original structure. Similarly, an existing include can be resolved to individual component definitions.
-   The name of a group is just an additional addressing option and does not resolve any naming conflicts. In particular, group names in statements like [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmove-corresponding.htm) or [SELECT INTO CORRESPONDING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm) are ignored. Components renamed with a suffix, on the other hand, are renamed for real.
-   Group names must not be used in [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry") when [specifying a column](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_columns.htm).
-   A [CDS entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") (such as a [CDS view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry"), [CDS table function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_table_function_glosry.htm "Glossary Entry"), or a [CDS abstract entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry")) cannot be included as an include structure. A [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry") cannot be included either, because its usage is [obsolete](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_obsolete.htm) since ABAP release 7.56.

Example

The structure DEMO\_WEEK includes the structure DEMO\_DAY five times as an include structure with group names and suffixes. The class CL\_DEMO\_INCLUDE\_STRUCTURE shows how its components can be accessed in ABAP.