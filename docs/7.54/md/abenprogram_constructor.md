---
title: "Program Constructor"
description: |
  The program constructor can be used to initialize the global data of a program. It is introduced using the statement -   LOAD-OF-PROGRAM(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapload-of-program.htm) by ':'. The associated event occurs when a program is loaded into the intern
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_constructor.htm"
abapFile: "abenprogram_constructor.htm"
keywords: ["do", "try", "class", "data", "abenprogram", "constructor"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenevent_blocks.htm) → 

Program Constructor

The program constructor can be used to initialize the global data of a program. It is introduced using the statement

-   [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapload-of-program.htm)

by ':'. The associated event occurs when a program is loaded into the [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry").

Note

[Class pools](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_pool_glosry.htm "Glossary Entry") do not have a program constructor, since the [static constructor](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstatic_constructor_glosry.htm "Glossary Entry") from the global class defined in the class pool can be used instead.

Continue
[LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapload-of-program.htm)