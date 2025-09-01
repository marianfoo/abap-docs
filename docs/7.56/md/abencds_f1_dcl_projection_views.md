  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) → 

ABAP CDS - DCL Restrictions for Transactional CDS Projection Views

Transactional CDS projection views (define root view entity ... as projection on ...) are designed to apply CDS access control from the underlying CDS entity 1:1. The following restrictions apply:

-   The usage of REDEFINITION is not allowed.
-   Only the condition INHERITING CONDITIONS FROM ENTITY can be used.
-   The only exception is to create access control with full access rule.
-   The inheriting entity in INHERITING CONDITIONS FROM ENTITY must match the source entity of the CDS projection view.
-   The only allowed replacement step is ELEMENT WITH in one of the following flavors:
    -   Replacement of a plain entity field with a plain entity field
    -   Renaming of an association
    -   Replacement of a path expression ending with a field with a plain entity field