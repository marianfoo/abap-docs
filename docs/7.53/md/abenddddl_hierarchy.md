---
title: "Field"
description: |
  Meaning HIERARCHY_RANK Sequential number granted by the database. HIERARCHY_TREE_SIZE Number of successor (child) nodes in the row. This values is relevant if the hierarchy is a tree-like hierarchy. HIERARCHY_PARENT_RANK 0 for rows in the root node set, else HIERARCHY_RANK of the direct predec
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddddl_hierarchy.htm"
abapFile: "abenddddl_hierarchy.htm"
keywords: ["select", "do", "if", "try", "data", "abenddddl", "hierarchy"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_clauses.htm) →  [SELECT - FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm) →  [SELECT - FROM data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) →  [SELECT - FROM table\_function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_table_function.htm) →  [SELECT - FROM hierarchy\_function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_hierarchy_functions.htm) →  [SELECT - FROM HIERARCHY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_hierarchy_definition.htm) → 

DDDDL\_HIERARCHY

The [abstract CDS entity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabstract_entity_glosry.htm "Glossary Entry") DDDDL\_HIERARCHY defines the additional components of the results set when a ABAP SQL query accesses the hierarchy function [HIERARCHY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_hierarchy_definition.htm). The following [DDL source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddl_source_code_glosry.htm "Glossary Entry") demonstrates the definition of this CDS entity.

@EndUserText.label: 'Generated fields of hierarchy func'  
@AbapCatalog.sqlName: 'HIERARCHY'
  
define abstract entity DDDDL\_HIERARCHY {
  @EndUserText.label: 'Rank'  
  hierarchy\_rank        : abap.int8;
  @EndUserText.label: 'Tree size'  
  hierarchy\_tree\_size   : abap.int8;
  @EndUserText.label: 'Parent rank'  
  hierarchy\_parent\_rank : abap.int8;
  @EndUserText.label: 'Level'  
  hierarchy\_level       : abap.int4;
  @EndUserText.label: 'Is cycle'  
  hierarchy\_is\_cycle    : abap.int1; //TINYINT
  @EndUserText.label: 'Is orphan'
  hierarchy\_is\_orphan   : abap.int1; //TINYINT  
  @EndUserText.label: 'Node id inferred from hierarchy source'
  /\*+\[inferredType\] { NODE\_ID } }\*/
  node\_id   : abap.sstr(1333);
  @EndUserText.label: 'Parent id inferred from hierarchy source'
  /\*+\[inferredType\] { PARENT\_ID } }\*/
  parent\_id : abap.sstr(1333);
}

The following table shows the meaning of each field.

Field

Meaning

HIERARCHY\_RANK

Sequential number granted by the database.

HIERARCHY\_TREE\_SIZE

Number of successor (child) nodes in the row. This values is relevant if the hierarchy is a tree-like hierarchy.

HIERARCHY\_PARENT\_RANK

0 for rows in the root node set, else HIERARCHY\_RANK of the direct predecessor.

HIERARCHY\_LEVEL

[Hierarchy level](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhierarchy_level_glosry.htm "Glossary Entry"), where the first parent level, or the rows selected by the start condition, has the value 1.

HIERARCHY\_IS\_CYCLE

Indicates whether a cycle starts (1) or does not start (0) in the current row.

HIERARCHY\_IS\_ORPHAN

Indicates whether the current row is an orphan row (1) or not (0).

NODE\_ID

Internal character-like key that chains the values of all target data source fields of the association specified in the ON conditions. If there is only one comparison in the ON condition, no chaining is required and the data type is the data type of the specified field of the target data source.

PARENT\_ID

Internal character-like key that chains the values of all source data source fields of the association specified in the ON conditions. If there is only one comparison in the ON condition, no chaining is required and the data type is the data type of the specified field of the source data source.

Example

The program DEMO\_CDS\_SIMPLE\_TREE accesses the hierarchy function [HIERARCHY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_hierarchy_definition.htm) and specifies the following CDS view as a source:

@AbapCatalog.sqlViewName: 'DEMOTREESOURCE'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view DEMO\_CDS\_SIMPLE\_TREE\_SOURCE
  as select from
    demo\_simple\_tree
    association \[1..1\] to DEMO\_CDS\_SIMPLE\_TREE\_SOURCE as \_tree on
      $projection.parent = \_tree.id
    {
      \_tree,
      id,
      parent\_id as parent,
      name
    }

The SELECT statement selects the fields of this source and all additional fields from the abstract entity DDDDL\_HIERARCHY. As a comparison, a CDS hierarchy DEMO\_CDS\_SIMPLE\_TREE, which works in the same way as the hierarchy function, is also accessed. The result of the selection is displayed when the program runs.