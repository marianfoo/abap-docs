---
title: "dynpro_sequence_glosry"
description: |
  dynpro_sequence_glosry - ABAP 7.52 language reference documentation
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_sequence_glosry.htm"
abapFile: "abendynpro_sequence_glosry.htm"
keywords: ["do", "try", "abendynpro", "sequence", "glosry"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) → 

dynpro sequence

The sequence in which [dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry") are processed whose flow is determined by the [next dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennext_dynpro_glosry.htm "Glossary Entry") for each dynpro in the sequence. The first dynpro in a dynpro sequence is the [initial dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninitial_dynpro_glosry.htm "Glossary Entry"). Dynpro sequences are called using [transaction codes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentransaction_code_glosry.htm "Glossary Entry") or [CALL SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_screen.htm). A dynpro sequence always part of a single [popup level](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpop-up_level_glosry.htm "Glossary Entry") and is executed in a single [GUI window](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengui_window_glosry.htm "Glossary Entry"). A dynpro sequence is ended when the next dynpro with the [dynpro number](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_number_glosry.htm "Glossary Entry") 0 is called.

[→ More](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros_processing.htm)