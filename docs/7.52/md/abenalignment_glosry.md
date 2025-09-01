---
title: "alignment_glosry"
description: |
  alignment_glosry - ABAP 7.52 language reference documentation
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenalignment_glosry.htm"
abapFile: "abenalignment_glosry.htm"
keywords: ["do", "if", "try", "data", "types", "abenalignment", "glosry"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) → 

alignment

Some [data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_type_glosry.htm "Glossary Entry"), such as [numeric data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumeric_data_type_glosry.htm "Glossary Entry") (other than p and the [deep](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeep_glosry.htm "Glossary Entry") data types), have specific alignment requirements that depend on the platform in question. [Fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfield_glosry.htm "Glossary Entry") in the memory that have one of these [types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_glosry.htm "Glossary Entry") must start at an address that is divisible by 4, 8, or 16. In the character representation [UCS-2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenucs2_glosry.htm "Glossary Entry") used by the programming language ABAP, [data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_object_glosry.htm "Glossary Entry") with [character-like data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencharlike_data_type_glosry.htm "Glossary Entry") are also placed in memory addresses that can be divided by two. In a [structure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstructure_glosry.htm "Glossary Entry") or [substructure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubstructure_glosry.htm "Glossary Entry"), the [component](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomponent_glosry.htm "Glossary Entry") with the highest alignment requirement determines the alignment of the entire structure. [Alignment gaps](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenalignment_gap_glosry.htm "Glossary Entry") may occur before or after components with alignment requirements.

[→ More](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenalignment.htm)