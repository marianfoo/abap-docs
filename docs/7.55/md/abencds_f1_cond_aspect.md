  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ROLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_role.htm) →  [CDS DCL - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_role_conditions.htm) → 

CDS DCL - DEFINE ROLE, aspect\_condition

Syntax

... (element1 *\[*, element2, ...*\]* ) = ASPECT aspect ...

Effect

Aspect condition as part of an [access condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cds\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_role_cond_expr.htm) in an [access rule](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_role_rules.htm) of the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_role.htm) in [CDS DCL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_glosry.htm "Glossary Entry"). An aspect condition specifies the self-defined aspect aspect defined in an aspect definition in the right side introduced by ASPECT.

In parentheses, the left side contains the ordered list of entity elements that match the output fields of the self-defined aspect.

[Left-side host expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_cond_left_side.htm) are not supported in this language element. The only comparison operator allowed is the equality operator \=.