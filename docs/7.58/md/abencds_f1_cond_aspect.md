  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [CDS DCL - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [CDS DCL - DEFINE ROLE, condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DCL%20-%20DEFINE%20ROLE%2C%20aspect_condition%2C%20ABENCDS_F1_COND_ASPECT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

CDS DCL - DEFINE ROLE, aspect\_condition

Syntax

... (element1 *\[*, element2, ...*\]* ) = ASPECT aspect
      *\[*FILTER BY ( aspect filter )*\]* ...

Addition:

[... FILTER BY](#!ABAP_ONE_ADD@1@)

Effect

Aspect condition as part of an [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") [cds\_cond](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\)) in an [access rule](javascript:call_link\('abencds_dcl_role_rules.htm'\)) of the statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) in [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"). An aspect condition specifies the user-defined aspect aspect defined in an aspect definition in the right side introduced by ASPECT.

In parentheses, the left side contains the ordered list of entity elements that match the output fields of the user-defined aspect.

[Left-side host expressions](javascript:call_link\('abencds_dcl_cond_left_side.htm'\)) are not supported in this language element. The only comparison operator allowed is the equality operator \=.

When any of the left side elements of an aspect condition is declared as optional with default FALSE and missing at runtime, the entire aspect is handled as logically false.

Missing optional elements with default TRUE are removed from the link condition between the aspect entity and the protected entity. This process may apply to all left side elements, in which case the aspect condition reduces to a mere existence check of any row in the aspect entity for the current user.

Addition   

...FILTER BY

When the aspect definition declares at least one filter element (see DEFINE ASPECT), you can use this addition to specify an additional selection condition for the rows of the aspect entity, before the result set is used to filter the rows of the protected entity.

The condition can use the declared aspect filters, literals, session variables and parameters of the protected entity, but you cannot refer to elements of the protected entity.

The aspect filter supports logical expressions and brackets.

Example

You have an aspect entity with the following content, where NULL denotes a [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"):

USERNAME

COSTCENTER

STATE

A

1

U

A

2

V

A

3

NULL

B

1

V

B

2

U

In the aspect definition, you specify USERNAME as the user element, COSTCENTER as the output element, and STATE as the filter element:

DEFINE ASPECT DEMO\_ASPECT AS SELECT FROM ...
  WITH USER ELEMENT USERNAME
  WITH FILTER ELEMENTS ( STATE )
  *{* COSTCENTER *}*

In an access role you filter the protected entity based on columnCostCenter using the user-defined aspect.

GRANT SELECT ON ... WHERE (CostCenter) = ASPECT DEMO\_ASPECT;

With this condition, for user A the cost centers 1, 2 and 3 will be returned.

When only the cost centers with state U or NULL are respected, you can filter the aspect rows:

GRANT SELECT ON ... WHERE (CostCenter) = ASPECT DEMO\_ASPECT FILER BY( STATE = 'U' OR STATE IS NULL );

For user A, this condition will return cost center 1 and 3, while for user B, cost center 2 would be returned.

Example

The following example shows a CDS role that defines an access condition based on the user-defined aspect DEMO\_CDS\_USER\_DEFINED\_ASPECT.

CDS or DDIC source code was not found