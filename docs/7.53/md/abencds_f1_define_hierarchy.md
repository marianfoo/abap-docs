---
title: "ABAP CDS - DEFINE HIERARCHY"
description: |
  Syntax @entity_annot1(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_entity_annotations.htm) @entity_annot2(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_entity_annotations.htm) ... ... DEFINE HIERARCHY ... Effect Defines a
version: "7.53"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_hierarchy.htm"
abapFile: "abencds_f1_define_hierarchy.htm"
keywords: ["select", "do", "try", "data", "abencds", "define", "hierarchy"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - DEFINE HIERARCHY

Syntax

*\[*[@entity\_annot1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_entity_annotations.htm)*\]*
*\[*[@entity\_annot2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_entity_annotations.htm)*\]*
...
...
*\[*DEFINE*\]* HIERARCHY ...

Effect

Defines a [CDS entity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry") cds\_entity as a [CDS hierarchy](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") in the [CDS DDL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_ddl_glosry.htm "Glossary Entry"). Internally, a CDS hierarchy accesses a hierarchy function on the database. Its definition and function is largely the same a the [hierarchy functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_hierarchy_functions.htm) in ABAP SQL.

Example

define hierarchy DEMO\_CDS\_PARENT\_CHILD
  with parameters
    p\_id : abap.char(2)
  as parent child hierarchy(
    source
      DEMO\_CDS\_PARENT\_CHILD\_SOURCE
      child to parent association \_relat
      start where
        id = :p\_id
      siblings order by
        parent
      multiple parents allowed
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
[ABAP CDS - DEFINE HIERARCHY, hierarchy\_annot](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_hierarchy_annotations.htm)