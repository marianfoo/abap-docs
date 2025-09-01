---
title: "CDS DCL - DEFINE ROLE, condition"
description: |
  Syntax ... literal_condition(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_literal.htm)  pfcg_condition(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_pfcg.htm)  aspect_condition(https://help.sap.com/doc/abapdocu_758_index_htm/7
version: "7.58"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_role_conditions.htm"
abapFile: "abencds_dcl_role_conditions.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abencds", "dcl", "role", "conditions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ROLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_role.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DCL%20-%20DEFINE%20ROLE%2C%20condition%2C%20ABENCDS_DCL_ROLE_CONDITIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

CDS DCL - DEFINE ROLE, condition

Syntax

... [literal\_condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_literal.htm)
  *|* [pfcg\_condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_pfcg.htm)
  *|* [aspect\_condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_aspect.htm)
  *|* [user\_condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_user.htm)
  *|* [inherit\_condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_inherit.htm)
  *|* [dcl\_function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_function.htm)
  *|* TRUE
  *|* FALSE
  *|* VOID
  *|* [if\_then\_else](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_ifthenelse.htm) ...

Effect

Part of an [access condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cds\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_role_cond_expr.htm) in an [access rule](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaccess_rule_glosry.htm "Glossary Entry") of the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_role.htm) in [CDS DCL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_glosry.htm "Glossary Entry"). The following categories of conditions can be specified, which can be combined using AND or OR:

-   Literal conditions [literal\_condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_literal.htm) that compare an element of a CDS entity with fixed values.
-   PFCG conditions [pfcg\_condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_pfcg.htm) that associate an element of a CDS entity with [authorizations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenauthorization_glosry.htm "Glossary Entry") in the [SAP authorization concept](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbc_authority_check.htm) (which are based on [authorization objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenauthorization_object_glosry.htm "Glossary Entry")).
-   User-defined aspects [aspect\_condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_aspect.htm) that join elements in a CDS entity with value sets of any other entity that can itself be addressed using the current user name as a selection condition.
-   User conditions [user\_condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_user.htm) as a special case of a literal condition on whose right side the user name of the current user is used as an operand.
-   Inheritance conditions [inherit\_condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_inherit.htm) that apply conditions from other CDS roles.
-   DCL functions [dcl\_function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_function.htm) are evaluated in the application server before the statement is sent to the database. The currently existing DCL functions return a Boolean predicate and in combination with AND and OR conditions allow enabling or disabling parts of the access conditions based on the function result.
-   Boolean predicates TRUE and FALSE. These conditions are either always met or not met. They are usually not needed in a role definition, but can be created implicitly in the [inheritance of conditions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_inherit.htm).
-   The predicate VOID. A condition with the value VOID is handled as nonexistent.
    
    VOID conditions are not required in the definition of a role and can be created implicitly in inheritances. The following rules apply in combination with other conditions:
    
    -   X AND VOID = VOID AND X = X
    -   X OR VOID = VOID OR X = X
    -   NOT VOID = VOID
    -   An access rule cannot consist solely of VOID conditions.
-   Control structures [if\_then\_else](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_ifthenelse.htm).

On the left side of a condition of this type, it is possible to specify elements of the CDS entity for which the access condition is defined directly or using [path expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpath_expression_glosry.htm "Glossary Entry"). The following restrictions apply:

-   Only certain [data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_cond_data_types.htm) are allowed.
-   Path expressions path\_expr in CDS DCL have the same syntax as [path expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v2.htm) in [CDS DDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddl_glosry.htm "Glossary Entry").

Hints

-   It is advisable to specify an element in a CDS entity directly in the CDS DCL and to only use path expressions in exceptional cases. More specifically, path expressions with multiple values can have a negative effect on the runtime of a [query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenquery_glosry.htm "Glossary Entry").
-   The way an access condition defined in a CDS role for a CDS entity is represented when the CDS entity is accessed using ABAP SQL can be viewed in the [SQL Trace](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_trace_glosry.htm "Glossary Entry") tool (transaction ST05), for example as additional [common table expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencommon_table_expression_glosry.htm "Glossary Entry"). This implementation is not fixed, however, and can change between releases. More specifically, if further conditions exist, the part condition that results from a CDS role may be reduced (or even omitted).

Continue
[CDS DCL - DEFINE ROLE, literal\_condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_literal.htm)
[CDS DCL - DEFINE ROLE, pfcg\_condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_pfcg.htm)
[CDS DCL - DEFINE ROLE, aspect\_condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_aspect.htm)
[CDS DCL - DEFINE ROLE, user\_condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_user.htm)
[CDS DCL - DEFINE ROLE, inherit\_condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_inherit.htm)
[CDS DCL - DEFINE ROLE, dcl\_function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_function.htm)
[CDS DCL - DEFINE ROLE, if\_then\_else](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_ifthenelse.htm)
[CDS DCL - DEFINE ROLE, Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_cond_data_types.htm)
[CDS DCL - DEFINE ROLE, Left Side Host Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_cond_left_side.htm)