  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) → 

ABAP CDS - Projection Views

A [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") is defined in the [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") of a [CDS data definition](javascript:call_link\('abencds_data_definition_glosry.htm'\) "Glossary Entry") using the statement [DEFINE VIEW ENTITY AS PROJECTION](javascript:call_link\('abencds_define_view_as_projection.htm'\)) in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") of the [ABAP Core Data Services (CDS)](javascript:call_link\('abencds.htm'\)). DCL source code in a CDS projection view can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

CDS projection views can not be used as data source of other CDS entities. They can, however, be used in ABAP programs as a data type for definitions and in ABAP SQL read statements.

Client handling is done implicitly and automatically for CDS projection views. The rules are the same as for CDS view entities, see section [ABAP CDS - Client Handling in CDS View Entities](javascript:call_link\('abencds_v2_view_client_handling.htm'\)).

Table buffering does not work for CDS projection views, since [buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") in general doesn't work with another [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") as data source.

Continue
[CDS DDL - DEFINE VIEW ENTITY AS PROJECTION](javascript:call_link\('abencds_define_view_as_projection.htm'\))