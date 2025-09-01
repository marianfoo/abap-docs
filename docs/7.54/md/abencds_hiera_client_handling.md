  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - Hierarchies](javascript:call_link\('abenddic_cds_hierarchies.htm'\)) → 

ABAP CDS - Client Handling in CDS Hierarchies

For CDS hierarchies, client handling cannot be defined using annotations (as is the case in [CDS views](javascript:call_link\('abencds_client_handling.htm'\))). Instead, client handling is defined in advance as follows:

-   Client dependency is determined in the same way as when the annotation [@ClientHandling.type : #INHERITED](javascript:call_link\('abencds_client_handling.htm'\)) is specified for a CDS view. The client dependency of a hierarchy is determined by the client dependency of the CDS view used as its data source.

-   In a client-specific CDS hierarchy, and before the hierarchy is generated, all rows are removed implicitly from the results set of the CDS view specified as a data source that do not match the client ID currently specified in the [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") [$session.client](javascript:call_link\('abencds_f1_session_variable.htm'\)).