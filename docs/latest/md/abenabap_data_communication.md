---
title: "Data Interfaces and Communication Interfaces"
description: |
  This section describes ABAP statements and programming interfaces for communication with other systems and programs and their associated data exchange formats. -   Service Bindings(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_service_bindings.htm) -   RFC - Remote Funct
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm"
abapFile: "abenabap_data_communication.htm"
keywords: ["do", "if", "method", "class", "data", "abenabap", "communication"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Data%20Interfaces%20and%20Communication%20Interfaces%2C%20ABENABAP_DATA_COMMUNICATION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

Data Interfaces and Communication Interfaces

This section describes ABAP statements and programming interfaces for communication with other systems and programs and their associated data exchange formats.

-   [Service Bindings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_service_bindings.htm)
-   [RFC - Remote Function Call](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc.htm)
-   [ICF - Internet Communication Framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenicf.htm)
-   [ABAP Channels](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_channels.htm)
-   [ADF - ABAP daemon framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon.htm)
-   [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm)
-   [ABAP and JSON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_json.htm)
-   [ABAP and OLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenole2.htm)
-   [ABAP and Operating System Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_system_commands.htm)
-   [EPP - Extended Passport](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenepp.htm)
-   [PCP - Push Channel Protocol](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpcp.htm)
-   [Access to the Presentation Server](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfrontend_services.htm)
-   [System Class for UUIDs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_system_uuid.htm)

Detailed documentation about all SAP communication interfaces can be found in the documentation [Connectivity](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/485bc57cd004501ee10000000a421937) in SAP Help Portal.

Hint

In addition to the external communication methods listed here, there are also [obsolete data interfaces and communication interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenextern_obsolete.htm).

Continue
[Service Bindings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_service_bindings.htm)
[Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc.htm)
[Internet Communication Framework (ICF)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenicf.htm)
[ABAP Channels](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_channels.htm)
[ABAP Daemon Framework (ADF)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon.htm)
[ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm)
[ABAP and JSON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_json.htm)
[ABAP and OLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenole2.htm)
[ABAP and Operating System Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_system_commands.htm)
[Extended Passport (EPP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenepp.htm)
[Push Channel Protocol (PCP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpcp.htm)
[Access to the Presentation Server](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfrontend_services.htm)
[System Class for UUIDs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_system_uuid.htm)
[Internal Statement for System Function Call](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_communication_internal.htm)