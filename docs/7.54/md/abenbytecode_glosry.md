---
title: "bytecode_glosry"
description: |
  bytecode_glosry - ABAP 7.54 language reference documentation
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbytecode_glosry.htm"
abapFile: "abenbytecode_glosry.htm"
keywords: ["do", "try", "abenbytecode", "glosry"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

byte code

Result of generating an ABAP program using [ABAP Compiler](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_compiler_glosry.htm "Glossary Entry"). The statements in the byte code are associated with C functions. When the [ABAP program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_glosry.htm "Glossary Entry") is executed, the byte code is loaded into the [PXA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpxa_glosry.htm "Glossary Entry") as the program [Load](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenload_glosry.htm "Glossary Entry") and interpreted by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") (virtual machine), which accesses the associated C functions.