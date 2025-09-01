---
title: "ABAP CDS - DCL Restrictions for Transactional Projection View Entities"
description: |
  Transactional projection view entities (define root view entity ... as projection on ...) are designed to apply CDS access control from the underlying CDS entity 1:1. The following restrictions apply: -   Only the condition INHERITING CONDITIONS FROM ENTITY can be used. -   The only exception is to
version: "7.54"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_projection_views.htm"
abapFile: "abencds_f1_dcl_projection_views.htm"
keywords: ["do", "abencds", "dcl", "projection", "views"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) → 

ABAP CDS - DCL Restrictions for Transactional Projection View Entities

Transactional projection view entities (define root view entity ... as projection on ...) are designed to apply CDS access control from the underlying CDS entity 1:1. The following restrictions apply:

-   Only the condition INHERITING CONDITIONS FROM ENTITY can be used.

-   The only exception is to create access control with full access rule.

-   The inheriting entity in INHERITING CONDITIONS FROM ENTITY must match the source entity of the transactional projection view entity.

-   Field aliasing in a transactional projection view entity is made possible by using the addition REPLACING ELEMENT in CDS access control to apply the name change of the field to CDS control too.