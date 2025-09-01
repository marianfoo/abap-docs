  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Abstract Entities](javascript:call_link\('abencds_abstract_entities.htm'\)) →  [CDS DDL - DEFINE ABSTRACT ENTITY](javascript:call_link\('abencds_f1_define_abstract_entity.htm'\)) →  [CDS DDL - DEFINE ABSTRACT ENTITY, element\_list](javascript:call_link\('abencds_f1_absent_element_list.htm'\)) →  [CDS DDL - DEFINE ABSTRACT ENTITY, element](javascript:call_link\('abencds_f1_absent_list_element.htm'\)) → 

CDS DDL - DEFINE ABSTRACT ENTITY, to-parent association

Syntax

... ASSOCIATION TO PARENT target *\[*ON $projection.[cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\))*\]* ...

Effect

Defines a [CDS to-parent association](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry") in the [element list](javascript:call_link\('abencds_f1_absent_list_element.htm'\)) of an [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry").

The CDS to-parent association associates the current CDS entity, as a [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry"), with the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") target specified in the definition of the CDS to-parent association.

CDS to-parent associations are specialized [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") and the same rules apply as described in topic [CDS DDL - CDS View Entity, ASSOCIATION TO PARENT](javascript:call_link\('abencds_to_parent_assoc_v2.htm'\)). There's only one exception to the rules described in topic [CDS DDL - CDS View Entity, ASSOCIATION TO PARENT](javascript:call_link\('abencds_to_parent_assoc_v2.htm'\)): If the association target of a to-parent association is another CDS abstract entity, then the ON condition is not mandatory and can be left out.

Example

The following DDL source code shows a CDS abstract entity that defines a CDS to-parent association to another CDS abstract entity:

@EndUserText.label: 'CDS abstract entity, to-parent assoc'
define abstract entity DEMO\_CDS\_ABSTRACT\_CHILD
{
  key key\_field  : abap.char(1);
      data\_field : abap.int4;
      \_to\_parent : association to parent DEMO\_CDS\_ABSTRACT\_COMPOSITION  
                     on \_to\_parent.key\_field = $projection.key\_field;
}