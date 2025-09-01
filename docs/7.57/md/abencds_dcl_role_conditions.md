  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [CDS DCL - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DCL - DEFINE ROLE, condition, ABENCDS_DCL_ROLE_CONDITIONS, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DCL - DEFINE ROLE, condition

Syntax

... [literal\_condition](javascript:call_link\('abencds_f1_cond_literal.htm'\))
  *|* [pfcg\_condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\))
  *|* [aspect\_condition](javascript:call_link\('abencds_f1_cond_aspect.htm'\))
  *|* [user\_condition](javascript:call_link\('abencds_f1_cond_user.htm'\))
  *|* [inherit\_condition](javascript:call_link\('abencds_f1_cond_inherit.htm'\))
  *|* [dcl\_function](javascript:call_link\('abencds_f1_dcl_function.htm'\))
  *|* TRUE
  *|* FALSE
  *|* VOID ...

Effect

Part of an [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") [cds\_cond](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\)) in an [access rule](javascript:call_link\('abenaccess_rule_glosry.htm'\) "Glossary Entry") of the statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) in [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"). The following categories of conditions can be specified, which can be combined using AND or OR:

-   Literal conditions [literal\_condition](javascript:call_link\('abencds_f1_cond_literal.htm'\)) that compare an element of a CDS entity with fixed values.
-   PFCG conditions [pfcg\_condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) that associate an element of a CDS entity with [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") in the [SAP authorization concept](javascript:call_link\('abenbc_authority_check.htm'\)) (which are based on [authorization objects](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry")).
-   Self-defined aspects aspect\_condition that join elements in a CDS entity with value sets of any other entity that can itself be addressed using the current user name as a selection condition.
-   User conditions [user\_condition](javascript:call_link\('abencds_f1_cond_user.htm'\)) as a special case of a literal condition on whose right side the user name of the current user is used as an operand.
-   Inheritance conditions [inherit\_condition](javascript:call_link\('abencds_f1_cond_inherit.htm'\)) that apply conditions from other CDS roles.
-   DCL functions [dcl\_function](javascript:call_link\('abencds_f1_dcl_function.htm'\)) are evaluated in the application server before the statement is sent to the database. The currently existing DCL functions return a Boolean predicate and in combination with AND and OR conditions allow enabling or disabling parts of the access conditions based on the function result.
-   Boolean predicates TRUE and FALSE. These conditions are either always met or not met. They are usually not needed in a role definition, but can be created implicitly in the [inheritance of conditions](javascript:call_link\('abencds_f1_cond_inherit.htm'\)).
-   The predicate VOID. A condition with the value VOID is handled as nonexistent.
    
    VOID conditions are not required in the definition of a role and can be created implicitly in inheritances. The following rules apply in combination with other conditions:
    
    -   X AND VOID = VOID AND X = X
    -   X OR VOID = VOID OR X = X
    -   NOT VOID = VOID
    -   An access rule cannot consist solely of VOID conditions.

On the left side of a condition of this type, it is possible to specify elements of the CDS entity for which the access condition is defined directly or using [path expressions](javascript:call_link\('abenpath_expression_glosry.htm'\) "Glossary Entry"). The following restrictions apply:

-   Only certain [data types](javascript:call_link\('abencds_f1_dcl_cond_data_types.htm'\)) are allowed.
-   Path expressions path\_expr in CDS DCL have the same syntax as [path expressions](javascript:call_link\('abencds_path_expression_v2.htm'\)) in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry").

Hints

-   It is advisable to specify an element in a CDS entity directly in the CDS DCL and to only use path expressions in exceptional cases. More specifically, path expressions with multiple values can have a negative effect on the runtime of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry").
-   The way an access condition defined in a CDS role for a CDS entity is represented when the CDS entity is accessed using ABAP SQL can be viewed in the [SQL Trace](javascript:call_link\('abensql_trace_glosry.htm'\) "Glossary Entry") tool (transaction ST05), for example as additional [common table expressions](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry"). This implementation is not fixed, however, and can change between releases. More specifically, if further conditions exist, the part condition that results from a CDS role may be reduced (or even omitted).

Continue
[CDS DCL - DEFINE ROLE, literal\_condition](javascript:call_link\('abencds_f1_cond_literal.htm'\))
[CDS DCL - DEFINE ROLE, pfcg\_condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\))
[CDS DCL - DEFINE ROLE, aspect\_condition](javascript:call_link\('abencds_f1_cond_aspect.htm'\))
[CDS DCL - DEFINE ROLE, user\_condition](javascript:call_link\('abencds_f1_cond_user.htm'\))
[CDS DCL - DEFINE ROLE, inherit\_condition](javascript:call_link\('abencds_f1_cond_inherit.htm'\))
[CDS DCL - DEFINE ROLE, dcl\_function](javascript:call_link\('abencds_f1_dcl_function.htm'\))
[CDS DCL - DEFINE ROLE, Data Types](javascript:call_link\('abencds_f1_dcl_cond_data_types.htm'\))
[CDS DCL - DEFINE ROLE, Left Side Host Expressions](javascript:call_link\('abencds_dcl_cond_left_side.htm'\))