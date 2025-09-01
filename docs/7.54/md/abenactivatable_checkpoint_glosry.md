---
title: "activatable_checkpoint_glosry"
description: |
  activatable_checkpoint_glosry - ABAP 7.54 language reference documentation
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenactivatable_checkpoint_glosry.htm"
abapFile: "abenactivatable_checkpoint_glosry.htm"
keywords: ["do", "if", "try", "abenactivatable", "checkpoint", "glosry"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

activatable checkpoint

[Checkpoint](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencheckpoint_glosry.htm "Glossary Entry") that can be assigned to a [checkpoint group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") using the addition ID of the statements [ASSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassert.htm), [BREAK-POINT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapbreak-point.htm), or [LOG-POINT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaplog-point.htm). The behavior of an activatable checkpoint is controlled either by group-specific or program-specific activation settings. Program-specific settings apply to all activatable checkpoints of a program and overwrite the settings of the current checkpoint group.