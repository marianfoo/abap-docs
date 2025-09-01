  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) → 

ABAP CDS - DCL Restrictions for CDS Hierarchies

[CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") can be protected using access control. It must be guaranteed, however, that individual rows are not filtered out if they are part of a logical block in the hierarchy construction. Otherwise the hierarchies constructed by the database could be destroyed and hierarchy operators produce undefined results.

For this reason, access controls only allow language elements in CDS hierarchies whose effects are not specific to rows. This means the following are allowed:

-   PFCG conditions without fields ( ( ) = ASPECT PFCG\_AUTH( ... ) )

-   Conditions under exclusive use of [left side host expressions](javascript:call_link\('abencds_dcl_cond_left_side.htm'\)). This enables protection for a CDS hierarchy using the hierarchy directory specified by a parameter.

-   The special conditions TRUE, FALSE, and VOID. These should not, however, be used directly in CDS access controls.