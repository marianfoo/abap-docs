---
title: "DDIC - Include Structures"
description: |
  Components of a structure can be defined by including the components of other DDIC structures, including DDIC database tables or DDIC views. These included structures are referred to as include structures or includes for short. From a technical perspective, the structure in which an include structur
version: "7.57"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_include_structure.htm"
abapFile: "abenddic_include_structure.htm"
keywords: ["select", "insert", "do", "if", "case", "try", "data", "types", "abenddic", "include", "structure"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_data_types.htm) →  [DDIC - Structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_structures.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Include Structures, ABENDDIC_INCLUDE_STRUCTURE, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Include Structures

Components of a structure can be defined by including the components of other DDIC structures, including DDIC database tables or DDIC views. These included structures are referred to as include structures or includes for short. From a technical perspective, the structure in which an include structure is included refers to the included structure and is modified accordingly whenever changes are made to this structure. An include structure can itself contain include structures, with the maximum nesting depth being nine includes.

When an include structure is included, all components of an existing structure are added to the including structure instead of a component. No substructure is created, which means that the components are inserted as if they were specified individually at this position and they are handled like directly defined components. Regular components and include structures can be combined as required.

When a structure is included as an include structure, it can be assigned a name of a group and a three-character suffix.

-   In ABAP programs, the name of a group is an additional addressing option for data objects declared with reference to the structure. All components of the included structure form a [component group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomponent_group_glosry.htm "Glossary Entry") and can be addressed together using this name or individual components can be addressed using the structure component selector (\-) after the name.
-   A suffix is appended to the component name to rename each component and avoid naming conflicts between identically named components. The original name of a component of an include structure that is included in a structure with a suffix cannot have more than 27 characters.

Group names and suffixes are assigned in the same way as with the additions AS name *\[*RENAMING WITH SUFFIX suffix*\]* of the statement [INCLUDE TYPE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinclude_type.htm) in ABAP programs. Unlike in the statement INCLUDE TYPE, an include structure in the ABAP Dictionary can have a suffix without a specified name.

The fields of an included include structure still belong to the included structure. They can only be edited by modifying the structure and any changes made to the structure affect all including structures. The fields of an included include structure can, however, also be transformed to direct fields of the including structure. These fields are then no longer linked with the originally included structure.

The components of an include structure can be assigned [check tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_structures_sema.htm) and [search helps](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_structures_sema.htm) in the context of the including structure. These assignments enhance the components of the included structure or replace existing assignments.

Hints

-   Including structures is highly error-prone due to possible naming conflicts between components, particularly in the case of subsequent enhancements to the included structure. If possible, substructures should be used instead. If this is not possible, for example, in [DDIC database tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm), suffixes should be used to avoid naming conflicts.
-   Including structures should not be confused with the inheritance of components as provided by the ABAP Dictionary tool. Here, the definition of the components is simply copied to a different structure and no binding is persisted. Similarly, an existing include can be resolved to individual component definitions.
-   The name of a group is just an additional addressing option and does not resolve any naming conflicts. In particular, group names in statements like [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove-corresponding.htm) or [SELECT INTO CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm) are ignored. Components renamed with a suffix, on the other hand, really do have this name and are respected accordingly.
-   Group names cannot be used in the [specified columns](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_columns.htm) of [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry").
-   A [CDS entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry") (such as a [CDS view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry"), [CDS table function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_table_function_glosry.htm "Glossary Entry"), or [CDS abstract entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry")) cannot be included as an include structure. A [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm "Glossary Entry") cannot be included either, because its usage is [obsolete](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_obsolete.htm).

Example

The structure DEMO\_WEEK includes the structure DEMO\_DAY five times as an include structure with group names and suffixes. The program DEMO\_INCLUDE\_STRUCTURE shows how its components can be accessed in ABAP.