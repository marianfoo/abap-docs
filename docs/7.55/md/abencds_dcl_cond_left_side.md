  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [CDS DCL - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [CDS DCL - DEFINE ROLE, condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) → 

CDS DCL - DEFINE ROLE, Left Side Host Expressions

Instead of an element of the protected CDS entity, one of the following expressions can be used on the left side of [literal conditions](javascript:call_link\('abencds_f1_cond_literal.htm'\)), [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)), and [user conditions](javascript:call_link\('abencds_f1_cond_user.htm'\)):

-   The actual value of a [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of the CDS entity replaced by $parameters.pname

-   The value of a session variable replaced by $session.vname
    (For session variables in CDS DDIC-based views, see [here](javascript:call_link\('abencds_session_variable_v1.htm'\)).
    For session variables in CDS view entities, see [here](javascript:call_link\('abencds_session_variable_v2.htm'\)).)

-   A literal value

Conditions with left side host expressions are evaluated before the expression is passed to the database and evaluate as a true or false predicate.

Properties:

-   The operators [IS NULL](javascript:call_link\('abencds_cond_expr_null_v2.htm'\)), [IS NOT NULL](javascript:call_link\('abencds_cond_expr_null_v2.htm'\)), [IS INITIAL](javascript:call_link\('abencds_cond_expr_initial_v2.htm'\)), [IS NOT INITIAL](javascript:call_link\('abencds_cond_expr_initial_v2.htm'\)), and [?=](javascript:call_link\('abapmove_cast.htm'\)) are not supported.

-   The operators [LIKE](javascript:call_link\('abencds_f1_cond_literal.htm'\)) and [NOT LIKE](javascript:call_link\('abencds_f1_cond_literal.htm'\)) are mapped to the comparison operator for character-like data type [CP](javascript:call_link\('abenlogexp_strings.htm'\)). This results in non-case-sensitive pattern searches.

-   Left side host expressions cannot be used on the left side of [PFCG mappings](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") or self-defined aspects.

Hint

Runtime support for session variables and literals on the left side is an indirect consequence of inheritance with parameter replacement and also exists in DCL source code (for reasons of consistency). Direct use is not recommended.