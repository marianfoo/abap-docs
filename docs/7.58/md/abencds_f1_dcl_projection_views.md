  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20DCL%20Restrictions%20for%20Transactional%20CDS%20Projection%20Views%2C%20ABENCDS_F1_DCL_PROJECTION_VIEWS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - DCL Restrictions for Transactional CDS Projection Views

[CDS transactional queries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_transactional_pv_glosry.htm "Glossary Entry") and [CDS transactional interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_trans_interface_glosry.htm "Glossary Entry") (DEFINE ROOT VIEW ENTITY ... AS PROJECTION ON ...) are designed to apply CDS access control from the underlying CDS entity 1:1.

For this purpose, CDS access control provides a special rule type [projection\_rule](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_role_proj_rule.htm).

Prior to the introduction of projection rules, access rules for transactional projection views were regular access rules, which had to comply with the following restrictions:

-   The use of [REDEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_role_cond_rule.htm) is not allowed.
-   Only the condition [INHERITING CONDITIONS FROM ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_inherit.htm) can be used.
-   The only exception is to create an access control with a full access rule.
-   The inheriting entity in INHERITING CONDITIONS FROM ENTITY must match the source entity of the CDS projection view.
-   The only allowed [replacement step](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_inherit_rpl_step.htm) is [ELEMENT WITH](abencds_f1_cond_inherit_rpl_step.htm#!ABAP_VARIANT_4@4@) in one of the following flavors:
    -   Replacing a plain entity field with a plain entity field.
    -   Renaming of an association.
    -   Replacing a path expression that ends with a field with a plain entity field.