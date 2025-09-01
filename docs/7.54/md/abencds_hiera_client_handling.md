---
title: "ABAP CDS - Client Handling in CDS Hierarchies"
description: |
  For CDS hierarchies, client handling cannot be defined using annotations (as is the case in CDS views(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm)). Instead, client handling is defined in advance as follows: -   Client dependency is determined in the same
version: "7.54"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hiera_client_handling.htm"
abapFile: "abencds_hiera_client_handling.htm"
keywords: ["do", "if", "case", "try", "data", "abencds", "hiera", "client", "handling"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - Hierarchies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_hierarchies.htm) → 

ABAP CDS - Client Handling in CDS Hierarchies

For CDS hierarchies, client handling cannot be defined using annotations (as is the case in [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm)). Instead, client handling is defined in advance as follows:

-   Client dependency is determined in the same way as when the annotation [@ClientHandling.type : #INHERITED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm) is specified for a CDS view. The client dependency of a hierarchy is determined by the client dependency of the CDS view used as its data source.

-   In a client-specific CDS hierarchy, and before the hierarchy is generated, all rows are removed implicitly from the results set of the CDS view specified as a data source that do not match the client ID currently specified in the [session variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm).