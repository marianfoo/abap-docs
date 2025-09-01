  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ROLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_role.htm) →  [CDS DCL - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_role_conditions.htm) → 

CDS DCL - DEFINE ROLE, user\_condition

Syntax

... element [\=*|*<>*|*?=](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_cond_expression.htm) ASPECT user ...

Variants:

[1\. ... ( element ) = ASPECT user\_alias ...](#!ABAP_VARIANT_1@1@)
[2\. ... ( element ) = ASPECT user\_business\_partner\_number ...](#!ABAP_VARIANT_2@2@)

Effect

User condition as part of an [access condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cds\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_role_cond_expr.htm) in an [access rule](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_role_rules.htm) of the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_role.htm) in [CDS DCL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_glosry.htm "Glossary Entry"). In a user condition, the predefined [aspect](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_aspect_glosry.htm "Glossary Entry") user is specified on the right side introduced with ASPECT.

The left side is compared with the [user name](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuser_name_glosry.htm "Glossary Entry") of the user currently logged on to AS ABAP by using one of the three operators [\=](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_cond_expression.htm), [<>](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_cond_expression.htm), [?=](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_cond_expression.htm), as in a [literal condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_cond_expression.htm).

Hints

-   User conditions can be combined within an access rule using [literal conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_literal.htm) and [PFCG conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_pfcg.htm), and [inheritance conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_inherit.htm).

-   A user condition acts like a comparison with the session variable [$session.user](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_session_variable_v2.htm) in the [CDS DDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddl_glosry.htm "Glossary Entry"). It is not currently possible to use session variables on the right side of conditions in DCL.
    

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

The role grants a user AS ABAP access to his or her own entries in the DDIC database table ABDOCMODE, as well as to entries in which the UNAME column is initial or contains a [null value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennull_value_glosry.htm "Glossary Entry").