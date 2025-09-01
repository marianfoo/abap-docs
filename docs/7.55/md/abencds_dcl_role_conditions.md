  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ROLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_role.htm) → 

CDS DCL - DEFINE ROLE, condition

Syntax

... [literal\_condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_literal.htm)
  *|* [pfcg\_condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_pfcg.htm)
  *|* aspect\_condition
  *|* [user\_condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_user.htm)
  *|* [inherit\_condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_inherit.htm)
  *|* TRUE
  *|* FALSE
  *|* VOID ...

Effect

Part of an [access condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cds\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_role_cond_expr.htm) in an [access rule](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenaccess_rule_glosry.htm "Glossary Entry") of the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_role.htm) in [CDS DCL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_glosry.htm "Glossary Entry"). The following categories of conditions can be specified, which can be combined using AND or OR:

-   Literal conditions [literal\_condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_literal.htm) that compare an element of a CDS entity with fixed values.

-   PFCG conditions [pfcg\_condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_pfcg.htm) that associate an element of a CDS entity with [authorizations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenauthorization_glosry.htm "Glossary Entry") in the [SAP authorization concept](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbc_authority_check.htm) (which are based on [authorization objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenauthorization_object_glosry.htm "Glossary Entry")).

-   Self-defined aspects aspect\_condition that join elements in a CDS entity with value sets of any other entity that can itself be addressed using the current user name as a selection condition.

-   User conditions [user\_condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_user.htm) as a special case of a literal condition on whose right side the user name of the current user is used as an operand.

-   Inheritance conditions [inherit\_condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_inherit.htm) that apply conditions from other CDS roles.

-   Boolean predicates TRUE and FALSE. These conditions are either always met or not met. They are usually not needed in a role definition, but can be created implicitly in the [inheritance of conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_inherit.htm).

-   The predicate VOID. A condition with the value VOID is handled as nonexistent.
    VOID conditions are not required in the definition of a role and can be created implicitly in inheritances. The following rules apply in combination with other conditions:

-   X AND VOID = VOID AND X = X

-   X OR VOID = VOID OR X = X

-   NOT VOID = VOID

-   An access rule cannot consist solely of VOID conditions.

On the left side of a condition of this type, it is possible to specify elements of the CDS entity for which the access condition is defined directly or using [path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpath_expression_glosry.htm "Glossary Entry"). The following restrictions apply:

-   Only certain [data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_cond_data_types.htm) are allowed.

-   Path expressions path\_expr in CDS DCL have the same syntax as [path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v2.htm) in [CDS DDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddl_glosry.htm "Glossary Entry").

Hints

-   It is advisable to specify an element in a CDS entity directly in the CDS DCL and to only use path expressions in exceptional cases. More specifically, path expressions with multiple values can have a negative effect on the runtime of a [query](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenquery_glosry.htm "Glossary Entry").

-   The way an access condition defined in a CDS role for a CDS entity is represented when the CDS entity is accessed using ABAP SQL can be viewed in the [SQL Trace](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_trace_glosry.htm "Glossary Entry") tool (transaction ST05), for example as additional [common table expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencommon_table_expression_glosry.htm "Glossary Entry"). This implementation is not fixed, however, and can change between releases. More specifically, if further conditions exist, the part condition that results from a CDS role may be reduced (or even omitted).

Continue
[CDS DCL - DEFINE ROLE, literal\_condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_literal.htm)
[CDS DCL - DEFINE ROLE, pfcg\_condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_pfcg.htm)
[CDS DCL - DEFINE ROLE, aspect\_condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_aspect.htm)
[CDS DCL - DEFINE ROLE, user\_condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_user.htm)
[CDS DCL - DEFINE ROLE, inherit\_condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_inherit.htm)
[CDS DCL - DEFINE ROLE, Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_cond_data_types.htm)
[CDS DCL - DEFINE ROLE, Left Side Host Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_cond_left_side.htm)