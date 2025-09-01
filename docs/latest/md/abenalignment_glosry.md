---
title: "alignment_glosry"
description: |
  alignment_glosry - ABAP latest language reference documentation
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenalignment_glosry.htm"
abapFile: "abenalignment_glosry.htm"
keywords: ["do", "if", "try", "data", "types", "abenalignment", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20alignment%2C%20ABENALIGNMENT_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

alignment

Most [data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_type_glosry.htm "Glossary Entry") are subject to specific alignment requirements depending on the current platform. In memory, [fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield_glosry.htm "Glossary Entry") of this [type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentype_glosry.htm "Glossary Entry") must start at addresses that are divisible by 2, 4, 8, or 16. In a [structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructure_glosry.htm "Glossary Entry") or [substructure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubstructure_glosry.htm "Glossary Entry"), the [structure component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructure_component_glosry.htm "Glossary Entry") with the highest alignment requirement determines the alignment of the entire structure, where [alignment gaps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenalignment_gap_glosry.htm "Glossary Entry") are created before or after components with alignment requirements.

[→ More about](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenalignment.htm)