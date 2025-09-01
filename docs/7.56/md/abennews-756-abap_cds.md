  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.56](javascript:call_link\('abennews-756.htm'\)) → 

ABAP CDS in Release 7.56

[1\. CDS Abstract Entity Extensions](#!ABAP_MODIFICATION_1@1@)
[2\. CDS Abstract Entity, to-parent association](#!ABAP_MODIFICATION_2@2@)
[3\. CDS Hierarchy, caching policy](#!ABAP_MODIFICATION_3@3@)
[4\. CDS View Entity, reusing expressions](#!ABAP_MODIFICATION_4@4@)
[5\. CDS View Entity, UNION clause](#!ABAP_MODIFICATION_5@5@)
[6\. CDS View Entity, DISTINCT](#!ABAP_MODIFICATION_6@6@)
[7\. CDS View Entity, new set operators](#!ABAP_MODIFICATION_7@7@)
[8\. CDS View Entity, new conversion functions](#!ABAP_MODIFICATION_8@8@)
[9\. CDS View Entity, typed literals](#!ABAP_MODIFICATION_9@9@)
[10\. CDS View Entity, Handling of Amounts and Quantities](#!ABAP_MODIFICATION_10@10@)
[11\. CDS View Entity, extended expression matrix](#!ABAP_MODIFICATION_11@11@)
[12\. CDS Projection View, REDEFINE ASSOCIATION](#!ABAP_MODIFICATION_12@12@)
[13\. CDS Projection View, PROVIDER CONTRACT](#!ABAP_MODIFICATION_13@13@)
[14\. ABAP program for migration analysis](#!ABAP_MODIFICATION_14@14@)
[15\. Migration tool for CDS views](#!ABAP_MODIFICATION_15@15@)
[16\. New reference type for annotations](#!ABAP_MODIFICATION_16@16@)

Modification 1   

CDS Abstract Entity Extensions

The new statement [EXTEND ABSTRACT ENTITY](javascript:call_link\('abencds_extend_abstract_entity.htm'\)) of the DDL of ABAP CDS makes it possible to add new elements to existing [CDS abstract entities](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") by using [CDS abstract entity extensions](javascript:call_link\('abencds_abs_entity_extend_glosry.htm'\) "Glossary Entry").

Modification 2   

CDS Abstract Entity, to-parent association

In [CDS abstract entities](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry"), it is now possible to define [to-parent associations](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry") without ON condition. The ON condition can be left out if the association target is also a CDS abstract entity.

Modification 3   

CDS Hierarchy, caching policy

A hierarchy definition [DEFINE HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\)) can now use the new addition CACHE ON*|*OFF*|*FORCE to specify the caching policy for a generated hierarchy.

Modification 4   

CDS View Entity, reusing expressions

In [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), it is now possible to reuse expressions defined in the SELECT list in other operand positions of the same CDS view entity by using the syntax [$projection.reuse\_exp](javascript:call_link\('abencds_reusable_expression_v2.htm'\)).

Modification 5   

CDS View Entity, UNION clause

[UNION](javascript:call_link\('abencds_union_v2.htm'\)) clauses are now supported in [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"). There are a few differences to UNION clauses in [CDS DDIC-based views](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). The most important difference is that branches of union clauses can be nested within each other in CDS view entities.

Modification 6   

CDS View Entity, DISTINCT

The addition [DISTINCT](javascript:call_link\('abencds_select_statement_v2.htm'\)) is now available for SELECT statements in [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry").

Modification 7   

CDS View Entity, new set operators

In [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), two new [set operators](javascript:call_link\('abencds_set_operators_glosry.htm'\) "Glossary Entry") are available:

-   [EXCEPT](javascript:call_link\('abencds_except_v2.htm'\))
-   [INTERSECT](javascript:call_link\('abencds_intersect_v2.htm'\))

Modification 8   

CDS View Entity, new conversion functions

Two new conversion functions are available in CDS view entities:

-   [GET\_NUMERIC\_VALUE](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\))
-   [CURR\_TO\_DECFLOAT\_AMOUNT](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\))

Modification 9   

CDS View Entity, typed literals

[Typed literals](javascript:call_link\('abencds_typed_literal_v2.htm'\)) are now available for [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"). Typed literals allow an explicit type declaration and they are available for many built-in ABAP Dictionary data types.

Modification 10   

CDS View Entity, Handling of Amounts and Quantities

In [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), special handling for [CDS amount fields](javascript:call_link\('abencds_amount_field.htm'\)) and [CDS quantity fields](javascript:call_link\('abencds_quantity_field.htm'\)) has been implemented. It differs from the handling of amount fields and quantity fields in DDIC, for example, more data types are possible and the currency key / unit key reference is considered in expressions.

Moreover, a new type is available: the [CDS calculated quantity](javascript:call_link\('abencds_calculated_quantity.htm'\)). A CDS calculated quantity is the result type of a calculation using amount and/or quantity fields.

Modification 11   

CDS View Entity, extended expression matrix

In [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), the expression matrix has been extended:

-   In the [WHERE](javascript:call_link\('abencds_where_clause_v2.htm'\)) clause, arithmetic expressions and case expressions are supported as operands.
-   In the [HAVING](javascript:call_link\('abencds_having_clause_v2.htm'\)) clause, arithmetic expressions and case expressions are supported as operands.
-   In a [searched case expression](javascript:call_link\('abencds_searched_case_expr_v2.htm'\)), arithmetic expressions and case expressions are supported as operands.

Modification 12   

CDS Projection View, REDEFINE ASSOCIATION

In CDS projection views, it is now possible to redefine the CDS associations from the projected entity in the header part. This is done using the keyword [REDEFINE ASSOCIATION](javascript:call_link\('abencds_proj_view_redefined_assoc.htm'\)). Redefinition can include a new filter, alias name, and redirection to a new association target, which must also be a CDS projection view, thus moving the complete data model to the projection layer.

Modification 13   

CDS Projection View, PROVIDER CONTRACT

It is now possible to specify a provider contract for [CDS projection views](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") using the keyword [PROVIDER CONTRACT](javascript:call_link\('abencds_pv_provider_contract.htm'\)). The provider contract specifies in which scenario a CDS projection view is used, and the scenario in turn determines in which runtime the view is executed and which features are available.

In this release, there's only one provider contract option available: TRANSACTIONAL\_QUERY.

Modification 14   

ABAP program for migration analysis

The following documented ABAP program is now available for evaluating whether a migration from a CDS DDIC-based view to a CDS view entity is possible:

RUTDDLS\_MIGRATION\_CANDIDATES.

Modification 15   

Migration tool for CDS views

The following documented ABAP program is now available for migrating CDS DDIC-based views to CDS view entities:

RUTDDLSV2MIGRATION.

Modification 16   

New reference type for annotations

A new [reference type](javascript:call_link\('abencds_f1_define_annotation_type.htm'\)) for annotations is available:

-   LocalDefinitionRef