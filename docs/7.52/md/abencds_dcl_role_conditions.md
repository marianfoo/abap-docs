  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) → 

ABAP CDS - DEFINE ROLE, condition

Syntax

... [literal\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm)*|* [pfcg\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm)*|*[user\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_user.htm)  ...

Effect

Part of an [access condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cond\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm) in an [access rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_rule_glosry.htm "Glossary Entry") of the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) in the [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry"). Three categories of conditions can be specified, which can be combined using AND or OR:

-   Literal conditions [literal\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm) that compare an element of a CDS entity with fixed values.

-   PFCG conditions [pfcg\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm) that associate an element of a CDS entity with [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") in the [SAP authorization concept](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbc_authority_check.htm) (which are based on [authorization objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_object_glosry.htm "Glossary Entry")).

-   User conditions [user\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_user.htm) as a special case of a literal condition on whose right side the user name of the current user is used as an operand.

On the left side of a condition of this type, it is possible to specify elements of the CDS entity for which the access condition is defined directly or using [path expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm). The following restrictions apply:

-   Only certain [data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_data_types.htm) are permitted.

-   Path expressions path\_expr in CDS DCL have the same syntax as [path expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) in [CDS DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry").

The result of a condition is true or false.

Notes

-   It is advisable to specify an element in a CDS entity directly in the CDS DCL and to only use path expressions in exceptional cases.

-   The way an access condition defined in a CDS role for a CDS entity is characterized when the CDS entity is accessed using Open SQL can be viewed in the [SQL Trace](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_trace_glosry.htm "Glossary Entry") tool (transaction ST05), for example as additional [common table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencommon_table_expression_glosry.htm "Glossary Entry"). This implementation is not fixed, however, and can change between releases. More specifically, if further conditions exist, the part condition that results from a CDS role may be reduced (or even omitted). This makes it impossible to detect the access condition in the SQL trace.

Continue
[ABAP CDS - DEFINE ROLE, literal\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm)
[ABAP CDS - DEFINE ROLE, pfcg\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm)
[ABAP CDS - DEFINE ROLE, user\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_user.htm)
[ABAP CDS - DEFINE ROLE, Data Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_data_types.htm)