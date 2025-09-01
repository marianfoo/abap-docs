  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-75.htm) →  [News for ABAP Release 7.54](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-754.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20Access%20Control%20in%20ABAP%20Release%207.54%2C%20ABENNEWS-754-CDS_ACCESS_CONTROL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

ABAP CDS Access Control in ABAP Release 7.54

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
[11\. VOID](#!ABAP_MODIFICATION_11@11@)
[12\. CONSTRAINT ID](#!ABAP_MODIFICATION_12@12@)

Modification 1   

Addition COMBINATION MODE OR*|*AND of the Statement GRANT SELECT ON

The optional addition [COMBINATION MODE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_cond_rule.htm) can now be used to define how the access conditions of multiple CDS access rules for the same CDS entity are combined.

Modification 2   

Addition REDEFINITION of the Statement GRANT SELECT ON

The addition [REDEFINITION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_cond_rule.htm) is used to indicate that the specified CDS access rule is the only existing access rule and any other access rules are ignored.

Modification 3   

Addition IN SCENARIO of the Statement GRANT SELECT ON

The optional addition [IN SCENARIO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_pfcg.htm) can be used to apply the switchable authorization check to an authorization object.

Modification 4   

Generic Aspect Condition of the Statement DEFINE ROLE

An aspect condition can now be used to specify the [generic aspect](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_aspect.htm) defined in an aspect definition in the right side introduced by ASPECT.

Modification 5   

New Variant INHERITING CONDITIONS FROM SUPER

There is now another [variant](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_inherit.htm) of the inheritance condition in an access rule of the statement DEFINE ROLE, which applies the access conditions from SUPER.

Modification 6   

Different REPLACING Operators

The optional addition [REPLACING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_inherit.htm) of INHERITING CONDITIONS can be used to modify the inherited conditions.

Modification 7   

REPLACING Operator ELEMENT ... WITH

Any number of [ELEMENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_inherit.htm) operators can be used to transform conditions that use fields of the inherited entity to a different field of the inheriting entity.

Modification 8   

Definition of a Generic Aspect

A [generic aspect](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_generic_aspect.htm) can now be defined as part of a CDS access policy itself defined using DEFINE ACCESSPOLICY.

Modification 9   

DCL Restrictions for ABAP CDS Hierarchies

ABAP CDS hierarchies can now be protected using [access controls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_hierarchies.htm).

Modification 10   

DCL Restrictions for CDS Transactional Queries

Transactional queries apply the [access control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_projection_views.htm) of the underlying CDS entity with restrictions.

Modification 11   

VOID

The new addition [VOID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_conditions.htm) can be specified in an access condition. It defines that the access condition in question is ignored.

Modification 12   

CONSTRAINT ID

The new addition [CONSTRAINT ID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_pfcg_mapping.htm) can be specified in a PFCG mapping as part of a CDS access policy. It defines further restrictions for authorization fields of authorization objects in a CDS access policy.