  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) → 

ICF - Internet Communication Framework

Internet Communication Framework (ICF) is a programming interface (API), based on interfaces and classes, used by ABAP programs to communicate with the Internet. ICF supports the Internet protocols HTTP, HTTPS, and SMTP. All communication between ABAP and the Internet based on these protocols takes place using ICF. ICF is a simplified technical foundation that can be used by more advanced programming interfaces. This means that ABAP programs do not usually access ICF directly and wrappers are used instead, such as [Business Server Pages](javascript:call_link\('abenbusiness_server_pages_glosry.htm'\) "Glossary Entry"), [Web Dynpro ABAP](javascript:call_link\('abenweb_dynpro_glosry.htm'\) "Glossary Entry"), Web Services ABAP, or on OData-based services like [SAPUI5](javascript:call_link\('abensapui5_glosry.htm'\) "Glossary Entry"). Wrappers like these ensure that the conventions required for external communication are met, such as the model view controller approach (MVC) in Web Dynpro and SAPUI5 or Simple Object Access Protocol (SOAP) in Web services.

To communicate with the Internet using REST principles (Representational State Transfer), the interfaces and classes in the ABAP REST Library in the package SREST should be used, since they adapt ICF accordingly.

-   [ICF Overview](#@@ITOC@@ABENICF_1)

-   [AS ABAP as an ICF Server](#@@ITOC@@ABENICF_2)

-   [AS ABAP as an ICF Client](#@@ITOC@@ABENICF_3)

-   [ICF Security](#@@ITOC@@ABENICF_4)

-   [More Information](#@@ITOC@@ABENICF_5)

Note

Information about communications using the WebSocket protocol or TCP can be found under [ABAP Push Channels](javascript:call_link\('abenapc.htm'\)).

ICF Overview

The following figure is a (highly simplified) schematic overview of communications between ABAP and the Internet using ICF. It uses HTTP communication as an example.

![Figure](abdoc_icf.gif)

The actual communication of the [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry") with the Internet takes places through its [Internet Communication Manager](javascript:call_link\('abeninternet_con_man_glosry.htm'\) "Glossary Entry") (ICM). The manager itself communicates with an [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry") work process, whose task handler controls ICF.

Communication can run in either direction, meaning that AS ABAP can be a server or a client. Within ICF, this aspect is implemented using different branches with their own interfaces and classes. ABAP programs can both respond to requests from the Internet and provide a service with data for further handling and itself query data from Internet. This is done by implementing the appropriate interfaces.

Notes

-   Before each response is sent in an AS ABAP as ICF server or ICF client, a [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") is executed (except in [updates](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry")).

-   Requests sent from ICM to an AS ABAP open a separate [ICF](javascript:call_link\('abenicf_session_glosry.htm'\) "Glossary Entry") session here, where AS ABAP can process the request as an ICF server.

-   HTTP/HTTPS communication is not bidirectional, which means that one partner is always the client and one partner is always the server. Bidirectional communication is possible using the WebSocket protocol or TCP with [ABAP Push Channels](javascript:call_link\('abenapc.htm'\)).

AS ABAP as an ICF Server

Each service that is reachable from the Internet and for which AS ABAP is used as an ICF server must be created as a node in the service tree in the service editor (transaction SICF). A service of this type is a transportable repository object that determines the properties of the service.

The initial node of the service tree stands for the AS ABAP Web address consisting of the host and the port. The position of the node in the tree determines the further URL path required to call a specific service. A URL can contain form fields after the actual address part, which are read by ICF.

Before a response can be made to a HTTP request sent to a service in the service tree in transaction SICF, at least one global class must be assigned to this service. This class must implement the interface IF\_HTTP\_EXTENSION and have access to the ICF infrastructure. When a request is sent to the service, ICF creates a HTTP request handler as an instance of this class. The implemented interface has only one method, HANDLE\_REQUEST, whose input parameter SERVER is a reference to the server object represented by IF\_HTTP\_SERVER. The attributes and methods of the server object make it possible to query properties of the request, such as the content of the form fields in the URL and to pass data to the server in a suitable format, such as HTML or XML. The most important are the attributes REQUEST and RESPONSE, which refer to objects that implement the interfaces IF\_HTTP\_REQUEST or IF\_HTTP\_RESPONSE.

An HTTP/HTTPS request in an HTTP request handler is handled as [ICF processing](javascript:call_link\('abenicf_processing_glosry.htm'\) "Glossary Entry") in a separate [ICF session](javascript:call_link\('abenicf_session_glosry.htm'\) "Glossary Entry"). Here, certain statements, like [MESSAGE](javascript:call_link\('abapmessage.htm'\)) or [BREAK-POINT](javascript:call_link\('abapbreak-point.htm'\)), are handled differently than, for example, in dialog processing. External breakpoints can be set to debug programs during ICF processing.

Notes

-   Special URL form fields, such as sap-user, sap-client, or sap-language, all start with the prefix sap- and are evaluated accordingly when logons are made to an ICF session.

-   A special handler class can be used to access objects from the MIME repository directly using ICF services (see the [executable example](javascript:call_link\('abenicf_mime_pictures_abexa.htm'\))).

-   Alongside the nodes that represent HTTP services, the nodes for [ABAP Push Channels](javascript:call_link\('abenapc.htm'\)) addressed using the WebSocket protocol or TCP are defined in the service tree in ICF.

Executable Examples

-   [Calling an HTTP Service](javascript:call_link\('abenicf_service_abexa.htm'\))

-   One production example of a self-programmed HTTP service is the Web version of this documentation itself

AS ABAP as an ICF Client

If the proxy setting for the HTTP client is configured appropriately in transaction SICF, ABAP programs can send requests to the Internet using ICF and receive responses. This is done using client objects from the class CL\_HTTP\_CLIENT, which implements the interface IF\_HTTP\_CLIENT. A client object can be created using a factory method from this class, which associates it with a Web address. Like a server object, the attributes REQUEST and RESPONSE reference objects that implement the interfaces IF\_HTTP\_REQUEST or IF\_HTTP\_RESPONSE and that can be used to send requests and receive responses.

Executable Example

ABAP as [HTTP Client](javascript:call_link\('abenicf_client_abexa.htm'\))

ICF Security

The API of ICF enables virus scans to be run using the virus scan interface (VSI). The required virus scan profile for the scan can be selected.

If HTML pages can be created on an ICF server, it may be possible to prevent [Cross Side Scripting](javascript:call_link\('abenxss_scrty.htm'\)). This is usually a task of frameworks based on ICF but it is also important not to forget this for directly created HTML pages.

Other security gaps also need to be blocked. For example, pages delivered from an ICF server should be protected against clickjacking attacks. A clickjacking attack integrates a page into the framework of an external Web page and tricks the reader into clicking on malicious links. This can be prevented in the HTTP request handler by using a method call

server->response->set\_header\_field( name = 'X-Frame-Options' value = '...' ).

, provided that the values "SAMEORIGIN" or "DENY" can be passed to value (server is a reference variable, which points to the server object).

More Information

-   Detailed information about ICF and ICM can be found in the Internet Communication Framework documentation in SAP Help Portal.

-   This documentation also describes communication between AS ABAP and the Internet, based on class wrappers or ICF enhancements such as ABAP Web Services or the ABAP REST Library.

Continue
[ICF Examples](javascript:call_link\('abenicf_abexas.htm'\))