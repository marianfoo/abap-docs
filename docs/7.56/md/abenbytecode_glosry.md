---
title: "bytecode_glosry"
description: |
  bytecode_glosry - ABAP 7.56 language reference documentation
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbytecode_glosry.htm"
abapFile: "abenbytecode_glosry.htm"
keywords: ["do", "try", "abenbytecode", "glosry"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

byte code

Result of the generation of an ABAP program using the [ABAP Compiler](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_compiler_glosry.htm "Glossary Entry"). The statements in the byte code are linked with C functions. When the [ABAP program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_program_glosry.htm "Glossary Entry") is executed, the byte code is loaded into the [PXA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpxa_glosry.htm "Glossary Entry") as program [Load](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenload_glosry.htm "Glossary Entry") and is interpreted by the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") (virtual machine), whereby the associated C functions are called.