  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [Obsolete CDS Language Elements](javascript:call_link\('abencds_obsolete.htm'\)) →  [Obsolete CDS Entities](javascript:call_link\('abencds_entities_obsolete.htm'\)) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views (Obsolete)](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-Based View, Elementary CDS Operands](javascript:call_link\('abencds_operands_v1.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20field%2C%20ABENCDS_FIELD_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS DDL - DDIC-Based View, field

Syntax

... *\[*entity.*\]*field*|**\[*alias.*\]*field ...

Effect

Field of a [data source](javascript:call_link\('abencds_data_source_v1.htm'\)) entity of the current [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). field expects the actual name of the element. Any alternative element names defined using [AS](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) cannot be used, with the exception of the ON condition of a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry").

If the view entity makes use of multiple [data sources](javascript:call_link\('abencds_data_source_v1.htm'\)) by using join expressions, then you must ensure that all field names are unique. If a field name field is not unique, then field must be prefixed with the name entity of the data source or with the alias name alias of the data source separated by a period (.). If the field name is unique, it may but does not need to be prefixed.