---
title: "Extended Passport (EPP)"
description: |
  An Extended Passport (EPP) is a data structure that can be sent from a client to a server and is used to analyze call stacks. For the RFC interface(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc_interface.htm), Extended Passports can be sent and received in both ABAP sessions
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenepp.htm"
abapFile: "abenepp.htm"
keywords: ["update", "do", "if", "case", "try", "method", "class", "data", "internal-table", "abenepp"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) → 

Extended Passport (EPP)

An Extended Passport (EPP) is a data structure that can be sent from a client to a server and is used to analyze call stacks. For the [RFC interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc_interface.htm), Extended Passports can be sent and received in both [ABAP sessions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_session_glosry.htm "Glossary Entry") and external communication components such as RFC SDK or JCo. In HTTP communication, this is supported by [ICF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenicf_glosry.htm "Glossary Entry"). In an ABAP session, the Extended Passport is a constant internal data structure in the ABAP kernel and contains information about the session:

-   The Extended Passport is generated with initial values when an ABAP session is created.

-   In [communication](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) between clients and servers that support Extended Passport, the client passes its EPP to the server. Here, some components remain untouched and others are set to connection-specific values. If the server is an ABAP session, its EPP contains the values passed from the client.

The most important EPP components are as follows:

-   [EPP root context ID](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenepp_root_context_id_glosry.htm "Glossary Entry")

The root context ID is a [UUID](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuuid_glosry.htm "Glossary Entry") assigned to an ABAP session when it is created. It is unchanged when the Extended Passport is sent to a server and hence identifies the original ABAP session.

-   [EPP connection ID](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenepp_connection_id_glosry.htm "Glossary Entry")

The connection ID is a [UUID](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuuid_glosry.htm "Glossary Entry") assigned to the connection in question when the Extended Passport is sent to a server. In most cases, an initial connection ID identifies the first component in a call stack. In a server ABAP session, it contains the UUID of the connection. Together with the root context ID, it provides a unique identification for an ABAP session. In most cases, the connection ID keeps the same value when the same connection is reused. If an ABAP session is a stateless [APC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenapc.htm) server, a new connection ID is created each time the server is accessed from the [APC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenapc.htm).

-   [EPP connection counter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenepp_connection_counter_glosry.htm "Glossary Entry")

If a server is accessed using a connection with the same connection ID, the EPP connection counter is usually raised accordingly when the Extended Passport is sent.

-   [EPP transaction ID](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenepp_transaction_id_glosry.htm "Glossary Entry")

The transaction ID is a [UUID](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuuid_glosry.htm "Glossary Entry") that identifies a [SAP LUW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_luw_glosry.htm "Glossary Entry") in most cases. The statement [COMMIT WORK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcommit.htm) modifies the transaction ID in non-server ABAP sessions, as long as an [update function module](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") was called using [CALL FUNCTION IN UPDATE TASK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function_update.htm) in the closed SAP LUW. The transaction ID is not usually modified when the Extended Passport is sent from a client to a server.

-   [EPP component ID](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenepp_component_id_glosry.htm "Glossary Entry")

After an ABAP session is created, the component ID contains the [system ID](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_id_glosry.htm "Glossary Entry") of the [Application Server ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenas_abap_glosry.htm "Glossary Entry") and the name of the [application server instance](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenapplication_server_glosry.htm "Glossary Entry"). It is passed to a server without being modified.

-   [EPP precomponent ID](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenepp_pre_component_id_glosry.htm "Glossary Entry")

When the Extended Passport is sent to a server, the precomponent ID is set to the [system ID](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_id_glosry.htm "Glossary Entry") and the name of the [application server instance](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenapplication_server_glosry.htm "Glossary Entry") of the source ABAP session.

Further components can contain additional information.

Hints

-   Extended Passport can be used by frameworks and analysis tools to track external call stacks in [communication](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) between clients and servers beyond system boundaries. The values of the EPP components can be saved to log files and used for monitoring. One example of this are [short dumps](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshort_dump_glosry.htm "Glossary Entry"), which all list the most important EPP components.

-   The method GET\_SECTION of the class CL\_EPP\_GLOBAL\_FACTORY can be used to created a handler whose interface IF\_EPP\_GLOBAL\_SECTION accesses the Extended Passport (EPP) of the current ABAP session in an ABAP program.

-   For more information, see Extended Passport (EPP).

Example

The program DEMO\_EPP demonstrates the content of the Extended Passport (EPP) components shown above. This program reads these components and saves them to an internal table of a [data cluster](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_cluster_glosry.htm "Glossary Entry") on the database. This then becomes a log file.

-   First, information about the ABAP session where the program is executed is read. If the ABAP session of the program was not created by an external call, the connection ID and the connection counter are initial.

-   When an [RFC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc_glosry.htm "Glossary Entry") connects to another application server instance, the connection ID here is set for this connection and the root context ID becomes the ID of the caller. The precomponent ID contains the component ID of the original session.

-   Any further [RFCs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc_glosry.htm "Glossary Entry") from the called [RFM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfm_glosry.htm "Glossary Entry") set a new connection ID and set the precomponent ID to the system ID and name of the application server instance of the caller RFM.

-   After this, an [update](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenupdate_glosry.htm "Glossary Entry") runs in the original ABAP session that sets a new transaction ID here.

-   Finally, both [RFCs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc_glosry.htm "Glossary Entry") are repeated, with the same connection IDs being set in the called servers as before and the connection Counter being raised by 1 this time. The transaction ID set previously is persisted.