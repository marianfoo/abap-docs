  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [CDS DCL - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [CDS DCL - DEFINE ROLE, condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) →  [CDS DCL - DEFINE ROLE, literal\_condition](javascript:call_link\('abencds_f1_cond_literal.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DCL%20-%20DEFINE%20ROLE%2C%20operator%2C%20ABENCDS_F1_DCL_COND_EXPRESSION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

CDS DCL - DEFINE ROLE, operator

Syntax

... operator ...

Effect

Operator of a comparison expression in a [literal condition](javascript:call_link\('abencds_f1_cond_literal.htm'\)) in an [access rule](javascript:call_link\('abenaccess_rule_glosry.htm'\) "Glossary Entry") in the definition of a role using [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) in the [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"). The operator compares a left side and a right side. The left side is an element of the CDS entity to which the rule applies. The right side is represented using a literal value.

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

Like the operator \=. The condition is also met, however, if the value of the left side is the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") or a type-dependent initial value.