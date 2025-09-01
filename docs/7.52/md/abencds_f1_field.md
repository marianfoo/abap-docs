  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) → 

ABAP CDS - field

Syntax

... *\[*entity.*\]*field*|**\[*alias.*\]*field ...

Effect

Field of a [data source](javascript:call_link\('abencds_f1_data_source.htm'\)) entity of the current [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). FIELD expects the actual name of the element. Any alternative element names defined using [AS](javascript:call_link\('abencds_f1_select_list_entry.htm'\)) cannot be used, with the exception of the ON condition of an [association](javascript:call_link\('abencds_f1_association.htm'\)).

If the field name field is not unique, the data source must be prefixed with a name entity separated by a period (.) or an alias name alias defined using [AS](javascript:call_link\('abencds_f1_data_source.htm'\)). A name can be prefixed if the field name is unique, but this is not mandatory.