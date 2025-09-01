---
title: "CDS DCL - DEFINE ROLE, Data Types"
description: |
  The operand specified on the left side of a condition(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_conditions.htm) of an access rule(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_rules.htm) of a CDS role(https://help.sap.co
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_cond_data_types.htm"
abapFile: "abencds_f1_dcl_cond_data_types.htm"
keywords: ["do", "if", "try", "data", "types", "abencds", "dcl", "cond"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ROLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_role.htm) →  [CDS DCL - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_conditions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DCL%20-%20DEFINE%20ROLE%2C%20Data%20Types%2C%20ABENCDS_F1_DCL_COND_DATA_TYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

CDS DCL - DEFINE ROLE, Data Types

The operand specified on the left side of a [condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_conditions.htm) of an [access rule](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_rules.htm) of a [CDS role](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_role_glosry.htm "Glossary Entry") cannot have all the [built-in data types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). Only the following types are allowed:

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
        
        CDS elements of type RAW support the operators [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_null_v2.htm) and [IS *\[*NOT*\]* INITIAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_initial_v2.htm) and use as a part of the left side for a user-defined aspect or a PFCG mapping. Comparisons with a literal or an authorization field are not possible.
        
-   Special types
    -   DATS, DATN, TIMS, TIMN, UTCLONG
    -   NUMC

Any other data types generally produce a syntax error in the definition of a CDS role. In [PFCG conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_pfcg.htm), however, invalid data types are sometimes not detected until runtime.

In PFCG conditions, field values of [authorizations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenauthorization_glosry.htm "Glossary Entry") are compared with [CDS elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_element_glosry.htm "Glossary Entry") of the allowed data types and an appropriate [conversion](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_pfcg_mapping.htm) takes place.

Unlike DATS and TIMS, the types DATN and TIMN do not allow the [LIKE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_like_v2.htm) operator to be used.