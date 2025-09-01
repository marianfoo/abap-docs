  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) → 

ABAP CDS - DCL Restrictions for CDS Hierarchies

[CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") can be protected using access control. It must be guaranteed, however, that individual rows are not filtered out if they are part of a logical block in the hierarchy construction. Otherwise the hierarchies constructed by the database could be destroyed and hierarchy operators produce undefined results.

For this reason, the usage of access conditions using arbitrary entity elements is not allowed.

However, when the CDS hierarchy declares a directory ( [DEFINE HIERARCHY ... DIRECTORY ... FILTER BY](abencds_f1_define_hierarchy.htm#!ABAP_ADDITION_4@4@)), then elements of this association can be used.

In addition, access conditions which do not result in database selections can be used:

-   PFCG conditions without fields ( ( ) = ASPECT PFCG\_AUTH( ... ) )
-   Conditions under exclusive use of [left side host expressions](javascript:call_link\('abencds_dcl_cond_left_side.htm'\)). This enables protection for a CDS hierarchy using the hierarchy directory specified by a parameter.
-   The special conditions TRUE, FALSE, and VOID. These should not, however, be used directly in CDS access controls.

Hints

-   When conditions on the directory association are involved, they are applied to the constructed hierarchy object. The time for its creation will therefore be consumed even when the user does not have the authorization to retrieve the result.
-   The requirement to specify a FILTER BY addition in the CDS hierarchy definition still exists and by design already provides an "all or nothing" behavior regarding the hierarchy directory. Due to the properties from above, access control can act as additional reason for "nothing".