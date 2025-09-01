  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - Abstract Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_abstract_entities.htm) →  [CDS DDL - DEFINE ABSTRACT ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_abstract_entity.htm) →  [CDS DDL - DEFINE ABSTRACT ENTITY, element\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_absent_element_list.htm) →  [CDS DDL - DEFINE ABSTRACT ENTITY, element](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_absent_list_element.htm) → 

CDS DDL - DEFINE ABSTRACT ENTITY, to-parent association

Syntax

... ASSOCIATION TO PARENT target *\[*ON $projection.[cds\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conditional_expression_v1.htm)*\]* ...

Effect

Defines a [CDS to-parent association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abento_parent_association_glosry.htm "Glossary Entry") in the [element list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_absent_list_element.htm) of an [CDS abstract entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry").

The CDS to-parent association associates the current CDS entity, as a [association source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassociation_source_glosry.htm "Glossary Entry"), with the [association target](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassociation_target_glosry.htm "Glossary Entry") target specified in the definition of the CDS to-parent association.

CDS to-parent associations are specialized [CDS associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_glosry.htm "Glossary Entry") and the same rules apply as described in topic [CDS DDL - CDS View Entity, ASSOCIATION TO PARENT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_to_parent_assoc_v2.htm). There's only one exception to the rules described in topic [CDS DDL - CDS View Entity, ASSOCIATION TO PARENT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_to_parent_assoc_v2.htm): If the association target of a to-parent association is another CDS abstract entity, then the ON condition is not mandatory and can be left out.

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