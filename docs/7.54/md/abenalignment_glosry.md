---
title: "alignment_glosry"
description: |
  alignment_glosry - ABAP 7.54 language reference documentation
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenalignment_glosry.htm"
abapFile: "abenalignment_glosry.htm"
keywords: ["do", "if", "try", "data", "types", "abenalignment", "glosry"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

alignment

Some [data types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_type_glosry.htm "Glossary Entry") are subject to specific alignments dictated by the platform in question. [Fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfield_glosry.htm "Glossary Entry") in the memory that have one of these [types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_glosry.htm "Glossary Entry") must start at an address that is divisible by 2, 4, 8, or 16. In a [structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstructure_glosry.htm "Glossary Entry") or [substructure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensubstructure_glosry.htm "Glossary Entry"), the [component](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomponent_glosry.htm "Glossary Entry") with the highest alignment requirement determines the alignment of the entire structure. [Alignment gaps](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenalignment_gap_glosry.htm "Glossary Entry") may occur before or after components with alignment requirements.

[→ More](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenalignment.htm)