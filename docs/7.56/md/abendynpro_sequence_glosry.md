---
title: "dynpro_sequence_glosry"
description: |
  dynpro_sequence_glosry - ABAP 7.56 language reference documentation
version: "7.56"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_sequence_glosry.htm"
abapFile: "abendynpro_sequence_glosry.htm"
keywords: ["do", "try", "abendynpro", "sequence", "glosry"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

dynpro sequence

Processing sequence of [dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_glosry.htm "Glossary Entry") whose flow is determined by the [next dynpro](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennext_dynpro_glosry.htm "Glossary Entry") for each dynpro involved. The first dynpro in a dynpro sequence is the [initial dynpro](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninitial_dynpro_glosry.htm "Glossary Entry"). Dynpro sequences are called using [transaction codes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentransaction_code_glosry.htm "Glossary Entry") or [CALL SCREEN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_screen.htm). A dynpro sequence always belongs to a single [popup level](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpop-up_level_glosry.htm "Glossary Entry") and is executed in a single [GUI window](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengui_window_glosry.htm "Glossary Entry"). A dynpro sequence is ended when the next dynpro with the [dynpro number](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_number_glosry.htm "Glossary Entry") 0 is called.

[→ More about](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_processing.htm)