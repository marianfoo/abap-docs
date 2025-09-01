  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - CDS View Entity, SELECT, select\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_v2.htm) →  [CDS DDL - CDS View Entity, SELECT, element](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_entry_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20SELECT%2C%20element_annot%2C%20ABENCDS_ELEMENT_ANNOTATIONS_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion%20for%20improvement:)

CDS DDL - CDS View Entity, SELECT, element\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax.htm) in the definition of an [element](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_entry_v2.htm) of a [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_v2.htm) in a [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry") as element annotation. Element annotations must be specified before the element they belong to, and the character @ must be placed in front of the name annotation of the annotation.

For CDS view entities, there are strict checks that all element annotations used must be defined as a [CDS object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_object_glosry.htm "Glossary Entry") in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"). Otherwise, a syntax error occurs.

All available element annotations are listed in topic [element\_annot](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_element_annotation.htm).

Example

In the CDS view entity DEMO\_SALES\_CDS\_ELEM\_ANNOT, a short text and a tooltip are assigned to the element given\_name.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_SALES\_CDS\_ELEM\_ANNOT
  as select from
                 demo\_sales\_bupa
      inner join demo\_sales\_order as sales\_order
        on demo\_sales\_bupa.id = sales\_order.id
    {
      key demo\_sales\_bupa.id,
          demo\_sales\_bupa.gender,
          demo\_sales\_bupa.title,
          @EndUserText.label: 'First name'
          @EndUserText.quickInfo: 'Customer''s first name'
          demo\_sales\_bupa.given\_name
    }
    where
      demo\_sales\_bupa.gender = 'f'

Example

This example demonstrates how element annotations are [passed on](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_analysis.htm) between views via [CDS associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_glosry.htm "Glossary Entry"). The following CDS view entity defines and exposes a CDS association \_some\_assoc:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_ASSOC\_ANNO2\_VE
  as select from demo\_join2
  association to many demo\_join3 as \_some\_assoc  
    on \_some\_assoc.l = demo\_join2.d
{
  key d,
      @EndUserText.label: 'Association to demo\_join3'
      \_some\_assoc
}

A further CDS view entity accesses the view and also exposes the CDS association. Here, the annotation @EndUserText.label is inherited.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_ASSOC\_ANNO1\_INH\_VE
  as select from Demo\_Cds\_Assoc\_Anno2
{
  key d,
      \_some\_assoc
}

The following CDS view entity defines and exposes its own CDS association \_some\_assoc. In this case, the CDS annotation @EndUserText.label is not inherited.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_ASSOC\_ANNO1\_LOC\_VE
  as select from Demo\_Cds\_Assoc\_Anno2
  association to many demo\_join1 as \_some\_assoc  
    on Demo\_Cds\_Assoc\_Anno2.d = \_some\_assoc.d
{
  key d,
      \_some\_assoc
}

If the CDS association \_some\_assoc was exposed from DEMO\_CDS\_ASSOC\_ANNO2\_VE instead of or in addition to \_some\_assoc by specifying the name Demo\_Cds\_Assoc\_Anno2\_ve.\_some\_assoc explicitly, the annotation would be inherited again. The class CL\_DEMO\_CDS\_ASSOC\_ANNO\_VE evaluates the annotations of both views. No local element annotations are defined for the locally defined association \_some\_assoc of the view DEMO\_CDS\_ASSOC\_ANNO1\_LOC\_VE, which means that the result for this CDS association is empty.