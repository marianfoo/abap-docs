  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Abstract Entities](javascript:call_link\('abencds_abstract_entities.htm'\)) →  [CDS DDL - DEFINE ABSTRACT ENTITY](javascript:call_link\('abencds_f1_define_abstract_entity.htm'\)) →  [CDS DDL - DEFINE ABSTRACT ENTITY, element\_list](javascript:call_link\('abencds_f1_absent_element_list.htm'\)) →  [CDS DDL - DEFINE ABSTRACT ENTITY, element](javascript:call_link\('abencds_f1_absent_list_element.htm'\)) → 

CDS DDL - DEFINE ABSTRACT ENTITY, composition

Syntax

... COMPOSITION *\[* \[min..max\] *\]* OF target ...

Effect

Defines a [CDS composition](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry") in the [element list](javascript:call_link\('abencds_f1_absent_list_element.htm'\)) of a [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry").

The CDS composition associates the current CDS abstract entity, as a [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry"), with the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") target specified in the definition of the CDS composition.

CDS compositions are specialized [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") and they work in the same way as described in topic [CDS DDL - CDS View Entity, COMPOSITION](javascript:call_link\('abencds_composition_v2.htm'\)). The only difference is that in CDS compositions in CDS abstract entities, the addition AS is not used. The name of the CDS composition is declared using the name \_compos in the element list of the CDS abstract entity.

Example

The following DDL source code shows a CDS abstract entity that defines a CDS composition to another CDS abstract entity:

@EndUserText.label: 'CDS abstract entity, composition'
define root abstract entity DEMO\_CDS\_ABSTRACT\_COMPOSITION
{
  key key\_field  : abap.char(1);
      data\_field : abap.int4;
      \_compos    : composition \[0..1\] of DEMO\_CDS\_ABSTRACT\_CHILD;
}