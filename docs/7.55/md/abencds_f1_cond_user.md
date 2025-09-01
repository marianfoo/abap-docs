  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [CDS DCL - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [CDS DCL - DEFINE ROLE, condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) → 

CDS DCL - DEFINE ROLE, user\_condition

Syntax

... element [\=*|*<>*|*?=](javascript:call_link\('abencds_f1_dcl_cond_expression.htm'\)) ASPECT user ...

Variants:

[1\. ... ( element ) = ASPECT user\_alias ...](#!ABAP_VARIANT_1@1@)
[2\. ... ( element ) = ASPECT user\_business\_partner\_number ...](#!ABAP_VARIANT_2@2@)

Effect

User condition as part of an [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") [cds\_cond](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\)) in an [access rule](javascript:call_link\('abencds_dcl_role_rules.htm'\)) of the statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) in [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"). In a user condition, the predefined [aspect](javascript:call_link\('abencds_aspect_glosry.htm'\) "Glossary Entry") user is specified on the right side introduced with ASPECT.

The left side is compared with the [user name](javascript:call_link\('abenuser_name_glosry.htm'\) "Glossary Entry") of the user currently logged on to AS ABAP by using one of the three operators [\=](javascript:call_link\('abencds_f1_dcl_cond_expression.htm'\)), [<>](javascript:call_link\('abencds_f1_dcl_cond_expression.htm'\)), [?=](javascript:call_link\('abencds_f1_dcl_cond_expression.htm'\)), as in a [literal condition](javascript:call_link\('abencds_f1_dcl_cond_expression.htm'\)).

Hints

-   User conditions can be combined within an access rule using [literal conditions](javascript:call_link\('abencds_f1_cond_literal.htm'\)) and [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)), and [inheritance conditions](javascript:call_link\('abencds_f1_cond_inherit.htm'\)).

-   A user condition acts like a comparison with the session variable [$session.user](javascript:call_link\('abencds_session_variable_v2.htm'\)) in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"). It is not currently possible to use session variables on the right side of conditions in DCL.
    

Variant 1

... ( element ) = ASPECT user\_alias ...

The value of the alias can be checked instead of the user name.

If the user does not have an alias, the condition behaves like the Boolean predicate FALSE.

Variant 2

... ( element ) = ASPECT user\_business\_partner\_number ...

The number of the business partner assigned to the user can be checked instead of the user name.

If the user does not have an assigned business partner, the condition behaves like the Boolean predicate FALSE.

Example

The following CDS view contains an element uname, which contains a user name:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_USR'
@AccessControl.authorizationCheck: #CHECK
define view demo\_cds\_auth\_user
  as select from
    abdocmode
    {
      key uname,
      key langu,
          flag
    };  

The following role can be defined for the view:

@MappingRole: true
define role demo\_cds\_role\_user {  
  grant select on demo\_cds\_auth\_user
    where
      uname ?= aspect user; }

The role grants a user AS ABAP access to his or her own entries in the DDIC database table ABDOCMODE, as well as to entries in which the UNAME column is initial or contains a [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").