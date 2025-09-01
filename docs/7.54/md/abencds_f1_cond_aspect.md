---
title: "Syntax"
description: |
  ... (element1 , element2, ... ) = ASPECT generic_aspect ... Effect Aspect condition as part of an access condition(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenaccess_condition_glosry.htm 'Glossary Entry') cond_expr(https://help.sap.com/doc/abapdocu_754_index_htm/7.54
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_aspect.htm"
abapFile: "abencds_f1_cond_aspect.htm"
keywords: ["do", "if", "try", "abencds", "cond", "aspect"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_role.htm) →  [ABAP CDS - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_role_conditions.htm) → 

ABAP CDS - DEFINE ROLE, aspect\_condition

Syntax

... (element1 *\[*, element2, ...*\]* ) = ASPECT generic\_aspect ...

Effect

Aspect condition as part of an [access condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cond\_expr](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_role_cond_expr.htm) in an [access rule](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_role_rules.htm) of the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_role.htm) in [CDS DCL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_glosry.htm "Glossary Entry"). An aspect condition specifies the generic aspect generic\_aspect defined in an aspect definition in the right side introduced by ASPECT.

In parentheses, the left side contains the ordered list of entity elements that match the output fields of the generic aspect.

[Left-side host expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_cond_left_side.htm) are not supported in this language element. The only relational operator allowed is the equality operator \=.