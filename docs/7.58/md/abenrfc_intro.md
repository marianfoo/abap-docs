---
title: "RFC - Introduction"
description: |
  Remote Function Call (RFC) is an SAP-specific procedure for calling function modules in remote systems. Communication using the RFC interface can be divided into different scenarios based on the systems involved: -   AS ABAP - AS ABAP -   AS ABAP - external system -   AS ABAP - SAP Java -   AS ABAP
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrfc_intro.htm"
abapFile: "abenrfc_intro.htm"
keywords: ["do", "if", "try", "data", "abenrfc", "intro"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrfc.htm) →  [RFC - Overview](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrfc_intro_oview.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RFC%20-%20Introduction%2C%20ABENRFC_INTRO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RFC - Introduction

Remote Function Call (RFC) is an SAP-specific procedure for calling function modules in remote systems.

Communication using the RFC interface can be divided into different scenarios based on the systems involved:

-   AS ABAP - AS ABAP
-   AS ABAP - external system
-   AS ABAP - SAP Java
-   AS ABAP - external Java

RFC can be used as a synchronous or asynchronous communication procedure.

There are also different RFC variants that have been designed for different purposes and which therefore have different service properties:

-   [Synchronous RFC (sRFC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensynchronous_rfc_glosry.htm "Glossary Entry")
-   [Asynchronous RFC (aRFC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasynchronous_rfc_glosry.htm "Glossary Entry")
-   [Parallel RFC (pRFC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenparalel_remote_function_glosry.htm "Glossary Entry")
-   [Background RFC (bgRFC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbg_remote_function_glosry.htm "Glossary Entry")
-   [Transactional RFC (tRFC), obsolete](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentrfc_1_glosry.htm "Glossary Entry")
-   [Queued RFC (qRFC), obsolete](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenqueued_remote_function_glosry.htm "Glossary Entry")

Transactional and Queued RFC were replaced by Background RFC.

More Information   

-   For a detailed description of Remote Function Call, see the documentation [RFC](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/4888068AD9134076E10000000A42189D) in SAP Help Portal.