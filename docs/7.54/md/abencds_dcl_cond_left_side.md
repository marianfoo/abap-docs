  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [ABAP CDS - DEFINE ROLE, condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) → 

ABAP CDS - DEFINE ROLE, Left Side Host Expressions

Instead of an element of the protected CDS entity, one of the following expressions can be used on the left side of [literal conditions](javascript:call_link\('abencds_f1_cond_literal.htm'\)), [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)), and [user conditions](javascript:call_link\('abencds_f1_cond_user.htm'\)):

-   The actual value of a [parameters](javascript:call_link\('abencds_f1_parameter.htm'\)) of the CDS entity replaced by $parameters.pname

-   The value of a [session variable](javascript:call_link\('abencds_f1_session_variable.htm'\)) replace by $session.vname

-   A [literal value](javascript:call_link\('abencds_f1_literal.htm'\))

Conditions with left side host expressions are evaluated before the expression is passed to the database and evaluate as a true or false predicate.

Properties:

-   The operators [IS NULL](javascript:call_link\('abencds_cond_expr_null.htm'\)), [IS NOT NULL](javascript:call_link\('abencds_cond_expr_null.htm'\)), and [?=](javascript:call_link\('abapmove_cast.htm'\)) are not supported.

-   The operators [LIKE](javascript:call_link\('abencds_f1_cond_literal.htm'\)) and [NOT LIKE](javascript:call_link\('abencds_f1_cond_literal.htm'\)) are mapped to the relational operator for character-like data type [CP](javascript:call_link\('abenlogexp_strings.htm'\)). This enables non-case-sensitive pattern searches.

-   Left side host expressions cannot be used on the left side of [PFCG mappings](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") or generic aspects.

Note

Runtime support for session variables and literals on the left side is an indirect consequence of inheritance with parameter replacement and also exists in DCL source code (for reasons of consistency). Direct use is not recommended.