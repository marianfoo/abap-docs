  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [CDS DCL - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [CDS DCL - DEFINE ROLE, condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DCL%20-%20DEFINE%20ROLE%2C%20user_condition%2C%20ABENCDS_F1_COND_USER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

CDS DCL - DEFINE ROLE, user\_condition

Syntax

...*\[*ALL*|*EXISTS*\]* element [\=*|*<>*|*?=](javascript:call_link\('abencds_f1_dcl_cond_expression.htm'\)) ASPECT user ...

Variants:

[1\. ... ( element ) = ASPECT user\_alias ...](#!ABAP_VARIANT_1@1@)
[2\. ... ( element ) = ASPECT user\_business\_partner\_number ...](#!ABAP_VARIANT_2@2@)

Addition:

[... ALL*|*EXISTS](#!ABAP_ONE_ADD@1@)

Effect

User condition as part of an [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") [cds\_cond](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\)) in an [access rule](javascript:call_link\('abencds_dcl_role_rules.htm'\)) of the statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) in [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"). In a user condition, the predefined [aspect](javascript:call_link\('abencds_aspect_glosry.htm'\) "Glossary Entry") user is specified on the right side introduced with ASPECT.

The left side is compared with the [user name](javascript:call_link\('abenuser_name_glosry.htm'\) "Glossary Entry") of the user currently logged on to AS ABAP by using one of the three operators [\=](javascript:call_link\('abencds_f1_dcl_cond_expression.htm'\)), [<>](javascript:call_link\('abencds_f1_dcl_cond_expression.htm'\)), [?=](javascript:call_link\('abencds_f1_dcl_cond_expression.htm'\)), as in a [literal condition](javascript:call_link\('abencds_f1_dcl_cond_expression.htm'\)).

The behavior when element is declared as optional element and missing at runtime is the same as for literal conditions.

Hints

-   User conditions can be combined within an access rule using [literal conditions](javascript:call_link\('abencds_f1_cond_literal.htm'\)) and [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)), and [inheritance conditions](javascript:call_link\('abencds_f1_cond_inherit.htm'\)).
-   A user condition acts like a comparison with the session variable [$session.user](javascript:call_link\('abencds_session_variable_v2.htm'\)) in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"). It is not currently possible to use session variables on the right side of conditions in DCL.
-   The behavior when an element is declared as optional element and is missing at runtime matches the one for literal conditions.

Variant 1   

... ( element ) = ASPECT user\_alias ...

Effect

The value of the alias can be checked instead of the user name.

If the user does not have an alias, the condition behaves like the Boolean predicate FALSE.

Variant 2   

... ( element ) = ASPECT user\_business\_partner\_number ...

Effect

The number of the business partner assigned to the user can be checked instead of the user name.

If the user does not have an assigned business partner, the condition behaves like the Boolean predicate FALSE.

Addition   

... ALL*|*EXISTS

Effect

The ALL or EXISTS quantifiers can be specified for user conditions and behave as for literal conditions.

Example

The following CDS view entity contains an element uname, which contains a user name:

@AccessControl.authorizationCheck: #CHECK
define view entity demo\_cds\_auth\_user
  as select from
    abdocmode
    {
      key uname,
      key langu,
          flag
    }

The following role can be defined for the view:

@MappingRole: true
define role demo\_cds\_role\_user {  
  grant select on demo\_cds\_auth\_user
    where
      uname ?= aspect user; }

The role grants a user AS ABAP access to his or her own entries in the DDIC database table ABDOCMODE, as well as to entries in which the UNAME column is initial or contains a [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").