---
title: "RAP response parameter"
description: |
  Implicit changing parameters of RAP handler methods(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_handler_method_glosry.htm 'Glossary Entry') and RAP saver methods(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_method_glosry.htm 'Glossary Entry') (i
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_response_param_glosry.htm"
abapFile: "abenrap_response_param_glosry.htm"
keywords: ["do", "if", "try", "method", "data", "types", "abenrap", "response", "param", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20response%20parameter%2C%20ABENRAP_RESPONSE_PARAM_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP response parameter

Implicit changing parameters of [RAP handler methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") and [RAP saver methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_method_glosry.htm "Glossary Entry") (implicitly) typed with the [BDEF derived type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") [... TYPE RESPONSE FOR ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_response_for.htm). Depending on the RAP handler or saver method, the signatures of the individual methods can include all of the following three formal parameters mapped, failed and reported, a subset or none of them. The names of the parameters are predefined. They are used to provide a [RAP BO consumer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") with information by a [RAP BO provider](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry").

Parameters:

-   failed: Information for identifying the data set for which an error occurred in a RAP operation
-   reported: Used to exchange messages (for example, error messages) for each entity defined in the BDEF and [not related to a specific entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_other.htm).
-   mapped: Used to provide mapping information on [RAP BO instances](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry"), for example, which key values were created for given content IDs ([%cid](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_cid.htm)).