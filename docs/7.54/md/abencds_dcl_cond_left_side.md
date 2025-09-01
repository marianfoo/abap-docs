  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_role.htm) →  [ABAP CDS - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_role_conditions.htm) → 

ABAP CDS - DEFINE ROLE, Left Side Host Expressions

Instead of an element of the protected CDS entity, one of the following expressions can be used on the left side of [literal conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_literal.htm), [PFCG conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg.htm), and [user conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_user.htm):

-   The actual value of a [parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter.htm) of the CDS entity replaced by $parameters.pname

-   The value of a [session variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm) replace by $session.vname

-   A [literal value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_literal.htm)

Conditions with left side host expressions are evaluated before the expression is passed to the database and evaluate as a true or false predicate.

Properties:

-   The operators [IS NULL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_null.htm), [IS NOT NULL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_null.htm), and [?=](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove_cast.htm) are not supported.

-   The operators [LIKE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_literal.htm) and [NOT LIKE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_literal.htm) are mapped to the relational operator for character-like data type [CP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_strings.htm). This enables non-case-sensitive pattern searches.

-   Left side host expressions cannot be used on the left side of [PFCG mappings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry") or generic aspects.

Note

Runtime support for session variables and literals on the left side is an indirect consequence of inheritance with parameter replacement and also exists in DCL source code (for reasons of consistency). Direct use is not recommended.