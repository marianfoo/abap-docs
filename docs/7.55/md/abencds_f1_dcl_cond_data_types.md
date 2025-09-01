  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ROLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_role.htm) →  [CDS DCL - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_role_conditions.htm) → 

CDS DCL - DEFINE ROLE, Data Types

The operand specified on the left side of a [condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_role_conditions.htm) of an [access rule](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_role_rules.htm) of a [CDS role](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_role_glosry.htm "Glossary Entry") cannot have all the [built-in data types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm). Only the following types are allowed:

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
    CDS elements of type RAW support the operators [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_null_v2.htm) and [IS *\[*NOT*\]* INITIAL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_initial_v2.htm) and use as a part of the left side for a self-defined aspect or a PFCG mapping. Comparisons with a literal or an authorization field are not possible.

-   Special types

-   DATS, DATN, TIMS, TIMN, UTCLONG

-   NUMC

Any other data types generally produce a syntax error in the definition of a CDS role. In [PFCG conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_pfcg.htm), however, invalid data types are sometimes not detected until runtime.

In PFCG conditions, field values of [authorizations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenauthorization_glosry.htm "Glossary Entry") are compared with [CDS elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_element_glosry.htm "Glossary Entry") of the allowed data types and an appropriate [conversion](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_pfcg_mapping.htm) takes place.

Unlike DATS and TIMS, the types DATN and TIMN do not allow the [LIKE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_like_v2.htm) operator to be used.