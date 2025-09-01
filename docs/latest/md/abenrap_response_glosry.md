---
title: "RAP response"
description: |
  Information a RAP BO consumer(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_consumer_glosry.htm 'Glossary Entry') is provided with by a RAP BO provider(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_provider_glosry.htm 'Glossary Entry') vi
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_response_glosry.htm"
abapFile: "abenrap_response_glosry.htm"
keywords: ["do", "if", "try", "method", "data", "types", "abenrap", "response", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20response%2C%20ABENRAP_RESPONSE_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP response

Information a [RAP BO consumer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") is provided with by a [RAP BO provider](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") via the [RAP response parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_response_param_glosry.htm "Glossary Entry") mapped, failed and reported of individual [RAP handler methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") and [RAP saver methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_saver_method_glosry.htm "Glossary Entry").

Depending on the availability of these response parameters in the said methods, the information that is provided can comprise the following:

-   mapped: Used to provided mapping information on [RAP BO instances](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry"), for example, which key values were created for given content IDs ([%cid](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_cid.htm)).
-   failed: Information for identifying the data set for which an error occurred in a RAP operation.
-   reported: Used to exchange error messages for each entity defined in the BDEF and [not related to a specific entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_other.htm).