  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) → 

ABAP CDS - DEFINE ROLE, condition

Syntax

... [literal\_condition](javascript:call_link\('abencds_f1_cond_literal.htm'\))
  *|* [pfcg\_condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\))
  *|* aspect\_condition
  *|* [user\_condition](javascript:call_link\('abencds_f1_cond_user.htm'\))
  *|* [inherit\_condition](javascript:call_link\('abencds_f1_cond_inherit.htm'\))
  *|* TRUE
  *|* FALSE
  *|* VOID ...

Effect

Part of an [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") [cond\_expr](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\)) in an [access rule](javascript:call_link\('abenaccess_rule_glosry.htm'\) "Glossary Entry") of the statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) in [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"). The following categories of conditions can be specified, which can be combined using AND or OR:

-   Literal conditions [literal\_condition](javascript:call_link\('abencds_f1_cond_literal.htm'\)) that compare an element of a CDS entity with fixed values.

-   PFCG conditions [pfcg\_condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) that associate an element of a CDS entity with [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") in the [SAP authorization concept](javascript:call_link\('abenbc_authority_check.htm'\)) (which are based on [authorization objects](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry")).

-   Generic aspects aspect\_condition that join elements in a CDS entity with value sets of any other entity that can itself be addressed using the current user name as a selection condition.

-   User conditions [user\_condition](javascript:call_link\('abencds_f1_cond_user.htm'\)) as a special case of a literal condition on whose right side the user name of the current user is used as an operand.

-   Inheritance conditions [inherit\_condition](javascript:call_link\('abencds_f1_cond_inherit.htm'\)) that apply conditions from other CDS roles.

-   Boolean predicates TRUE and FALSE. These conditions are either always met or not met. They are usually not needed in a role definition, but can be created implicitly in the [inheritance of conditions](javascript:call_link\('abencds_f1_cond_inherit.htm'\)) in CDS view extensions.

-   The predicate VOID. A condition with the value VOID is handled as nonexistent.
    VOID conditions are not required in the definition of a role and can be created implicitly in inheritances. The following rules apply in combination with other conditions:

-   X AND VOID = VOID AND X = X

-   X OR VOID = VOID OR X = X

-   NOT VOID = VOID

-   An access rule cannot consist solely of VOID conditions.

On the left side of a condition of this type, it is possible to specify elements of the CDS entity for which the access condition is defined directly or using [path expressions](javascript:call_link\('abencds_f1_path_expression.htm'\)). The following restrictions apply:

-   Only certain [data types](javascript:call_link\('abencds_f1_dcl_cond_data_types.htm'\)) are permitted.

-   Path expressions path\_expr in CDS DCL have the same syntax as [path expressions](javascript:call_link\('abencds_f1_path_expression.htm'\)) in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry").

The result of a condition is true or false.

Notes

-   It is advisable to specify an element in a CDS entity directly in the CDS DCL and to only use path expressions in exceptional cases. More specifically, path expressions with multiple values can have a negative effect on the runtime of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry").

-   The way an access condition defined in a CDS role for a CDS entity is characterized when the CDS entity is accessed using ABAP SQL can be viewed in the [SQL Trace](javascript:call_link\('abensql_trace_glosry.htm'\) "Glossary Entry") tool (transaction ST05), for example as additional [general table expressions](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry"). This implementation is not fixed, however, and can change between releases. More specifically, if further conditions exist, the part condition that results from a CDS role may be reduced (or even omitted). This makes it impossible to detect the access condition in the SQL trace.

Continue
[ABAP CDS - DEFINE ROLE, literal\_condition](javascript:call_link\('abencds_f1_cond_literal.htm'\))
[ABAP CDS - DEFINE ROLE, pfcg\_condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\))
[ABAP CDS - DEFINE ROLE, aspect\_condition](javascript:call_link\('abencds_f1_cond_aspect.htm'\))
[ABAP CDS - DEFINE ROLE, user\_condition](javascript:call_link\('abencds_f1_cond_user.htm'\))
[ABAP CDS - DEFINE ROLE, inherit\_condition](javascript:call_link\('abencds_f1_cond_inherit.htm'\))
[ABAP CDS - DEFINE ROLE, Data Types](javascript:call_link\('abencds_f1_dcl_cond_data_types.htm'\))
[ABAP CDS - DEFINE ROLE, Left Side Host Expressions](javascript:call_link\('abencds_dcl_cond_left_side.htm'\))