---
title: "name_table_glosry"
description: |
  name_table_glosry - ABAP 7.52 language reference documentation
version: "7.52"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenname_table_glosry.htm"
abapFile: "abenname_table_glosry.htm"
keywords: ["do", "try", "data", "types", "abenname", "table", "glosry"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) → 

name table

nametab for short. Storage system for the [runtime objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenruntime_object_glosry.htm "Glossary Entry") of [data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_type_glosry.htm "Glossary Entry") of the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary_glosry.htm "Glossary Entry"). The name table is split across two native [database tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_table_glosry.htm "Glossary Entry"): DDNTT for the [nametab header](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenname_tab_header_glosry.htm "Glossary Entry") and DDNTF for the [nametab field descriptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenname_tab_fields_glosry.htm "Glossary Entry"). These database tables are not defined in the ABAP Dictionary. The name table is accessed internally in the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") or by using APIs.