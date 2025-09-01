  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-75.htm) →  [Changes in Release 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-754.htm) → 

ABAP CDS Access Control in Release 7.54

[1\. Addition COMBINATION MODE OR*|*AND of the statement GRANT SELECT ON](#!ABAP_MODIFICATION_1@1@)
[
2\. Addition REDEFINITION of the statement GRANT SELECT ON](#!ABAP_MODIFICATION_2@2@)
[
3\. Predicate VOID](#!ABAP_MODIFICATION_3@3@)
[
4\. Addition IN SCENARIO of the statement GRANT SELECT ON](#!ABAP_MODIFICATION_4@4@)
[
5\. Generic aspect condition of the statement DEFINE ROLE](#!ABAP_MODIFICATION_5@5@)
[
6\. New variant INHERITING CONDITIONS FROM SUPER](#!ABAP_MODIFICATION_6@6@)
[
7\. Different REPLACING operators](#!ABAP_MODIFICATION_7@7@)
[
8\. Definition of a generic aspect](#!ABAP_MODIFICATION_8@8@)
[
9\. DCL restrictions for ABAP CDS hierarchies](#!ABAP_MODIFICATION_9@9@)
[
10\. DCL restrictions for transactional projection view entities](#!ABAP_MODIFICATION_10@10@)

Modification 1

Addition COMBINATION MODE OR*|*AND of the Statement GRANT SELECT ON

The optional addition [COMBINATION MODE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_role_cond_rule.htm) can now be used to define how the access conditions of multiple CDS access rules for the same CDS entity are combined.

Modification 2

Addition REDEFINITION of the Statement GRANT SELECT ON

The addition [REDEFINITION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_role_cond_rule.htm) is used to indicate that the specified CDS access rule is the only existing access rule and any other access rules are ignored.

Modification 3

Predicate VOID

A condition with the value [VOID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_role_conditions.htm) is handled as nonexistent.

Modification 4

Addition IN SCENARIO of the Statement GRANT SELECT ON

The optional addition [IN SCENARIO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg.htm) can be used to apply the switchable authorization check to an authorization object.

Modification 5

Generic Aspect Condition of the Statement DEFINE ROLE

An aspect condition can now be used to specify the [generic aspect](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_aspect.htm) defined in an aspect definition in the right side introduced by ASPECT.

Modification 6

New Variant INHERITING CONDITIONS FROM SUPER

There is now another [variant](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_inherit.htm) of the inheritance condition in an access rule of the statement DEFINE ROLE, which applies the access conditions from SUPER.

Modification 7

Different REPLACING Operators

The optional addition [REPLACING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_inherit.htm) of INHERITING CONDITIONS can be used to modify the inherited conditions.

Modification 8

Definition of a Generic Aspect

A [generic aspect](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_generic_aspect.htm) can now be defined as part of a CDS access policy itself defined using DEFINE ACCESSPOLICY.

Modification 9

DCL Restrictions for ABAP CDS Hierarchies

ABAP CDS hierarchies can now be protected using [access controls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_hierarchies.htm).

Modification 10

DCL Restrictions for Transactional Projection View Entities

Transactional projection view entities apply the [access control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_projection_views.htm) of the underlying CDS entity with restrictions.