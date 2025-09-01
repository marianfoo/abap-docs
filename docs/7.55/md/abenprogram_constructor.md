---
title: "Program Constructor"
description: |
  The program constructor can be used to initialize the global data of a program. It is introduced using the statement: -   LOAD-OF-PROGRAM(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapload-of-program.htm) The associated event occurs when a program is loaded into the internal sess
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_constructor.htm"
abapFile: "abenprogram_constructor.htm"
keywords: ["do", "try", "class", "data", "abenprogram", "constructor"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenevent_blocks.htm) → 

Program Constructor

The program constructor can be used to initialize the global data of a program. It is introduced using the statement:

-   [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapload-of-program.htm)

The associated event occurs when a program is loaded into the [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry").

Hint

[Class pools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_pool_glosry.htm "Glossary Entry") do not have a program constructor, since the [static constructor](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_constructor_glosry.htm "Glossary Entry") from the global class defined in the class pool can be used instead.

Continue
[LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapload-of-program.htm)