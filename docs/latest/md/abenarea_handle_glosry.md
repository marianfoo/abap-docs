---
title: "area_handle_glosry"
description: |
  area_handle_glosry - ABAP latest language reference documentation
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarea_handle_glosry.htm"
abapFile: "abenarea_handle_glosry.htm"
keywords: ["do", "if", "try", "method", "class", "abenarea", "handle", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20area%20handle%2C%20ABENAREA_HANDLE_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

area handle

Instance of an [area class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarea_class_glosry.htm "Glossary Entry"). An area handle allows an ABAP program access to an [area instance version](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") in the [shared memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshared_memory_glosry.htm "Glossary Entry") and to the [shared objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshared_objects_glosry.htm "Glossary Entry") stored there. An area handle is created by the static methods of its area class and is bound to an area instance version. Each bound area handle sets an [area lock](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarea_lock_glosry.htm "Glossary Entry") on the affected area instance version.

[→ More about](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshm_area_instance_handle.htm)