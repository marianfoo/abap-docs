---
title: "ABAP CDS - DCL Restrictions for Transactional CDS Projection Views"
description: |
  CDS transactional queries(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_transactional_pv_glosry.htm 'Glossary Entry') (define root view entity ... as projection on ...) are designed to apply CDS access control from the underlying CDS entity 1:1. The following restrictions appl
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_dcl_projection_views.htm"
abapFile: "abencds_f1_dcl_projection_views.htm"
keywords: ["do", "if", "try", "data", "abencds", "dcl", "projection", "views"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_dcl_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - DCL Restrictions for Transactional CDS Projection Views, ABENCDS_F1_DCL_PR
OJECTION_VIEWS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - DCL Restrictions for Transactional CDS Projection Views

[CDS transactional queries](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_transactional_pv_glosry.htm "Glossary Entry") (define root view entity ... as projection on ...) are designed to apply CDS access control from the underlying CDS entity 1:1. The following restrictions apply:

-   The usage of REDEFINITION is not allowed.
-   Only the condition INHERITING CONDITIONS FROM ENTITY can be used.
-   The only exception is to create access control with full access rule.
-   The inheriting entity in INHERITING CONDITIONS FROM ENTITY must match the source entity of the CDS projection view.
-   The only allowed replacement step is ELEMENT WITH in one of the following flavors:
    -   Replacement of a plain entity field with a plain entity field
    -   Renaming of an association
    -   Replacement of a path expression ending with a field with a plain entity field