---
title: "ABAP CDS - DEFINE ROLE, Data Types"
description: |
  The operand specified on the left side of a condition(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_role_conditions.htm) of an access rule(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_role_rules.htm) of a CDS role(https://help.sap.com/doc/abap
version: "7.54"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_cond_data_types.htm"
abapFile: "abencds_f1_dcl_cond_data_types.htm"
keywords: ["do", "if", "try", "data", "types", "abencds", "dcl", "cond"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_role.htm) →  [ABAP CDS - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_role_conditions.htm) → 

ABAP CDS - DEFINE ROLE, Data Types

The operand specified on the left side of a [condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_role_conditions.htm) of an [access rule](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_role_rules.htm) of a [CDS role](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_role_glosry.htm "Glossary Entry") cannot have all the [built-in data types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm). Only the following types are permitted:

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

Any other data types generally produce a syntax error in the definition of a CDS role. In [PFCG conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg.htm), however, invalid data types are sometimes not detected until runtime.

In PFCG conditions, field values of [authorizations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthorization_glosry.htm "Glossary Entry") are compared with [CDS elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_element_glosry.htm "Glossary Entry") of the permitted data types and an appropriate [conversion](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_pfcg_mapping.htm) takes place.

Unlike DATS and TIMS, the types DATN and TIMN do not allow the [LIKE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_like.htm) operator to be used.