  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [CDS DCL - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [CDS DCL - DEFINE ROLE, condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DCL - DEFINE ROLE, Data Types, ABENCDS_F1_DCL_COND_DATA_TYPES, 757%0D%0A%0D%0AErr
or:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DCL - DEFINE ROLE, Data Types

The operand specified on the left side of a [condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) of an [access rule](javascript:call_link\('abencds_dcl_role_rules.htm'\)) of a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") cannot have all the [built-in data types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types.htm'\)). Only the following types are allowed:

-   Numeric types
    -   INT1, INT2, INT4, INT8
    -   DEC
    -   DF16\_DEC, DF16\_RAW, DECFLOAT16
    -   DF34\_DEC, DF34\_RAW, DECFLOAT34
-   Character-like types
    -   CHAR
    -   SSTRING
-   Binary types
    -   RAW
        
        CDS elements of type RAW support the operators [IS *\[*NOT*\]* NULL](javascript:call_link\('abencds_cond_expr_null_v2.htm'\)) and [IS *\[*NOT*\]* INITIAL](javascript:call_link\('abencds_cond_expr_initial_v2.htm'\)) and use as a part of the left side for a self-defined aspect or a PFCG mapping. Comparisons with a literal or an authorization field are not possible.
        
-   Special types
    -   DATS, DATN, TIMS, TIMN, UTCLONG
    -   NUMC

Any other data types generally produce a syntax error in the definition of a CDS role. In [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)), however, invalid data types are sometimes not detected until runtime.

In PFCG conditions, field values of [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") are compared with [CDS elements](javascript:call_link\('abencds_element_glosry.htm'\) "Glossary Entry") of the allowed data types and an appropriate [conversion](javascript:call_link\('abencds_f1_dcl_pfcg_mapping.htm'\)) takes place.

Unlike DATS and TIMS, the types DATN and TIMN do not allow the [LIKE](javascript:call_link\('abencds_cond_expr_like_v2.htm'\)) operator to be used.