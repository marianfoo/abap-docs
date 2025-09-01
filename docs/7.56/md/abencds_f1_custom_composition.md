  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Custom Entities](javascript:call_link\('abencds_custom_entities.htm'\)) →  [CDS DDL - DEFINE CUSTOM ENTITY](javascript:call_link\('abencds_f1_define_custom_entity.htm'\)) →  [CDS DDL - DEFINE CUSTOM ENTITY, element\_list](javascript:call_link\('abencds_f1_custom_element_list.htm'\)) →  [CDS DDL - DEFINE CUSTOM ENTITY, element](javascript:call_link\('abencds_f1_custom_element.htm'\)) → 

CDS DDL - DEFINE CUSTOM ENTITY, composition

Syntax

... COMPOSITION *\[* \[min..max\] *\]* OF target ...

Effect

Defines a [CDS composition](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry") in the [element list](javascript:call_link\('abencds_f1_custom_element_list.htm'\)) of a [CDS custom entity](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry").

The CDS composition associates the current CDS entity, as a [composition source](javascript:call_link\('abencomposition_source_glosry.htm'\) "Glossary Entry"), with the [composition target](javascript:call_link\('abencomposition_target_glosry.htm'\) "Glossary Entry") target specified in the definition of the CDS composition.

CDS compositions are specialized [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") and they work in the same way as described in topic [CDS DDL - CDS View Entity, COMPOSITION](javascript:call_link\('abencds_composition_v2.htm'\)). The only difference is that in CDS compositions in CDS custom entities, the addition AS is not used. The name of the CDS composition is declared using the name \_compos in the element list of the CDS custom entity.

Example

The following DDL source code shows a CDS custom entity that defines a CDS composition to another CDS custom entity:

@EndUserText.label: 'SO Custom Entity with association'
define root custom entity DEMO\_SALES\_CUSTOM\_COMPOSITION
  {
    key id            : abap.char(20);
        seller\_id     : abap.char(20);
        buyer\_id      : abap.char(20);
        act\_indicator : abap.char( 1 );
        type\_code     : abap.char( 5 );
        \_items        : composition\[0..1\] of DEMO\_SALES\_CUSTOM\_CHILD;
  }