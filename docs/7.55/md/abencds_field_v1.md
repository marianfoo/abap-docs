  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-based View, Elementary CDS Operands](javascript:call_link\('abencds_operands_v1.htm'\)) → 

CDS DDL - DDIC-based View, field

Syntax

... *\[*entity.*\]*field*|**\[*alias.*\]*field ...

Effect

Field of a [data source](javascript:call_link\('abencds_data_source_v1.htm'\)) entity of the current [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). field expects the actual name of the element. Any alternative element names defined using [AS](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) cannot be used, with the exception of the ON condition of a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry").

If the view entity makes use of multiple [data sources](javascript:call_link\('abencds_data_source_v1.htm'\)) by using join expressions, then you must ensure that all field names are unique. If a field name field is not unique, then field must be prefixed with the name entity of the data source or with the alias name alias of the data source separated by a period (.). If the field name is unique, it may but does not need to be prefixed.