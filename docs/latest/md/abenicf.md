---
title: "Internet Communication Framework (ICF)"
description: |
  Internet Communication Framework (ICF) is a programming interface (API), based on interfaces and classes, used by ABAP programs to communicate with the Internet. ICF supports the Internet protocols HTTP, HTTPS, and SMTP. All communication between ABAP and the Internet based on these protocols takes
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenicf.htm"
abapFile: "abenicf.htm"
keywords: ["select", "update", "do", "if", "try", "method", "class", "data", "abenicf"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Internet%20Communication%20Framework%20%28ICF%29%2C%20ABENICF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Internet Communication Framework (ICF)

Internet Communication Framework (ICF) is a programming interface (API), based on interfaces and classes, used by ABAP programs to communicate with the Internet. ICF supports the Internet protocols HTTP, HTTPS, and SMTP. All communication between ABAP and the Internet based on these protocols takes place using ICF. ICF is a simplified technical foundation that can be used by more advanced programming interfaces. This means that ABAP programs do not usually access ICF directly and wrappers are accessed instead, such as [Business Server Pages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbusiness_server_pages_glosry.htm "Glossary Entry"), [Web Dynpro ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenweb_dynpro_glosry.htm "Glossary Entry"), or the OData-based [SAP Gateway](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_gateway_glosry.htm "Glossary Entry") and [RAP runtime framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_runt_framework_glosry.htm "Glossary Entry"). Wrappers like these make sure that the conventions required by external communication are met, such as the Model View Controller (MVC) approach in Web Dynpro or stateless AS ABAP in [ABAP RAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap_glosry.htm "Glossary Entry").

-   [ICF Overview](#abenicf-1-------as-abap-as-an-icf-server---@ITOC@@ABENICF_2)
-   [AS ABAP as an ICF Client](#abenicf-3-------icf-security---@ITOC@@ABENICF_4)
-   [More Information](#@@ITOC@@ABENICF_5)

Hint

Information about communication using the WebSocket protocol or TCP can be found under [ABAP Push Channels](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenapc.htm).

ICF Overview   

The following figure is a (highly simplified) schematic overview of communications between ABAP and the Internet using ICF. It uses HTTP communication as an example.

![Figure](abdoc_icf.gif)

The actual communication of [AS ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenas_abap_glosry.htm "Glossary Entry") with the Internet takes place through its [Internet Communication Manager](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternet_con_man_glosry.htm "Glossary Entry") (ICM). The manager itself communicates with an [AS ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenas_abap_glosry.htm "Glossary Entry") work process, whose task handler controls ICF.

Communication can run in either direction, meaning that AS ABAP can be a server or a client. Within ICF, this aspect is implemented using different branches with their own interfaces and classes. ABAP programs can both respond to requests from the Internet and provide a service with data for further handling and itself query data from Internet. This is done by implementing the appropriate interfaces.

Hints

-   Before each response is sent as ICF server or ICF client in an AS ABAP, a [database commit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_commit_glosry.htm "Glossary Entry") is executed (except in [updates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenupdate_glosry.htm "Glossary Entry")).
-   Requests sent from ICM to an AS ABAP open a separate [ICF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenicf_session_glosry.htm "Glossary Entry") session here, where AS ABAP can process the request as an ICF server.
-   HTTP/HTTPS communication is not bidirectional, which means that one partner is always the client and one partner is always the server. Bidirectional communication is possible using the WebSocket protocol or TCP with [ABAP Push Channels](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenapc.htm).

AS ABAP as an ICF Server   

Each service that is reachable from the Internet and for which AS ABAP is used as an ICF server must be created as a node in the service tree in the service editor (transaction SICF). A service of this type is a transportable repository object that determines the properties of the service.

The initial node of the service tree stands for the AS ABAP Web address consisting of the host and the port. The position of the node in the tree determines the further URL path required to call a specific service. A URL can contain form fields after the actual address part, which are read by ICF.

Before a response can be made to a HTTP request sent to a service in the service tree in transaction SICF, at least one global class must be assigned to this service. This class must implement the interface IF\_HTTP\_EXTENSION and have access to the ICF infrastructure. When a request is sent to the service, ICF creates a HTTP request handler as an instance of this class. The implemented interface has only one method, HANDLE\_REQUEST, whose input parameter SERVER is a reference to the server object represented by IF\_HTTP\_SERVER. The attributes and methods of the server object make it possible to query properties of the request, such as the content of the form fields in the URL and to pass data to the server in a suitable format, such as HTML or XML. The most important are the attributes REQUEST and RESPONSE, which refer to objects that implement the interfaces IF\_HTTP\_REQUEST or IF\_HTTP\_RESPONSE.

An HTTP/HTTPS request in an HTTP request handler is handled as [ICF processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenicf_processing_glosry.htm "Glossary Entry") in a separate [ICF session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenicf_session_glosry.htm "Glossary Entry"). Here, certain statements, like [MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage.htm) or [BREAK-POINT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapbreak-point.htm), are handled differently than, for example, in dialog processing. External breakpoints can be set to debug programs during ICF processing.

Hints

-   Special URL form fields, such as sap-user, sap-client, or sap-language, all start with the prefix sap- and are evaluated accordingly when logons are made to an ICF session.
-   A special handler class can be used to access objects from the MIME repository directly using ICF services (see the [executable example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenicf_mime_pictures_abexa.htm)).
-   Alongside the nodes that represent HTTP services, the nodes for [ABAP Push Channels](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenapc.htm) addressed using the WebSocket protocol or TCP are defined in the service tree in ICF.

Executable Examples

-   [Calling an HTTP Service](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenicf_service_abexa.htm)
-   One production example of a self-programmed HTTP service is the Web version of this documentation itself

AS ABAP as an ICF Client   

If the proxy setting for the HTTP client is configured appropriately in transaction SICF, ABAP programs can send requests to the Internet using ICF and receive responses. This is done using client objects from the class CL\_HTTP\_CLIENT, which implements the interface IF\_HTTP\_CLIENT. A client object can be created using a factory method from this class, which associates it with a Web address. Like a server object, the attributes REQUEST and RESPONSE reference objects that implement the interfaces IF\_HTTP\_REQUEST or IF\_HTTP\_RESPONSE and that can be used to send requests and receive responses.

Executable Example

ABAP as [HTTP Client](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenicf_client_abexa.htm)

ICF Security   

The API of ICF enables virus scans to be run using the virus scan interface (VSI). The required virus scan profile for the scan can be selected.

If HTML pages can be created on an ICF server, it may be possible to prevent [Cross Side Scripting](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenxss_scrty.htm). This is usually a task of frameworks based on ICF but it is also important not to forget this for directly created HTML pages.

Other security gaps also need to be blocked. For example, pages delivered from an ICF server should be protected against clickjacking attacks. A clickjacking attack integrates a page into the framework of an external Web page and tricks the reader into clicking on malicious links. This can be prevented in the HTTP request handler by using a method call

server->response->set\_header\_field( name = 'X-Frame-Options' value = '...' ).

provided that the values SAMEORIGIN or DENY can be passed to value (server is a reference variable, which points to the server object).

More Information   

-   Detailed information about ICF and ICM can be found in the [Internet Communication Framework](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/48D40ACA1904154EE10000000A421937) documentation in SAP Help Portal.
-   This documentation also describes communication between AS ABAP and the Internet, based on class wrappers or ICF enhancements such as ABAP Web Services or the ABAP REST Library.

Continue
[ICF - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenicf_abexas.htm)