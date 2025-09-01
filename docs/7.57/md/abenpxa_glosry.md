---
title: "PXA"
description: |
  Short for Program Execution Area. Memory for managing the fixed data of a running ABAP program. The PXA notably contains the byte codes(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbytecode_glosry.htm 'Glossary Entry') of all programs running simultaneously on an AS instance(ht
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpxa_glosry.htm"
abapFile: "abenpxa_glosry.htm"
keywords: ["do", "if", "try", "data", "abenpxa", "glosry"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: PXA, ABENPXA_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for impr
ovement:)

PXA

Short for Program Execution Area. Memory for managing the fixed data of a running ABAP program. The PXA notably contains the [byte codes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbytecode_glosry.htm "Glossary Entry") of all programs running simultaneously on an [AS instance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_instance_glosry.htm "Glossary Entry"). This memory is shared by all [internal sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the AS instance, and there is only one such memory on each server. The byte code of a program that is executed once remains buffered in the PXA as a program [load](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenload_glosry.htm "Glossary Entry") for as long as possible to prevent reloads from the database if the program is executed again. Furthermore, the PXA buffers shared resources, such as values of [constants](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstant_glosry.htm "Glossary Entry"), and is used for the [initial value sharing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitial_value_sharing_glosry.htm "Glossary Entry") of [boxed components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenboxed_component_glosry.htm "Glossary Entry").