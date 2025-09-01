---
title: "area_handle_glosry"
description: |
  area_handle_glosry - ABAP 7.56 language reference documentation
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarea_handle_glosry.htm"
abapFile: "abenarea_handle_glosry.htm"
keywords: ["do", "try", "method", "class", "abenarea", "handle", "glosry"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

area handle

Instance of an [area class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarea_class_glosry.htm "Glossary Entry"). An area handle allows an ABAP program access to an [area instance version](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") in the [shared memory](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenshared_memory_glosry.htm "Glossary Entry") and to the [shared objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenshared_objects_glosry.htm "Glossary Entry") stored there. An area handle is created by the static methods of its area class and is bound to an area instance version. Each bound area handle sets an [area lock](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarea_lock_glosry.htm "Glossary Entry") on the affected area instance version.

[→ More about](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenshm_area_instance_handle.htm)