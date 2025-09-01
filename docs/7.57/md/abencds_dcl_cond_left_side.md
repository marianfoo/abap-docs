---
title: "CDS DCL - DEFINE ROLE, Left Side Host Expressions"
description: |
  Instead of an element of the protected CDS entity, one of the following expressions can be used on the left side of literal conditions(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_cond_literal.htm), PFCG conditions(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_cond_left_side.htm"
abapFile: "abencds_dcl_cond_left_side.htm"
keywords: ["do", "if", "case", "try", "data", "abencds", "dcl", "cond", "left", "side"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ROLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_role.htm) →  [CDS DCL - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_conditions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DCL - DEFINE ROLE, Left Side Host Expressions, ABENCDS_DCL_COND_LEFT_SIDE, 757%0D
%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DCL - DEFINE ROLE, Left Side Host Expressions

Instead of an element of the protected CDS entity, one of the following expressions can be used on the left side of [literal conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_cond_literal.htm), [PFCG conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_cond_pfcg.htm), and [user conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_cond_user.htm):

-   The actual value of a [parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_param.htm) of the CDS entity replaced by $parameters.pname
-   The value of a session variable replaced by $session.vname
    
    (For session variables in CDS DDIC-based views (obsolete), see [here](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v1.htm).
    
    For session variables in CDS view entities, see [here](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v2.htm).)
    
    The set of supported session variables in access controls may be smaller than the one in CDS in general.
    
-   A literal value

Conditions with left side host expressions are evaluated before the expression is passed to the database and evaluate as a true or false predicate.

Properties:

-   The operators [IS NULL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cond_expr_null_v2.htm), [IS NOT NULL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cond_expr_null_v2.htm) and [?=](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove_cast.htm) are not supported.
-   The operators [LIKE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_cond_literal.htm) and [NOT LIKE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_cond_literal.htm) are mapped to the comparison operator for character-like data type [CP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_strings.htm). This results in non-case-sensitive pattern searches.
-   Left side host expressions cannot be used on the left side of [PFCG mappings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry") or self-defined aspects.

Hint

Runtime support for session variables and literals on the left side is an indirect consequence of inheritance with parameter replacement and also exists in DCL source code (for reasons of consistency). Direct use is not recommended.