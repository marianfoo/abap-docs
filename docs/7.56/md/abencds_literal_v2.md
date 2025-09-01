  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Elementary CDS Operands](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_operands_v2.htm) → 

CDS DDL - CDS View Entity, literal

[CDS literals](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_literal_glosry.htm "Glossary Entry") can be used in a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry").

In CDS, there are two different kinds of literals:

-   [Typed literals](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_typed_literal_v2.htm) (cover most built-in types of the ABAP Dictionary)
-   [Untyped literals](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_untyped_literal_v2.htm) (character literals and numeric literals)

Rules for escaping in typed and untyped literals in ABAP CDS:

-   A backslash (\\) is escaped with a backslash: '...\\\\...'
-   A single quote (') is escaped with a single quote:'...''...'.

Hints

-   The [literal operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenliteral_operator_glosry.htm "Glossary Entry") is not supported for CDS literals.
-   [Fixed Domain values](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_literal_v1.htm) are not supported in [CDS view entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). However, if a CDS view entity selects data from another CDS entity with fixed domain values, then these elements with fixed domain values can be included in the current view entity.

Continue
[CDS DDL - CDS View Entity, Typed Literals](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_typed_literal_v2.htm)
[CDS DDL - CDS View Entity, Untyped Literal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_untyped_literal_v2.htm)