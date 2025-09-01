  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - Abstract Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_abstract_entities.htm) →  [CDS DDL - DEFINE ABSTRACT ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_abstract_entity.htm) →  [CDS DDL - DEFINE ABSTRACT ENTITY, element\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_absent_element_list.htm) →  [CDS DDL - DEFINE ABSTRACT ENTITY, element](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_absent_list_element.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DEFINE ABSTRACT ENTITY, composition, ABENCDS_ABSENT_COMPOSITION, 757%0D%0A%
0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DEFINE ABSTRACT ENTITY, composition

Syntax

... COMPOSITION *\[* \[min..max\] *\]* OF target ...

Effect

Defines a [CDS composition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_composition_glosry.htm "Glossary Entry") in the [element list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_absent_list_element.htm) of a [CDS abstract entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry").

The CDS composition associates the current CDS abstract entity, as a [association source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_source_glosry.htm "Glossary Entry"), with the [association target](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_target_glosry.htm "Glossary Entry") target specified in the definition of the CDS composition.

CDS compositions are specialized [CDS associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_glosry.htm "Glossary Entry") and they work in the same way as described in topic [CDS DDL - CDS View Entity, COMPOSITION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_composition_v2.htm). The only difference is that in CDS compositions in CDS abstract entities, the addition AS is not used. The name of the CDS composition is declared using the name \_compos in the element list of the CDS abstract entity.

Example

The following DDL source code shows a CDS abstract entity that defines a CDS composition to another CDS abstract entity:

@EndUserText.label: 'CDS abstract entity, composition'
define root abstract entity DEMO\_CDS\_ABSTRACT\_COMPOSITION
{
  key key\_field  : abap.char(1);
      data\_field : abap.int4;
      \_compos    : composition \[0..1\] of DEMO\_CDS\_ABSTRACT\_CHILD;
}