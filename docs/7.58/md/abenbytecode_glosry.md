---
title: "bytecode_glosry"
description: |
  bytecode_glosry - ABAP 7.58 language reference documentation
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbytecode_glosry.htm"
abapFile: "abenbytecode_glosry.htm"
keywords: ["do", "if", "try", "abenbytecode", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20byte%20code%2C%20ABENBYTECODE_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

byte code

Result of the generation of an ABAP program using the [ABAP Compiler](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_compiler_glosry.htm "Glossary Entry"). The statements in the byte code are linked with C functions. When the [ABAP program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_glosry.htm "Glossary Entry") is executed, the byte code is loaded into the [PXA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpxa_glosry.htm "Glossary Entry") as program [Load](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenload_glosry.htm "Glossary Entry") and is interpreted by the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") (virtual machine), whereby the associated C functions are called.