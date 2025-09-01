---
title: "ABAP - Programming Language"
description: |
  This section of the ABAP keyword documentation describes the syntax and semantics of all language elements of the ABAP(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glosry.htm 'Glossary Entry') programming language and its object-oriented component ABAP Objects(https://help
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm"
abapFile: "abenabap_reference.htm"
keywords: ["do", "try", "data", "types", "abenabap", "reference"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) → 

ABAP - Programming Language

This section of the ABAP keyword documentation describes the syntax and semantics of all language elements of the [ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glosry.htm "Glossary Entry") programming language and its object-oriented component [ABAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_objects_glosry.htm "Glossary Entry") by topic.

-   [ABAP - Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_oview.htm)
-   [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_syntax.htm)
-   [Program Structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_program_layout.htm)
-   [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in.htm)
-   [Operands](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoperands.htm)
-   [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm)
-   [Creating Objects and Values](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencreate_objects.htm)
-   [Calling and exiting program units](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_execution.htm)
-   [Program Flow Logic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_flow_logic.htm)
-   [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm)
-   [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm)
-   [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm)
-   [Text Repositories](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_texts.htm)
-   [Language Environment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlanguage.htm)
-   [Program Maintenance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_editing.htm)
-   [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm)
-   [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm)
-   [Enhancements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenhancement_framework.htm)
-   [Authorizations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbc_authority_check.htm)
-   [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm)
-   [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm)

Hint

Besides denoting the programming language itself, the term ABAP is often used more generally for everything related to this language.

Continue
[ABAP - Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_oview.htm)
[Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_syntax.htm)
[Program Structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_program_layout.htm)
[Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in.htm)
[Operands](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoperands.htm)
[Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm)
[Creating Objects and Values](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencreate_objects.htm)
[Calling and exiting program units](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_execution.htm)
[Program Flow Logic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_flow_logic.htm)
[Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm)
[Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm)
[ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm)
[Text Repositories](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_texts.htm)
[Language Environment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlanguage.htm)
[Program Maintenance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_editing.htm)
[Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm)
[SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm)
[Enhancements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenhancement_framework.htm)
[Authorizations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbc_authority_check.htm)
[Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm)
[ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm)