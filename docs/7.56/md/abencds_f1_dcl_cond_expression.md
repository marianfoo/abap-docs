  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ROLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_role.htm) →  [CDS DCL - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_role_conditions.htm) →  [CDS DCL - DEFINE ROLE, literal\_condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_cond_literal.htm) → 

CDS DCL - DEFINE ROLE, operator

Syntax

... operator ...

Effect

Operator of a comparison expression in a [literal condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_cond_literal.htm) in an [access rule](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenaccess_rule_glosry.htm "Glossary Entry") in the definition of a role using [DEFINE ROLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_role.htm) in the [CDS DCL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_glosry.htm "Glossary Entry"). The operator compares a left side and a right side. The left side is an element of the CDS entity to which the rule applies. The right side is represented using a literal value.

operator

True if

\=

The value of the left side is equal to the value of the right side.

<>

The value of the left side is not equal to the value of the right side.

<

The value of the left side is less than the value of the right side.

\>

The value of the left side is greater than the value of the right side.

<=

The value of the left side is less than or equal to the value of the right side.

\>=

The value of the left side is greater than or equal to the value of the right side.

?=

Like the operator \=. The condition is also met, however, if the value of the left side is the [null value](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennull_value_glosry.htm "Glossary Entry") or a type-dependent initial value.