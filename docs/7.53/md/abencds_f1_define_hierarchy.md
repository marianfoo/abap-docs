  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) → 

ABAP CDS - DEFINE HIERARCHY

Syntax

*\[*[@entity\_annot1](javascript:call_link\('abencds_f1_entity_annotations.htm'\))*\]*
*\[*[@entity\_annot2](javascript:call_link\('abencds_f1_entity_annotations.htm'\))*\]*
...
...
*\[*DEFINE*\]* HIERARCHY ...

Effect

Defines a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") cds\_entity as a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"). Internally, a CDS hierarchy accesses a hierarchy function on the database. Its definition and function is largely the same a the [hierarchy functions](javascript:call_link\('abenselect_hierarchy_functions.htm'\)) in ABAP SQL.

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
[ABAP CDS - DEFINE HIERARCHY, hierarchy\_annot](javascript:call_link\('abencds_f1_hierarchy_annotations.htm'\))