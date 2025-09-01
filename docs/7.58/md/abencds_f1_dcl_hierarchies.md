  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20DCL%20Restrictions%20for%20CDS%20Hierarchies%2C%20ABENCDS_F1_DCL_HIERARCHIES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20
for%20improvement:)

ABAP CDS - DCL Restrictions for CDS Hierarchies

[CDS hierarchies](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") can be protected with access control. However, it must be ensured that individual rows are not filtered out if they are part of a logical block in the hierarchy construction. Otherwise, the hierarchies constructed by the database could be destroyed and hierarchy operators produce undefined results.

For this reason, the use of [access conditions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaccess_condition_glosry.htm "Glossary Entry") with arbitrary entity elements is not allowed.

However, if the CDS hierarchy declares a directory ( [DEFINE HIERARCHY ... DIRECTORY ... FILTER BY](abencds_f1_define_hierarchy.htm#!ABAP_ADDITION_4@4@)), then elements of this association can be used.

In addition, access conditions that do not result in database selections can be used:

-   PFCG conditions without fields ( ( ) = ASPECT PFCG\_AUTH( ... ) )
-   Conditions with exclusive use of [left side host expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_cond_left_side.htm). This allows protection of a CDS hierarchy using the hierarchy directory specified by a parameter.
-   The special conditions TRUE, FALSE, and VOID. These should not, however, be used directly in CDS access controls.

Hints

-   When conditions on the directory association are involved, they are applied to the constructed hierarchy object. Therefore, the time for its creation will be consumed even if the user does not have the authorization to retrieve the result.
-   The requirement to specify a FILTER BY addition in the CDS hierarchy definition still exists and by design already provides an all-or-nothing behavior regarding the hierarchy directory. Due to the properties from above, access control can act as an additional reason for nothing.