---
title: "ABAP CDS - Obsolete Client Handling in Table Functions"
description: |
  Before the annotation @ClientHandling.type(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_function_annotations.htm) with the values #CLIENT_DEPENDENT and #CLIENT_INDEPENDENT was introduced, the client dependency(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/
version: "7.53"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_func_client_handling_obs.htm"
abapFile: "abencds_func_client_handling_obs.htm"
keywords: ["do", "if", "data", "abencds", "func", "client", "handling", "obs"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - Table Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_table_functions.htm) →  [ABAP CDS - Client Handling in CDS Table Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_func_client_handling.htm) → 

ABAP CDS - Obsolete Client Handling in Table Functions

Before the annotation [@ClientHandling.type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_function_annotations.htm) with the values #CLIENT\_DEPENDENT and #CLIENT\_INDEPENDENT was introduced, the [client dependency](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_func_client_handling.htm) of a CDS table function was switched on and off using the annotation ClientDependent with the values true and false.

-   The annotation ClientDependent:true works like @ClientHandling.type:#CLIENT\_DEPENDENT.

-   The annotation ClientDependent:false works like @ClientHandling.type:#CLIENT\_INDEPENDENT.

Only the annotation @ClientHandling.type should now be used in new CDS table functions. The annotations @ClientHandling and @ClientDependent cannot be used together in the definition of a CDS table function. If neither of the annotations @ClientHandling.type and @ClientDependent is specified, the default value of @ClientHandling.type applies.