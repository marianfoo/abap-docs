---
title: "Introduction to RFC"
description: |
  Remote Function Call (RFC) is an SAP procedure for calling function modules in remote systems. Communication using the RFC interface can be subdivided into different scenarios depending on the systems involved: -   AS ABAP - AS ABAP -   AS ABAP – External system -   AS ABAP - SAP Java -   AS ABAP -
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_intro.htm"
abapFile: "abenrfc_intro.htm"
keywords: ["do", "if", "try", "data", "abenrfc", "intro"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [RFC - Remote Function Call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc.htm) →  [RFC Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_intro_oview.htm) → 

Introduction to RFC

Remote Function Call (RFC) is an SAP procedure for calling function modules in remote systems.

Communication using the RFC interface can be subdivided into different scenarios depending on the systems involved:

-   AS ABAP - AS ABAP

-   AS ABAP – External system

-   AS ABAP - SAP Java

-   AS ABAP - external Java

RFC can be used as a synchronous or asynchronous communication procedure.

There are also different RFC variants designed for different purposes and which therefore have with different service properties:

-   [Synchronous RFC (sRFC)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensynchronous_rfc_glosry.htm "Glossary Entry")

-   [Asynchronous RFC (aRFC)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenasynchronous_rfc_glosry.htm "Glossary Entry")

-   [Parallel RFC (pRFC)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenparalel_remote_function_glosry.htm "Glossary Entry")

-   [Background RFC (bgRFC)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbg_remote_function_glosry.htm "Glossary Entry")

-   [Transactional RFC (tRFC), obsolete](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentrfc_1_glosry.htm "Glossary Entry")

-   [Queued RFC (qRFC), obsolete](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenqueued_remote_function_glosry.htm "Glossary Entry")

Transactional and Queued RFC were replaced by Background RFC.

More Information

-   For a detailed description of Remote Function Call, see the RFC documentation on [SAP Help Portal](http://help.sap.com).