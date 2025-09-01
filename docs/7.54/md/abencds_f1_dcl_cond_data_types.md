  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [ABAP CDS - DEFINE ROLE, condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) → 

ABAP CDS - DEFINE ROLE, Data Types

The operand specified on the left side of a [condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) of an [access rule](javascript:call_link\('abencds_dcl_role_rules.htm'\)) of a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") cannot have all the [built-in data types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types.htm'\)). Only the following types are permitted:

-   Numeric Types

-   INT1, INT2, INT4, INT8

-   DEC

-   DF16\_DEC, DF16\_RAW, DECFLOAT16

-   DF34\_DEC, DF34\_RAW, DECFLOAT34

-   Character-Like Types

-   CHAR

-   SSTRING

-   Special Types

-   DATS, DATN, TIMS, TIMN, UTCLONG

-   NUMC

Any other data types generally produce a syntax error in the definition of a CDS role. In [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)), however, invalid data types are sometimes not detected until runtime.

In PFCG conditions, field values of [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") are compared with [CDS elements](javascript:call_link\('abencds_element_glosry.htm'\) "Glossary Entry") of the permitted data types and an appropriate [conversion](javascript:call_link\('abencds_f1_dcl_pfcg_mapping.htm'\)) takes place.

Unlike DATS and TIMS, the types DATN and TIMN do not allow the [LIKE](javascript:call_link\('abencds_cond_expr_like.htm'\)) operator to be used.