  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_syntax.htm) → 

ABAP CDS - DCL Restrictions for Transactional CDS Projection Views

Transactional CDS projection views (define root view entity ... as projection on ...) are designed to apply CDS access control from the underlying CDS entity 1:1. The following restrictions apply:

-   Only the condition INHERITING CONDITIONS FROM ENTITY can be used.

-   The only exception is to create access control with full access rule.

-   The inheriting entity in INHERITING CONDITIONS FROM ENTITY must match the source entity of the CDS projection view.

-   Field aliasing in a CDS projection view is made possible by using the addition REPLACING ELEMENT in CDS access control to apply the name change of the field to CDS control too.