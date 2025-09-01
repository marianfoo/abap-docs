---
title: "Syntax"
description: |
  ...ALLEXISTS element =<>?=(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_cond_expression.htm) ASPECT user ... Variants: 1. ... ( element ) = ASPECT user_alias ...(#!ABAP_VARIANT_1@1@) 2. ... ( element ) = ASPECT user_business_partner_numb
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_user.htm"
abapFile: "abencds_f1_cond_user.htm"
keywords: ["select", "do", "if", "try", "data", "abencds", "cond", "user"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ROLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_role.htm) →  [CDS DCL - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_conditions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DCL%20-%20DEFINE%20ROLE%2C%20user_condition%2C%20ABENCDS_F1_COND_USER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

CDS DCL - DEFINE ROLE, user\_condition

Syntax

...*\[*ALL*|*EXISTS*\]* element [\=*|*<>*|*?=](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_cond_expression.htm) ASPECT user ...

Variants:

[1\. ... ( element ) = ASPECT user\_alias ...](#!ABAP_VARIANT_1@1@)
[2\. ... ( element ) = ASPECT user\_business\_partner\_number ...](#!ABAP_VARIANT_2@2@)

Addition:

[... ALL*|*EXISTS](#!ABAP_ONE_ADD@1@)

Effect

User condition as part of an [access condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cds\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_cond_expr.htm) in an [access rule](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_rules.htm) of the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_role.htm) in [CDS DCL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_glosry.htm "Glossary Entry"). In a user condition, the predefined [aspect](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aspect_glosry.htm "Glossary Entry") user is specified on the right side introduced with ASPECT.

The left side is compared with the [user name](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuser_name_glosry.htm "Glossary Entry") of the user currently logged on to AS ABAP by using one of the three operators [\=](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_cond_expression.htm), [<>](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_cond_expression.htm), [?=](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_cond_expression.htm), as in a [literal condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_cond_expression.htm).

The behavior when element is declared as optional element and missing at runtime is the same as for literal conditions.

Hints

-   User conditions can be combined within an access rule using [literal conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_literal.htm) and [PFCG conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_pfcg.htm), and [inheritance conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_inherit.htm).
-   A user condition acts like a comparison with the session variable [$session.user](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_variable_v2.htm) in the [CDS DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddl_glosry.htm "Glossary Entry"). It is not currently possible to use session variables on the right side of conditions in DCL.
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

The role grants a user AS ABAP access to his or her own entries in the DDIC database table ABDOCMODE, as well as to entries in which the UNAME column is initial or contains a [null value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_value_glosry.htm "Glossary Entry").