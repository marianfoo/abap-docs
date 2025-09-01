---
title: "RFC - Restrictions"
description: |
  In contrast to the normal function module call, the following restrictions apply to an RFC: -   Pass-by value(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpass_by_value_glosry.htm 'Glossary Entry') must be selected for the IMPORTING, EXPORTING, and CHANGING parameters of a remot
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc_limitations.htm"
abapFile: "abenrfc_limitations.htm"
keywords: ["select", "update", "do", "if", "case", "try", "data", "types", "abenrfc", "limitations"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [RFC - Remote Function Call](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc.htm) →  [RFC - Overview](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc_intro_oview.htm) → 

RFC - Restrictions

In contrast to the normal function module call, the following restrictions apply to an RFC:

-   [Pass-by value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpass_by_value_glosry.htm "Glossary Entry") must be selected for the IMPORTING, EXPORTING, and CHANGING parameters of a [remote-enabled function module](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenremote_enabled_fm_glosry.htm "Glossary Entry"). This cannot be specified explicitly for TABLES parameters, but are used implicitly for RFC.

-   The formal parameter of a [remote-enabled function module](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenremote_enabled_fm_glosry.htm "Glossary Entry") must be typed using data types from ABAP Dictionary or using built-in ABAP types. Data types from [type pools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentype_pool_glosry.htm "Glossary Entry") cannot be specified.

-   No [reference variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreference_variable_glosry.htm "Glossary Entry") can be passed in RFCs. The [formal parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenformal_parameter_glosry.htm "Glossary Entry") of a [remote-enabled function module](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenremote_enabled_fm_glosry.htm "Glossary Entry") cannot, therefore, be typed using a [reference type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreference_type_glosry.htm "Glossary Entry").

-   A [database commit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendb_commit.htm) is performed in every call that uses synchronous and asynchronous RFC. For this reason, synchronous or asynchronous RFC must not be used between ABAP SQL statements that open or close a [database cursor](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_cursor_glosry.htm "Glossary Entry"). An exception to this are [updates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenupdate_glosry.htm "Glossary Entry"). When updates are running, [sRFC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensrfc_glosry.htm "Glossary Entry") and [aRFC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensrfc_glosry.htm "Glossary Entry") do not cause work processes to be switched or database commits to be executed.

-   In a remotely called function module, no statements can be called that close the current [RFC session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc_session_glosry.htm "Glossary Entry") and hence the connection. An example of this is the statement LEAVE PROGRAM, or SUBMIT without the addition RETURN.

-   As only pass by value is used for the RFC, when exceptions do occur, you can never access interim results when a synchronous RFC is made. TABLES parameters are an exception to this. When the exception SYSTEM\_FAILURE is raised, these parameters behave in the same way as when the function module is executed locally, in which case they are passed by reference. The data held by a parameter of this type before the exception is passed to the client.

-   When passing character-like data, there is usually a conversion between the participating [code pages](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencodepage_glosry.htm "Glossary Entry"). When data is passed between [MDMP systems](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmdmp-system_glosry.htm "Glossary Entry") and [Unicode systems](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenunicode_system_glosry.htm "Glossary Entry"), the mapping might not be unique. For structures defined in ABAP Dictionary, the [text language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentext_language_glosry.htm "Glossary Entry") is evaluated when the binary [RFC protocol](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc_protocol.htm) is used.

-   [Information messages](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninformation_message_glosry.htm "Glossary Entry") and [warnings](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwarning_glosry.htm "Glossary Entry") are handled like [status messages](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatus_message_glosry.htm "Glossary Entry").

-   In background RFC calls ([bgRFC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbgrfc_glosry.htm "Glossary Entry") and the obsolete [tRFC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentrfc_2_glosry.htm "Glossary Entry") and [qRFC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenqrfc_glosry.htm "Glossary Entry")), the statements [COMMIT WORK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcommit.htm) and [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaprollback.htm) must not be executed within a Unit/LUW. In addition, no implicit [database commit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_commit_glosry.htm "Glossary Entry") can be triggered there.