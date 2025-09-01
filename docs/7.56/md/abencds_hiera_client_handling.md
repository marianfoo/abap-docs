  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Hierarchies](javascript:call_link\('abencds_hierarchies.htm'\)) → 

ABAP CDS - Client Handling in CDS Hierarchies

For CDS hierarchies, client handling cannot be defined using annotations. Instead client handling is defined in advance as follows:

-   Client dependency is determined in the same way as when the annotation [@ClientHandling.type : #INHERITED](javascript:call_link\('abencds_view_client_handling_v1.htm'\)) is specified for a [CDS DDIC-based views](javascript:call_link\('abencds_view_client_handling_v1.htm'\)). The client dependency of a hierarchy is determined by the client dependency of the CDS view used as its data source.
-   In a client-dependent CDS hierarchy, and before the hierarchy is generated, all rows are removed implicitly from the result set of the CDS view specified as a data source that do not match the client ID currently specified in the [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") [$session.client](javascript:call_link\('abencds_session_variable_v1.htm'\)).