---
title: "ABAP CDS - Client Handling in CDS Hierarchies"
description: |
  For CDS hierarchies, client handling cannot be defined using annotations. Instead client handling is defined in advance as follows: -   Client dependency is determined in the same way as when the annotation @ClientHandling.type : #INHERITED(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-U
version: "7.58"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_hiera_client_handling.htm"
abapFile: "abencds_hiera_client_handling.htm"
keywords: ["do", "if", "try", "data", "abencds", "hiera", "client", "handling"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - Hierarchies](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_hierarchies.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Client%20Handling%20in%20CDS%20Hierarchies%2C%20ABENCDS_HIERA_CLIENT_HANDLING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%2
0for%20improvement:)

ABAP CDS - Client Handling in CDS Hierarchies

For CDS hierarchies, client handling cannot be defined using annotations. Instead client handling is defined in advance as follows:

-   Client dependency is determined in the same way as when the annotation [@ClientHandling.type : #INHERITED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_client_handling_v1.htm) is specified for a [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_client_handling_v1.htm). The client dependency of a hierarchy is determined by the client dependency of the CDS view used as its data source.
-   In a client-dependent CDS hierarchy, and before the hierarchy is generated, all rows are removed implicitly from the result set of the CDS view specified as a data source that do not match the client ID currently specified in the [session variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_session_variable_v1.htm).