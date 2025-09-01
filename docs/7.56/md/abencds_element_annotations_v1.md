---
title: "Syntax"
description: |
  ... @annotation(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax.htm) ... ... @<annotation(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax.htm) ... Effect Specifies an annotation(https://help.sap.com/doc/abapdocu_756_in
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_element_annotations_v1.htm"
abapFile: "abencds_element_annotations_v1.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abencds", "element", "annotations"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-based View, SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-based View, SELECT, select\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_v1.htm) →  [CDS DDL - DDIC-based View, SELECT, element](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_entry_v1.htm) → 

CDS DDL - DDIC-based View, SELECT, element\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax.htm) in the definition of an [element](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_entry_v1.htm) of a [SELECT list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_v1.htm) in a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry") as element annotation. Element annotations can be specified before and after the element.

-   In front of the element, the character @ must be placed before the name annotation of the annotation.
-   Following the element, the characters @< must be placed before the name annotation of the annotation.

The elements of [CDS entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry") can be annotated with the element annotations listed in topic [element\_annot](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_element_annotation.htm).

Example

In the CDS view corporation\_sales\_order, a short text and a tooltip are assigned to the element role. The element currency\_code is flagged as a currency key and is assigned as a currency key to the element gross\_amount.

@AbapCatalog.sqlViewName: 'CORP\_SO\_VW'
define view corporation\_sales\_order as
  select from snwd\_bpa as business\_partner
           inner join snwd\_so as sales\_order
             on business\_partner.node\_key = sales\_order.buyer\_guid
         { key sales\_order.so\_id as sales\_order\_id,
               business\_partner.bp\_id as corporation\_id,
               business\_partner.company\_name,
              @EndUserText.label: 'Corporation Role'
              @EndUserText.quickInfo: 'Customer or supplier'
                 business\_partner.bp\_role as role,
              @Semantics.currencyCode
                 sales\_order.currency\_code,
              @Semantics.amount.currencyCode: 'currency\_code'
                 sales\_order.gross\_amount }
         where business\_partner.legal\_form = 'Inc.'; //Corporations only

Example

This example demonstrates [inheritance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_analysis.htm) of the element annotations in [publications](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_association_v1.htm) of [CDS associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_glosry.htm "Glossary Entry"). The following CDS view defines and exposes a CDS association \_some\_assoc:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASAN2'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view Demo\_Cds\_Assoc\_Anno2
  as select from
    demo\_join2
    association \[\*\] to demo\_join3 as \_some\_assoc on
      \_some\_assoc.l = demo\_join2.d
    {
      @SomeAnno: 'Association to demo\_join3'
      \_some\_assoc,
      d
    }

A further CDS view accesses the view and also exposes the CDS association. Here, the annotation @SomeAnno is inherited.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASAN1I'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view Demo\_Cds\_Assoc\_Anno1\_Inh
  as select from
    Demo\_Cds\_Assoc\_Anno2
    {
      \_some\_assoc,
      d
    }

The following CDS view entity defines and exposes its own CDS association \_some\_assoc. In this case, the CDS annotation @SomeAnno is not inherited.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASAN1L'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view Demo\_Cds\_Assoc\_Anno1\_Loc
  as select from
    Demo\_Cds\_Assoc\_Anno2
    association \[\*\] to demo\_join1 as \_some\_assoc on
      Demo\_Cds\_Assoc\_Anno2.d = \_some\_assoc.d
    {
      \_some\_assoc,
      d
    }

If the CDS association \_some\_assoc were exposed from Demo\_Cds\_Assoc\_Anno2 instead of or in addition to \_some\_assoc by specifying the name Demo\_Cds\_Assoc\_Anno2.\_some\_assoc explicitly, the annotation would be inherited again. The program DEMO\_CDS\_ASSOC\_ANNO evaluates the annotations of both views. No local element annotations are defined for the locally defined association \_some\_assoc of the view Demo\_Cds\_Assoc\_Anno1\_Loc, which means that the result for this CDS association is empty.