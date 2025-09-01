---
title: "Syntax"
description: |
  ...  element1(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_hiera_element.htm), element2(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_hiera_element.htm), ...,  ... Effect Defines the elements of a CDS hierarchy(https://help.sap.com/d
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_hiera_element_list.htm"
abapFile: "abencds_f1_hiera_element_list.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abencds", "hiera", "element", "list"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) →  [ABAP CDS - Hierarchies](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchies.htm) →  [CDS DDL - DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_hierarchy.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DEFINE%20HIERARCHY%2C%20element_list%2C%20ABENCDS_F1_HIERA_ELEMENT_LIST%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

CDS DDL - DEFINE HIERARCHY, element\_list

Syntax

... { [element1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_hiera_element.htm), [element2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_hiera_element.htm), ..., } ...

Effect

Defines the elements of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchy_glosry.htm "Glossary Entry"). The elements are specified in a comma-separated list enclosed in curly brackets { }.

The elements determine either the components of the result set of the CDS hierarchy and of the structured data type represented by the CDS hierarchy with respect to ABAP or they expose a CDS association.

The ABAP data types of the components of the structured data type are derived from the dictionary types of the elements in accordance with the associated [mapping rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm).

Example

Element list of a CDS hierarchy in which all possible [hierarchy attributes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchy_attributes.htm) are listed after the prefix [$node.](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_hiera_element.htm). The class CL\_DEMO\_HRRCHY\_TREE\_HIER\_ATTR accesses the CDS hierarchy and uses ABAP SQL to read all elements of the element list plus the additional [hierarchy columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhierarchy_column_glosry.htm "Glossary Entry"). When executed, CL\_DEMO\_HRRCHY\_TREE\_HIER\_ATTR demonstrates that the values of the hierarchy attributes and of the associated hierarchy columns are the same.

define hierarchy DEMO\_CDS\_SIMPLE\_TREE\_HIER\_ATTR
  as parent child hierarchy(
    source
      DEMO\_CDS\_SIMPLE\_TREE\_SOURCE
      child to parent association \_tree
      start where
        id = 1
      siblings order by
        id ascending
    )
    {
      id,
      parent,
      $node.hierarchy\_rank        as h\_rank,
      $node.hierarchy\_tree\_size   as h\_tree\_size,
      $node.hierarchy\_parent\_rank as h\_parent\_rank,
      $node.hierarchy\_level       as h\_level,
      $node.hierarchy\_is\_cycle    as h\_is\_cycle,
      $node.hierarchy\_is\_orphan   as h\_is\_orphan,
      $node.node\_id               as h\_node\_id,
      $node.parent\_id             as h\_parent\_id
    }

Continue
[CDS DDL - DEFINE HIERARCHY, element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_hiera_element.htm)