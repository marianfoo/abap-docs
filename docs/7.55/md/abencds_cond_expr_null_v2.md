  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\)) → 

CDS DDL - CDS View Entity, cds\_cond, NULL

Syntax

.... lhs IS *\[*NOT*\]* NULL ...

Effect

Identifies the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") in a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"). The relational expression is true if the value of lhs is (not) the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").

The operand lhs must stick to the context-dependent rules listed in topic [CDS DDL - View Entity, cds\_cond, Operands](javascript:call_link\('abencds_cond_expr_operands_v2.htm'\)).

lhs can have any data type except of STRING, RAWSTRING, and GEOM\_EWKB.