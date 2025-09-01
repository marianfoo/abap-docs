  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-Based View, cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) → 

CDS DDL - DDIC-based View, cds\_cond, NULL

Syntax

.... lhs IS *\[*NOT*\]* NULL ...

Effect

Identifies the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") in a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). The relational expression is true if the value of lhs is (not) the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").

The operand lhs must stick to the context-dependent rules listed in topic [CDS DDL - DDIC-based View, cds\_cond, Operands](javascript:call_link\('abencds_cond_expr_operands_v1.htm'\)).

lhs can have any data type except for STRING, RAWSTRING, and GEOM\_EWKB.