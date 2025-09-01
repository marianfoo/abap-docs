  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.54](javascript:call_link\('abennews-754.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS Access Control in Release 7.54, ABENNEWS-754-CDS_ACCESS_CONTROL, 757%0D%0A%0
D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS Access Control in Release 7.54

[1\. Addition COMBINATION MODE OR*|*AND of the Statement GRANT SELECT ON](#!ABAP_MODIFICATION_1@1@)
[2\. Addition REDEFINITION of the Statement GRANT SELECT ON](#!ABAP_MODIFICATION_2@2@)
[3\. Addition IN SCENARIO of the Statement GRANT SELECT ON](#!ABAP_MODIFICATION_3@3@)
[4\. Generic Aspect Condition of the Statement DEFINE ROLE](#!ABAP_MODIFICATION_4@4@)
[5\. New Variant INHERITING CONDITIONS FROM SUPER](#!ABAP_MODIFICATION_5@5@)
[6\. Different REPLACING Operators](#!ABAP_MODIFICATION_6@6@)
[7\. REPLACING Operator ELEMENT ... WITH](#!ABAP_MODIFICATION_7@7@)
[8\. Definition of a Generic Aspect](#!ABAP_MODIFICATION_8@8@)
[9\. DCL Restrictions for ABAP CDS Hierarchies](#!ABAP_MODIFICATION_9@9@)
[10\. DCL Restrictions for CDS Transactional Queries](#!ABAP_MODIFICATION_10@10@)

Modification 1   

Addition COMBINATION MODE OR*|*AND of the Statement GRANT SELECT ON

The optional addition [COMBINATION MODE](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\)) can now be used to define how the access conditions of multiple CDS access rules for the same CDS entity are combined.

Modification 2   

Addition REDEFINITION of the Statement GRANT SELECT ON

The addition [REDEFINITION](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\)) is used to indicate that the specified CDS access rule is the only existing access rule and any other access rules are ignored.

Modification 3   

Addition IN SCENARIO of the Statement GRANT SELECT ON

The optional addition [IN SCENARIO](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) can be used to apply the switchable authorization check to an authorization object.

Modification 4   

Generic Aspect Condition of the Statement DEFINE ROLE

An aspect condition can now be used to specify the [generic aspect](javascript:call_link\('abencds_f1_cond_aspect.htm'\)) defined in an aspect definition in the right side introduced by ASPECT.

Modification 5   

New Variant INHERITING CONDITIONS FROM SUPER

There is now another [variant](javascript:call_link\('abencds_f1_cond_inherit.htm'\)) of the inheritance condition in an access rule of the statement DEFINE ROLE, which applies the access conditions from SUPER.

Modification 6   

Different REPLACING Operators

The optional addition [REPLACING](javascript:call_link\('abencds_f1_cond_inherit.htm'\)) of INHERITING CONDITIONS can be used to modify the inherited conditions.

Modification 7   

REPLACING Operator ELEMENT ... WITH

Any number of [ELEMENT](javascript:call_link\('abencds_f1_cond_inherit.htm'\)) operators can be used to transform conditions that use fields of the inherited entity to a different field of the inheriting entity.

Modification 8   

Definition of a Generic Aspect

A [generic aspect](javascript:call_link\('abencds_f1_define_generic_aspect.htm'\)) can now be defined as part of a CDS access policy itself defined using DEFINE ACCESSPOLICY.

Modification 9   

DCL Restrictions for ABAP CDS Hierarchies

ABAP CDS hierarchies can now be protected using [access controls](javascript:call_link\('abencds_f1_dcl_hierarchies.htm'\)).

Modification 10   

DCL Restrictions for CDS Transactional Queries

Transactional queries apply the [access control](javascript:call_link\('abencds_f1_dcl_projection_views.htm'\)) of the underlying CDS entity with restrictions.